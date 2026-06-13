from datetime import datetime, timezone
from decimal import Decimal
from typing import List, Optional

from sqlalchemy import JSON, Boolean, DateTime, ForeignKey, Integer, Numeric, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database import Base

MONEY = Numeric(18, 6)
RATE = Numeric(12, 6)


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


class SKU(Base):
    __tablename__ = "skus"

    sku_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    name: Mapped[str] = mapped_column(String(200))
    version: Mapped[int] = mapped_column(Integer, default=1)
    status: Mapped[str] = mapped_column(String(32), default="active")
    packaging_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    overhead_rate: Mapped[Decimal] = mapped_column(RATE, default=Decimal("0"))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    assemblies: Mapped[List["Assembly"]] = relationship(
        back_populates="sku", cascade="all, delete-orphan"
    )
    cost_versions: Mapped[List["CostVersion"]] = relationship(back_populates="sku")


class Assembly(Base):
    __tablename__ = "assemblies"

    assembly_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    sku_id: Mapped[str] = mapped_column(ForeignKey("skus.sku_id"), index=True)
    type: Mapped[str] = mapped_column(String(32))
    name: Mapped[str] = mapped_column(String(200))
    is_optional: Mapped[bool] = mapped_column(Boolean, default=False)
    assembly_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))

    sku: Mapped["SKU"] = relationship(back_populates="assemblies")
    parts: Mapped[List["Part"]] = relationship(back_populates="assembly", cascade="all, delete-orphan")


class StandardComponent(Base):
    __tablename__ = "standard_components"

    component_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    name: Mapped[str] = mapped_column(String(200))
    unit_price: Mapped[Decimal] = mapped_column(MONEY)
    supplier: Mapped[str] = mapped_column(String(200))

    parts: Mapped[List["Part"]] = relationship(back_populates="standard_component")


class Part(Base):
    __tablename__ = "parts"

    part_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    assembly_id: Mapped[str] = mapped_column(ForeignKey("assemblies.assembly_id"), index=True)
    type: Mapped[str] = mapped_column(String(32))
    name: Mapped[str] = mapped_column(String(200))
    quantity: Mapped[Decimal] = mapped_column(RATE, default=Decimal("1"))
    material_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    standard_component_id: Mapped[Optional[str]] = mapped_column(
        ForeignKey("standard_components.component_id"), nullable=True
    )

    assembly: Mapped["Assembly"] = relationship(back_populates="parts")
    standard_component: Mapped[Optional["StandardComponent"]] = relationship(back_populates="parts")
    routings: Mapped[List["Routing"]] = relationship(back_populates="part", cascade="all, delete-orphan")
    molds: Mapped[List["Mold"]] = relationship(back_populates="part", cascade="all, delete-orphan")
    outsourced_quotes: Mapped[List["OutsourcedPart"]] = relationship(
        back_populates="part", cascade="all, delete-orphan"
    )
    production_records: Mapped[List["ProductionRecord"]] = relationship(
        back_populates="part", cascade="all, delete-orphan"
    )


class Routing(Base):
    __tablename__ = "routings"

    routing_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    part_id: Mapped[str] = mapped_column(ForeignKey("parts.part_id"), index=True)
    process_type: Mapped[str] = mapped_column(String(64))
    sequence: Mapped[int] = mapped_column(Integer, default=10)
    machine: Mapped[str] = mapped_column(String(100), default="")
    cycle_time: Mapped[Decimal] = mapped_column(RATE)
    labor_count: Mapped[int] = mapped_column(Integer, default=0)
    machine_rate_per_hour: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    labor_rate_per_hour: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    yield_rate: Mapped[Decimal] = mapped_column(RATE, default=Decimal("1"))

    part: Mapped["Part"] = relationship(back_populates="routings")


class Mold(Base):
    __tablename__ = "molds"

    mold_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    part_id: Mapped[str] = mapped_column(ForeignKey("parts.part_id"), index=True)
    cost: Mapped[Decimal] = mapped_column(MONEY)
    cavity: Mapped[int] = mapped_column(Integer, default=1)
    planned_output: Mapped[int] = mapped_column(Integer)
    actual_output: Mapped[int] = mapped_column(Integer, default=0)
    lifecycle_status: Mapped[str] = mapped_column(String(32), default="trial")
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow, onupdate=utcnow)

    part: Mapped["Part"] = relationship(back_populates="molds")


class OutsourcedPart(Base):
    __tablename__ = "outsourced_parts"

    outsourced_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    part_id: Mapped[str] = mapped_column(ForeignKey("parts.part_id"), index=True)
    supplier: Mapped[str] = mapped_column(String(200))
    process_type: Mapped[str] = mapped_column(String(64))
    unit_price: Mapped[Decimal] = mapped_column(MONEY)
    yield_assumption: Mapped[Decimal] = mapped_column(RATE, default=Decimal("1"))
    lead_time: Mapped[int] = mapped_column(Integer, default=0)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    part: Mapped["Part"] = relationship(back_populates="outsourced_quotes")


class ProductionRecord(Base):
    __tablename__ = "production_records"

    record_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    part_id: Mapped[str] = mapped_column(ForeignKey("parts.part_id"), index=True)
    process_type: Mapped[str] = mapped_column(String(64))
    qty: Mapped[int] = mapped_column(Integer)
    good_qty: Mapped[int] = mapped_column(Integer)
    cycle_time_actual: Mapped[Decimal] = mapped_column(RATE)
    scrap_qty: Mapped[int] = mapped_column(Integer, default=0)
    source: Mapped[str] = mapped_column(String(32))
    recorded_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)

    part: Mapped["Part"] = relationship(back_populates="production_records")


class CostDataSubmission(Base):
    __tablename__ = "cost_data_submissions"

    submission_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    sku_id: Mapped[str] = mapped_column(ForeignKey("skus.sku_id"), index=True)
    data_type: Mapped[str] = mapped_column(String(32), default="production")
    source_mode: Mapped[str] = mapped_column(String(32), default="onsite")
    submitted_by: Mapped[str] = mapped_column(String(100))
    payload: Mapped[dict] = mapped_column(JSON)
    status: Mapped[str] = mapped_column(String(32), default="pending", index=True)
    submitted_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    reviewed_by: Mapped[Optional[str]] = mapped_column(String(100), nullable=True)
    reviewed_at: Mapped[Optional[datetime]] = mapped_column(DateTime(timezone=True), nullable=True)
    review_comment: Mapped[str] = mapped_column(Text, default="")
    applied_record_id: Mapped[Optional[str]] = mapped_column(
        ForeignKey("production_records.record_id"), nullable=True
    )
    applied_version_id: Mapped[Optional[str]] = mapped_column(
        ForeignKey("cost_versions.version_id"), nullable=True
    )


class CostVersion(Base):
    __tablename__ = "cost_versions"

    version_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    sku_id: Mapped[str] = mapped_column(ForeignKey("skus.sku_id"), index=True)
    parent_version_id: Mapped[Optional[str]] = mapped_column(
        ForeignKey("cost_versions.version_id"), nullable=True
    )
    version_type: Mapped[str] = mapped_column(String(32))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
    reason: Mapped[str] = mapped_column(Text, default="")

    sku: Mapped["SKU"] = relationship(back_populates="cost_versions")
    snapshot: Mapped["CostSnapshot"] = relationship(
        back_populates="version", cascade="all, delete-orphan", uselist=False
    )


class CostSnapshot(Base):
    __tablename__ = "cost_snapshots"

    version_id: Mapped[str] = mapped_column(
        ForeignKey("cost_versions.version_id"), primary_key=True
    )
    material_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    process_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    mold_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    assembly_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    standard_component_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    outsourced_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    packaging_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    overhead_cost: Mapped[Decimal] = mapped_column(MONEY, default=Decimal("0"))
    total_cost: Mapped[Decimal] = mapped_column(MONEY)

    version: Mapped["CostVersion"] = relationship(back_populates="snapshot")


class Quotation(Base):
    __tablename__ = "quotations"
    __table_args__ = (UniqueConstraint("quotation_no"),)

    quotation_id: Mapped[str] = mapped_column(String(64), primary_key=True)
    quotation_no: Mapped[str] = mapped_column(String(64))
    sku_id: Mapped[str] = mapped_column(ForeignKey("skus.sku_id"), index=True)
    customer_name: Mapped[str] = mapped_column(String(200), default="")
    quantity: Mapped[int] = mapped_column(Integer)
    currency: Mapped[str] = mapped_column(String(8), default="CNY")
    unit_cost: Mapped[Decimal] = mapped_column(MONEY)
    risk_rate: Mapped[Decimal] = mapped_column(RATE)
    target_margin: Mapped[Decimal] = mapped_column(RATE)
    unit_price: Mapped[Decimal] = mapped_column(MONEY)
    total_price: Mapped[Decimal] = mapped_column(MONEY)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utcnow)
