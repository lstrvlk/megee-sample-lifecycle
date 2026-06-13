from decimal import Decimal
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, Field, model_validator


class APIModel(BaseModel):
    model_config = ConfigDict(extra="forbid", str_strip_whitespace=True)


class SKUInput(APIModel):
    sku_id: str
    name: str
    version: int = Field(default=1, ge=1)
    status: str = "active"
    packaging_cost: Decimal = Field(default=Decimal("0"), ge=0)
    overhead_rate: Decimal = Field(default=Decimal("0"), ge=0, le=1)


class AssemblyInput(APIModel):
    assembly_id: str
    sku_id: str
    type: str
    name: str
    is_optional: bool = False
    assembly_cost: Decimal = Field(default=Decimal("0"), ge=0)


class StandardComponentInput(APIModel):
    component_id: str
    name: str
    unit_price: Decimal = Field(ge=0)
    supplier: str


class PartInput(APIModel):
    part_id: str
    assembly_id: str
    type: str
    name: str
    quantity: Decimal = Field(default=Decimal("1"), gt=0)
    material_cost: Decimal = Field(default=Decimal("0"), ge=0)
    standard_component_id: Optional[str] = None


class RoutingInput(APIModel):
    routing_id: str
    part_id: str
    process_type: str
    sequence: int = Field(default=10, ge=0)
    machine: str = ""
    cycle_time: Decimal = Field(gt=0, description="Standard cycle time in seconds")
    labor_count: int = Field(default=0, ge=0)
    machine_rate_per_hour: Decimal = Field(default=Decimal("0"), ge=0)
    labor_rate_per_hour: Decimal = Field(default=Decimal("0"), ge=0)
    yield_rate: Decimal = Field(default=Decimal("1"), gt=0, le=1)


class MoldInput(APIModel):
    mold_id: str
    part_id: str
    cost: Decimal = Field(ge=0)
    cavity: int = Field(default=1, gt=0)
    planned_output: int = Field(gt=0)
    actual_output: int = Field(default=0, ge=0)
    lifecycle_status: str = "trial"


class OutsourcedPartInput(APIModel):
    outsourced_id: str
    part_id: str
    supplier: str
    process_type: str
    unit_price: Decimal = Field(ge=0)
    yield_assumption: Decimal = Field(default=Decimal("1"), gt=0, le=1)
    lead_time: int = Field(default=0, ge=0)
    is_active: bool = True


class CatalogImportRequest(APIModel):
    skus: List[SKUInput] = Field(default_factory=list)
    assemblies: List[AssemblyInput] = Field(default_factory=list)
    standard_components: List[StandardComponentInput] = Field(default_factory=list)
    parts: List[PartInput] = Field(default_factory=list)
    routings: List[RoutingInput] = Field(default_factory=list)
    molds: List[MoldInput] = Field(default_factory=list)
    outsourced_parts: List[OutsourcedPartInput] = Field(default_factory=list)


class CostComputeRequest(APIModel):
    sku_id: str
    stage: str = Field(default="standard", pattern="^(standard|trial|pilot|mass|adjusted)$")
    include_optional: bool = False


class ProductionInput(APIModel):
    record_id: str
    part_id: str
    process_type: str
    qty: int = Field(gt=0)
    good_qty: int = Field(gt=0)
    cycle_time_actual: Decimal = Field(gt=0)
    scrap_qty: int = Field(default=0, ge=0)
    source: str = Field(pattern="^(trial|pilot|mass)$")

    @model_validator(mode="after")
    def validate_quantities(self) -> "ProductionInput":
        if self.good_qty > self.qty:
            raise ValueError("good_qty cannot exceed qty")
        if self.scrap_qty > self.qty:
            raise ValueError("scrap_qty cannot exceed qty")
        return self


class ProductionSubmissionCreate(APIModel):
    sku_id: str
    submitted_by: str = Field(min_length=1, max_length=100)
    source_mode: str = Field(default="onsite", pattern="^(onsite|import)$")
    production: ProductionInput


class ProductionPreviewRequest(APIModel):
    sku_id: str
    production: ProductionInput


class ProductionSubmissionBatch(APIModel):
    sku_id: str
    submitted_by: str = Field(min_length=1, max_length=100)
    rows: List[ProductionInput] = Field(min_length=1, max_length=500)


class SubmissionReviewRequest(APIModel):
    reviewed_by: str = Field(min_length=1, max_length=100)
    comment: str = Field(default="", max_length=500)


class MoldUpdateRequest(APIModel):
    mold_id: str
    actual_output: Optional[int] = Field(default=None, ge=0)
    output_increment: Optional[int] = Field(default=None, gt=0)
    lifecycle_status: Optional[str] = Field(
        default=None, pattern="^(trial|pilot|mass|stable|end)$"
    )

    @model_validator(mode="after")
    def require_change(self) -> "MoldUpdateRequest":
        if self.actual_output is None and self.output_increment is None and self.lifecycle_status is None:
            raise ValueError("at least one mold field must be updated")
        if self.actual_output is not None and self.output_increment is not None:
            raise ValueError("use actual_output or output_increment, not both")
        return self


class CostVersionCreateRequest(CostComputeRequest):
    version_id: str
    version_type: str = Field(pattern="^(trial|pilot|mass|adjusted)$")
    parent_version_id: Optional[str] = None
    reason: str = ""


class CostVersionDiffRequest(APIModel):
    from_version_id: str
    to_version_id: str


class QuotationGenerateRequest(CostComputeRequest):
    customer_name: str = ""
    quantity: int = Field(gt=0)
    target_margin: Decimal = Field(default=Decimal("0.20"), ge=0, lt=1)
    is_new_product: bool = False
    is_new_customer: bool = False
    is_small_batch: bool = False
    outsourced_risk_rate: Optional[Decimal] = Field(default=None, ge=0, le=Decimal("0.08"))
    currency: str = "CNY"
