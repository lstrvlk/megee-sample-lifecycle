from datetime import datetime, timedelta, timezone
from decimal import Decimal
from typing import Dict
from uuid import uuid4

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.config import get_settings
from app.cost_engine import CostEngine, money, snapshot_fields
from app.database import get_db
from app.models import (
    SKU,
    Assembly,
    CostSnapshot,
    CostVersion,
    Mold,
    OutsourcedPart,
    Part,
    ProductionRecord,
    Quotation,
    Routing,
    StandardComponent,
)
from app.schemas import (
    CatalogImportRequest,
    CostComputeRequest,
    CostVersionCreateRequest,
    CostVersionDiffRequest,
    MoldUpdateRequest,
    ProductionInput,
    QuotationGenerateRequest,
)

router = APIRouter()
SNAPSHOT_FIELDS = (
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


@router.get("/health")
def health() -> dict:
    return {"status": "ok", "service": get_settings().app_name}


@router.get("/catalog/skus")
def list_skus(db: Session = Depends(get_db)) -> dict:
    skus = db.scalars(select(SKU).order_by(SKU.created_at.desc())).all()
    return {
        "items": [
            {
                "sku_id": sku.sku_id,
                "name": sku.name,
                "version": sku.version,
                "status": sku.status,
                "packaging_cost": sku.packaging_cost,
                "overhead_rate": sku.overhead_rate,
                "assembly_count": len(sku.assemblies),
            }
            for sku in skus
        ]
    }


@router.get("/cost/versions/{sku_id}")
def list_cost_versions(sku_id: str, db: Session = Depends(get_db)) -> dict:
    if db.get(SKU, sku_id) is None:
        raise HTTPException(status_code=404, detail=f"SKU {sku_id} not found")
    versions = db.scalars(
        select(CostVersion)
        .where(CostVersion.sku_id == sku_id)
        .order_by(CostVersion.created_at.desc())
    ).all()
    return {
        "items": [
            {
                "version_id": version.version_id,
                "parent_version_id": version.parent_version_id,
                "version_type": version.version_type,
                "reason": version.reason,
                "created_at": version.created_at,
                "total_cost": version.snapshot.total_cost if version.snapshot else None,
            }
            for version in versions
        ]
    }


@router.get("/quotations/{sku_id}")
def list_quotations(sku_id: str, db: Session = Depends(get_db)) -> dict:
    quotations = db.scalars(
        select(Quotation)
        .where(Quotation.sku_id == sku_id)
        .order_by(Quotation.created_at.desc())
        .limit(20)
    ).all()
    return {
        "items": [
            {
                "quotation_no": quote.quotation_no,
                "customer_name": quote.customer_name,
                "quantity": quote.quantity,
                "currency": quote.currency,
                "unit_cost": quote.unit_cost,
                "unit_price": quote.unit_price,
                "total_price": quote.total_price,
                "created_at": quote.created_at,
            }
            for quote in quotations
        ]
    }


@router.post("/catalog/import", status_code=status.HTTP_200_OK)
def import_catalog(payload: CatalogImportRequest, db: Session = Depends(get_db)) -> dict:
    groups = (
        (payload.skus, SKU),
        (payload.assemblies, Assembly),
        (payload.standard_components, StandardComponent),
        (payload.parts, Part),
        (payload.routings, Routing),
        (payload.molds, Mold),
        (payload.outsourced_parts, OutsourcedPart),
    )
    counts: Dict[str, int] = {}
    try:
        for items, model in groups:
            counts[model.__tablename__] = len(items)
            for item in items:
                db.merge(model(**item.model_dump()))
            db.flush()
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise HTTPException(status_code=409, detail="Catalog import violates a data relationship") from exc
    return {"status": "imported", "counts": counts}


@router.post("/sku/calculate")
def calculate_sku(payload: CostComputeRequest, db: Session = Depends(get_db)) -> dict:
    return CostEngine(db).compute_sku(payload.sku_id, payload.stage, payload.include_optional)


@router.post("/cost/compute")
def compute_cost(payload: CostComputeRequest, db: Session = Depends(get_db)) -> dict:
    return CostEngine(db).compute_sku(payload.sku_id, payload.stage, payload.include_optional)


@router.post("/production/input", status_code=status.HTTP_201_CREATED)
def input_production(payload: ProductionInput, db: Session = Depends(get_db)) -> dict:
    if db.get(ProductionRecord, payload.record_id) is not None:
        raise HTTPException(status_code=409, detail=f"Production record {payload.record_id} already exists")
    if db.get(Part, payload.part_id) is None:
        raise HTTPException(status_code=404, detail=f"Part {payload.part_id} not found")
    record = ProductionRecord(**payload.model_dump())
    db.add(record)
    db.commit()
    db.refresh(record)
    return {
        "record_id": record.record_id,
        "part_id": record.part_id,
        "source": record.source,
        "yield_rate": money(Decimal(record.good_qty) / Decimal(record.qty)),
        "recorded_at": record.recorded_at,
    }


@router.post("/mold/update")
def update_mold(payload: MoldUpdateRequest, db: Session = Depends(get_db)) -> dict:
    mold = db.get(Mold, payload.mold_id)
    if mold is None:
        raise HTTPException(status_code=404, detail=f"Mold {payload.mold_id} not found")
    if payload.actual_output is not None:
        mold.actual_output = payload.actual_output
    elif payload.output_increment is not None:
        mold.actual_output += payload.output_increment
    if payload.lifecycle_status is not None:
        mold.lifecycle_status = payload.lifecycle_status
    db.commit()
    db.refresh(mold)

    remaining_output = max(mold.planned_output - mold.actual_output, 0)
    remaining_value = (
        Decimal(mold.cost) * Decimal(remaining_output) / Decimal(mold.planned_output)
        if mold.planned_output > 0 and mold.lifecycle_status != "end"
        else Decimal("0")
    )
    return {
        "mold_id": mold.mold_id,
        "actual_output": mold.actual_output,
        "planned_output": mold.planned_output,
        "remaining_output": remaining_output,
        "remaining_value": money(remaining_value),
        "lifecycle_status": mold.lifecycle_status,
    }


@router.post("/cost/version/create", status_code=status.HTTP_201_CREATED)
def create_cost_version(payload: CostVersionCreateRequest, db: Session = Depends(get_db)) -> dict:
    if db.get(CostVersion, payload.version_id) is not None:
        raise HTTPException(status_code=409, detail=f"Cost version {payload.version_id} already exists")
    if payload.parent_version_id:
        parent = db.get(CostVersion, payload.parent_version_id)
        if parent is None:
            raise HTTPException(status_code=404, detail="Parent cost version not found")
        if parent.sku_id != payload.sku_id:
            raise HTTPException(status_code=422, detail="Parent cost version belongs to another SKU")

    cost = CostEngine(db).compute_sku(payload.sku_id, payload.stage, payload.include_optional)
    version = CostVersion(
        version_id=payload.version_id,
        sku_id=payload.sku_id,
        parent_version_id=payload.parent_version_id,
        version_type=payload.version_type,
        reason=payload.reason,
    )
    version.snapshot = CostSnapshot(**snapshot_fields(cost))
    db.add(version)
    db.commit()
    db.refresh(version)
    return {
        "version_id": version.version_id,
        "sku_id": version.sku_id,
        "parent_version_id": version.parent_version_id,
        "version_type": version.version_type,
        "created_at": version.created_at,
        "snapshot": snapshot_fields(cost),
    }


@router.post("/cost/version/diff")
def diff_cost_versions(payload: CostVersionDiffRequest, db: Session = Depends(get_db)) -> dict:
    old = _get_version_with_snapshot(db, payload.from_version_id)
    new = _get_version_with_snapshot(db, payload.to_version_id)
    if old.sku_id != new.sku_id:
        raise HTTPException(status_code=422, detail="Cost versions belong to different SKUs")

    differences = {}
    for field_name in SNAPSHOT_FIELDS:
        old_value = Decimal(getattr(old.snapshot, field_name))
        new_value = Decimal(getattr(new.snapshot, field_name))
        delta = new_value - old_value
        percent = (delta / old_value * Decimal("100")) if old_value else None
        differences[field_name] = {
            "from": money(old_value),
            "to": money(new_value),
            "delta": money(delta),
            "change_percent": money(percent) if percent is not None else None,
        }
    return {
        "sku_id": old.sku_id,
        "from_version_id": old.version_id,
        "to_version_id": new.version_id,
        "differences": differences,
    }


@router.post("/quotation/generate", status_code=status.HTTP_201_CREATED)
def generate_quotation(payload: QuotationGenerateRequest, db: Session = Depends(get_db)) -> dict:
    cost = CostEngine(db).compute_sku(payload.sku_id, payload.stage, payload.include_optional)
    unit_cost = Decimal(cost["total_cost"])
    risk_items = []

    if payload.is_new_product:
        risk_items.append(("new_product", Decimal("0.05")))
    if payload.is_new_customer:
        risk_items.append(("new_customer", Decimal("0.05")))
    if payload.is_small_batch:
        risk_items.append(("small_batch", Decimal("0.10")))

    outsourced_cost = Decimal(cost["outsourced_cost"])
    outsourced_ratio = outsourced_cost / unit_cost if unit_cost else Decimal("0")
    outsourced_risk = payload.outsourced_risk_rate
    if outsourced_risk is None:
        outsourced_risk = _outsourced_risk_rate(outsourced_ratio)
    if outsourced_cost > 0 and outsourced_risk > 0:
        risk_items.append(("outsourced", Decimal(outsourced_risk)))

    risk_rate = sum((rate for _, rate in risk_items), Decimal("0"))
    risk_adjusted_cost = unit_cost * (Decimal("1") + risk_rate)
    unit_price = risk_adjusted_cost / (Decimal("1") - payload.target_margin)
    total_price = unit_price * payload.quantity
    china_standard_time = timezone(timedelta(hours=8))
    now = datetime.now(china_standard_time)
    quotation_id = uuid4().hex
    quotation_no = f"QT-{now:%Y%m%d}-{quotation_id[:8].upper()}"
    quotation = Quotation(
        quotation_id=quotation_id,
        quotation_no=quotation_no,
        sku_id=payload.sku_id,
        customer_name=payload.customer_name,
        quantity=payload.quantity,
        currency=payload.currency,
        unit_cost=money(unit_cost),
        risk_rate=risk_rate,
        target_margin=payload.target_margin,
        unit_price=money(unit_price),
        total_price=money(total_price),
    )
    db.add(quotation)
    db.commit()
    return {
        "quotation_id": quotation.quotation_id,
        "quotation_no": quotation.quotation_no,
        "sku_id": quotation.sku_id,
        "customer_name": quotation.customer_name,
        "quantity": quotation.quantity,
        "currency": quotation.currency,
        "unit_cost": quotation.unit_cost,
        "risk_items": [{"type": name, "rate": rate} for name, rate in risk_items],
        "risk_rate": money(risk_rate),
        "target_margin": money(Decimal(payload.target_margin)),
        "unit_price": quotation.unit_price,
        "total_price": quotation.total_price,
        "created_at": quotation.created_at,
    }


def _get_version_with_snapshot(db: Session, version_id: str) -> CostVersion:
    version = db.scalar(select(CostVersion).where(CostVersion.version_id == version_id))
    if version is None or version.snapshot is None:
        raise HTTPException(status_code=404, detail=f"Cost version {version_id} not found")
    return version


def _outsourced_risk_rate(ratio: Decimal) -> Decimal:
    if ratio >= Decimal("0.50"):
        return Decimal("0.08")
    if ratio >= Decimal("0.25"):
        return Decimal("0.05")
    if ratio > 0:
        return Decimal("0.03")
    return Decimal("0")
