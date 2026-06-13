from decimal import Decimal

CATALOG = {
    "skus": [
        {
            "sku_id": "SKU-001",
            "name": "30ml Lotion Bottle Set",
            "packaging_cost": "0.20",
            "overhead_rate": "0.10",
        }
    ],
    "assemblies": [
        {
            "assembly_id": "ASM-BOTTLE",
            "sku_id": "SKU-001",
            "type": "bottle",
            "name": "Bottle Assembly",
            "assembly_cost": "0.05",
        }
    ],
    "standard_components": [
        {
            "component_id": "STD-SPRING",
            "name": "Pump Spring",
            "unit_price": "0.20",
            "supplier": "Spring Supplier",
        }
    ],
    "parts": [
        {
            "part_id": "PART-BOTTLE",
            "assembly_id": "ASM-BOTTLE",
            "type": "manufactured",
            "name": "Bottle Body",
            "material_cost": "0.50",
        },
        {
            "part_id": "PART-SPRING",
            "assembly_id": "ASM-BOTTLE",
            "type": "standard",
            "name": "Spring",
            "standard_component_id": "STD-SPRING",
        },
        {
            "part_id": "PART-PLATED-CAP",
            "assembly_id": "ASM-BOTTLE",
            "type": "outsourced",
            "name": "Plated Cap",
        },
    ],
    "routings": [
        {
            "routing_id": "R-INJECTION",
            "part_id": "PART-BOTTLE",
            "process_type": "injection",
            "machine": "IM-01",
            "cycle_time": "36",
            "labor_count": 1,
            "machine_rate_per_hour": "100",
            "labor_rate_per_hour": "20",
            "yield_rate": "0.90",
        }
    ],
    "molds": [
        {
            "mold_id": "MOLD-BOTTLE",
            "part_id": "PART-BOTTLE",
            "cost": "1000",
            "cavity": 1,
            "planned_output": 100000,
            "actual_output": 0,
            "lifecycle_status": "trial",
        }
    ],
    "outsourced_parts": [
        {
            "outsourced_id": "OUT-PLATING",
            "part_id": "PART-PLATED-CAP",
            "supplier": "Plating Supplier",
            "process_type": "plating",
            "unit_price": "0.30",
            "yield_assumption": "0.95",
            "lead_time": 7,
        },
        {
            "outsourced_id": "OUT-PLATING-ALT",
            "part_id": "PART-PLATED-CAP",
            "supplier": "Alternate Supplier",
            "process_type": "plating",
            "unit_price": "0.60",
            "yield_assumption": "0.98",
            "lead_time": 5,
        },
    ],
}


def test_complete_cost_evolution_and_quotation_flow(client):
    response = client.post("/catalog/import", json=CATALOG)
    assert response.status_code == 200, response.text

    standard = client.post(
        "/cost/compute", json={"sku_id": "SKU-001", "stage": "standard"}
    )
    assert standard.status_code == 200, standard.text
    standard_cost = Decimal(standard.json()["total_cost"])
    assert standard_cost == Decimal("2.931146")

    production = client.post(
        "/production/input",
        json={
            "record_id": "PR-TRIAL-001",
            "part_id": "PART-BOTTLE",
            "process_type": "injection",
            "qty": 100,
            "good_qty": 80,
            "cycle_time_actual": "45",
            "scrap_qty": 20,
            "source": "trial",
        },
    )
    assert production.status_code == 201, production.text
    assert production.json()["yield_rate"] == "0.800000"

    trial = client.post("/sku/calculate", json={"sku_id": "SKU-001", "stage": "trial"})
    assert trial.status_code == 200, trial.text
    trial_cost = Decimal(trial.json()["total_cost"])
    assert trial_cost == Decimal("3.603368")
    assert trial_cost > standard_cost

    version_1 = client.post(
        "/cost/version/create",
        json={
            "version_id": "CV-STD-001",
            "sku_id": "SKU-001",
            "stage": "standard",
            "version_type": "adjusted",
            "reason": "Initial standard cost",
        },
    )
    assert version_1.status_code == 201, version_1.text

    version_2 = client.post(
        "/cost/version/create",
        json={
            "version_id": "CV-TRIAL-001",
            "parent_version_id": "CV-STD-001",
            "sku_id": "SKU-001",
            "stage": "trial",
            "version_type": "trial",
            "reason": "First mold trial",
        },
    )
    assert version_2.status_code == 201, version_2.text

    diff = client.post(
        "/cost/version/diff",
        json={"from_version_id": "CV-STD-001", "to_version_id": "CV-TRIAL-001"},
    )
    assert diff.status_code == 200, diff.text
    assert Decimal(diff.json()["differences"]["total_cost"]["delta"]) > 0

    mold = client.post(
        "/mold/update",
        json={"mold_id": "MOLD-BOTTLE", "output_increment": 500, "lifecycle_status": "pilot"},
    )
    assert mold.status_code == 200, mold.text
    assert mold.json()["actual_output"] == 500

    quote = client.post(
        "/quotation/generate",
        json={
            "sku_id": "SKU-001",
            "stage": "trial",
            "customer_name": "New Customer",
            "quantity": 5000,
            "target_margin": "0.20",
            "is_new_product": True,
            "is_new_customer": True,
            "is_small_batch": True,
        },
    )
    assert quote.status_code == 201, quote.text
    body = quote.json()
    assert Decimal(body["unit_price"]) > Decimal(body["unit_cost"])
    assert body["risk_rate"] == "0.230000"


def test_rejects_invalid_production_yield(client):
    response = client.post(
        "/production/input",
        json={
            "record_id": "INVALID",
            "part_id": "PART-X",
            "process_type": "injection",
            "qty": 10,
            "good_qty": 11,
            "cycle_time_actual": "20",
            "source": "trial",
        },
    )
    assert response.status_code == 422


def test_health(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_dashboard_and_catalog_queries(client):
    dashboard = client.get("/")
    assert dashboard.status_code == 200
    assert "制造成本驾驶舱" in dashboard.text

    assert client.post("/catalog/import", json=CATALOG).status_code == 200
    skus = client.get("/catalog/skus")
    assert skus.status_code == 200
    assert skus.json()["items"][0]["sku_id"] == "SKU-001"

    versions = client.get("/cost/versions/SKU-001")
    assert versions.status_code == 200
    assert versions.json()["items"] == []


def test_field_data_requires_approval_before_cost_adoption(client):
    assert client.post("/catalog/import", json=CATALOG).status_code == 200
    baseline = client.post(
        "/cost/compute", json={"sku_id": "SKU-001", "stage": "trial"}
    ).json()["total_cost"]

    submitted = client.post(
        "/cost-data/submissions",
        json={
            "sku_id": "SKU-001",
            "submitted_by": "Trial Operator",
            "source_mode": "onsite",
            "production": {
                "record_id": "FIELD-TRIAL-001",
                "part_id": "PART-BOTTLE",
                "process_type": "injection",
                "qty": 100,
                "good_qty": 70,
                "cycle_time_actual": "50",
                "scrap_qty": 30,
                "source": "trial",
            },
        },
    )
    assert submitted.status_code == 201, submitted.text
    submission_id = submitted.json()["submission_id"]

    pending_cost = client.post(
        "/cost/compute", json={"sku_id": "SKU-001", "stage": "trial"}
    ).json()["total_cost"]
    assert pending_cost == baseline

    approved = client.post(
        f"/cost-data/submissions/{submission_id}/approve",
        json={"reviewed_by": "Cost Manager", "comment": "Verified against trial sheet"},
    )
    assert approved.status_code == 200, approved.text
    body = approved.json()
    assert body["submission"]["status"] == "approved"
    assert body["submission"]["applied_record_id"] == "FIELD-TRIAL-001"
    assert body["submission"]["applied_version_id"].startswith("CV-APP-")
    assert Decimal(body["cost_impact"]["after"]) > Decimal(body["cost_impact"]["before"])

    versions = client.get("/cost/versions/SKU-001").json()["items"]
    assert len(versions) == 1


def test_csv_batch_stays_pending_and_can_be_rejected(client):
    assert client.post("/catalog/import", json=CATALOG).status_code == 200
    imported = client.post(
        "/cost-data/import",
        json={
            "sku_id": "SKU-001",
            "submitted_by": "Import User",
            "rows": [
                {
                    "record_id": "CSV-001",
                    "part_id": "PART-BOTTLE",
                    "process_type": "injection",
                    "qty": 500,
                    "good_qty": 480,
                    "cycle_time_actual": "38",
                    "scrap_qty": 20,
                    "source": "pilot",
                }
            ],
        },
    )
    assert imported.status_code == 201, imported.text
    submission_id = imported.json()["submission_ids"][0]
    pending = client.get(
        "/cost-data/submissions", params={"sku_id": "SKU-001", "submission_status": "pending"}
    )
    assert pending.status_code == 200
    assert pending.json()["items"][0]["source_mode"] == "import"

    rejected = client.post(
        f"/cost-data/submissions/{submission_id}/reject",
        json={"reviewed_by": "Cost Manager", "comment": "Wrong batch"},
    )
    assert rejected.status_code == 200
    assert rejected.json()["status"] == "rejected"
    assert client.get(
        "/cost-data/submissions", params={"sku_id": "SKU-001", "submission_status": "pending"}
    ).json()["items"] == []


def test_cost_preview_explains_formula_without_persisting(client):
    assert client.post("/catalog/import", json=CATALOG).status_code == 200
    payload = {
        "sku_id": "SKU-001",
        "production": {
            "record_id": "PREVIEW-ONLY",
            "part_id": "PART-BOTTLE",
            "process_type": "injection",
            "qty": 100,
            "good_qty": 80,
            "cycle_time_actual": "45",
            "scrap_qty": 20,
            "source": "trial",
        },
    }
    preview = client.post("/cost-data/preview", json=payload)
    assert preview.status_code == 200, preview.text
    body = preview.json()
    assert body["operation"]["machine"] == "IM-01"
    assert body["formula"]["hourly_rate"] == "120.000000"
    assert body["formula"]["process_factor"] == "1.250000"
    assert body["formula"]["yield_cost_factor"] == "1.250000"
    assert Decimal(body["sku_impact"]["projected_total_cost"]) > Decimal(
        body["sku_impact"]["current_total_cost"]
    )

    pending = client.get(
        "/cost-data/submissions", params={"sku_id": "SKU-001", "submission_status": "pending"}
    )
    assert pending.json()["items"] == []
    accepted = client.post("/production/input", json=payload["production"])
    assert accepted.status_code == 201
