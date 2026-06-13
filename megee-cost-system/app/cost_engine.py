from dataclasses import dataclass, field
from decimal import ROUND_HALF_UP, Decimal
from typing import Dict, Iterable, List

from fastapi import HTTPException
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.models import SKU, Assembly, Part

ZERO = Decimal("0")
ONE = Decimal("1")
MONEY_STEP = Decimal("0.000001")


def decimal(value: object) -> Decimal:
    return value if isinstance(value, Decimal) else Decimal(str(value))


def money(value: Decimal) -> Decimal:
    return value.quantize(MONEY_STEP, rounding=ROUND_HALF_UP)


@dataclass
class Breakdown:
    material_cost: Decimal = ZERO
    process_cost: Decimal = ZERO
    mold_cost: Decimal = ZERO
    assembly_cost: Decimal = ZERO
    standard_component_cost: Decimal = ZERO
    outsourced_cost: Decimal = ZERO
    packaging_cost: Decimal = ZERO
    overhead_cost: Decimal = ZERO
    details: List[dict] = field(default_factory=list)

    @property
    def subtotal(self) -> Decimal:
        return (
            self.material_cost
            + self.process_cost
            + self.mold_cost
            + self.assembly_cost
            + self.standard_component_cost
            + self.outsourced_cost
            + self.packaging_cost
        )

    @property
    def total_cost(self) -> Decimal:
        return self.subtotal + self.overhead_cost

    def as_dict(self) -> dict:
        return {
            "material_cost": money(self.material_cost),
            "process_cost": money(self.process_cost),
            "mold_cost": money(self.mold_cost),
            "assembly_cost": money(self.assembly_cost),
            "standard_component_cost": money(self.standard_component_cost),
            "outsourced_cost": money(self.outsourced_cost),
            "packaging_cost": money(self.packaging_cost),
            "overhead_cost": money(self.overhead_cost),
            "total_cost": money(self.total_cost),
            "assemblies": self.details,
        }


class CostEngine:
    def __init__(self, db: Session):
        self.db = db

    def load_sku(self, sku_id: str) -> SKU:
        statement = (
            select(SKU)
            .where(SKU.sku_id == sku_id)
            .options(
                selectinload(SKU.assemblies)
                .selectinload(Assembly.parts)
                .selectinload(Part.routings),
                selectinload(SKU.assemblies)
                .selectinload(Assembly.parts)
                .selectinload(Part.molds),
                selectinload(SKU.assemblies)
                .selectinload(Assembly.parts)
                .selectinload(Part.standard_component),
                selectinload(SKU.assemblies)
                .selectinload(Assembly.parts)
                .selectinload(Part.outsourced_quotes),
                selectinload(SKU.assemblies)
                .selectinload(Assembly.parts)
                .selectinload(Part.production_records),
            )
        )
        sku = self.db.scalar(statement)
        if sku is None:
            raise HTTPException(status_code=404, detail=f"SKU {sku_id} not found")
        return sku

    def compute_sku(self, sku_id: str, stage: str, include_optional: bool = False) -> dict:
        sku = self.load_sku(sku_id)
        result = Breakdown(packaging_cost=decimal(sku.packaging_cost))

        for assembly in sorted(sku.assemblies, key=lambda item: item.assembly_id):
            if assembly.is_optional and not include_optional:
                continue
            assembly_detail = self._compute_assembly(assembly, stage)
            result.assembly_cost += assembly_detail["assembly_cost"]
            result.material_cost += assembly_detail["material_cost"]
            result.process_cost += assembly_detail["process_cost"]
            result.mold_cost += assembly_detail["mold_cost"]
            result.standard_component_cost += assembly_detail["standard_component_cost"]
            result.outsourced_cost += assembly_detail["outsourced_cost"]
            result.details.append(self._money_dict(assembly_detail))

        result.overhead_cost = result.subtotal * decimal(sku.overhead_rate)
        response = result.as_dict()
        response.update(
            {
                "sku_id": sku.sku_id,
                "sku_name": sku.name,
                "sku_version": sku.version,
                "stage": stage,
                "include_optional": include_optional,
            }
        )
        return response

    def _compute_assembly(self, assembly: Assembly, stage: str) -> dict:
        totals: Dict[str, Decimal] = {
            "assembly_cost": decimal(assembly.assembly_cost),
            "material_cost": ZERO,
            "process_cost": ZERO,
            "mold_cost": ZERO,
            "standard_component_cost": ZERO,
            "outsourced_cost": ZERO,
        }
        part_details = []
        for part in sorted(assembly.parts, key=lambda item: item.part_id):
            detail = self._compute_part(part, stage)
            for key in totals:
                if key in detail:
                    totals[key] += detail[key]
            part_details.append(self._money_dict(detail))
        return {
            "assembly_id": assembly.assembly_id,
            "name": assembly.name,
            "type": assembly.type,
            **totals,
            "total_cost": sum(totals.values(), ZERO),
            "parts": part_details,
        }

    def _compute_part(self, part: Part, stage: str) -> dict:
        quantity = decimal(part.quantity)
        detail = {
            "part_id": part.part_id,
            "name": part.name,
            "type": part.type,
            "quantity": quantity,
            "material_cost": ZERO,
            "process_cost": ZERO,
            "mold_cost": ZERO,
            "standard_component_cost": ZERO,
            "outsourced_cost": ZERO,
        }

        if part.type == "manufactured":
            routing_yields = [self._routing_yield_factor(part, route.process_type, route.yield_rate, stage) for route in part.routings]
            cumulative_yield_factor = self._product(routing_yields) if routing_yields else ONE
            detail["material_cost"] = decimal(part.material_cost) * cumulative_yield_factor * quantity
            detail["process_cost"] = sum(
                (self._routing_cost(part, route, stage) for route in part.routings), ZERO
            ) * quantity
            detail["mold_cost"] = sum((self._mold_unit_cost(mold) for mold in part.molds), ZERO) * quantity
        elif part.type == "standard":
            if part.standard_component is None:
                raise HTTPException(
                    status_code=422,
                    detail=f"Standard part {part.part_id} has no standard component",
                )
            detail["standard_component_cost"] = decimal(part.standard_component.unit_price) * quantity
        elif part.type == "outsourced":
            active_quotes = [quote for quote in part.outsourced_quotes if quote.is_active]
            if not active_quotes:
                raise HTTPException(
                    status_code=422,
                    detail=f"Outsourced part {part.part_id} has no active supplier price",
                )
            best_by_process = {}
            for quote in active_quotes:
                adjusted_price = decimal(quote.unit_price) / decimal(quote.yield_assumption)
                current = best_by_process.get(quote.process_type)
                if current is None or adjusted_price < current:
                    best_by_process[quote.process_type] = adjusted_price
            detail["outsourced_cost"] = sum(best_by_process.values(), ZERO) * quantity
        else:
            raise HTTPException(status_code=422, detail=f"Unknown part type {part.type}")

        detail["total_cost"] = sum(
            (value for key, value in detail.items() if key.endswith("_cost") and key != "total_cost"),
            ZERO,
        )
        return detail

    def _routing_cost(self, part: Part, route: object, stage: str) -> Decimal:
        hourly_rate = decimal(route.machine_rate_per_hour) + (
            decimal(route.labor_rate_per_hour) * route.labor_count
        )
        raw_cost = hourly_rate * decimal(route.cycle_time) / Decimal("3600")
        process_factor = self._process_factor(part, route.process_type, route.cycle_time, stage)
        yield_factor = self._routing_yield_factor(part, route.process_type, route.yield_rate, stage)
        return raw_cost * process_factor * yield_factor

    @staticmethod
    def _records(part: Part, process_type: str, stage: str) -> Iterable[object]:
        if stage == "standard":
            return []
        return [
            record
            for record in part.production_records
            if record.process_type == process_type
            and (record.source == stage or stage == "adjusted")
        ]

    def _process_factor(self, part: Part, process_type: str, standard_cycle: Decimal, stage: str) -> Decimal:
        records = list(self._records(part, process_type, stage))
        total_qty = sum((record.qty for record in records), 0)
        if total_qty == 0:
            return ONE
        weighted_cycle = sum(
            (decimal(record.cycle_time_actual) * record.qty for record in records), ZERO
        ) / total_qty
        return weighted_cycle / decimal(standard_cycle)

    def _routing_yield_factor(
        self, part: Part, process_type: str, standard_yield: Decimal, stage: str
    ) -> Decimal:
        records = list(self._records(part, process_type, stage))
        total_qty = sum((record.qty for record in records), 0)
        total_good = sum((record.good_qty for record in records), 0)
        if total_qty == 0:
            return ONE / decimal(standard_yield)
        if total_good == 0:
            raise HTTPException(status_code=422, detail=f"No good output for {part.part_id}/{process_type}")
        return Decimal(total_qty) / Decimal(total_good)

    @staticmethod
    def _mold_unit_cost(mold: object) -> Decimal:
        planned = Decimal(mold.planned_output)
        actual = Decimal(mold.actual_output)
        if planned <= 0 or actual >= planned or mold.lifecycle_status == "end":
            return ZERO
        consumed_ratio = actual / planned
        remaining_value = decimal(mold.cost) * (ONE - consumed_ratio)
        remaining_output = planned - actual
        return remaining_value / remaining_output

    @staticmethod
    def _product(values: Iterable[Decimal]) -> Decimal:
        result = ONE
        for value in values:
            result *= value
        return result

    @classmethod
    def _money_dict(cls, value: object) -> object:
        if isinstance(value, Decimal):
            return money(value)
        if isinstance(value, list):
            return [cls._money_dict(item) for item in value]
        if isinstance(value, dict):
            return {key: cls._money_dict(item) for key, item in value.items()}
        return value


def snapshot_fields(cost: dict) -> dict:
    names = (
        "material_cost",
        "process_cost",
        "mold_cost",
        "assembly_cost",
        "standard_component_cost",
        "outsourced_cost",
        "packaging_cost",
        "overhead_cost",
        "total_cost",
    )
    return {name: cost[name] for name in names}
