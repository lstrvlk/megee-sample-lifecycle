const SKU_ID = "MEGEE-AIRLESS-30";
const state = { costs: {}, currentStage: "trial", quote: null };

const demoCatalog = {
  skus: [{ sku_id: SKU_ID, name: "30ml 真空泵瓶套装", version: 1, packaging_cost: "0.260000", overhead_rate: "0.085000" }],
  assemblies: [
    { assembly_id: "ASM-BOTTLE", sku_id: SKU_ID, type: "bottle", name: "瓶体总成", assembly_cost: "0.045000" },
    { assembly_id: "ASM-PUMP", sku_id: SKU_ID, type: "pump", name: "泵头总成", assembly_cost: "0.080000" },
    { assembly_id: "ASM-CAP", sku_id: SKU_ID, type: "cap", name: "外盖总成", assembly_cost: "0.030000" }
  ],
  standard_components: [
    { component_id: "STD-SPRING", name: "SUS304 泵芯弹簧", unit_price: "0.145000", supplier: "宁波精工弹簧" },
    { component_id: "STD-GASKET", name: "食品级硅胶垫", unit_price: "0.085000", supplier: "台州密封科技" }
  ],
  parts: [
    { part_id: "PART-BOTTLE", assembly_id: "ASM-BOTTLE", type: "manufactured", name: "AS 真空瓶体", material_cost: "0.620000" },
    { part_id: "PART-PISTON", assembly_id: "ASM-BOTTLE", type: "manufactured", name: "PE 真空活塞", material_cost: "0.180000" },
    { part_id: "PART-PUMP-HOUSING", assembly_id: "ASM-PUMP", type: "manufactured", name: "PP 泵体", material_cost: "0.280000" },
    { part_id: "PART-SPRING", assembly_id: "ASM-PUMP", type: "standard", name: "泵芯弹簧", standard_component_id: "STD-SPRING" },
    { part_id: "PART-GASKET", assembly_id: "ASM-PUMP", type: "standard", name: "密封垫", standard_component_id: "STD-GASKET" },
    { part_id: "PART-CAP", assembly_id: "ASM-CAP", type: "manufactured", name: "ABS 外盖", material_cost: "0.320000" },
    { part_id: "PART-PLATING", assembly_id: "ASM-CAP", type: "outsourced", name: "外盖真空镀膜" }
  ],
  routings: [
    { routing_id: "RT-BOTTLE-INJ", part_id: "PART-BOTTLE", process_type: "injection", machine: "海天 280T", cycle_time: "38", labor_count: 1, machine_rate_per_hour: "118", labor_rate_per_hour: "24", yield_rate: "0.935" },
    { routing_id: "RT-PISTON-INJ", part_id: "PART-PISTON", process_type: "injection", machine: "海天 160T", cycle_time: "22", labor_count: 1, machine_rate_per_hour: "82", labor_rate_per_hour: "24", yield_rate: "0.960" },
    { routing_id: "RT-PUMP-INJ", part_id: "PART-PUMP-HOUSING", process_type: "injection", machine: "震雄 180T", cycle_time: "26", labor_count: 1, machine_rate_per_hour: "88", labor_rate_per_hour: "24", yield_rate: "0.955" },
    { routing_id: "RT-PUMP-ASM", part_id: "PART-PUMP-HOUSING", process_type: "assembly", machine: "半自动泵头线", cycle_time: "8", labor_count: 2, machine_rate_per_hour: "35", labor_rate_per_hour: "24", yield_rate: "0.985" },
    { routing_id: "RT-CAP-INJ", part_id: "PART-CAP", process_type: "injection", machine: "海天 200T", cycle_time: "28", labor_count: 1, machine_rate_per_hour: "96", labor_rate_per_hour: "24", yield_rate: "0.945" }
  ],
  molds: [
    { mold_id: "MOLD-BOTTLE-01", part_id: "PART-BOTTLE", cost: "168000", cavity: 2, planned_output: 1200000, actual_output: 12600, lifecycle_status: "trial" },
    { mold_id: "MOLD-PISTON-01", part_id: "PART-PISTON", cost: "86000", cavity: 4, planned_output: 1600000, actual_output: 11800, lifecycle_status: "pilot" },
    { mold_id: "MOLD-PUMP-01", part_id: "PART-PUMP-HOUSING", cost: "126000", cavity: 4, planned_output: 1500000, actual_output: 10400, lifecycle_status: "pilot" },
    { mold_id: "MOLD-CAP-01", part_id: "PART-CAP", cost: "98000", cavity: 4, planned_output: 1400000, actual_output: 12200, lifecycle_status: "pilot" }
  ],
  outsourced_parts: [
    { outsourced_id: "OUT-PLATING-A", part_id: "PART-PLATING", supplier: "嘉兴华彩", process_type: "vacuum_plating", unit_price: "0.420000", yield_assumption: "0.960", lead_time: 7 },
    { outsourced_id: "OUT-PLATING-B", part_id: "PART-PLATING", supplier: "绍兴新饰界", process_type: "vacuum_plating", unit_price: "0.450000", yield_assumption: "0.985", lead_time: 6 }
  ]
};

const productionRecords = [
  { record_id: "DEMO-TRIAL-BOTTLE", part_id: "PART-BOTTLE", process_type: "injection", qty: 1600, good_qty: 1398, cycle_time_actual: "43.5", scrap_qty: 202, source: "trial" },
  { record_id: "DEMO-PILOT-BOTTLE", part_id: "PART-BOTTLE", process_type: "injection", qty: 8000, good_qty: 7544, cycle_time_actual: "39.4", scrap_qty: 456, source: "pilot" },
  { record_id: "DEMO-TRIAL-PISTON", part_id: "PART-PISTON", process_type: "injection", qty: 1800, good_qty: 1656, cycle_time_actual: "24.2", scrap_qty: 144, source: "trial" },
  { record_id: "DEMO-PILOT-PISTON", part_id: "PART-PISTON", process_type: "injection", qty: 8200, good_qty: 7945, cycle_time_actual: "22.7", scrap_qty: 255, source: "pilot" },
  { record_id: "DEMO-TRIAL-PUMP-INJ", part_id: "PART-PUMP-HOUSING", process_type: "injection", qty: 1500, good_qty: 1322, cycle_time_actual: "29.8", scrap_qty: 178, source: "trial" },
  { record_id: "DEMO-TRIAL-PUMP-ASM", part_id: "PART-PUMP-HOUSING", process_type: "assembly", qty: 1322, good_qty: 1255, cycle_time_actual: "9.2", scrap_qty: 67, source: "trial" },
  { record_id: "DEMO-PILOT-PUMP-INJ", part_id: "PART-PUMP-HOUSING", process_type: "injection", qty: 7600, good_qty: 7240, cycle_time_actual: "27.1", scrap_qty: 360, source: "pilot" },
  { record_id: "DEMO-PILOT-PUMP-ASM", part_id: "PART-PUMP-HOUSING", process_type: "assembly", qty: 7240, good_qty: 7075, cycle_time_actual: "8.3", scrap_qty: 165, source: "pilot" },
  { record_id: "DEMO-TRIAL-CAP", part_id: "PART-CAP", process_type: "injection", qty: 1600, good_qty: 1435, cycle_time_actual: "31.1", scrap_qty: 165, source: "trial" },
  { record_id: "DEMO-PILOT-CAP", part_id: "PART-CAP", process_type: "injection", qty: 7900, good_qty: 7532, cycle_time_actual: "28.8", scrap_qty: 368, source: "pilot" }
];

const $ = (selector) => document.querySelector(selector);
const money = (value) => `¥ ${Number(value || 0).toFixed(3)}`;
const percentage = (value) => `${(Number(value || 0) * 100).toFixed(1)}%`;

async function request(path, options = {}) {
  const response = await fetch(path, { headers: { "Content-Type": "application/json" }, ...options });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.detail || `请求失败 (${response.status})`);
  }
  return response.json();
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => element.classList.remove("show"), 2600);
}

async function checkHealth() {
  try {
    await request("/health");
    $("#api-status").className = "status online";
    $("#api-status").innerHTML = "<i></i>引擎在线";
    const skus = await request("/catalog/skus");
    if (skus.items.some((item) => item.sku_id === SKU_ID)) await loadDashboard();
  } catch (error) {
    $("#api-status").className = "status error";
    $("#api-status").innerHTML = "<i></i>连接失败";
  }
}

async function seedDemo() {
  const button = $("#seed-button");
  button.disabled = true;
  button.textContent = "正在构建成本模型...";
  try {
    await request("/catalog/import", { method: "POST", body: JSON.stringify(demoCatalog) });
    await Promise.all(productionRecords.map((record) =>
      request("/production/input", { method: "POST", body: JSON.stringify(record) }).catch((error) => {
        if (!String(error.message).includes("already exists")) throw error;
      })
    ));
    await loadDashboard();
    toast("演示产品已载入，成本模型计算完成");
  } catch (error) {
    toast(error.message);
  } finally {
    button.disabled = false;
    button.textContent = "刷新演示产品";
  }
}

async function loadDashboard() {
  const stages = ["standard", "trial", "pilot", "mass"];
  const results = await Promise.all(stages.map((stage) =>
    request("/cost/compute", { method: "POST", body: JSON.stringify({ sku_id: SKU_ID, stage }) })
  ));
  stages.forEach((stage, index) => { state.costs[stage] = results[index]; });
  $("#stage-select").disabled = false;
  $("#quote-button").disabled = false;
  $("#snapshot-button").disabled = false;
  $("#sku-badge").textContent = SKU_ID;
  renderStage();
  renderEvolution();
  await renderVersions();
  await loadFieldOperations();
  await renderApprovals();
  calculatePreviewPrice();
}

async function loadFieldOperations() {
  const data = await request(`/catalog/skus/${SKU_ID}/operations`);
  const select = $("#field-operation");
  select.innerHTML = data.items.map((item) => `<option value="${item.part_id}|${item.process_type}" data-cycle="${item.standard_cycle_time}">${item.part_name} · ${item.process_type}（标准 ${Number(item.standard_cycle_time)}s）</option>`).join("");
  select.disabled = !data.items.length;
  $("#field-submit").disabled = !data.items.length;
  if (data.items.length) $("#field-cycle").value = Number(data.items[0].standard_cycle_time);
}

async function submitFieldData(event) {
  event.preventDefault();
  const [partId, processType] = $("#field-operation").value.split("|");
  const qty = Number($("#field-qty").value);
  const goodQty = Number($("#field-good-qty").value);
  if (goodQty > qty) return toast("良品数量不能大于投入数量");
  const recordId = `FIELD-${Date.now()}`;
  try {
    await request("/cost-data/submissions", {
      method: "POST",
      body: JSON.stringify({
        sku_id: SKU_ID,
        submitted_by: $("#collector-name").value,
        source_mode: "onsite",
        production: {
          record_id: recordId, part_id: partId, process_type: processType,
          qty, good_qty: goodQty, scrap_qty: qty - goodQty,
          cycle_time_actual: String($("#field-cycle").value), source: $("#field-stage").value
        }
      })
    });
    await renderApprovals();
    toast(`现场数据 ${recordId} 已提交，等待审批`);
  } catch (error) { toast(error.message); }
}

async function renderApprovals() {
  const data = await request(`/cost-data/submissions?sku_id=${encodeURIComponent(SKU_ID)}&submission_status=pending`);
  const list = $("#approval-list");
  $("#pending-count").textContent = data.items.length;
  if (!data.items.length) {
    list.className = "approval-list empty-state";
    list.textContent = "暂无待审批数据";
    return;
  }
  list.className = "approval-list";
  list.innerHTML = data.items.map((item) => {
    const row = item.payload;
    const yieldRate = Number(row.good_qty) / Number(row.qty) * 100;
    return `<article class="approval-item" data-submission-id="${item.submission_id}">
      <div class="approval-top"><strong>${escapeHtml(row.part_id)} · ${escapeHtml(row.process_type)}</strong><span>${item.source_mode === "import" ? "CSV 导入" : "现场录入"}</span></div>
      <div class="approval-values"><div><small>投入</small><b>${row.qty}</b></div><div><small>良品</small><b>${row.good_qty}</b></div><div><small>良率</small><b>${yieldRate.toFixed(1)}%</b></div><div><small>周期</small><b>${Number(row.cycle_time_actual)}s</b></div></div>
      <div class="approval-meta">${escapeHtml(item.submitted_by)} · ${escapeHtml(row.source.toUpperCase())} · ${new Date(item.submitted_at).toLocaleString("zh-CN")}</div>
      <div class="approval-actions"><button class="mini-button reject" data-action="reject">驳回</button><button class="mini-button approve" data-action="approve">批准采用</button></div>
    </article>`;
  }).join("");
  list.querySelectorAll("button").forEach((button) => button.addEventListener("click", reviewSubmission));
}

async function reviewSubmission(event) {
  const item = event.target.closest(".approval-item");
  const action = event.target.dataset.action;
  const reviewer = $("#reviewer-name").value.trim();
  if (!reviewer) return toast("请填写审核人");
  event.target.disabled = true;
  try {
    const result = await request(`/cost-data/submissions/${item.dataset.submissionId}/${action}`, {
      method: "POST",
      body: JSON.stringify({ reviewed_by: reviewer, comment: action === "approve" ? "数据核对无误，同意采用" : "数据异常，退回现场复核" })
    });
    if (action === "approve") {
      await loadDashboard();
      toast(`已批准生效，成本变化 ${money(result.cost_impact.delta)}`);
    } else {
      await renderApprovals();
      toast("数据已驳回，不参与成本核算");
    }
  } catch (error) { toast(error.message); event.target.disabled = false; }
}

function downloadCsvTemplate() {
  const content = [
    "record_id,part_id,process_type,qty,good_qty,cycle_time_actual,scrap_qty,source",
    `IMPORT-${Date.now()},PART-BOTTLE,injection,1000,950,39.2,50,pilot`
  ].join("\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob(["\uFEFF", content], { type: "text/csv;charset=utf-8" }));
  link.download = "megee-production-cost-template.csv";
  link.click();
  URL.revokeObjectURL(link.href);
}

async function importCsv(event) {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const lines = (await file.text()).replace(/^\uFEFF/, "").trim().split(/\r?\n/);
    const headers = parseCsvLine(lines.shift());
    const required = ["record_id", "part_id", "process_type", "qty", "good_qty", "cycle_time_actual", "scrap_qty", "source"];
    if (!required.every((name) => headers.includes(name))) throw new Error("CSV 表头不符合模板");
    const rows = lines.filter(Boolean).map((line) => {
      const values = parseCsvLine(line);
      const row = Object.fromEntries(headers.map((header, index) => [header, values[index]]));
      return { ...row, qty: Number(row.qty), good_qty: Number(row.good_qty), scrap_qty: Number(row.scrap_qty) };
    });
    const result = await request("/cost-data/import", {
      method: "POST",
      body: JSON.stringify({ sku_id: SKU_ID, submitted_by: $("#collector-name").value, rows })
    });
    await renderApprovals();
    toast(`已导入 ${result.count} 条数据，全部等待审批`);
  } catch (error) { toast(error.message); }
  event.target.value = "";
}

function parseCsvLine(line) {
  const values = []; let current = ""; let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"' && line[index + 1] === '"') { current += '"'; index += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { values.push(current.trim()); current = ""; }
    else current += char;
  }
  values.push(current.trim());
  return values;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function renderStage() {
  const cost = state.costs[state.currentStage];
  if (!cost) return;
  const standard = Number(state.costs.standard.total_cost);
  const current = Number(cost.total_cost);
  const delta = standard ? (current - standard) / standard : 0;
  const stageNames = { standard: "标准成本", trial: "试模成本", pilot: "小批成本", mass: "量产成本" };

  $("#hero-cost").textContent = money(current);
  $("#hero-delta").textContent = state.currentStage === "standard" ? "当前为标准工艺假设" : `较标准成本 ${delta >= 0 ? "+" : ""}${(delta * 100).toFixed(1)}%`;
  $("#metric-cost").textContent = money(current);
  $("#metric-stage").textContent = stageNames[state.currentStage];
  $("#metric-yield").textContent = state.currentStage === "trial" ? "89.1%" : state.currentStage === "pilot" ? "95.4%" : "94.8%";
  $("#metric-mold").textContent = state.currentStage === "trial" ? "Trial" : state.currentStage === "pilot" ? "Pilot" : "Stable";
  $("#metric-output").textContent = "累计 47,000 模次";

  renderCostComposition(cost);
  renderAssemblies(cost.assemblies, current);
  calculatePreviewPrice();
}

function renderCostComposition(cost) {
  const items = [
    ["材料", Number(cost.material_cost), "#d99b27"],
    ["工艺", Number(cost.process_cost), "#258760"],
    ["模具", Number(cost.mold_cost), "#7157b7"],
    ["标准件 / 外协", Number(cost.standard_component_cost) + Number(cost.outsourced_cost), "#3979c5"],
    ["装配 / 包材 / 制造费", Number(cost.assembly_cost) + Number(cost.packaging_cost) + Number(cost.overhead_cost), "#a6a79f"]
  ];
  const total = Number(cost.total_cost);
  let degrees = 0;
  const stops = items.slice(0, 4).map((item) => {
    degrees += total ? item[1] / total * 360 : 0;
    return `${degrees}deg`;
  });
  const donut = $("#cost-donut");
  donut.style.setProperty("--material", stops[0]);
  donut.style.setProperty("--process", stops[1]);
  donut.style.setProperty("--mold", stops[2]);
  donut.style.setProperty("--external", stops[3]);
  $("#donut-total").textContent = money(total);
  $("#cost-legend").classList.remove("empty-state");
  $("#cost-legend").innerHTML = items.map(([label, value, color]) => `
    <div class="legend-row"><i style="background:${color}"></i><span>${label}</span><strong>${money(value)} · ${percentage(value / total)}</strong></div>
  `).join("");
}

function renderAssemblies(assemblies, total) {
  const list = $("#assembly-list");
  list.classList.remove("empty-state");
  list.innerHTML = assemblies.map((assembly, index) => `
    <div class="assembly-row">
      <span class="assembly-index">0${index + 1}</span>
      <div class="assembly-name"><strong>${assembly.name}</strong><span>${assembly.parts.length} 个零件 · ${assembly.type.toUpperCase()}</span></div>
      <div class="assembly-bar"><i style="width:${Math.min(100, Number(assembly.total_cost) / total * 100)}%"></i></div>
      <span class="assembly-price">${money(assembly.total_cost)}</span>
    </div>
  `).join("");
}

function renderEvolution() {
  const stages = [
    ["standard", "标准"], ["trial", "试模"], ["pilot", "小批"], ["mass", "量产"]
  ];
  const values = stages.map(([key]) => Number(state.costs[key].total_cost));
  const max = Math.max(...values) * 1.08;
  $("#evolution-chart").innerHTML = `<div class="chart-bars">${stages.map(([key, label], index) => `
    <div class="chart-column ${key === state.currentStage ? "active" : ""}" data-stage="${key}">
      <span class="chart-value">${money(values[index])}</span>
      <div class="chart-bar" style="height:${values[index] / max * 190}px"></div>
      <span class="chart-label">${label}</span>
    </div>`).join("")}</div>`;
  const trial = Number(state.costs.trial.total_cost);
  const pilot = Number(state.costs.pilot.total_cost);
  $("#insight-text").textContent = `小批阶段较试模下降 ${((trial - pilot) / trial * 100).toFixed(1)}%，主要来自瓶体节拍与泵头装配良率改善。`;
  document.querySelectorAll(".chart-column").forEach((column) => column.addEventListener("click", () => {
    state.currentStage = column.dataset.stage;
    $("#stage-select").value = state.currentStage;
    renderStage(); renderEvolution();
  }));
}

function calculatePreviewPrice() {
  const cost = state.costs[state.currentStage];
  if (!cost) return;
  const risk = ($("#risk-product").checked ? .05 : 0) + ($("#risk-customer").checked ? .05 : 0) + ($("#risk-batch").checked ? .10 : 0) + .03;
  const margin = Number($("#target-margin").value) / 100;
  const price = Number(cost.total_cost) * (1 + risk) / (1 - margin);
  $("#metric-price").textContent = money(price);
  $("#quote-result").innerHTML = `<span>建议含税前单价</span><strong>${money(price)}</strong><small>风险加成 ${(risk * 100).toFixed(0)}% · 毛利 ${Math.round(margin * 100)}%</small>`;
}

async function generateQuote(event) {
  event.preventDefault();
  try {
    const result = await request("/quotation/generate", {
      method: "POST",
      body: JSON.stringify({
        sku_id: SKU_ID, stage: state.currentStage, customer_name: $("#customer-name").value,
        quantity: Number($("#quote-quantity").value), target_margin: String(Number($("#target-margin").value) / 100),
        is_new_product: $("#risk-product").checked, is_new_customer: $("#risk-customer").checked,
        is_small_batch: $("#risk-batch").checked, currency: "CNY"
      })
    });
    state.quote = result;
    $("#metric-price").textContent = money(result.unit_price);
    $("#quote-result").innerHTML = `<span>${result.quotation_no}</span><strong>${money(result.unit_price)}</strong><small>总额 ${money(result.total_price)} · 已保存</small>`;
    toast(`报价 ${result.quotation_no} 已生成并保存`);
  } catch (error) { toast(error.message); }
}

async function createSnapshot() {
  const versions = await request(`/cost/versions/${SKU_ID}`);
  const parent = versions.items[0]?.version_id || null;
  const versionId = `CV-${state.currentStage.toUpperCase()}-${Date.now().toString().slice(-6)}`;
  try {
    await request("/cost/version/create", {
      method: "POST",
      body: JSON.stringify({ version_id: versionId, parent_version_id: parent, sku_id: SKU_ID, stage: state.currentStage, version_type: state.currentStage === "standard" ? "adjusted" : state.currentStage, reason: "驾驶舱手动快照" })
    });
    await renderVersions();
    toast(`成本快照 ${versionId} 已创建`);
  } catch (error) { toast(error.message); }
}

async function renderVersions() {
  const data = await request(`/cost/versions/${SKU_ID}`);
  const list = $("#version-list");
  if (!data.items.length) {
    list.className = "version-list empty-state";
    list.textContent = "点击“创建快照”固化当前成本";
    return;
  }
  list.className = "version-list";
  list.innerHTML = data.items.slice(0, 5).map((item) => `
    <div class="version-item"><i class="version-node"></i><div class="version-copy"><strong>${item.version_id}</strong><span>${item.version_type.toUpperCase()} · ${item.reason || "成本更新"}</span></div><span class="version-cost">${money(item.total_cost)}</span></div>
  `).join("");
}

$("#seed-button").addEventListener("click", seedDemo);
$("#stage-select").addEventListener("change", (event) => { state.currentStage = event.target.value; renderStage(); renderEvolution(); });
$("#quote-form").addEventListener("submit", generateQuote);
$("#snapshot-button").addEventListener("click", createSnapshot);
$("#field-data-form").addEventListener("submit", submitFieldData);
$("#field-operation").addEventListener("change", (event) => { $("#field-cycle").value = Number(event.target.selectedOptions[0].dataset.cycle); });
$("#template-button").addEventListener("click", downloadCsvTemplate);
$("#csv-input").addEventListener("change", importCsv);
document.querySelectorAll("#quote-form input").forEach((input) => input.addEventListener("input", calculatePreviewPrice));
document.querySelectorAll(".nav-item").forEach((item) => item.addEventListener("click", () => {
  document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active")); item.classList.add("active");
}));

checkHealth();
