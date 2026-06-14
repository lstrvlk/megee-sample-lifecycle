const state = { skus: [], worksheet: null, saved: false };
const $ = (selector) => document.querySelector(selector);
const money = (value) => `¥ ${Number(value || 0).toFixed(6)}`;
const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
const typeLabels = { manufactured: "自制物料", standard: "外购 / 标准配件", outsourced: "外协 / 装饰工艺" };

async function request(path, options = {}) {
  const response = await fetch(path, { headers: { "Content-Type": "application/json", ...(options.headers || {}) }, ...options });
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
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2800);
}

async function initialize() {
  try {
    await request("/health");
    $("#api-status").className = "status online";
    $("#api-status").innerHTML = "<i></i>系统在线";
    const data = await request("/catalog/skus");
    state.skus = data.items;
    renderSkuOptions();
    if (state.skus.length) await loadSku(state.skus[0].sku_id);
    else createNewProduct();
  } catch (error) {
    $("#api-status").className = "status error";
    $("#api-status").innerHTML = "<i></i>连接失败";
    toast(error.message);
  }
}

function renderSkuOptions(selected = "") {
  const select = $("#sku-select");
  select.innerHTML = '<option value="">选择产品...</option>' + state.skus.map((sku) => `<option value="${escapeHtml(sku.sku_id)}">${escapeHtml(sku.sku_id)} · ${escapeHtml(sku.name)}</option>`).join("");
  select.value = selected;
}

async function loadSku(skuId) {
  if (!skuId) return;
  try {
    const data = await request(`/costing/skus/${encodeURIComponent(skuId)}/bom`);
    state.worksheet = data;
    state.saved = true;
    $("#sku-select").value = skuId;
    const sku = state.skus.find((item) => item.sku_id === skuId);
    $("#sku-version").textContent = sku ? `V${sku.version}` : "--";
    $("#worksheet-status").textContent = "已载入";
    fillProductFields(data);
    renderRows();
    renderPreview(data.preview);
    updateLineResults(data.preview.lines);
    updateButtons();
  } catch (error) { toast(error.message); }
}

function createNewProduct() {
  state.worksheet = {
    sku_id: "",
    sku_name: "",
    packaging_cost: "0",
    overhead_rate: "0",
    updated_by: "成本核算员",
    reason: "BOM成本参数确认",
    items: [blankRow()],
  };
  state.saved = false;
  $("#sku-select").value = "";
  $("#sku-version").textContent = "新产品";
  $("#worksheet-status").textContent = "待填写";
  fillProductFields(state.worksheet);
  renderRows();
  schedulePreview();
  updateButtons();
}

function blankRow(index = Date.now()) {
  return {
    assembly_id: `ASM-${String(index).slice(-4)}`,
    assembly_name: "",
    assembly_type: "custom",
    part_id: `PART-${String(index).slice(-6)}`,
    part_name: "",
    cost_type: "manufactured",
    quantity: "1",
    unit_price: "0",
    supplier: "",
    yield_rate: "1",
    source_note: "",
  };
}

function fillProductFields(data) {
  $("#sku-id").value = data.sku_id || "";
  $("#sku-name").value = data.sku_name || "";
  $("#packaging-cost").value = Number(data.packaging_cost || 0);
  $("#overhead-rate").value = Number(data.overhead_rate || 0) * 100;
}

function renderRows() {
  const body = $("#bom-body");
  if (!state.worksheet?.items?.length) {
    body.innerHTML = '<tr><td colspan="9" class="empty">暂无 BOM 明细，请添加零件。</td></tr>';
    return;
  }
  body.innerHTML = state.worksheet.items.map((row, index) => `
    <tr data-index="${index}">
      <td class="row-number">${index + 1}</td>
      <td class="identity-cell">
        <input data-field="assembly_name" value="${escapeHtml(row.assembly_name)}" placeholder="组件名称" aria-label="第${index + 1}行组件名称" />
        <input class="part-name" data-field="part_name" value="${escapeHtml(row.part_name)}" placeholder="零件名称" aria-label="第${index + 1}行零件名称" />
        <div><input data-field="assembly_id" value="${escapeHtml(row.assembly_id)}" aria-label="第${index + 1}行组件编号" /><input data-field="part_id" value="${escapeHtml(row.part_id)}" aria-label="第${index + 1}行零件编号" /></div>
      </td>
      <td><select data-field="cost_type" aria-label="第${index + 1}行成本类型">${Object.entries(typeLabels).map(([value, label]) => `<option value="${value}" ${row.cost_type === value ? "selected" : ""}>${label}</option>`).join("")}</select></td>
      <td><input class="number" data-field="quantity" type="number" min="0.000001" step="0.000001" value="${Number(row.quantity)}" aria-label="第${index + 1}行单件用量" /></td>
      <td><input class="number" data-field="unit_price" type="number" min="0" step="0.000001" value="${Number(row.unit_price)}" aria-label="第${index + 1}行未税单价" /></td>
      <td><input data-field="supplier" value="${escapeHtml(row.supplier)}" placeholder="供应商" aria-label="第${index + 1}行供应商" /><input class="source-note" data-field="source_note" value="${escapeHtml(row.source_note)}" placeholder="报价单/核价日期" aria-label="第${index + 1}行数据来源" /></td>
      <td><input class="number yield-input" data-field="yield_rate" type="number" min="0.000001" max="1" step="0.001" value="${Number(row.yield_rate || 1)}" ${row.cost_type === "outsourced" ? "" : "disabled"} aria-label="第${index + 1}行良率" /><small>${row.cost_type === "outsourced" ? "0~1" : "不适用"}</small></td>
      <td class="line-cost"><strong>${money(row.line_cost)}</strong><small>${escapeHtml(row.formula || "等待试算")}</small></td>
      <td><button class="remove-row" data-action="remove" type="button" aria-label="删除第${index + 1}行">×</button></td>
    </tr>`).join("");
}

function collectWorksheet() {
  const items = [...document.querySelectorAll("#bom-body tr[data-index]")].map((tr) => {
    const read = (field) => tr.querySelector(`[data-field="${field}"]`).value.trim();
    return {
      assembly_id: read("assembly_id"),
      assembly_name: read("assembly_name"),
      assembly_type: state.worksheet.items[Number(tr.dataset.index)]?.assembly_type || "custom",
      part_id: read("part_id"),
      part_name: read("part_name"),
      cost_type: read("cost_type"),
      quantity: read("quantity"),
      unit_price: read("unit_price"),
      supplier: read("supplier"),
      yield_rate: read("yield_rate") || "1",
      source_note: read("source_note"),
    };
  });
  return {
    sku_id: $("#sku-id").value.trim(),
    sku_name: $("#sku-name").value.trim(),
    packaging_cost: $("#packaging-cost").value || "0",
    overhead_rate: String(Number($("#overhead-rate").value || 0) / 100),
    updated_by: "成本核算员",
    reason: "BOM成本参数确认",
    items,
  };
}

function validateWorksheet(payload) {
  if (!payload.sku_id || !payload.sku_name) return "请填写产品编号和产品名称";
  if (!payload.items.length) return "请至少添加一个 BOM 零件";
  for (const [index, row] of payload.items.entries()) {
    if (!row.assembly_id || !row.assembly_name || !row.part_id || !row.part_name) return `第 ${index + 1} 行的组件或零件信息不完整`;
    if (Number(row.quantity) <= 0) return `第 ${index + 1} 行用量必须大于 0`;
    if (Number(row.unit_price) < 0) return `第 ${index + 1} 行单价不能小于 0`;
    if (row.cost_type === "outsourced" && (Number(row.yield_rate) <= 0 || Number(row.yield_rate) > 1)) return `第 ${index + 1} 行外协良率应在 0 到 1 之间`;
  }
  return "";
}

function schedulePreview() {
  clearTimeout(schedulePreview.timer);
  schedulePreview.timer = setTimeout(previewWorksheet, 250);
}

async function previewWorksheet() {
  const payload = collectWorksheet();
  const validation = validateWorksheet(payload);
  if (validation) {
    $("#worksheet-status").textContent = "待补充";
    $("#apply-button").disabled = true;
    return;
  }
  try {
    const preview = await request("/costing/bom/preview", { method: "POST", body: JSON.stringify(payload) });
    state.worksheet = { ...payload, items: preview.lines };
    state.saved = false;
    $("#worksheet-status").textContent = "试算中";
    renderPreview(preview);
    updateLineResults(preview.lines);
    updateButtons();
  } catch (error) { toast(error.message); }
}

function renderPreview(preview) {
  if (!preview) return;
  $("#bom-total").textContent = money(preview.bom_total);
  $("#manufactured-total").textContent = money(preview.manufactured_cost);
  $("#standard-total").textContent = money(preview.standard_component_cost);
  $("#outsourced-total").textContent = money(preview.outsourced_cost);
  $("#packaging-total").textContent = money(preview.packaging_cost);
}

function updateLineResults(lines) {
  document.querySelectorAll("#bom-body tr[data-index]").forEach((tr) => {
    const line = lines[Number(tr.dataset.index)];
    if (!line) return;
    tr.querySelector(".line-cost strong").textContent = money(line.line_cost);
    tr.querySelector(".line-cost small").textContent = line.formula;
    const yieldInput = tr.querySelector('[data-field="yield_rate"]');
    const outsourced = tr.querySelector('[data-field="cost_type"]').value === "outsourced";
    yieldInput.disabled = !outsourced;
    yieldInput.nextElementSibling.textContent = outsourced ? "0~1" : "不适用";
  });
}

function updateButtons() {
  const valid = state.worksheet && !validateWorksheet(collectWorksheet());
  $("#apply-button").disabled = !valid;
  $("#report-button").disabled = !state.saved || !state.worksheet?.sku_id;
  $("#save-note").textContent = state.saved ? "当前数据已保存。继续修改后需再次确认。" : "当前为试算数据，尚未写入正式成本。";
}

async function applyWorksheet() {
  const payload = collectWorksheet();
  const validation = validateWorksheet(payload);
  if (validation) return toast(validation);
  const button = $("#apply-button");
  button.disabled = true;
  button.textContent = "正在保存并生成版本...";
  try {
    const result = await request("/costing/bom/apply", { method: "POST", body: JSON.stringify(payload) });
    state.saved = true;
    state.worksheet = { ...payload, items: result.bom_preview.lines };
    $("#worksheet-status").textContent = "已确认";
    $("#sku-version").textContent = `V${result.sku_version}`;
    $("#saved-result").classList.remove("hidden");
    $("#saved-result").innerHTML = `<strong>已生成成本版本</strong><span>${escapeHtml(result.version_id)}</span><small>当前标准总成本 ${money(result.standard_cost.total_cost)}</small>`;
    const catalog = await request("/catalog/skus");
    state.skus = catalog.items;
    renderSkuOptions(payload.sku_id);
    updateButtons();
    toast("BOM 成本已确认并生成版本");
  } catch (error) { toast(error.message); }
  finally { button.textContent = "确认 BOM 成本并生成版本"; updateButtons(); }
}

async function importExcel(event) {
  const file = event.target.files[0];
  if (!file) return;
  const form = new FormData();
  form.append("file", file);
  try {
    $("#worksheet-status").textContent = "正在导入";
    const response = await fetch("/costing/bom/import", { method: "POST", body: form });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || "Excel 导入失败");
    state.worksheet = data;
    state.saved = false;
    $("#sku-select").value = "";
    $("#sku-version").textContent = "待确认";
    $("#worksheet-status").textContent = "Excel 已导入";
    fillProductFields(data);
    renderRows();
    renderPreview(data.preview);
    updateLineResults(data.preview.lines);
    updateButtons();
    toast(`已导入 ${data.items.length} 条 BOM，请逐行核对`);
  } catch (error) { toast(error.message); $("#worksheet-status").textContent = "导入失败"; }
  event.target.value = "";
}

function addRow() {
  const payload = collectWorksheet();
  state.worksheet = { ...payload, items: [...payload.items, blankRow()] };
  renderRows();
  schedulePreview();
}

function removeRow(index) {
  const payload = collectWorksheet();
  payload.items.splice(index, 1);
  state.worksheet = payload;
  renderRows();
  schedulePreview();
}

function downloadTemplate() {
  const skuId = state.saved ? $("#sku-id").value.trim() : "";
  window.location.href = skuId ? `/costing/bom/template/${encodeURIComponent(skuId)}` : "/costing/bom/template";
}

function downloadReport() {
  const skuId = $("#sku-id").value.trim();
  if (skuId && state.saved) window.location.href = `/costing/bom/report/${encodeURIComponent(skuId)}`;
}

$("#sku-select").addEventListener("change", (event) => loadSku(event.target.value));
$("#new-product").addEventListener("click", createNewProduct);
$("#excel-input").addEventListener("change", importExcel);
$("#template-button").addEventListener("click", downloadTemplate);
$("#report-button").addEventListener("click", downloadReport);
$("#add-row").addEventListener("click", addRow);
$("#apply-button").addEventListener("click", applyWorksheet);
$("#bom-body").addEventListener("input", schedulePreview);
$("#bom-body").addEventListener("change", schedulePreview);
$("#bom-body").addEventListener("click", (event) => {
  if (event.target.dataset.action === "remove") removeRow(Number(event.target.closest("tr").dataset.index));
});
document.querySelectorAll("#sku-id, #sku-name, #packaging-cost, #overhead-rate").forEach((input) => input.addEventListener("input", schedulePreview));

initialize();
