const store = {
  samples: [
    {id:'SP-2026-0048',name:'MZ-50 定量泵套装',productCode:'P-MZ50-2410',spec:'24/410 白色标准泵',category:'常规库存样',sampleType:'标准样品',customer:'通用',version:'V2',batch:'B20260518-01',inDate:'2026-05-18',stock:86,safety:30,location:'A-02-03',fifo:'优先出 B20260518-01',status:'可用',owner:'赵敏',updated:'2026-06-12'},
    {id:'SP-2026-0047',name:'哑光银电镀乳液泵',productCode:'P-LP28-SV',spec:'28/410 哑光银电镀',category:'定制样品',sampleType:'客户定制样',customer:'沐光个护',version:'V3',batch:'B20260528-02',inDate:'2026-05-28',stock:12,safety:10,location:'B-01-06',fifo:'优先出 B20260528-02',status:'预留',owner:'周明',updated:'2026-06-11'},
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
    {id:'SY-2026-0031',customer:'青屿实验室',customerCode:'C-QY-018',requestType:'技术驱动',productSeries:'真空泵系列',product:'新结构真空泵',productCode:'DEV-VP-15ML',productStatus:'结构设计中',productInfo:'15ml 真空泵，低残留结构',material:'PP / PE',color:'哑光白',process:'哑光喷涂 / 低残留结构验证',hotStamp:'无烫印',requirement:'新产品结构验证，评估低残留结构可行性',sampleQty:10,testItems:'出液量、密封、跌落、装配',qaResult:'待检验',costMode:'需报价',convertPlan:'检验合格后转定制标准样',owner:'陈柯',version:'V2',due:'2026-06-18',priority:'高',status:'打样中'},
    {id:'SY-2026-0029',customer:'沐光个护',customerCode:'C-MG-042',requestType:'客户驱动',productSeries:'乳液泵系列',product:'渐变喷涂乳液泵',productCode:'DEV-LP-GRAD',productStatus:'已有基础件',productInfo:'28/410 乳液泵，渐变外观',material:'PP',color:'银色至透明渐变',process:'渐变喷涂 / 耐酒精测试',hotStamp:'客户标识烫印待确认',requirement:'客户项目要求渐变喷涂并通过耐酒精测试',sampleQty:12,testItems:'耐酒精、附着力、色差、装配',qaResult:'待检验',costMode:'特殊工艺收费',convertPlan:'客户确认后转样品仓库',owner:'周明',version:'V3',due:'2026-06-14',priority:'高',status:'待检验'},
    {id:'SY-2026-0026',customer:'蓝岸日化',customerCode:'C-LA-027',requestType:'质量驱动',productSeries:'泡沫泵系列',product:'PCR 泡沫泵',productCode:'DEV-FP-PCR',productStatus:'小批试样',productInfo:'PCR 30% 泡沫泵',material:'PCR PP 30%',color:'Pantone 7527C',process:'注塑调色 / 材料替代验证',hotStamp:'无烫印',requirement:'基于 PCR 材料替代和颜色限度管理发起复测',sampleQty:8,testItems:'颜色限度、泡沫效果、兼容性',qaResult:'内部通过',costMode:'已减免',convertPlan:'待客户反馈后决定是否建 PPS',owner:'陈柯',version:'V4',due:'2026-06-13',priority:'普通',status:'待客户反馈'}
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
function ensureWarehouseDemoVolume(){
  if(store.samples.length<80){
    const names=['MZ-50 定量泵套装','24/410 香水喷雾泵','PCR 材质泡沫泵','锁扣式粉底液泵','28/410 乳液泵','真空按压泵','泡沫泵限度样','电镀盖标准样','喷雾瓶套装','膏霜瓶配套泵'];
    const categories=['常规库存样','新品发布样','客户定制样','PPS 留样','颜色限度样'];
    const types=['标准样品','客户定制样','颜色限度样','PPS 标准样'];
    const customers=['通用','海澜美妆','沐光个护','蓝岸日化','诺安生物','青屿实验室'];
    const owners=['赵敏','林知夏','周明','陈柯','王若兰'];
    const start=store.samples.length+1;
    for(let i=start;i<=96;i++){
      const idx=i-1;
      const date=`2026-${String(3+(idx%4)).padStart(2,'0')}-${String(1+(idx%27)).padStart(2,'0')}`;
      const stock=(idx*7)%118;
      const safety=[8,10,20,30][idx%4];
      const id=`SP-2026-${String(i).padStart(4,'0')}`;
      store.samples.push({
        id,
        name:names[idx%names.length],
        productCode:`P-${['MZ','SP','FP','FD','LP','VP'][idx%6]}-${String(2400+i)}`,
        spec:`${['24/410','28/410','30ml','50ml'][idx%4]} ${['白色','透明','哑光银','PCR 30%','蓝色限度'][idx%5]}`,
        category:categories[idx%categories.length],
        sampleType:types[idx%types.length],
        customer:customers[idx%customers.length],
        version:`V${1+(idx%4)}`,
        batch:`B2026${String(3+(idx%4)).padStart(2,'0')}${String(1+(idx%27)).padStart(2,'0')}-${String(1+(idx%3)).padStart(2,'0')}`,
        inDate:date,
        stock,
        safety,
        location:`${['A','B','C','PPS'][idx%4]}-${String(1+(idx%8)).padStart(2,'0')}-${String(1+(idx%12)).padStart(2,'0')}`,
        fifo:stock<safety?'库存不足，建议先补样':`优先出 ${id.replace('SP-','B')}`,
        status:stock<safety?'待补样':idx%9===0?'预留':'可用',
        owner:owners[idx%owners.length],
        updated:'2026-06-16'
      });
    }
  }
  if(store.inventory.length<80){
    const actions=['入库','出库','预留','调拨','盘点调整'];
    const base=[...store.inventory];
    for(let i=store.inventory.length+1;i<=120;i++){
      const sample=store.samples[(i*3)%store.samples.length];
      const action=actions[i%actions.length];
      const qty=action==='入库'?10+(i%25):-(1+(i%12));
      store.inventory.push({
        id:`IT-2026-${String(i).padStart(4,'0')}`,
        sample:sample.id,
        action,
        qty,
        from:sample.location,
        to:action==='出库'||action==='预留'?`SR-2026-${String(80+i).padStart(4,'0')}`:`${['A','B','C'][i%3]}-${String(1+(i%8)).padStart(2,'0')}-${String(1+(i%12)).padStart(2,'0')}`,
        operator:['赵敏','林知夏','周明'][i%3],
        time:`2026-06-${String(1+(i%12)).padStart(2,'0')} ${String(8+(i%9)).padStart(2,'0')}:${String((i*7)%60).padStart(2,'0')}`
      });
    }
    store.inventory=[...base,...store.inventory.slice(base.length)];
  }
}
ensureWarehouseDemoVolume();
function ensureBusinessDemoVolume(){
  if(store.requests.length<60){
    const customers=['海澜美妆','沐光个护','蓝岸日化','诺安生物','青屿实验室','谷野科技','星禾日化','澜庭个护'];
    const purposes=['新客户开发','老客户补样','新品推广','项目开发','订单确认','展会样品'];
    const statuses=['待审批','待备货','待寄出','已签收','待客户确认'];
    for(let i=store.requests.length+1;i<=72;i++){
      store.requests.push({
        id:`SR-2026-${String(i).padStart(4,'0')}`,
        customer:customers[i%customers.length],
        purpose:purposes[i%purposes.length],
        items:`${store.samples[i%store.samples.length].name} × ${1+(i%12)}`,
        owner:['李雯','林知夏','周明'][i%3],
        charge:i%5===0?'待报价':i%7===0?'已减免':'不收费',
        status:statuses[i%statuses.length],
        date:`2026-06-${String(1+(i%15)).padStart(2,'0')}`
      });
    }
  }
  if(store.development.length<45){
    const requestTypes=['市场驱动','技术驱动','客户驱动','质量驱动','新模首样'];
    const series=['乳液泵系列','泡沫泵系列','喷雾泵系列','真空泵系列','套装系列','其它 / 自定义'];
    const statuses=['待评估','打样中','待检验','待客户反馈','可转标准样'];
    for(let i=store.development.length+1;i<=54;i++){
      const customerCode=`C-${['MG','LA','NA','QY','HY'][i%5]}-${String(100+i)}`;
      store.development.push({
        id:`SY-2026-${String(i).padStart(4,'0')}`,
        customer:['沐光个护','蓝岸日化','诺安生物','青屿实验室','海澜美妆'][i%5],
        customerCode,
        requestType:requestTypes[i%requestTypes.length],
        productSeries:series[i%series.length],
        product:`${['渐变喷涂','PCR 材质','新结构','电镀外观','低残留'][i%5]}${['乳液泵','泡沫泵','喷雾泵','真空泵'][i%4]}`,
        productCode:`DEV-${String(500+i)}`,
        productStatus:['需求评估中','结构设计中','已有基础件','小批试样','客户确认中'][i%5],
        productInfo:`${['24/410','28/410','30ml','50ml'][i%4]} 关键参数待验证`,
        material:['PP','PCR PP 30%','PE / PP','ABS'][i%4],
        color:['哑光白','透明','哑光银','Pantone 7527C'][i%4],
        process:['喷涂 / 附着力','电镀 / 盐雾','注塑调色','结构验证'][i%4],
        hotStamp:i%3===0?'客户标识烫印':'无烫印',
        requirement:'按需求类型发起的定制样品验证，需保留检验和转化记录',
        sampleQty:4+(i%18),
        testItems:'外观、装配、密封、色差',
        qaResult:['待检验','内部通过','需复测'][i%3],
        costMode:['系统判断','需报价','特殊工艺收费','不收费'][i%4],
        convertPlan:['确认后转样品仓库','检验合格后转定制标准样','客户确认后建 PPS','仅本次打样'][i%4],
        owner:['周明','陈柯','林知夏'][i%3],
        version:`V${1+(i%4)}`,
        due:`2026-06-${String(10+(i%18)).padStart(2,'0')}`,
        priority:i%6===0?'高':'普通',
        status:statuses[i%statuses.length]
      });
    }
  }
  if(store.shipments.length<50){
    const statuses=['待业务确认','后台已放行','待快递取件','已取件','运输中','已签收'];
    for(let i=store.shipments.length+1;i<=64;i++){
      const req=store.requests[i%store.requests.length];
      store.shipments.push({
        id:`SH-2026-${String(i).padStart(4,'0')}`,
        request:req.id,
        customer:req.customer,
        samples:req.items,
        carrier:['顺丰速运','京东物流','跨越速运'][i%3],
        tracking:i%4===0?'--':`SF${String(1438200000+i*37)}`,
        waybillQr:`QR-SF-${String(i).padStart(4,'0')}`,
        receiver:`收件人${i} / 地址已脱敏`,
        receiverMasked:'已扫码匹配，样品组不可见',
        salesperson:req.owner,
        sampleOperator:['赵敏','林知夏'][i%2],
        status:statuses[i%statuses.length],
        date:i%3===0?'--':`2026-06-${String(1+(i%15)).padStart(2,'0')}`,
        approval:i%3===0?'待确认':'业务已批准'
      });
    }
  }
  if(store.pps.length<36){
    const statuses=['生效中','即将到期','待客户批准','已过期'];
    for(let i=store.pps.length+1;i<=42;i++){
      store.pps.push({
        id:`PPS-${['MG','LA','NA','QY','HY'][i%5]}-2026-${String(i).padStart(4,'0')}`,
        customer:['沐光个护','蓝岸日化','诺安生物','青屿实验室','海澜美妆'][i%5],
        product:store.samples[i%store.samples.length].name,
        order:`SO-2606${String(100+i)}`,
        version:`V${1+(i%4)}`,
        expiry:`2026-${String(7+(i%6)).padStart(2,'0')}-${String(1+(i%27)).padStart(2,'0')}`,
        evidence:1+(i%5),
        status:statuses[i%statuses.length]
      });
    }
  }
}
ensureBusinessDemoVolume();
const developmentDefaults={
  'SY-2026-0031':{customerCode:'C-QY-018',requestType:'技术驱动',productSeries:'真空泵系列',productCode:'DEV-VP-15ML',productStatus:'结构设计中',productInfo:'15ml 真空泵，低残留结构',material:'PP / PE',color:'哑光白',process:'哑光喷涂 / 低残留结构验证',hotStamp:'无烫印',sampleQty:10,testItems:'出液量、密封、跌落、装配',qaResult:'待检验',costMode:'需报价',convertPlan:'检验合格后转定制标准样',priority:'高'},
  'SY-2026-0029':{customerCode:'C-MG-042',requestType:'客户驱动',productSeries:'乳液泵系列',productCode:'DEV-LP-GRAD',productStatus:'已有基础件',productInfo:'28/410 乳液泵，渐变外观',material:'PP',color:'银色至透明渐变',process:'渐变喷涂 / 耐酒精测试',hotStamp:'客户标识烫印待确认',sampleQty:12,testItems:'耐酒精、附着力、色差、装配',qaResult:'待检验',costMode:'特殊工艺收费',convertPlan:'客户确认后转样品仓库',priority:'高'},
  'SY-2026-0026':{customerCode:'C-LA-027',requestType:'质量驱动',productSeries:'泡沫泵系列',productCode:'DEV-FP-PCR',productStatus:'小批试样',productInfo:'PCR 30% 泡沫泵',material:'PCR PP 30%',color:'Pantone 7527C',process:'注塑调色 / 材料替代验证',hotStamp:'无烫印',sampleQty:8,testItems:'颜色限度、泡沫效果、兼容性',qaResult:'内部通过',costMode:'已减免',convertPlan:'待客户反馈后决定是否建 PPS',priority:'普通'}
};
store.development=store.development.map((x,i)=>({
  requestType:'客户驱动',
  customerCode:`C-${String(i+1).padStart(3,'0')}`,
  productSeries:'其它',
  productCode:`DEV-${String(i+1).padStart(3,'0')}`,
  productStatus:'需求评估中',
  productInfo:x.product||'定制样品',
  material:'待确认',
  color:'待确认',
  process:'待确认',
  hotStamp:'待确认',
  sampleQty:10,
  testItems:'外观、装配、功能',
  qaResult:'待检验',
  costMode:'系统判断',
  convertPlan:'确认后转样品仓库或 PPS',
  priority:'普通',
  ...developmentDefaults[x.id],
  ...x,
}));
const persist=()=>localStorage.setItem('megee-sample-lifecycle',JSON.stringify(store));
const nextId=(prefix,list)=>`${prefix}-2026-${String(list.length+1).padStart(4,'0')}`;

const app=document.querySelector('#app');
const pageTitles={dashboard:'业务总览',tasks:'我的待办',samples:'样品仓库',requests:'客户索样',development:'定制样品',inventory:'库存管理',shipments:'寄样管理',charges:'收费管理',pps:'PPS 中心',trace:'追溯中心',settings:'基础配置'};
let currentPage='dashboard';
let pendingFilter=null;
let columnViews={};
try{columnViews=JSON.parse(localStorage.getItem('megee-column-views')||'{}')||{}}catch(_){columnViews={}};

const pill=(value)=>`<span class="pill ${value.includes('过期')||value.includes('异常')||value.includes('补样')?'danger':value.includes('待')||value.includes('即将')?'warning':value.includes('生效')||value.includes('签收')||value.includes('收费')||value==='可用'?'success':'info'}"><i></i>${value}</span>`;
const money=(value)=>`¥ ${Number(value).toLocaleString('zh-CN')}`;
const head=(title,desc,button='')=>`<section class="page-head"><div><p class="eyebrow">MEGEE SAMPLE LIFECYCLE</p><h1>${title}</h1><p>${desc}</p></div>${button}</section>`;
const metricAttrs=x=>x.page?` data-metric-page="${x.page}" data-metric-value="${x.filter||''}" data-metric-label="${x.label||''}"`:'';
const cards=(items)=>`<section class="metrics">${items.map(x=>`<article${metricAttrs(x)}><div class="metric-top"><span class="metric-icon ${x.color}">${x.icon}</span><small>${x.note||'实时数据'}</small></div><p>${x.label}</p><strong>${x.value}</strong><em>${x.unit||''}</em></article>`).join('')}</section>`;
const table=(columns,rows,empty='暂无数据')=>`<div class="table-wrap" data-paged="true"><table><thead><tr>${columns.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${rows||`<tr><td colspan="${columns.length}" class="empty">${empty}</td></tr>`}</tbody></table></div>`;
const panel=(title,desc,body,tools='')=>{
  const isFilter=String(tools).includes('erp-filter');
  return `<section class="panel"><div class="panel-head"><div><h2>${title}</h2><p>${desc}</p></div>${isFilter?'':tools}</div>${isFilter?`<div class="panel-filter">${tools}</div>`:''}${body}</section>`;
};

function renderDashboard(){
  app.innerHTML=`${head('早上好，林知夏','今天有 8 项待办，其中 2 个 PPS 需要优先处理。','<button class="primary" data-new="request">＋ 新建索样申请</button>')}
  ${cards([{icon:'✓',color:'blue',label:'今日待办',value:8,unit:'项',note:'2 项即将超期',page:'tasks',filter:'高'},{icon:'□',color:'green',label:'可用样品',value:156,unit:'款',note:'4 款低于安全库存',page:'samples',filter:'可用'},{icon:'➜',color:'violet',label:'本月寄样',value:48,unit:'单',note:'签收率 91.7%',page:'shipments',filter:'已签收'},{icon:'◎',color:'amber',label:'有效 PPS',value:37,unit:'份',note:'3 份即将到期',page:'pps',filter:'即将到期'}])}
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
  app.innerHTML=head('我的待办','集中处理审批、检验、出库、寄样和有效期事项')+cards([{icon:'✓',color:'blue',label:'全部待办',value:8,unit:'项',page:'tasks'},{icon:'!',color:'amber',label:'高风险',value:2,unit:'项',page:'tasks',filter:'高'},{icon:'审',color:'violet',label:'待我审批',value:3,unit:'项',page:'tasks',filter:'待审批'},{icon:'✓',color:'green',label:'本周完成',value:21,unit:'项',page:'tasks'}])+panel('待处理事项','点击任务查看完整上下文',table(['业务编号','任务类型','客户','截止时间','优先级','状态','操作'],rows.map(r=>`<tr data-detail="${r[0]}"><td class="link">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td><span class="priority ${r[4]==='高'?'high':''}">${r[4]}</span></td><td>${pill(r[5])}</td><td><button class="text-button">处理</button></td></tr>`).join('')),erpSearch('按业务编号、任务类型、客户或状态过滤','tasks'));
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
  const rows=store.development.map(x=>`<tr data-detail="${x.id}">
    <td>${pill(x.status)}</td>
    <td class="link">${x.id}</td>
    <td>${x.requestType}</td>
    <td>${x.customerCode}</td>
    <td><span class="masked">${x.requestType==='客户驱动'?'仅业务部可见':x.customer}</span></td>
    <td>${x.productSeries}</td>
    <td><strong>${x.product}</strong><small>${x.productCode}</small></td>
    <td>${x.productStatus}</td>
    <td>${x.productInfo}</td>
    <td>${x.material}</td>
    <td>${x.color}</td>
    <td>${x.process}</td>
    <td>${x.hotStamp}</td>
    <td>${x.requirement}</td>
    <td>${x.sampleQty}</td>
    <td>${x.testItems}</td>
    <td>${x.qaResult}</td>
    <td>${x.costMode}</td>
    <td>${x.convertPlan}</td>
    <td>${x.version}</td>
    <td>${x.priority}</td>
    <td>${x.owner}</td>
    <td>${x.due}</td>
  </tr>`).join('');
  const newMold=store.development.filter(x=>x.requestType==='新模首样').length;
  const waitQa=store.development.filter(x=>(x.qaResult||x.status||'').includes('待检验')).length;
  const chargeable=store.development.filter(x=>(x.costMode||'').includes('收费')||(x.costMode||'').includes('报价')).length;
  app.innerHTML=head('定制样品管理','围绕样品发起动因建立台账：市场推广、技术验证、客户项目、质量改善、新模首样，并管理产品系列、产品信息、工艺、检验、费用和转标准样。',erpActions('development'))+
  requestTypeGuide()+
  compactSummary([{label:'定制任务',value:store.development.length,note:'当前台账',page:'development'},{label:'客户驱动',value:store.development.filter(x=>x.requestType==='客户驱动').length,note:'客户信息受控',page:'development',filter:'客户驱动'},{label:'新模首样',value:newMold,note:'首样确认',page:'development',filter:'新模首样'},{label:'待检验',value:waitQa,note:'品管确认',page:'development',filter:'待检验'},{label:'需报价/收费',value:chargeable,note:'费用判断',page:'development',filter:'需报价'},{label:'待转标准样',value:store.development.filter(x=>(x.convertPlan||'').includes('转')).length,note:'确认后',page:'development',filter:'转'}])+
  panel('定制样品台账','客户驱动需求除业务部外仅显示客户编码；其它部门重点查看产品、工艺、检验与交付信息。',table(['状态','任务编号','需求类型','客户编码','客户名称权限','产品系列','产品 / 编码','产品状态','产品信息','材料','颜色','工艺信息','烫印工艺','定制要求','数量','检验项目','品管结果','费用方式','转标准样/PPS','版本','优先级','责任人','计划完成'],rows),erpSearch('按需求类型、客户编码、产品系列、产品、工艺、检验结果或交期过滤'));
}

function renderInventory(){
  const rows=store.inventory.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.sample}</td><td><span class="action ${x.qty>0?'in':'out'}">${x.action}</span></td><td class="${x.qty>0?'positive':'negative'}">${x.qty>0?'+':''}${x.qty}</td><td>${x.from}</td><td>${x.to}</td><td>${x.operator}</td><td>${x.time}</td></tr>`).join('');
  app.innerHTML=head('库存管理','所有库存动作生成不可删除的流水','<div><button class="secondary" data-new="inventory">盘点</button> <button class="primary" data-new="inventory">＋ 库存操作</button></div>')+cards([{icon:'▤',color:'blue',label:'库存总量',value:'2,846',unit:'件',page:'inventory'},{icon:'□',color:'green',label:'今日入库',value:38,unit:'件',page:'inventory',filter:'入库'},{icon:'➜',color:'violet',label:'今日出库',value:26,unit:'件',page:'inventory',filter:'出库'},{icon:'!',color:'amber',label:'库存预警',value:4,unit:'款',page:'samples',filter:'待补样'}])+panel('库存流水','入库、出库、预留、借还、调拨、盘点和报废',table(['流水号','样品编号','动作','数量','来源位置','目标/单据','操作人','时间'],rows),erpSearch('按流水号、样品编号、动作、库位或单据过滤','inventory'));
}

function renderShipments(){
  const rows=store.shipments.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.request}</td><td><strong>${x.customer}</strong><small>收件人：${x.receiver}</small></td><td>${x.carrier}</td><td>${x.tracking}</td><td>${x.date}</td><td>${pill(x.status)}</td><td><button class="text-button">跟踪</button></td></tr>`).join('');
  app.innerHTML=head('寄样管理','关联索样、库存出库、物流信息和签收凭证','<button class="primary" data-new="shipment">＋ 创建寄样单</button>')+cards([{icon:'➜',color:'blue',label:'待寄出',value:6,unit:'单'},{icon:'→',color:'violet',label:'运输中',value:9,unit:'单'},{icon:'✓',color:'green',label:'本月签收',value:44,unit:'单'},{icon:'!',color:'amber',label:'物流异常',value:1,unit:'单'}])+panel('寄样单','签收后自动回写索样申请状态',table(['寄样单号','索样申请','客户 / 收件人','快递公司','快递单号','寄出日期','状态',''],rows));
}

function renderCharges(){
  const rows=store.charges.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.request}</td><td>${x.customer}</td><td>${x.type}</td><td>${money(x.defaultAmount)}</td><td>${money(x.waiver)}</td><td><strong>${money(x.actualAmount)}</strong></td><td>${pill(x.status)}</td><td><button class="text-button">记录</button></td></tr>`).join('');
  app.innerHTML=head('收费管理','生产样品默认收费，金额和减免规则均可配置','<button class="primary" data-new="charge">＋ 新建收费单</button>')+cards([{icon:'¥',color:'blue',label:'本月应收',value:'¥ 28,600',page:'charges'},{icon:'✓',color:'green',label:'已确认',value:'¥ 19,400',page:'charges',filter:'已收费'},{icon:'审',color:'amber',label:'待审批减免',value:3,unit:'笔',page:'charges',filter:'待客户确认'},{icon:'↓',color:'violet',label:'本月减免',value:'¥ 2,800',page:'charges',filter:'已减免'}])+panel('收费与减免','保留默认金额、实际金额、减免原因和审批记录',table(['收费单号','索样申请','客户','收费类型','默认金额','减免','实际金额','状态',''],rows),erpSearch('按收费单、索样申请、客户、收费类型或状态过滤','charges'));
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
  app.querySelectorAll('[data-metric-page]').forEach(card=>card.onclick=()=>{
    pendingFilter={value:card.dataset.metricValue||'',label:card.dataset.metricLabel||''};
    navigate(card.dataset.metricPage);
  });
  app.querySelectorAll('[data-go]').forEach(x=>x.onclick=()=>navigate(x.dataset.go));
  app.querySelectorAll('[data-new]').forEach(x=>x.onclick=()=>openModal(x.dataset.new));
  app.querySelectorAll('[data-bulk]').forEach(x=>x.onclick=()=>openBulkPaste(x.dataset.bulk));
  app.querySelectorAll('[data-view]').forEach(x=>x.onclick=()=>openViewSettings(x.dataset.view));
  app.querySelectorAll('[data-save-view]').forEach(x=>x.onclick=()=>showToast('已保存为我的表格格式'));
  app.querySelectorAll('[data-share-view]').forEach(x=>x.onclick=()=>showToast('已分享给同角色用户，对方可在对应界面选择该格式'));
  app.querySelectorAll('[data-type-guide]').forEach(x=>x.onclick=openRequestTypeGuide);
  app.querySelectorAll('[data-detail]').forEach(x=>x.onclick=()=>openDetail(x.dataset.detail));
  app.querySelectorAll('.erp-filter').forEach(filter=>applyErpFilters(filter));
  app.querySelectorAll('[data-filter],[data-filter-select],[data-filter-from],[data-filter-to]').forEach(field=>{
    field.onkeydown=e=>{if(e.key==='Enter') applyErpFilters(field.closest('.erp-filter'),true)};
    field.onchange=()=>applyErpFilters(field.closest('.erp-filter'));
    field.oninput=()=>{if(field.matches('[data-filter]')) applyErpFilters(field.closest('.erp-filter'))};
  });
  app.querySelectorAll('[data-filter-run]').forEach(button=>button.onclick=()=>{
    applyErpFilters(button.closest('.erp-filter'),true);
  });
  app.querySelectorAll('[data-filter-clear]').forEach(button=>button.onclick=()=>{
    const filter=button.closest('.erp-filter');
    filter.querySelectorAll('input,select').forEach(field=>field.value='');
    applyErpFilters(filter,true);
    filter.querySelector('[data-filter]')?.focus();
  });
  initPagedTables(app);
  applyPendingFilter();
  applyColumnView(currentPage);
  const traceButton=app.querySelector('#traceButton');if(traceButton)traceButton.onclick=()=>{app.querySelector('#traceResult').innerHTML=traceResult(app.querySelector('#traceInput').value);showToast('已汇总关联的样品、库存、寄样和批准记录')};
  const save=app.querySelector('#saveSettings');if(save)save.onclick=()=>showToast('基础配置已保存');
}

function applyPendingFilter(){
  if(!pendingFilter) return;
  const filter=app.querySelector('.panel .erp-filter');
  if(filter){
    const value=pendingFilter.value||'';
    const select=[...filter.querySelectorAll('[data-filter-select] option')].find(option=>option.value===value||option.textContent===value);
    if(select) select.parentElement.value=select.value||select.textContent;
    else if(value) filter.querySelector('[data-filter]').value=value;
    applyErpFilters(filter,true);
    showToast(value?`已进入${pendingFilter.label||'指标'}明细：${value}`:`已进入${pendingFilter.label||'指标'}明细`);
  }
  pendingFilter=null;
}

function applyErpFilters(filter,notify=false){
  if(!filter) return;
  const scope=filter.closest('.panel')||app;
  const rows=[...scope.querySelectorAll('tbody tr')];
  const input=filter.querySelector('[data-filter]');
  const terms=(input?.value||'').trim().toLowerCase().split(/\s+/).filter(Boolean);
  const selected=[...filter.querySelectorAll('[data-filter-select]')].map(x=>x.value.trim().toLowerCase()).filter(Boolean);
  const from=filter.querySelector('[data-filter-from]')?.value||'';
  const to=filter.querySelector('[data-filter-to]')?.value||'';
  let visible=0;
  rows.forEach(row=>{
    const text=row.textContent.toLowerCase();
    const rowDate=(row.textContent.match(/\d{4}-\d{2}-\d{2}/)||[''])[0];
    const matchedTerms=!terms.length||terms.every(term=>text.includes(term));
    const matchedSelects=!selected.length||selected.every(value=>text.includes(value));
    const matchedFrom=!from||(rowDate&&rowDate>=from);
    const matchedTo=!to||(rowDate&&rowDate<=to);
    const matched=matchedTerms&&matchedSelects&&matchedFrom&&matchedTo;
    row.dataset.filterOut=matched?'0':'1';
    if(!row.closest('.table-wrap')?.dataset.paged){
      row.hidden=!matched;
      row.style.display=matched?'':'none';
    }
    if(matched) visible+=1;
  });
  const count=scope.querySelector('[data-filter-count]');
  const active=terms.length||selected.length||from||to;
  if(count) count.textContent=active?`显示 ${visible}/${rows.length}`:`共 ${rows.length} 条`;
  scope.querySelectorAll('.table-wrap[data-paged]').forEach(wrap=>{wrap.dataset.page='1';updatePagedTable(wrap)});
  if(notify) showToast(active?`筛选完成：显示 ${visible}/${rows.length} 条`:'已清除筛选');
}

function initPagedTables(scope=app){
  scope.querySelectorAll('.table-wrap[data-paged]').forEach((wrap,index)=>{
    if(!wrap.dataset.page) wrap.dataset.page='1';
    if(!wrap.dataset.pageSize) wrap.dataset.pageSize='25';
    if(!wrap.nextElementSibling||!wrap.nextElementSibling.classList.contains('table-pager')){
      const pager=document.createElement('div');
      pager.className='table-pager';
      pager.innerHTML=`<span data-page-info></span><button type="button" class="secondary" data-page-prev>上一页</button><button type="button" class="secondary" data-page-next>下一页</button><label>每页 <select data-page-size><option>25</option><option>50</option><option>100</option><option value="all">全部</option></select></label>`;
      wrap.after(pager);
      pager.querySelector('[data-page-prev]').onclick=()=>{wrap.dataset.page=String(Math.max(1,Number(wrap.dataset.page||1)-1));updatePagedTable(wrap)};
      pager.querySelector('[data-page-next]').onclick=()=>{wrap.dataset.page=String(Number(wrap.dataset.page||1)+1);updatePagedTable(wrap)};
      pager.querySelector('[data-page-size]').onchange=e=>{wrap.dataset.pageSize=e.target.value;wrap.dataset.page='1';updatePagedTable(wrap)};
    }
    updatePagedTable(wrap);
  });
}

function updatePagedTable(wrap){
  const rows=[...wrap.querySelectorAll('tbody tr')].filter(row=>!row.querySelector('.empty'));
  const filtered=rows.filter(row=>row.dataset.filterOut!=='1');
  const pager=wrap.nextElementSibling?.classList.contains('table-pager')?wrap.nextElementSibling:null;
  const pageSizeValue=wrap.dataset.pageSize||'25';
  const pageSize=pageSizeValue==='all'?filtered.length||1:Number(pageSizeValue);
  const totalPages=Math.max(1,Math.ceil(filtered.length/pageSize));
  const page=Math.min(Math.max(1,Number(wrap.dataset.page||1)),totalPages);
  wrap.dataset.page=String(page);
  const start=(page-1)*pageSize;
  const end=start+pageSize;
  rows.forEach(row=>{
    const filteredOut=row.dataset.filterOut==='1';
    const index=filtered.indexOf(row);
    const visible=!filteredOut&&index>=start&&index<end;
    row.hidden=!visible;
    row.style.display=visible?'':'none';
  });
  if(pager){
    const info=pager.querySelector('[data-page-info]');
    const from=filtered.length?start+1:0;
    const to=Math.min(end,filtered.length);
    info.textContent=`显示 ${from}-${to} / ${filtered.length} 条，共 ${totalPages} 页`;
    pager.querySelector('[data-page-prev]').disabled=page<=1;
    pager.querySelector('[data-page-next]').disabled=page>=totalPages;
    const select=pager.querySelector('[data-page-size]');
    if(select.value!==pageSizeValue) select.value=pageSizeValue;
  }
}

function cleanHeader(text){return String(text||'').replace(/\s*▾\s*$/,'').trim()}
function pageFields(){
  return [...new Set([...app.querySelectorAll('.panel table thead th')].map(th=>cleanHeader(th.textContent)).filter(Boolean))];
}
function applyColumnView(scope=currentPage){
  const selected=columnViews[scope];
  app.querySelectorAll('.panel table').forEach(table=>{
    const headers=[...table.querySelectorAll('thead th')].map(th=>cleanHeader(th.textContent));
    headers.forEach((field,index)=>{
      const show=!selected||selected.includes(field);
      table.querySelectorAll(`tr>*:nth-child(${index+1})`).forEach(cell=>cell.style.display=show?'':'none');
    });
  });
}

const erpActions=(type)=>`<div class="erp-actions"><button class="secondary" data-bulk="${type}">批量粘贴</button><button class="secondary">导出</button><button class="primary" data-new="${type}">新增</button></div>`;
const filterPresets={
  samples:[['状态',['可用','预留','待补样']],['类别',['常规库存样','新品发布样','客户定制样','PPS 留样','颜色限度样']],['样品类型',['标准样品','客户定制样','颜色限度样','PPS 标准样']]],
  requests:[['状态',['待审批','待备货','待寄出','已签收','待客户确认']],['费用',['不收费','待报价','已减免']]],
  tasks:[['优先级',['高','普通']],['状态',['即将到期','待检验','待审批','待客户确认','待寄出']]],
  development:[['状态',['待评估','打样中','待检验','待客户反馈','可转标准样']],['需求类型',['市场驱动','技术驱动','客户驱动','质量驱动','新模首样']],['费用',['需报价','特殊工艺收费','不收费']]],
  inventory:[['动作',['入库','出库','预留','调拨','盘点调整']]],
  shipments:[['状态',['待业务确认','后台已放行','待快递取件','已取件','运输中','已签收']],['快递',['顺丰速运','京东物流','跨越速运']]],
  charges:[['状态',['待客户确认','已减免','已收费']],['收费类型',['特殊电镀','库存样管理费','新结构打样']]],
  pps:[['状态',['生效中','即将到期','待客户批准','已过期']]],
  settings:[['角色',['业务部','品管部','打样组','样品组','管理员','超级管理员']]],
  dashboard:[['状态',['待审批','待备货','待寄出','即将到期','待客户批准','已过期','出库','入库']]]
};
const erpSearch=(placeholder='按编号、客户、产品、状态快速过滤',page=currentPage)=>{
  const selects=(filterPresets[page]||[]).map(([label,items])=>`<label>${label}<select data-filter-select><option value="">全部</option>${items.map(x=>`<option>${x}</option>`).join('')}</select></label>`).join('');
  return `<div class="erp-filter"><label class="filter-keyword">关键词<input data-filter placeholder="${placeholder}"></label>${selects}<label>开始日期<input data-filter-from type="date"></label><label>结束日期<input data-filter-to type="date"></label><button type="button" class="secondary" data-filter-run>查询</button><button type="button" class="secondary" data-filter-clear>重置</button><small data-filter-count></small><button type="button" class="secondary" data-view="${page}">字段</button><button type="button" class="secondary" data-save-view>保存格式</button><button type="button" class="secondary" data-share-view>分享</button></div>`;
};
const compactSummary=(items)=>`<section class="erp-summary">${items.map(x=>`<div${metricAttrs(x)}><span>${x.label}</span><strong>${x.value}</strong><small>${x.note||''}</small></div>`).join('')}</section>`;
const requestTypeGuide=()=>`<section class="type-guide"><strong>需求类型说明</strong><span>需求类型用于标识样品发起动因：市场推广、技术验证、客户项目、质量改善或新模首样。</span><button class="secondary" data-type-guide>查看定义</button></section>`;

function renderDashboardErp(){
  const requestRows=store.requests.map(r=>`<tr data-detail="${r.id}"><td>${pill(r.status)}</td><td class="link">${r.id}</td><td>${r.customer}</td><td>${r.purpose}</td><td>${r.items}</td><td>${r.owner}</td><td>${r.charge}</td><td>${r.date}</td></tr>`).join('');
  const ppsRows=store.pps.map(p=>`<tr data-detail="${p.id}"><td>${pill(p.status)}</td><td class="link">${p.id}</td><td>${p.customer}</td><td>${p.product}</td><td>${p.order}</td><td>${p.version}</td><td>${p.expiry}</td><td>${p.evidence}</td></tr>`).join('');
  const shipmentRows=store.shipments.map(s=>`<tr data-detail="${s.id}"><td>${pill(s.status)}</td><td class="link">${s.id}</td><td>${s.request}</td><td>${s.samples}</td><td>${s.waybillQr}</td><td><span class="masked">${s.receiverMasked}</span></td><td>${s.salesperson}</td><td>${s.approval}</td></tr>`).join('');
  app.innerHTML=`${head('样品生命周期工作台','ERP 紧凑模式：以表格录入、批量处理和异常筛选为主。','<div class="erp-actions"><button class="secondary" data-bulk="request">批量索样</button><button class="secondary" data-bulk="sample">批量样品</button><button class="primary" data-new="request">新增索样</button></div>')}
  ${compactSummary([{label:'待办',value:8,note:'2 项高风险',page:'tasks',filter:'高'},{label:'低库存',value:4,note:'需补样',page:'samples',filter:'待补样'},{label:'待业务确认',value:1,note:'寄样放行前',page:'shipments',filter:'待业务确认'},{label:'PPS 到期',value:3,note:'90 天内',page:'pps',filter:'即将到期'},{label:'本月寄样',value:48,note:'签收率 91.7%',page:'shipments',filter:'已签收'},{label:'减免金额',value:'¥2,800',note:'本月',page:'charges',filter:'已减免'}])}
  ${panel('索样待处理清单','按状态、客户、样品清单集中处理',table(['状态','申请编号','客户','用途','样品清单','负责人','费用','日期'],requestRows),erpSearch())}
  ${panel('寄样确认队列','样品组贴单扫码后，仅业务员可核对收件人明文并批准放行',table(['状态','寄样单','申请单','样品清单','面单二维码','样品组收件信息权限','业务员','确认'],shipmentRows),erpSearch('按寄样单、申请单、业务员、面单码过滤'))}
  ${panel('PPS 与批准证据清单','重点关注即将到期、待客户批准和缺证据对象',table(['状态','PPS 编号','客户','产品','订单','版本','有效期','证据数'],ppsRows),erpSearch('按 PPS、客户、产品或订单过滤'))}
  ${panel('库存流水与异常','所有库存动作以流水方式保留，便于审计和追溯',table(['流水号','样品编号','动作','数量','来源位置','目标/单据','操作人','时间'],store.inventory.map(x=>`<tr data-detail="${x.id}"><td class="link">${x.id}</td><td>${x.sample}</td><td>${x.action}</td><td class="${x.qty>0?'positive':'negative'}">${x.qty>0?'+':''}${x.qty}</td><td>${x.from}</td><td>${x.to}</td><td>${x.operator}</td><td>${x.time}</td></tr>`).join('')),erpSearch('按样品编号、位置、单据过滤'))}`;
}

function renderRequestsErp(){
  const rows=store.requests.map(r=>`<tr data-detail="${r.id}"><td>${pill(r.status)}</td><td class="link">${r.id}</td><td contenteditable="true">${r.customer}</td><td>${r.purpose}</td><td>${r.items}</td><td>${r.owner}</td><td>${r.charge}</td><td>${r.date}</td><td><button class="text-button">处理</button></td></tr>`).join('');
  app.innerHTML=head('客户索样','表格化管理客户索样，后续支持从 Excel 批量复制粘贴。',erpActions('request'))+compactSummary([{label:'待审批',value:1,page:'requests',filter:'待审批'},{label:'待备货',value:1,page:'requests',filter:'待备货'},{label:'待寄出',value:1,page:'requests',filter:'待寄出'},{label:'已签收',value:1,page:'requests',filter:'已签收'},{label:'需收费',value:1,page:'requests',filter:'待报价'},{label:'已减免',value:1,page:'requests',filter:'已减免'}])+panel('索样申请明细','单元格样式预览：客户、用途、数量、费用和状态均可作为列处理',table(['状态','申请编号','客户','用途','样品清单','负责人','费用','申请日期','操作'],rows),erpSearch('按客户、申请编号、样品或状态过滤'));
}

function renderPPSErp(){
  const rows=store.pps.map(p=>`<tr data-detail="${p.id}"><td>${pill(p.status)}</td><td class="link">${p.id}</td><td>${p.customer}</td><td>${p.product}</td><td>${p.order}</td><td>${p.version}</td><td>${p.expiry}</td><td>${p.evidence}</td><td>标准样 / 颜色板 / 缺陷板</td><td><button class="text-button">查看</button></td></tr>`).join('');
  app.innerHTML=head('PPS 中心','PPS 以批准包台账方式管理，便于按订单、客户、版本和有效期筛选。',erpActions('pps'))+compactSummary([{label:'PPS 总数',value:48,page:'pps'},{label:'生效中',value:37,page:'pps',filter:'生效中'},{label:'即将到期',value:3,page:'pps',filter:'即将到期'},{label:'待客户批准',value:1,page:'pps',filter:'待客户批准'},{label:'已过期',value:2,page:'pps',filter:'已过期'},{label:'证据缺失',value:1,page:'pps',filter:'证据'}])+panel('PPS 批准包台账','标准样、颜色限度板、缺陷板和批准证据统一进入表格台账',table(['状态','PPS 编号','客户','产品','订单','版本','有效期','证据数','组成','操作'],rows),erpSearch('按 PPS、客户、产品、订单、有效期过滤'));
}

function renderShipmentsErp(){
  const rows=store.shipments.map(s=>`<tr data-detail="${s.id}"><td>${pill(s.status)}</td><td class="link">${s.id}</td><td>${s.request}</td><td>${s.customer}</td><td>${s.samples}</td><td>${s.sampleOperator}</td><td>${s.waybillQr}</td><td><span class="masked">${s.receiverMasked}</span></td><td>${s.salesperson}</td><td>${s.approval}</td><td>${s.carrier}</td><td>${s.tracking}</td></tr>`).join('');
  app.innerHTML=head('寄样管理','按正常快递流程管理：备样、贴单扫码、业务员确认、后台放行、快递取件。',erpActions('shipment'))+
  compactSummary([{label:'待备样',value:2,page:'shipments',filter:'待备样'},{label:'已贴单扫码',value:3,page:'shipments',filter:'QR-'},{label:'待业务确认',value:1,page:'shipments',filter:'待业务确认'},{label:'后台已放行',value:1,page:'shipments',filter:'后台已放行'},{label:'待快递取件',value:2,page:'shipments',filter:'待快递取件'},{label:'已取件',value:18,page:'shipments',filter:'已取件'}])+
  `<section class="flow-strip"><span>1 按需求备样</span><span>2 样品组贴面单并扫码</span><span>3 系统匹配收件人信息</span><span>4 推送业务员确认</span><span>5 后台放行</span><span>6 安排快递取件</span></section>`+
  panel('寄样流程台账','样品组只看到面单码和样品清单；收件人明文由业务员在确认环节核对。',table(['状态','寄样单号','索样申请','客户','样品清单','样品组','面单二维码','样品组收件信息权限','业务员','业务确认','快递','快递单号'],rows),erpSearch('按寄样单、申请单、面单二维码、业务员或状态过滤'));
}

function renderPermissionsErp(){
  const roles=[
    ['业务部','创建索样、查看自己客户、确认寄样收件信息、批准寄样、录入客户反馈','收件人明文、客户联系人、自己客户业务数据','不可直接改库存，不可查看全量费用审批'],
    ['品管部','样品检验、PPS、颜色限度板、缺陷板、批准证据维护','质量记录、PPS 证据、检验结果','不可查看无关客户收件地址'],
    ['打样组','处理定制样品、上传打样结果、维护版本信息','定制要求、工艺结果、样品版本','不可审批费用减免'],
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
    {label:'库存样品',value:store.samples.length,note:'当前台账',page:'samples'},
    {label:'库存总量',value:totalStock,note:'件',page:'samples'},
    {label:'标准样品',value:standardSamples,note:'含 PPS 标准样',page:'samples',filter:'标准样品'},
    {label:'低于安全库存',value:lowStock,note:'需补样',page:'samples',filter:'待补样'},
    {label:'最早批次',value:fifoQueue[0]?.batch||'--',note:'FIFO 优先',page:'samples',filter:fifoQueue[0]?.batch||''},
    {label:'出入库流水',value:store.inventory.length,note:'不可删除',page:'inventory'}
  ])+
  panel('样品库存情况','按入库日期排序，默认遵循先进先出；库存低于安全库存时突出显示。',table(['状态','样品编号','产品编码','样品名称 / 产品信息','样品类别','样品类型','客户','版本','库存批次','入库日期','库龄','当前库存','安全库存','库位','FIFO 建议','责任人'],stockRows),erpSearch('按样品编号、产品编码、名称、类别、库位或批次过滤'))+
  panel('出入库明细列表','所有入库、出库、预留、盘点和调拨动作保留流水，并自动带出样品库存上下文。',table(['时间','流水号','动作','样品编号','样品 / 产品编码','样品类别','批次','数量','来源位置','目标/单据','当前库位','先进先出建议','操作人'],movementRows),erpSearch('按流水号、样品编号、批次、库位、单据或操作人过滤'));
}

function openBulkPaste(type){
  const titleMap={sample:'批量导入样品',request:'批量导入索样',development:'批量导入定制样品',inventory:'批量导入库存流水',shipment:'批量导入寄样单',charge:'批量导入收费单',pps:'批量导入 PPS'};
  document.querySelector('#modalTitle').textContent=titleMap[type]||'批量粘贴导入';
  document.querySelector('#formFields').innerHTML=`<div class="bulk-help"><strong>从 Excel 复制后直接粘贴</strong><span>第一行建议保留表头；系统后续会按列名自动识别字段。</span></div><textarea name="bulkPaste" class="bulk-paste" placeholder="示例：&#10;客户\t用途\t样品清单\t数量\t是否收费&#10;沐光个护\t项目开发\t哑光银乳液泵\t12\t需要收费"></textarea><div class="bulk-preview"><span>下一步功能讨论：列映射、错误校验、重复编号处理、批量保存前预览。</span></div>`;
  document.querySelector('#businessForm').dataset.type='bulk';
  document.querySelector('#modalWrap').classList.add('show');
}

function openViewSettings(scope){
  const fields=pageFields();
  const selected=columnViews[scope]||fields;
  document.querySelector('#modalTitle').textContent='表格字段与格式';
  document.querySelector('#formFields').innerHTML=`<div class="view-config"><div class="bulk-help"><strong>我的表格字段</strong><span>勾选要显示的列，应用后保存到当前浏览器的个人格式。</span></div><div class="field-grid">${fields.map(f=>`<label><input type="checkbox" data-field-name="${f}" ${selected.includes(f)?'checked':''}>${f}</label>`).join('')}</div><div class="view-options"><label>列宽策略<select><option>自动适配内容</option><option>等宽紧凑</option><option>按上次拖拽宽度</option></select></label><label>行样式<select><option>Excel 斑马纹：一行深一行无填充色</option><option>无底色，仅网格线</option></select></label><label>共享范围<select><option>仅自己</option><option>同部门用户</option><option>同角色用户</option><option>全部用户</option></select></label></div><div class="modal-actions"><button type="button" class="secondary" id="fieldsAll">全选</button><button type="button" class="secondary" id="fieldsDefault">恢复默认</button><button type="button" class="primary" id="fieldsApply">应用字段</button></div></div>`;
  document.querySelector('#businessForm').dataset.type='view';
  document.querySelector('#modalWrap').classList.add('show');
  document.querySelector('#fieldsAll').onclick=()=>document.querySelectorAll('[data-field-name]').forEach(x=>x.checked=true);
  document.querySelector('#fieldsDefault').onclick=()=>{
    delete columnViews[scope];
    localStorage.setItem('megee-column-views',JSON.stringify(columnViews));
    closeModal();applyColumnView(scope);showToast('已恢复默认字段');
  };
  document.querySelector('#fieldsApply').onclick=()=>{
    const chosen=[...document.querySelectorAll('[data-field-name]:checked')].map(x=>x.dataset.fieldName);
    columnViews[scope]=chosen.length?chosen:fields;
    localStorage.setItem('megee-column-views',JSON.stringify(columnViews));
    closeModal();applyColumnView(scope);showToast('字段显示已应用并保存');
  };
}

function openRequestTypeGuide(){
  document.querySelector('#modalTitle').textContent='需求类型定义';
  document.querySelector('#formFields').innerHTML=`<div class="type-list">
    <div><strong>市场驱动</strong><span>公司新品推广、参展样品、样册样品、宣传拍摄、销售工具包等。</span></div>
    <div><strong>技术驱动</strong><span>新产品、新材料、新结构、新工艺的技术展示、内部评审或可行性验证。</span></div>
    <div><strong>客户驱动</strong><span>按客户颜色、结构、材质、工艺或项目要求打样；客户名称仅业务部可见，其它部门显示客户编码或隐藏。</span></div>
    <div><strong>质量驱动</strong><span>质量异常改善、客诉复现、批次差异比对、可靠性测试、标准样复核、量产风险验证等。</span></div>
    <div><strong>新模首样</strong><span>新模、改模、维修模、转厂模的首次试样、首件确认或模具验收样。</span></div>
    <div><strong>其它</strong><span>不属于以上类型时使用，并在定制要求中补充自定义原因。</span></div>
  </div>`;
  document.querySelector('#businessForm').dataset.type='guide';
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

function fieldName(k){return ({name:'样品名称',productCode:'产品编码',spec:'规格/产品信息',category:'样品分类',sampleType:'样品类型',customer:'客户名称',customerCode:'客户编码',requestType:'需求类型',productSeries:'产品系列',productStatus:'产品状态',productInfo:'产品信息',material:'材料',color:'颜色',process:'工艺信息',hotStamp:'烫印工艺',sampleQty:'样品数量',testItems:'检验项目',qaResult:'品管结果',costMode:'费用方式',convertPlan:'转标准样/PPS',priority:'优先级',version:'版本',batch:'库存批次',inDate:'入库日期',fifo:'先进先出建议',stock:'当前库存',safety:'安全库存',location:'实物位置',status:'状态',owner:'责任人',updated:'更新时间',purpose:'用途',items:'样品清单',charge:'收费状态',date:'日期',product:'产品',requirement:'定制要求',due:'计划完成',action:'库存动作',qty:'数量',from:'来源',to:'目标',operator:'操作人',time:'时间',request:'索样申请',carrier:'快递公司',tracking:'快递单号',receiver:'收件人',type:'类型',defaultAmount:'默认金额',actualAmount:'实际金额',waiver:'减免金额',order:'订单',expiry:'有效期',evidence:'批准证据数'})[k]||k}

function openModal(type){
  const configs={
    sample:['新建样品入库',`<div class="form-row"><label>样品名称<input name="name" required placeholder="输入产品或样品名称"></label><label>产品编码<input name="productCode" required placeholder="如 P-MZ50-2410"></label></div><label>规格/产品信息<input name="spec" required placeholder="规格、颜色、工艺、客户标准等"></label><div class="form-row"><label>样品分类<select name="category"><option>常规库存样</option><option>定制样品</option><option>新品发布样</option><option>客户定制样</option><option>PPS 留样</option></select></label><label>样品类型<select name="sampleType"><option>标准样品</option><option>客户定制样</option><option>颜色限度样</option><option>PPS 标准样</option></select></label></div><div class="form-row"><label>初始数量<input name="qty" type="number" min="0" value="0"></label><label>安全库存<input name="safety" type="number" value="10"></label></div><div class="form-row"><label>库存批次<input name="batch" required placeholder="如 B20260616-01"></label><label>入库日期<input name="inDate" type="date" value="2026-06-16"></label></div><div class="form-row"><label>库位<input name="location" required placeholder="如 A-02-03"></label><label>FIFO 建议<input name="fifo" placeholder="按最早入库批次优先出库"></label></div>`],
    request:['新建索样申请',`<div class="form-row"><label>客户名称<input name="customer" required placeholder="输入客户名称"></label><label>样品用途<select name="purpose"><option>新客户开发</option><option>老客户补样</option><option>新品推广</option><option>项目开发</option><option>订单确认</option></select></label></div><label>样品清单<input name="items" required placeholder="样品名称 × 数量"></label><div class="form-row"><label>是否收费<select name="charge"><option>系统判断</option><option>不收费</option><option>需要收费</option></select></label><label>预计订单机会<input name="opportunity" placeholder="如 ¥ 100,000"></label></div><label>备注<textarea name="note" placeholder="填写客户要求和寄样说明"></textarea></label>`],
    development:['新建定制样品',`<div class="bulk-help"><strong>需求类型用于标识样品发起动因</strong><span>请选择市场、技术、客户、质量、新模首样或其它，而不是具体工艺类型。</span></div><div class="form-row"><label>需求类型<select name="requestType"><option>市场驱动</option><option>技术驱动</option><option>客户驱动</option><option>质量驱动</option><option>新模首样</option><option>其它</option></select></label><label>产品系列<select name="productSeries"><option>乳液泵系列</option><option>泡沫泵系列</option><option>喷雾泵系列</option><option>真空泵系列</option><option>瓶器系列</option><option>套装系列</option><option>其它 / 自定义</option></select></label></div><div class="form-row"><label>客户编码<input name="customerCode" placeholder="客户驱动时填写，如 C-MG-042"></label><label>客户名称<input name="customer" placeholder="仅业务部可见"></label></div><div class="form-row"><label>产品名称<input name="product" required></label><label>产品编码<input name="productCode" placeholder="可先填，后续补全"></label></div><label>产品状态<select name="productStatus"><option>需求评估中</option><option>结构设计中</option><option>已有基础件</option><option>小批试样</option><option>客户确认中</option><option>可转标准样</option></select></label><label>产品信息<input name="productInfo" placeholder="容量、规格、结构、关键参数等"></label><div class="form-row"><label>材料<input name="material" placeholder="如 PP / PCR PP 30%"></label><label>颜色<input name="color" placeholder="色号或颜色描述"></label></div><div class="form-row"><label>工艺信息<input name="process" placeholder="喷涂、电镀、注塑调色、耐酒精等"></label><label>烫印工艺<input name="hotStamp" placeholder="无烫印 / 烫印位置 / 颜色 / 客户标识"></label></div><label>定制要求<textarea name="requirement" required placeholder="发起原因、关键风险、验收标准"></textarea></label><div class="form-row"><label>样品数量<input name="sampleQty" type="number" value="10"></label><label>计划完成<input name="due" type="date" value="2026-06-18"></label></div><div class="form-row"><label>检验项目<input name="testItems" placeholder="外观、装配、密封、色差等"></label><label>费用方式<select name="costMode"><option>系统判断</option><option>需报价</option><option>特殊工艺收费</option><option>不收费</option><option>已减免</option></select></label></div><div class="form-row"><label>转化计划<select name="convertPlan"><option>确认后转样品仓库</option><option>检验合格后转定制标准样</option><option>客户确认后建 PPS</option><option>仅本次打样</option></select></label><label>优先级<select name="priority"><option>普通</option><option>高</option><option>紧急</option></select></label></div>`],
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
const ACCESS_PASSWORD='53432885';
function initAuthGate(){
  const gate=document.querySelector('#authGate');
  const form=document.querySelector('#authForm');
  if(!gate||!form) return;
  const authed=sessionStorage.getItem('megee-auth-ok')==='1';
  gate.classList.toggle('hide',authed);
  document.body.classList.toggle('auth-locked',!authed);
  form.onsubmit=e=>{
    e.preventDefault();
    const input=document.querySelector('#authPassword');
    const error=document.querySelector('#authError');
    if((input.value||'').trim()===ACCESS_PASSWORD){
      sessionStorage.setItem('megee-auth-ok','1');
      gate.classList.add('hide');
      document.body.classList.remove('auth-locked');
      showToast('已进入系统');
    } else {
      error.textContent='密码不正确，请重试';
      input.select();
    }
  };
}
function setSidebarCollapsed(collapsed,save=true){
  document.body.classList.toggle('sidebar-collapsed',collapsed);
  const toggle=document.querySelector('#sidebarToggle');
  if(toggle){
    toggle.textContent=collapsed?'›':'‹';
    toggle.setAttribute('aria-label',collapsed?'展开侧边栏':'收起侧边栏');
    toggle.title=collapsed?'展开侧边栏':'收起侧边栏';
  }
  if(save) localStorage.setItem('megee-sidebar-collapsed',collapsed?'1':'0');
}
function initSidebar(){
  document.querySelectorAll('#nav button').forEach(x=>{
    const label=[...x.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE).map(n=>n.textContent.trim()).join('').trim();
    x.dataset.label=label||x.textContent.trim();
    x.title=label||x.textContent.trim();
  });
  const saved=localStorage.getItem('megee-sidebar-collapsed');
  const collapsed=saved===null?window.matchMedia('(max-width: 1280px)').matches:saved==='1';
  setSidebarCollapsed(collapsed,false);
  const toggle=document.querySelector('#sidebarToggle');
  if(toggle) toggle.onclick=()=>setSidebarCollapsed(!document.body.classList.contains('sidebar-collapsed'));
}

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
  if(type==='development') store.development.unshift({id:nextId('SY',store.development),customer:data.customer||'非客户驱动',customerCode:data.customerCode||'--',requestType:data.requestType,productSeries:data.productSeries,product:data.product,productCode:data.productCode||`DEV-${String(store.development.length+1).padStart(3,'0')}`,productStatus:data.productStatus,productInfo:data.productInfo||data.product,material:data.material||'待确认',color:data.color||'待确认',process:data.process||'待确认',hotStamp:data.hotStamp||'待确认',requirement:data.requirement,sampleQty:Number(data.sampleQty||0),testItems:data.testItems||'外观、装配、功能',qaResult:'待检验',costMode:data.costMode,convertPlan:data.convertPlan,owner:'林知夏',version:'V1',due:data.due,priority:data.priority,status:'待评估'});
  if(type==='inventory') store.inventory.unshift({id:nextId('IT',store.inventory),sample:data.sample,action:data.action,qty:Number(data.qty),from:'待确认',to:data.to,operator:'林知夏',time:'2026-06-12 11:30'});
  if(type==='shipment') store.shipments.unshift({id:nextId('SH',store.shipments),request:data.request,customer:data.customer,carrier:'待选择',tracking:'--',receiver:data.receiver,status:'待寄出',date:'--'});
  if(type==='pps') store.pps.unshift({id:`PPS-${data.customer.slice(0,4).toUpperCase()}-2026-${String(store.pps.length+1).padStart(4,'0')}`,customer:data.customer,product:data.product,order:data.order,version:data.version,expiry:data.expiry,evidence:0,status:'草稿'});
  persist();closeModal();showToast(`${document.querySelector('#modalTitle').textContent}已提交`);navigate(type==='sample'?'samples':type==='request'?'requests':type==='development'?'development':type==='inventory'?'inventory':type==='shipment'?'shipments':type==='pps'?'pps':currentPage);
};
document.querySelector('#globalSearch').onclick=()=>navigate('trace');
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeModal()}});
initAuthGate();
initSidebar();
navigate('dashboard');
