const store = {
  samples: [
    {id:'SP-2026-0048',name:'MZ-50 定量泵套装',productCode:'P-MZ50-2410',spec:'24/410 白色标准泵',category:'常规库存样',sampleType:'标准样品',customer:'通用',version:'V2',batch:'B20260518-01',inDate:'2026-05-18',stock:86,safety:30,location:'A-02-03',fifo:'优先出 B20260518-01',status:'可用',owner:'赵敏',updated:'2026-06-12'},
    {id:'SP-2026-0047',name:'哑光银电镀乳液泵',productCode:'P-LP28-SV',spec:'28/410 哑光银电镀',category:'开发样',sampleType:'客户定制样',customer:'沐光个护',version:'V3',batch:'B20260528-02',inDate:'2026-05-28',stock:12,safety:10,location:'B-01-06',fifo:'优先出 B20260528-02',status:'预留',owner:'周明',updated:'2026-06-11'},
    {id:'SP-2026-0043',name:'24/410 香水喷雾泵',productCode:'P-SP24-STD',spec:'24/410 透明喷雾泵',category:'新品发布样',sampleType:'标准样品',customer:'通用',version:'V1',batch:'B20260601-01',inDate:'2026-06-01',stock:24,safety:20,location:'A-03-02',fifo:'优先出 B20260601-01',status:'可用',owner:'赵敏',updated:'2026-06-10'},
    {id:'SP-2026-0039',name:'PCR 材质泡沫泵',productCode:'P-FP-PCR30',spec:'PCR 30% Pantone 7527C',category:'客户定制样',sampleType:'颜色限度样',customer:'蓝岸日化',version:'V4',batch:'B20260420-03',inDate:'2026-04-20',stock:4,safety:10,location:'B-04-01',fifo:'库存不足，先补样',status:'待补样',owner:'陈柯',updated:'2026-06-09'},
    {id:'SP-2026-0036',name:'锁扣式粉底液泵',productCode:'P-FD-LOCK',spec:'锁扣式粉底液泵标准样',category:'PPS 留样',sampleType:'PPS 标准样',customer:'诺安生物',version:'V2',batch:'B20260330-01',inDate:'2026-03-30',stock:6,safety:4,location:'PPS-02-08',fifo:'PPS 留样，需 QA 授权',status:'可用',owner:'王若兰',updated:'2026-06-08'}
  ],
  requests: [
    {id:'SR-2026-0089',customer:'海澜美妆',purpose:'新客户开发',items:'MZ-50 定量泵 × 6',owner:'李雯',charge:'不收费',status:'待审批',date:'2026-06-12'},
    {id:'SR-2026-0088',customer:'沐光个护',purpose:'项目开发',items:'哑光银电镀乳液泵 × 12',owner:'周明',charge:'待客户确认',status:'待备货',date:'2026-06-12'},
    {id:'SR-2026-0085',customer:'蓝岸日化',purpose:'老客户补样',items:'PCR 材质泡沫泵 × 4',owner:'林知夏',charge:'已减免',status:'待寄出',date:'2026-06-11'},
    {id:'SR-2026-0081',customer:'诺安生物',purpose:'订单确认',items:'锁扣式粉底液泵 × 3',owner:'李雯',charge:'不收费',status:'已签收',date:'2026-06-10'}
  ],
  development: [
    {id:'SY-2026-0031',customer:'青屿实验室',product:'新结构真空泵',requirement:'15ml，低残留结构，哑光白',owner:'陈柯',version:'V2',due:'2026-06-18',status:'打样中'},
    {id:'SY-2026-0029',customer:'沐光个护',product:'渐变喷涂乳液泵',requirement:'银色至透明渐变，耐酒精',owner:'周明',version:'V3',due:'2026-06-14',status:'待检验'},
    {id:'SY-2026-0026',customer:'蓝岸日化',product:'PCR 泡沫泵',requirement:'PCR 30%，Pantone 7527C',owner:'陈柯',version:'V4',due:'2026-06-13',status:'待客户反馈'}
  ],
  inventory: [
    {id:'IT-2026-0621',sample:'SP-2026-0048',action:'出库',qty:-6,from:'A-02-03',to:'SR-2026-0089',operator:'赵敏',time:'2026-06-12 10:24'},
    {id:'IT-2026-0620',sample:'SP-2026-0047',action:'预留',qty:-12,from:'B-01-06',to:'SR-2026-0088',operator:'赵敏',time:'2026-06-12 09:51'},
    {id:'IT-2026-0619',sample:'SP-2026-0043',action:'入库',qty:20,from:'新品发布',to:'A-03-02',operator:'赵敏',time:'2026-06-11 16:30'},
    {id:'IT-2026-0618',sample:'SP-2026-0039',action:'盘点调整',qty:-2,from:'B-04-01',to:'B-04-01',operator:'赵敏',time:'2026-06-11 14:08'}
  ],
  shipments: [
    {id:'SH-2026-0056',request:'SR-2026-0085',customer:'蓝岸日化',samples:'PCR 材质泡沫泵 × 4',carrier:'顺丰速运',tracking:'SF1438291023',waybillQr:'QR-SF-0056',receiver:'许安然 / 上海市浦东新区***',receiverMasked:'已扫码匹配，样品组不可见',salesperson:'林知夏',sampleOperator:'赵敏',status:'待业务确认',date:'--',approval:'待确认'},
    {id:'SH-2026-0054',request:'SR-2026-0081',customer:'诺安生物',samples:'锁扣式粉底液泵 × 3',carrier:'顺丰速运',tracking:'SF1438287741',waybillQr:'QR-SF-0054',receiver:'梁睿 / 杭州市滨江区***',receiverMasked:'已扫码匹配，样品组不可见',salesperson:'李雯',sampleOperator:'赵敏',status:'已取件',date:'2026-06-11',approval:'业务已批准'},
    {id:'SH-2026-0051',request:'SR-2026-0078',customer:'谷野科技',samples:'24/410 香水喷雾泵 × 8',carrier:'京东物流',tracking:'JDVA00281743',waybillQr:'QR-JD-0051',receiver:'徐禾 / 深圳市南山区***',receiverMasked:'已扫码匹配，样品组不可见',salesperson:'周明',sampleOperator:'赵敏',status:'后台已放行',date:'2026-06-10',approval:'业务已批准'}
  ],
  charges: [
    {id:'CH-2026-0028',request:'SR-2026-0088',customer:'沐光个护',type:'特殊电镀',defaultAmount:1600,actualAmount:1200,waiver:400,status:'待客户确认'},
    {id:'CH-2026-0027',request:'SR-2026-0085',customer:'蓝岸日化',type:'库存样管理费',defaultAmount:300,actualAmount:0,waiver:300,status:'已减免'},
    {id:'CH-2026-0023',request:'SR-2026-0076',customer:'青屿实验室',type:'新结构打样',defaultAmount:2400,actualAmount:2400,waiver:0,status:'已收费'}
  ],
  pps: [
    {id:'PPS-NOAN-2026-0012',customer:'诺安生物',product:'锁扣式粉底液泵',order:'SO-260611-028',version:'V2',expiry:'2027-06-10',evidence:4,status:'生效中'},
    {id:'PPS-MUGUANG-2026-0009',customer:'沐光个护',product:'哑光银乳液泵',order:'SO-260605-019',version:'V3',expiry:'2026-07-05',evidence:3,status:'即将到期'},
    {id:'PPS-LANAN-2026-0007',customer:'蓝岸日化',product:'PCR 材质泡沫泵',order:'SO-260528-011',version:'V4',expiry:'2026-12-31',evidence:2,status:'待客户批准'},
    {id:'PPS-QINGYU-2026-0003',customer:'青屿实验室',product:'新结构真空泵',order:'SO-260501-006',version:'V1',expiry:'2026-06-08',evidence:3,status:'已过期'}
  ]
};

try {
  const saved=JSON.parse(localStorage.getItem('megee-sample-lifecycle')||'null');
  if(saved) Object.keys(store).forEach(key=>{if(Array.isArray(saved[key])) store[key]=saved[key]});
} catch (_) {}
store.shipments=store.shipments.map((x,i)=>({
  samples:x.samples||['PCR 材质泡沫泵 × 4','锁扣式粉底液泵 × 3','24/410 香水喷雾泵 × 8'][i]||'样品明细待补充',
  waybillQr:x.waybillQr||`QR-${x.id}`,
  receiverMasked:x.receiverMasked||'已扫码匹配，样品组不可见',
  salesperson:x.salesperson||x.owner||['林知夏','李雯','周明'][i]||'业务员',
  sampleOperator:x.sampleOperator||'赵敏',
  approval:x.approval||((x.status||'').includes('签收')||(x.status||'').includes('寄出')?'业务已批准':'待确认'),
  ...x,
}));
const sampleDefaults={
  'SP-2026-0048':{productCode:'P-MZ50-2410',spec:'24/410 白色标准泵',sampleType:'标准样品',batch:'B20260518-01',inDate:'2026-05-18',fifo:'优先出 B20260518-01'},
  'SP-2026-0047':{productCode:'P-LP28-SV',spec:'28/410 哑光银电镀',sampleType:'客户定制样',batch:'B20260528-02',inDate:'2026-05-28',fifo:'优先出 B20260528-02'},
  'SP-2026-0043':{productCode:'P-SP24-STD',spec:'24/410 透明喷雾泵',sampleType:'标准样品',batch:'B20260601-01',inDate:'2026-06-01',fifo:'优先出 B20260601-01'},
  'SP-2026-0039':{productCode:'P-FP-PCR30',spec:'PCR 30% Pantone 7527C',sampleType:'颜色限度样',batch:'B20260420-03',inDate:'2026-04-20',fifo:'库存不足，先补样'},
  'SP-2026-0036':{productCode:'P-FD-LOCK',spec:'锁扣式粉底液泵标准样',sampleType:'PPS 标准样',batch:'B20260330-01',inDate:'2026-03-30',fifo:'PPS 留样，需 QA 授权'}
};
store.samples=store.samples.map((x,i)=>({
  productCode:`P-SAMPLE-${String(i+1).padStart(3,'0')}`,
  spec:x.name||'标准样品',
  sampleType:x.category||'标准样品',
  batch:`B202606${String(i+1).padStart(2,'0')}-01`,
  inDate:'2026-06-01',
  fifo:'按最早入库批次优先出库',
  ...sampleDefaults[x.id],
  ...x,
}));
const persist=()=>localStorage.setItem('megee-sample-lifecycle',JSON.stringify(store));
const nextId=(prefix,list)=>`${prefix}-2026-${String(list.length+1).padStart(4,'0')}`;

const app=document.querySelector('#app');
const pageTitles={dashboard:'业务总览',tasks:'我的待办',samples:'样品仓库',requests:'客户索样',development:'开发样',inventory:'库存管理',shipments:'寄样管理',charges:'收费管理',pps:'PPS 中心',trace:'追溯中心',settings:'基础配置'};
let currentPage='dashboard';

const pill=(value)=>`<span class="pill ${value.includes('过期')||value.includes('异常')||value.includes('补样')?'danger':value.includes('待')||value.includes('即将')?'warning':value.includes('生效')||value.includes('签收')||value.includes('收费')||value==='可用'?'success':'info'}"><i></i>${value}</span>`;
const money=(value)=>`¥ ${Number(value).toLocaleString('zh-CN')}`;
const head=(title,desc,button='')=>`<section class="page-head"><div><p class="eyebrow">MEGEE SAMPLE LIFECYCLE</p><h1>${title}</h1><p>${desc}</p></div>${button}</section>`;
const cards=(items)=>`<section class="metrics">${items.map(x=>`<article><div class="metric-top"><span class="metric-icon ${x.color}">${x.icon}</span><small>${x.note||'实时数据'}</small></div><p>${x.label}</p><strong>${x.value}</strong><em>${x.unit||''}</em></article>`).join('')}</section>`;
const table=(columns,rows,empty='暂无数据')=>`<div class="table-wrap"><table><thead><tr>${columns.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${rows||`<tr><td colspan="${columns.length}" class="empty">${empty}</td></tr>`}</tbody></table></div>`;
const panel=(title,desc,body,tools='')=>`<section class="panel"><div class="panel-head"><div><h2>${title}</h2><p>${desc}</p></div>${tools}</div>${body}</section>`;

function renderDashboard(){
  app.innerHTML=`${head('早上好，林知夏','今天有 8 项待办，其中 2 个 PPS 需要优先处理。','<button class="primary" data-new="request">＋ 新建索样申请</button>')}
  ${cards([{icon:'✓',color:'blue',label:'今日待办',value:8,unit:'项',note:'2 项即将超期'},{icon:'□',color:'green',label:'可用样品',value:156,unit:'款',note:'4 款低于安全库存'},{icon:'➜',color:'violet',label:'本月寄样',value:48,unit:'单',note:'签收率 91.7%'},{icon:'◎',color:'amber',label:'有效 PPS',value:37,unit:'份',note:'3 份即将到期'}])}
  <section class="dashboard-grid">
    ${panel('业务待办','按风险和截止时间排序',`<div class="task-list">
      <button data-go="pps"><span class="task-icon red">!</span><div><strong>PPS-MUGUANG-2026-0009 即将到期</strong><small>剩余 23 天，需要发起续签</small></div><b>高风险</b></button>
      <button data-go="development"><span class="task-icon amber">检</span><div><strong>SY-2026-0029 等待内部检验</strong><small>客户期望 6 月 14 日前收到样品</small></div><b>今天</b></button>
      <button data-go="requests"><span class="task-icon blue">审</span><div><strong>SR-2026-0089 大数量免费索样</strong><small>新客户申请 6 件常规库存样</small></div><b>待审批</b></button>
      <button data-go="inventory"><span class="task-icon purple">库</span><div><strong>SP-2026-0039 低于安全库存</strong><small>现存 4 件，安全库存 10 件</small></div><b>需补样</b></button>
    </div>`)}
    ${panel('生命周期分布','当前进行中的业务单据',`<div class="donut-area"><div class="donut"><div><strong>126</strong><span>进行中</span></div></div><div class="legend"><p><i class="blue-dot"></i>索样与寄样 <b>52</b></p><p><i class="amber-dot"></i>开发与检验 <b>31</b></p><p><i class="green-dot"></i>PPS 生效中 <b>37</b></p><p><i class="red-dot"></i>异常与过期 <b>6</b></p></div></div>`)}
  </section>
  ${panel('最近业务动态','所有关键动作均保留审计记录',table(['时间','业务编号','动作','对象','操作人'],[
    ['10:24','IT-2026-0621','样品出库','MZ-50 定量泵套装 × 6','赵敏'],['09:51','SR-2026-0088','库存预留','沐光个护 / 电镀乳液泵','赵敏'],['09:18','PPS-LANAN-2026-0007','上传批准证据','客户邮件批准截图','王若兰'],['08:42','SY-2026-0029','提交检验','渐变喷涂乳液泵 V3','周明']
  ].map(r=>`<tr>${r.map((v,i)=>`<td ${i===1?'class="link"':''}>${v}</td>`).join('')}</tr>`).join('')))} `;
}

function renderTasks(){
  const rows=[
    ['PPS-MUGUANG-2026-0009','PPS 续签','沐光个护','2026-06-13','高','即将到期'],['SY-2026-0029','样品检验','沐光个护','今天 16:00','高','待检验'],['SR-2026-0089','索样审批','海澜美妆','今天 17:00','普通','待审批'],['CH-2026-0028','费用确认','沐光个护','2026-06-14','普通','待客户确认'],['SH-2026-0056','寄样出库','蓝岸日化','2026-06-14','普通','待寄出']];
  app.innerHTML=head('我的待办','集中处理审批、检验、出库、寄样和有效期事项')+cards([{icon:'✓',color:'blue',label:'全部待办',value:8,unit:'项'},{icon:'!',color:'amber',label:'高风险',value:2,unit:'项'},{icon:'审',color:'violet',label:'待我审批',value:3,unit:'项'},{icon:'✓',color:'green',label:'本周完成',value:21,unit:'项'}])+panel('待处理事项','点击任务查看完整上下文',table(['业务编号','任务类型','客户','截止时间','优先级','状态','操作'],rows.map(r=>`<tr data-detail="${r[0]}"><td class="link">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="priority ${r[4]==='高'?'high':''}">${r[4]}</span></td><td>${pill(r[5])}</td><td><button class="text-button">处理</button></td></tr>`).join('')));
}

function renderSamples(){
  const rows=store.samples.map(s=>`<tr data-detail="${s.id}"><td class="link">${s.id}</td><td><strong>${s.name}</strong><small>${s.category} · ${s.customer}</small></td><td>${s.version}</td><td><strong>${s.stock}</strong> / ${s.safety}</td><td>${s.location}</td><td>${pill(s.status)}</td><td>${s.owner}</td><td><button class="text-button">详情</button></td></tr>`).join('');
  app.innerHTML=head('样品库','管理样品档案、版本、实物位置和生命周期状态','<button class="primary" data-new="sample">＋ 新建样品</button>')+cards([{icon:'□',color:'blue',label:'样品档案',value:156,unit:'款'},{icon:'✓',color:'green',label:'可用库存',value:132,unit:'款'},{icon:'!',color:'amber',label:'低库存',value:4,unit:'款'},{icon:'⌛',color:'violet',label:'即将过期',value:7,unit:'款'}])+panel('样品档案','库存数量与实物位置实时关联',table(['样品编号','样品名称','版本','现存/安全','位置','状态','责任人',''],rows),'<div class="toolbar"><input data-filter placeholder="搜索编号、名称或客户"><button class="secondary">筛选</button></div>');
}

function renderRequests(){
  const stages=['待审批','待备货','待寄出','已签收'];
  app.innerHTML=head('客户索样','从客户需求、收费判断到签收和业务跟进的完整流程','<button class="primary" data-new="request">＋ 新建索样申请</button>')+`<section class="kanban">${stages.map(stage=>`<div class="kanban-col"><div class="kanban-head"><strong>${stage}</strong><span>${store.requests.filter(x=>x.status===stage).length}</span></div>${store.requests.filter(x=>x.status===stage).map(r=>`<article data-detail="${r.id}"><span class="link">${r.id}</span><h3>${r.customer}</h3><p>${r.items}</p><div><small>${r.purpose}</small>${pill(r.charge)}</div><footer><span>${r.owner}</span><span>${r.date}</span></footer></article>`).join('')||'<div class="kanban-empty">暂无记录</div>'}</div>`).join('')}</section>`;
}

function renderDevelopment(){
  const rows=store.development.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td><strong>${x.product}</strong><small>${x.customer}</small></td><td>${x.requirement}</td><td>${x.version}</td><td>${x.owner}</td><td>${x.due}</td><td>${pill(x.status)}</td><td><button class="text-button">查看</button></td></tr>`).join('');
  app.innerHTML=head('开发样管理','管理无库存或特殊颜色、结构、工艺需求的打样任务','<button class="primary" data-new="development">＋ 发起打样任务</button>')+cards([{icon:'◇',color:'blue',label:'进行中',value:9,unit:'项'},{icon:'检',color:'amber',label:'待检验',value:3,unit:'项'},{icon:'↻',color:'violet',label:'版本迭代',value:5,unit:'项'},{icon:'✓',color:'green',label:'本月完成',value:14,unit:'项'}])+panel('开发任务','从需求评估到客户反馈持续保留版本',table(['任务编号','产品 / 客户','开发要求','版本','责任人','计划完成','状态',''],rows));
}

function renderInventory(){
  const rows=store.inventory.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.sample}</td><td><span class="action ${x.qty>0?'in':'out'}">${x.action}</span></td><td class="${x.qty>0?'positive':'negative'}">${x.qty>0?'+':''}${x.qty}</td><td>${x.from}</td><td>${x.to}</td><td>${x.operator}</td><td>${x.time}</td></tr>`).join('');
  app.innerHTML=head('库存管理','所有库存动作生成不可删除的流水','<div><button class="secondary" data-new="inventory">盘点</button> <button class="primary" data-new="inventory">＋ 库存操作</button></div>')+cards([{icon:'▤',color:'blue',label:'库存总量',value:'2,846',unit:'件'},{icon:'□',color:'green',label:'今日入库',value:38,unit:'件'},{icon:'➜',color:'violet',label:'今日出库',value:26,unit:'件'},{icon:'!',color:'amber',label:'库存预警',value:4,unit:'款'}])+panel('库存流水','入库、出库、预留、借还、调拨、盘点和报废',table(['流水号','样品编号','动作','数量','来源位置','目标/单据','操作人','时间'],rows));
}

function renderShipments(){
  const rows=store.shipments.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.request}</td><td><strong>${x.customer}</strong><small>收件人：${x.receiver}</small></td><td>${x.carrier}</td><td>${x.tracking}</td><td>${x.date}</td><td>${pill(x.status)}</td><td><button class="text-button">跟踪</button></td></tr>`).join('');
  app.innerHTML=head('寄样管理','关联索样、库存出库、物流信息和签收凭证','<button class="primary" data-new="shipment">＋ 创建寄样单</button>')+cards([{icon:'➜',color:'blue',label:'待寄出',value:6,unit:'单'},{icon:'→',color:'violet',label:'运输中',value:9,unit:'单'},{icon:'✓',color:'green',label:'本月签收',value:44,unit:'单'},{icon:'!',color:'amber',label:'物流异常',value:1,unit:'单'}])+panel('寄样单','签收后自动回写索样申请状态',table(['寄样单号','索样申请','客户 / 收件人','快递公司','快递单号','寄出日期','状态',''],rows));
}

function renderCharges(){
  const rows=store.charges.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.request}</td><td>${x.customer}</td><td>${x.type}</td><td>${money(x.defaultAmount)}</td><td>${money(x.waiver)}</td><td><strong>${money(x.actualAmount)}</strong></td><td>${pill(x.status)}</td><td><button class="text-button">记录</button></td></tr>`).join('');
  app.innerHTML=head('收费管理','生产样品默认收费，金额和减免规则均可配置','<button class="primary" data-new="charge">＋ 新建收费单</button>')+cards([{icon:'¥',color:'blue',label:'本月应收',value:'¥ 28,600'},{icon:'✓',color:'green',label:'已确认',value:'¥ 19,400'},{icon:'审',color:'amber',label:'待审批减免',value:3,unit:'笔'},{icon:'↓',color:'violet',label:'本月减免',value:'¥ 2,800'}])+panel('收费与减免','保留默认金额、实际金额、减免原因和审批记录',table(['收费单号','索样申请','客户','收费类型','默认金额','减免','实际金额','状态',''],rows));
}

function renderPPS(){
  app.innerHTML=head('PPS 中心','PPS 是由标准样、颜色限度板、缺陷板和批准证据组成的生产批准包','<button class="primary" data-new="pps">＋ 创建 PPS</button>')+cards([{icon:'◎',color:'blue',label:'PPS 总数',value:48,unit:'份'},{icon:'✓',color:'green',label:'生效中',value:37,unit:'份'},{icon:'⌛',color:'amber',label:'即将到期',value:3,unit:'份'},{icon:'×',color:'violet',label:'已过期',value:2,unit:'份'}])+`<section class="pps-grid">${store.pps.map(x=>`<article class="pps-card" data-detail="${x.id}"><div class="pps-top"><span class="pps-mark">PPS</span>${pill(x.status)}</div><span class="link">${x.id}</span><h3>${x.product}</h3><p>${x.customer} · ${x.order}</p><div class="package-parts"><span class="done">✓ 标准样</span><span class="done">✓ 颜色板</span><span class="${x.evidence>2?'done':''}">${x.evidence>2?'✓':'○'} 缺陷板</span><span class="${x.evidence>1?'done':''}">${x.evidence>1?'✓':'○'} 批准证据</span></div><footer><span>${x.version}</span><span>有效期 ${x.expiry}</span></footer></article>`).join('')}</section>`;
}

function renderTrace(){
  app.innerHTML=head('追溯中心','按客户、产品、订单、样品、PPS 或快递单号一站式追溯')+`<section class="trace-search"><div><span>⌕</span><input id="traceInput" placeholder="输入客户、产品、订单、样品编号、PPS 编号或快递单号"><button class="primary" id="traceButton">开始追溯</button></div><p>示例：PPS-NOAN-2026-0012、SP-2026-0047、诺安生物</p></section><section id="traceResult">${traceResult('PPS-NOAN-2026-0012')}</section>`;
}

function traceResult(term){
  const p=store.pps.find(x=>Object.values(x).some(v=>String(v).includes(term)))||store.pps[0];
  return panel('追溯结果',`${p.customer} · ${p.product}`,`<div class="trace-summary"><div><small>当前生产依据</small><strong>${p.id} / ${p.version}</strong>${pill(p.status)}</div><div><small>关联订单</small><strong>${p.order}</strong><span>有效期至 ${p.expiry}</span></div><div><small>实物位置</small><strong>PPS-02-08</strong><span>责任人 王若兰</span></div></div><div class="timeline"><div><i></i><strong>客户批准，PPS 正式生效</strong><span>2026-06-10 14:21 · 批准证据 AE-NOAN-2026-0038</span></div><div><i></i><strong>收到客户签字标准样与颜色限度板</strong><span>2026-06-10 10:05 · 王若兰入库至 PPS-02-08</span></div><div><i></i><strong>寄出 PPS 批准包</strong><span>2026-06-06 16:42 · 顺丰 SF1438239911</span></div><div><i></i><strong>内部检验合格</strong><span>2026-06-05 11:30 · QA 林知夏</span></div></div>`);
}

function renderSettings(){
  app.innerHTML=head('基础配置','管理编号、收费、有效期、权限和通知规则','<button class="primary" id="saveSettings">保存配置</button>')+`<section class="settings-layout"><aside><button class="active">编号规则</button><button>收费规则</button><button>有效期提醒</button><button>角色权限</button><button>位置管理</button><button>基础字典</button></aside><section class="panel settings"><div class="panel-head"><div><h2>业务编号规则</h2><p>编号生成后不可修改，按年度独立递增</p></div></div>${[['样品编号','SP-{YYYY}-{0000}','SP-2026-0048'],['索样申请','SR-{YYYY}-{0000}','SR-2026-0089'],['打样任务','SY-{YYYY}-{0000}','SY-2026-0031'],['寄样单','SH-{YYYY}-{0000}','SH-2026-0056'],['PPS','PPS-{CUSTOMER}-{YYYY}-{0000}','PPS-NOAN-2026-0012']].map(x=>`<div class="setting-row"><div><strong>${x[0]}</strong><small>示例：${x[2]}</small></div><input value="${x[1]}"><label class="switch on"><i></i></label></div>`).join('')}</section></section>`;
}

const renderers={dashboard:renderDashboard,tasks:renderTasks,samples:renderSamples,requests:renderRequests,development:renderDevelopment,inventory:renderInventory,shipments:renderShipments,charges:renderCharges,pps:renderPPS,trace:renderTrace,settings:renderSettings};
function navigate(page){currentPage=page;document.querySelectorAll('#nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===page));document.querySelector('#crumbTitle').textContent=pageTitles[page];renderers[page]();bindPage();window.scrollTo(0,0)}

function bindPage(){
  app.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>navigate(x.dataset.go));
  app.querySelectorAll('[data-new]').forEach(x=>x.onclick=()=>openModal(x.dataset.new));
  app.querySelectorAll('[data-bulk]').forEach(x=>x.onclick=()=>openBulkPaste(x.dataset.bulk));
  app.querySelectorAll('[data-view]').forEach(x=>x.onclick=()=>openViewSettings(x.dataset.view));
  app.querySelectorAll('[data-save-view]').forEach(x=>x.onclick=()=>showToast('已保存为我的表格格式'));
  app.querySelectorAll('[data-share-view]').forEach(x=>x.onclick=()=>showToast('已分享给同角色用户，对方可在对应界面选择该格式'));
  app.querySelectorAll('[data-detail]').forEach(x=>x.onclick=()=>openDetail(x.dataset.detail));
  const filter=app.querySelector('[data-filter]');if(filter)filter.oninput=()=>app.querySelectorAll('tbody tr').forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(filter.value.toLowerCase()));
  const traceButton=app.querySelector('#traceButton');if(traceButton)traceButton.onclick=()=>{app.querySelector('#traceResult').innerHTML=traceResult(app.querySelector('#traceInput').value);showToast('已汇总关联的样品、库存、寄样和批准记录')};
  const save=app.querySelector('#saveSettings');if(save)save.onclick=()=>showToast('基础配置已保存');
}

const erpActions=(type)=>`<div class="erp-actions"><button class="secondary" data-bulk="${type}">批量粘贴</button><button class="secondary">导出</button><button class="primary" data-new="${type}">新增</button></div>`;
const erpSearch=(placeholder='按编号、客户、产品、状态快速过滤')=>`<div class="erp-filter"><span>快速过滤</span><input data-filter placeholder="${placeholder}"><button class="secondary">筛选</button><button class="secondary" data-view="${currentPage}">字段</button><button class="secondary" data-save-view>保存格式</button><button class="secondary" data-share-view>分享</button></div>`;
const compactSummary=(items)=>`<section class="erp-summary">${items.map(x=>`<div><span>${x.label}</span><strong>${x.value}</strong><small>${x.note||''}</small></div>`).join('')}</section>`;

function renderDashboardErp(){
  const requestRows=store.requests.map(r=>`<tr data-detail="${r.id}"><td>${pill(r.status)}</td><td class="link">${r.id}</td><td>${r.customer}</td><td>${r.purpose}</td><td>${r.items}</td><td>${r.owner}</td><td>${r.charge}</td><td>${r.date}</td></tr>`).join('');
  const ppsRows=store.pps.map(p=>`<tr data-detail="${p.id}"><td>${pill(p.status)}</td><td class="link">${p.id}</td><td>${p.customer}</td><td>${p.product}</td><td>${p.order}</td><td>${p.version}</td><td>${p.expiry}</td><td>${p.evidence}</td></tr>`).join('');
  const shipmentRows=store.shipments.map(s=>`<tr data-detail="${s.id}"><td>${pill(s.status)}</td><td class="link">${s.id}</td><td>${s.request}</td><td>${s.samples}</td><td>${s.waybillQr}</td><td><span class="masked">${s.receiverMasked}</span></td><td>${s.salesperson}</td><td>${s.approval}</td></tr>`).join('');
  app.innerHTML=`${head('样品生命周期工作台','ERP 紧凑模式：以表格录入、批量处理和异常筛选为主。','<div class="erp-actions"><button class="secondary" data-bulk="request">批量索样</button><button class="secondary" data-bulk="sample">批量样品</button><button class="primary" data-new="request">新增索样</button></div>')}
  ${compactSummary([{label:'待办',value:8,note:'2 项高风险'},{label:'低库存',value:4,note:'需补样'},{label:'待业务确认',value:1,note:'寄样放行前'},{label:'PPS 到期',value:3,note:'90 天内'},{label:'本月寄样',value:48,note:'签收率 91.7%'},{label:'减免金额',value:'¥2,800',note:'本月'}])}
  ${panel('索样待处理清单','按状态、客户、样品清单集中处理',table(['状态','申请编号','客户','用途','样品清单','负责人','费用','日期'],requestRows),erpSearch())}
  ${panel('寄样确认队列','样品组贴单扫码后，仅业务员可核对收件人明文并批准放行',table(['状态','寄样单','申请单','样品清单','面单二维码','样品组收件信息权限','业务员','确认'],shipmentRows),erpSearch('按寄样单、申请单、业务员、面单码过滤'))}
  ${panel('PPS 与批准证据清单','重点关注即将到期、待客户批准和缺证据对象',table(['状态','PPS 编号','客户','产品','订单','版本','有效期','证据数'],ppsRows),erpSearch('按 PPS、客户、产品或订单过滤'))}
  ${panel('库存流水与异常','所有库存动作以流水方式保留，便于审计和追溯',table(['流水号','样品编号','动作','数量','来源位置','目标/单据','操作人','时间'],store.inventory.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.sample}</td><td>${x.action}</td><td class="${x.qty>0?'positive':'negative'}">${x.qty>0?'+':''}${x.qty}</td><td>${x.from}</td><td>${x.to}</td><td>${x.operator}</td><td>${x.time}</td></tr>`).join('')),erpSearch('按样品编号、位置、单据过滤'))}`;
}

function renderRequestsErp(){
  const rows=store.requests.map(r=>`<tr data-detail="${r.id}"><td>${pill(r.status)}</td><td class="link">${r.id}</td><td contenteditable="true">${r.customer}</td><td>${r.purpose}</td><td>${r.items}</td><td>${r.owner}</td><td>${r.charge}</td><td>${r.date}</td><td><button class="text-button">处理</button></td></tr>`).join('');
  app.innerHTML=head('客户索样','表格化管理客户索样，后续支持从 Excel 批量复制粘贴。',erpActions('request'))+compactSummary([{label:'待审批',value:1},{label:'待备货',value:1},{label:'待寄出',value:1},{label:'已签收',value:1},{label:'需收费',value:1},{label:'已减免',value:1}])+panel('索样申请明细','单元格样式预览：客户、用途、数量、费用和状态均可作为列处理',table(['状态','申请编号','客户','用途','样品清单','负责人','费用','申请日期','操作'],rows),erpSearch('按客户、申请编号、样品或状态过滤'));
}

function renderPPSErp(){
  const rows=store.pps.map(p=>`<tr data-detail="${p.id}"><td>${pill(p.status)}</td><td class="link">${p.id}</td><td>${p.customer}</td><td>${p.product}</td><td>${p.order}</td><td>${p.version}</td><td>${p.expiry}</td><td>${p.evidence}</td><td>标准样 / 颜色板 / 缺陷板</td><td><button class="text-button">查看</button></td></tr>`).join('');
  app.innerHTML=head('PPS 中心','PPS 以批准包台账方式管理，便于按订单、客户、版本和有效期筛选。',erpActions('pps'))+compactSummary([{label:'PPS 总数',value:48},{label:'生效中',value:37},{label:'即将到期',value:3},{label:'待客户批准',value:1},{label:'已过期',value:2},{label:'证据缺失',value:1}])+panel('PPS 批准包台账','标准样、颜色限度板、缺陷板和批准证据统一进入表格台账',table(['状态','PPS 编号','客户','产品','订单','版本','有效期','证据数','组成','操作'],rows),erpSearch('按 PPS、客户、产品、订单、有效期过滤'));
}

function renderShipmentsErp(){
  const rows=store.shipments.map(s=>`<tr data-detail="${s.id}"><td>${pill(s.status)}</td><td class="link">${s.id}</td><td>${s.request}</td><td>${s.customer}</td><td>${s.samples}</td><td>${s.sampleOperator}</td><td>${s.waybillQr}</td><td><span class="masked">${s.receiverMasked}</span></td><td>${s.salesperson}</td><td>${s.approval}</td><td>${s.carrier}</td><td>${s.tracking}</td></tr>`).join('');
  app.innerHTML=head('寄样管理','按正常快递流程管理：备样、贴单扫码、业务员确认、后台放行、快递取件。',erpActions('shipment'))+
  compactSummary([{label:'待备样',value:2},{label:'已贴单扫码',value:3},{label:'待业务确认',value:1},{label:'后台已放行',value:1},{label:'待快递取件',value:2},{label:'已取件',value:18}])+
  `<section class="flow-strip"><span>1 按需求备样</span><span>2 样品组贴面单并扫码</span><span>3 系统匹配收件人信息</span><span>4 推送业务员确认</span><span>5 后台放行</span><span>6 安排快递取件</span></section>`+
  panel('寄样流程台账','样品组只看到面单码和样品清单；收件人明文由业务员在确认环节核对。',table(['状态','寄样单号','索样申请','客户','样品清单','样品组','面单二维码','样品组收件信息权限','业务员','业务确认','快递','快递单号'],rows),erpSearch('按寄样单、申请单、面单二维码、业务员或状态过滤'));
}

function renderPermissionsErp(){
  const roles=[
    ['业务部','创建索样、查看自己客户、确认寄样收件信息、批准寄样、录入客户反馈','收件人明文、客户联系人、自己客户业务数据','不可直接改库存，不可查看全量费用审批'],
    ['品管部','样品检验、PPS、颜色限度板、缺陷板、批准证据维护','质量记录、PPS 证据、检验结果','不可查看无关客户收件地址'],
    ['打样组','处理开发样、上传打样结果、维护版本信息','开发要求、工艺结果、样品版本','不可审批费用减免'],
    ['样品组','备样、贴快递面单、扫码录入、出入库、安排取件','样品清单、位置、面单二维码、快递状态','看不到收件人姓名/电话/地址明文'],
    ['管理员','基础资料、角色分配、编号规则、费用规则、提醒配置','业务配置与用户权限','不能绕过审批直接修改历史流水'],
    ['超级管理员','全部配置、紧急授权、系统审计、数据恢复','全量数据与审计日志','关键操作必须留痕']
  ];
  const roleRows=roles.map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('');
  const flowRows=[
    ['备样','样品组','按需求准备样品，核对样品清单','不可见收件人明文'],
    ['贴单扫码','样品组','贴快递面单并扫码录入面单二维码','系统自动匹配收件人信息'],
    ['信息推送','系统','向样品需求方业务员推送快递信息','推送含收件人明文，仅业务员可见'],
    ['业务确认','业务部','检查样品列表和收件人信息并批准','批准后才允许取件'],
    ['后台放行','后台系统','收到确认，更新寄样单状态','写入审计日志'],
    ['快递取件','样品组','安排快递取件，更新取件结果','仍不展示收件人明文']
  ].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('');
  app.innerHTML=head('用户与权限配置','按部门角色分配数据可见性、操作权限和审批责任。','<button class="primary" id="saveSettings">保存权限方案</button>')+
  panel('角色权限矩阵','权限以角色 + 数据范围 + 字段级可见性组合控制',table(['角色','允许操作','可见数据','限制'],roleRows),erpSearch('按角色或权限搜索'))+
  panel('寄样权限流程','重点控制收件人隐私：样品组扫码匹配但不可见明文，业务员确认后后台放行',table(['节点','责任角色','动作','权限/系统规则'],flowRows));
}

const stockAge=(date)=>{
  const days=Math.max(0,Math.ceil((new Date('2026-06-16')-new Date(date))/(24*60*60*1000)));
  return `${days} 天`;
};
const sampleById=(id)=>store.samples.find(x=>x.id===id)||{};

function renderSamplesWarehouse(){
  const totalStock=store.samples.reduce((sum,s)=>sum+Number(s.stock||0),0);
  const lowStock=store.samples.filter(s=>Number(s.stock||0)<Number(s.safety||0)).length;
  const standardSamples=store.samples.filter(s=>(s.sampleType||'').includes('标准')).length;
  const fifoQueue=[...store.samples].sort((a,b)=>new Date(a.inDate)-new Date(b.inDate));
  const stockRows=fifoQueue.map(s=>`<tr data-detail="${s.id}">
    <td>${pill(s.status)}</td>
    <td class="link">${s.id}</td>
    <td>${s.productCode}</td>
    <td><strong>${s.name}</strong><small>${s.spec}</small></td>
    <td>${s.category}</td>
    <td>${s.sampleType}</td>
    <td>${s.customer}</td>
    <td>${s.version}</td>
    <td>${s.batch}</td>
    <td>${s.inDate}</td>
    <td>${stockAge(s.inDate)}</td>
    <td class="${Number(s.stock)<Number(s.safety)?'negative':'positive'}">${s.stock}</td>
    <td>${s.safety}</td>
    <td>${s.location}</td>
    <td>${s.fifo}</td>
    <td>${s.owner}</td>
  </tr>`).join('');
  const movementRows=store.inventory.map(x=>{
    const s=sampleById(x.sample);
    return `<tr data-detail="${x.id}">
      <td>${x.time}</td>
      <td class="link">${x.id}</td>
      <td><span class="action ${x.qty>0?'in':'out'}">${x.action}</span></td>
      <td>${x.sample}</td>
      <td><strong>${s.name||'未匹配样品'}</strong><small>${s.productCode||'待维护产品编码'}</small></td>
      <td>${s.category||'待维护'}</td>
      <td>${s.batch||'待确认'}</td>
      <td class="${x.qty>0?'positive':'negative'}">${x.qty>0?'+':''}${x.qty}</td>
      <td>${x.from}</td>
      <td>${x.to}</td>
      <td>${s.location||x.from}</td>
      <td>${s.fifo||'按入库时间先进先出'}</td>
      <td>${x.operator}</td>
    </tr>`;
  }).join('');
  app.innerHTML=head('样品仓库','以 ERP 紧凑台账管理标准样品库存、产品信息、类别、库位与出入库流水，并按先进先出原则发料。',erpActions('sample'))+
  compactSummary([
    {label:'库存样品',value:store.samples.length,note:'当前台账'},
    {label:'库存总量',value:totalStock,note:'件'},
    {label:'标准样品',value:standardSamples,note:'含 PPS 标准样'},
    {label:'低于安全库存',value:lowStock,note:'需补样'},
    {label:'最早批次',value:fifoQueue[0]?.batch||'--',note:'FIFO 优先'},
    {label:'出入库流水',value:store.inventory.length,note:'不可删除'}
  ])+
  panel('样品库存情况','按入库日期排序，默认遵循先进先出；库存低于安全库存时突出显示。',table(['状态','样品编号','产品编码','样品名称 / 产品信息','样品类别','样品类型','客户','版本','库存批次','入库日期','库龄','当前库存','安全库存','库位','FIFO 建议','责任人'],stockRows),erpSearch('按样品编号、产品编码、名称、类别、库位或批次过滤'))+
  panel('出入库明细列表','所有入库、出库、预留、盘点和调拨动作保留流水，并自动带出样品库存上下文。',table(['时间','流水号','动作','样品编号','样品 / 产品编码','样品类别','批次','数量','来源位置','目标/单据','当前库位','先进先出建议','操作人'],movementRows),erpSearch('按流水号、样品编号、批次、库位、单据或操作人过滤'));
}

function openBulkPaste(type){
  const titleMap={sample:'批量导入样品',request:'批量导入索样',development:'批量导入开发样',inventory:'批量导入库存流水',shipment:'批量导入寄样单',charge:'批量导入收费单',pps:'批量导入 PPS'};
  document.querySelector('#modalTitle').textContent=titleMap[type]||'批量粘贴导入';
  document.querySelector('#formFields').innerHTML=`<div class="bulk-help"><strong>从 Excel 复制后直接粘贴</strong><span>第一行建议保留表头；系统后续会按列名自动识别字段。</span></div><textarea name="bulkPaste" class="bulk-paste" placeholder="示例：&#10;客户\t用途\t样品清单\t数量\t是否收费&#10;沐光个护\t项目开发\t哑光银乳液泵\t12\t需要收费"></textarea><div class="bulk-preview"><span>下一步功能讨论：列映射、错误校验、重复编号处理、批量保存前预览。</span></div>`;
  document.querySelector('#businessForm').dataset.type='bulk';
  document.querySelector('#modalWrap').classList.add('show');
}

function openViewSettings(scope){
  const presets={
    dashboard:['状态','业务编号','客户','样品清单','负责人','日期','操作'],
    samples:['状态','样品编号','产品编码','样品名称','产品信息','样品类别','样品类型','客户','版本','库存批次','入库日期','库龄','当前库存','安全库存','库位','FIFO 建议','责任人'],
    requests:['状态','申请编号','客户','用途','样品清单','负责人','费用','申请日期','操作'],
    shipments:['状态','寄样单号','索样申请','客户','样品清单','样品组','面单二维码','业务员','业务确认','快递单号'],
    pps:['状态','PPS 编号','客户','产品','订单','版本','有效期','证据数','组成','操作'],
    settings:['角色','允许操作','可见数据','限制']
  };
  const fields=presets[scope]||['状态','编号','客户','产品','负责人','日期','操作'];
  document.querySelector('#modalTitle').textContent='表格字段与格式';
  document.querySelector('#formFields').innerHTML=`<div class="view-config"><div class="bulk-help"><strong>我的表格格式</strong><span>可保存为个人默认格式，也可分享给其它用户在相应界面使用。</span></div><div class="field-grid">${fields.map((f,i)=>`<label><input type="checkbox" ${i<7?'checked':''}>${f}</label>`).join('')}</div><div class="view-options"><label>列宽策略<select><option>自动适配内容</option><option>等宽紧凑</option><option>按上次拖拽宽度</option></select></label><label>行样式<select><option>Excel 斑马纹：一行深一行无填充色</option><option>无底色，仅网格线</option></select></label><label>共享范围<select><option>仅自己</option><option>同部门用户</option><option>同角色用户</option><option>全部用户</option></select></label></div></div>`;
  document.querySelector('#businessForm').dataset.type='view';
  document.querySelector('#modalWrap').classList.add('show');
}

renderers.dashboard=renderDashboardErp;
renderers.samples=renderSamplesWarehouse;
renderers.requests=renderRequestsErp;
renderers.shipments=renderShipmentsErp;
renderers.pps=renderPPSErp;
renderers.settings=renderPermissionsErp;

function openDetail(id){
  const all=[...store.samples,...store.requests,...store.development,...store.inventory,...store.shipments,...store.charges,...store.pps];
  const item=all.find(x=>x.id===id)||{id,status:'待处理'};
  document.querySelector('#drawerType').textContent=id.startsWith('PPS')?'PPS 批准包':'业务详情';
  document.querySelector('#drawerTitle').textContent=id;
  const entries=Object.entries(item).filter(([key])=>key!=='id');
  document.querySelector('#drawerBody').innerHTML=`<div class="detail-hero"><span class="detail-mark">${id.startsWith('PPS')?'PPS':'MJ'}</span><div><h3>${item.name||item.product||item.customer||id}</h3><p>${item.customer||item.sample||'美集样品生命周期记录'}</p></div></div><div class="detail-card"><h4>基本信息</h4><div class="detail-grid">${entries.map(([k,v])=>`<div><span>${fieldName(k)}</span><strong>${k.toLowerCase().includes('amount')?money(v):v}</strong></div>`).join('')}</div></div><div class="detail-card"><h4>生命周期记录</h4><div class="timeline compact"><div><i></i><strong>当前状态：${item.status||item.action}</strong><span>2026-06-12 · 系统自动记录</span></div><div><i></i><strong>业务资料已创建</strong><span>所有后续动作将保留审计轨迹</span></div></div></div>`;
  document.querySelector('#overlay').classList.add('show');document.querySelector('#drawer').classList.add('show');
}

function fieldName(k){return ({name:'样品名称',productCode:'产品编码',spec:'规格/产品信息',category:'样品分类',sampleType:'样品类型',customer:'客户',version:'版本',batch:'库存批次',inDate:'入库日期',fifo:'先进先出建议',stock:'当前库存',safety:'安全库存',location:'实物位置',status:'状态',owner:'责任人',updated:'更新时间',purpose:'用途',items:'样品清单',charge:'收费状态',date:'日期',product:'产品',requirement:'开发要求',due:'计划完成',action:'库存动作',qty:'数量',from:'来源',to:'目标',operator:'操作人',time:'时间',request:'索样申请',carrier:'快递公司',tracking:'快递单号',receiver:'收件人',type:'类型',defaultAmount:'默认金额',actualAmount:'实际金额',waiver:'减免金额',order:'订单',expiry:'有效期',evidence:'批准证据数'})[k]||k}

function openModal(type){
  const configs={
    sample:['新建样品入库',`<div class="form-row"><label>样品名称<input name="name" required placeholder="输入产品或样品名称"></label><label>产品编码<input name="productCode" required placeholder="如 P-MZ50-2410"></label></div><label>规格/产品信息<input name="spec" required placeholder="规格、颜色、工艺、客户标准等"></label><div class="form-row"><label>样品分类<select name="category"><option>常规库存样</option><option>开发样</option><option>新品发布样</option><option>客户定制样</option><option>PPS 留样</option></select></label><label>样品类型<select name="sampleType"><option>标准样品</option><option>客户定制样</option><option>颜色限度样</option><option>PPS 标准样</option></select></label></div><div class="form-row"><label>初始数量<input name="qty" type="number" min="0" value="0"></label><label>安全库存<input name="safety" type="number" value="10"></label></div><div class="form-row"><label>库存批次<input name="batch" required placeholder="如 B20260616-01"></label><label>入库日期<input name="inDate" type="date" value="2026-06-16"></label></div><div class="form-row"><label>库位<input name="location" required placeholder="如 A-02-03"></label><label>FIFO 建议<input name="fifo" placeholder="按最早入库批次优先出库"></label></div>`],
    request:['新建索样申请',`<div class="form-row"><label>客户名称<input name="customer" required placeholder="输入客户名称"></label><label>样品用途<select name="purpose"><option>新客户开发</option><option>老客户补样</option><option>新品推广</option><option>项目开发</option><option>订单确认</option></select></label></div><label>样品清单<input name="items" required placeholder="样品名称 × 数量"></label><div class="form-row"><label>是否收费<select name="charge"><option>系统判断</option><option>不收费</option><option>需要收费</option></select></label><label>预计订单机会<input name="opportunity" placeholder="如 ¥ 100,000"></label></div><label>备注<textarea name="note" placeholder="填写客户要求和寄样说明"></textarea></label>`],
    development:['发起打样任务',`<div class="form-row"><label>客户<input name="customer" required></label><label>产品<input name="product" required></label></div><label>开发要求<textarea name="requirement" required placeholder="颜色、结构、工艺和装配要求"></textarea></label><div class="form-row"><label>数量<input name="qty" type="number" value="10"></label><label>预计完成<input name="due" type="date" value="2026-06-18"></label></div>`],
    inventory:['新增库存动作',`<div class="form-row"><label>库存动作<select name="action"><option>入库</option><option>出库</option><option>借出</option><option>归还</option><option>调拨</option><option>盘点</option><option>报废</option></select></label><label>样品编号<input name="sample" required placeholder="SP-2026-0000"></label></div><div class="form-row"><label>数量<input name="qty" type="number" min="1" value="1"></label><label>目标位置/单据<input name="to" required></label></div>`],
    shipment:['创建寄样单',`<div class="form-row"><label>索样申请<input name="request" required placeholder="SR-2026-0000"></label><label>客户<input name="customer" required></label></div><div class="form-row"><label>收件人<input name="receiver" required></label><label>联系电话<input name="phone" required></label></div><label>收件地址<input name="address" required></label>`],
    charge:['新建收费单',`<div class="form-row"><label>索样申请<input name="request" required></label><label>收费类型<select><option>生产样品</option><option>特殊工艺</option><option>库存样管理费</option></select></label></div><div class="form-row"><label>默认金额<input type="number" value="1000"></label><label>实际金额<input type="number" value="1000"></label></div><label>费用说明<textarea></textarea></label>`],
    pps:['创建 PPS 批准包',`<div class="form-row"><label>客户<input name="customer" required></label><label>订单<input name="order" required placeholder="SO-000000"></label></div><label>产品<input name="product" required></label><div class="form-row"><label>版本<input name="version" value="V1"></label><label>有效期<input name="expiry" type="date" required></label></div><div class="check-row"><label><input type="checkbox" checked> PPS 标准样</label><label><input type="checkbox" checked> 颜色限度板</label><label><input type="checkbox"> 缺陷板</label></div>`]
  };
  const [title,fields]=configs[type]||configs.request;document.querySelector('#modalTitle').textContent=title;document.querySelector('#formFields').innerHTML=fields;document.querySelector('#businessForm').dataset.type=type;document.querySelector('#modalWrap').classList.add('show');
}

function closeDrawer(){document.querySelector('#overlay').classList.remove('show');document.querySelector('#drawer').classList.remove('show')}
function closeModal(){document.querySelector('#modalWrap').classList.remove('show')}
function showToast(text){const t=document.querySelector('#toast');document.querySelector('#toastText').textContent=text;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2500)}

document.querySelectorAll('#nav button').forEach(x=>x.onclick=()=>navigate(x.dataset.page));
document.querySelectorAll('[data-close]').forEach(x=>x.onclick=closeDrawer);document.querySelector('#overlay').onclick=closeDrawer;
document.querySelectorAll('[data-modal-close]').forEach(x=>x.onclick=closeModal);document.querySelector('#modalWrap').onclick=e=>{if(e.target.id==='modalWrap')closeModal()};
document.querySelector('#drawerAction').onclick=()=>{closeDrawer();showToast('状态已推进，并写入审计记录')};
document.querySelector('#businessForm').onsubmit=e=>{
  e.preventDefault();
  const type=e.currentTarget.dataset.type;
  const data=Object.fromEntries(new FormData(e.currentTarget));
  if(type==='sample') store.samples.unshift({id:nextId('SP',store.samples),name:data.name,productCode:data.productCode,spec:data.spec,category:data.category,sampleType:data.sampleType,customer:'通用',version:'V1',batch:data.batch,inDate:data.inDate,fifo:data.fifo||'按最早入库批次优先出库',stock:Number(data.qty),safety:Number(data.safety),location:data.location,status:'可用',owner:'林知夏',updated:'2026-06-16'});
  if(type==='request') store.requests.unshift({id:nextId('SR',store.requests),customer:data.customer,purpose:data.purpose,items:data.items,owner:'林知夏',charge:data.charge==='需要收费'?'待报价':'不收费',status:'待审批',date:'2026-06-12'});
  if(type==='development') store.development.unshift({id:nextId('SY',store.development),customer:data.customer,product:data.product,requirement:data.requirement,owner:'林知夏',version:'V1',due:data.due,status:'待评估'});
  if(type==='inventory') store.inventory.unshift({id:nextId('IT',store.inventory),sample:data.sample,action:data.action,qty:Number(data.qty),from:'待确认',to:data.to,operator:'林知夏',time:'2026-06-12 11:30'});
  if(type==='shipment') store.shipments.unshift({id:nextId('SH',store.shipments),request:data.request,customer:data.customer,carrier:'待选择',tracking:'--',receiver:data.receiver,status:'待寄出',date:'--'});
  if(type==='pps') store.pps.unshift({id:`PPS-${data.customer.slice(0,4).toUpperCase()}-2026-${String(store.pps.length+1).padStart(4,'0')}`,customer:data.customer,product:data.product,order:data.order,version:data.version,expiry:data.expiry,evidence:0,status:'草稿'});
  persist();closeModal();showToast(`${document.querySelector('#modalTitle').textContent}已提交`);navigate(type==='sample'?'samples':type==='request'?'requests':type==='development'?'development':type==='inventory'?'inventory':type==='shipment'?'shipments':type==='pps'?'pps':currentPage);
};
document.querySelector('#globalSearch').onclick=()=>navigate('trace');
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeModal()}});
navigate('dashboard');
