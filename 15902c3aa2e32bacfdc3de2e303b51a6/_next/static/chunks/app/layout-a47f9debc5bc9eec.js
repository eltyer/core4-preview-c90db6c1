(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9030:function(e,t,i){Promise.resolve().then(i.t.bind(i,7960,23)),Promise.resolve().then(i.bind(i,9835)),Promise.resolve().then(i.t.bind(i,2972,23))},1930:function(__mod__,t,__wr__){"use strict";__wr__.d(t,{CR:function(){return defaultChangeRules},CT:function(){return CHANGE_TYPES},HJ:function(){return LEVELS},PR:function(){return PERIODS},QP:function(){return PRICE_BOOK},R6:function(){return SEED_ROWS},Uj:function(){return rowCost},c3:function(){return TODAY},cf:function(){return changeFactor},it:function(){return SEED_CONFIGS},mS:function(){return fpWeight}});
var TODAY="2026-06-27";
var LEVELS=["LSTO","BPSO","Airside"];
var PERIODS=["Last Month","Last Quarter","Last PI","YTD"];
var PRICE_BOOK={Low:15e3,Medium:2e4,High:25e3};
var EFFORT_HOURS={Low:6,Medium:14,High:28};
var IFPUG_WEIGHTS={EI:{Low:3,Medium:4,High:6},EO:{Low:4,Medium:5,High:7},EQ:{Low:3,Medium:4,High:6},ILF:{Low:7,Medium:10,High:15},EIF:{Low:5,Medium:7,High:10}};
var CHANGE_TYPES=["New","Changed","Deleted","Unchanged"];
function num(v,d){var n=Number(v);return isFinite(n)?n:d}
function defaultChangeRules(){return{newFactor:100,deletedFactor:20,unchangedFactor:0,changedTiers:[{upTo:25,factor:25},{upTo:50,factor:50},{upTo:75,factor:75},{upTo:100,factor:100}]}}
function changeFactor(rules,changeType,changePct){
var r=rules||defaultChangeRules();
if("Deleted"===changeType)return num(r.deletedFactor,20)/100;
if("Unchanged"===changeType)return num(r.unchangedFactor,0)/100;
if("Changed"===changeType){
var tiers=(r.changedTiers||[]).slice().sort(function(a,b){return num(a.upTo,0)-num(b.upTo,0)});
if(!tiers.length)return 1;
var pct=Math.max(0,Math.min(100,num(changePct,0)));
for(var i=0;i<tiers.length;i++)if(pct<=num(tiers[i].upTo,100))return num(tiers[i].factor,100)/100;
return num(tiers[tiers.length-1].factor,100)/100}
return num(r.newFactor,100)/100}
function fpWeight(type,complexity){return IFPUG_WEIGHTS[type][complexity]}
function rowCost(row,config){
var book=config&&config.priceBook?config.priceBook:PRICE_BOOK;
var f=changeFactor(config&&config.changeRules,row.changeType,row.changePct);
return Math.round(num(book[row.complexity],0)*num(row.fp,0)*f)}
var STATUS_DATES={Open:{},DoR:{dateDoR:"2026-05-04"},DoD:{dateDoR:"2026-04-20",dateDoD:"2026-05-11"},Tested:{dateDoR:"2026-04-06",dateDoD:"2026-04-27",dateTested:"2026-05-18"},Deployed:{dateDoR:"2026-03-09",dateDoD:"2026-03-30",dateTested:"2026-04-13",dateDeployed:"2026-05-25"}};
function seedRows(appId,list){return list.map(function(tuple,idx){
var name=tuple[0],type=tuple[1],complexity=tuple[2],status=tuple[3];
var changeType=tuple[4]||"New",changePct=void 0===tuple[5]?100:tuple[5];
var fp=fpWeight(type,complexity);
var row={id:appId.toUpperCase()+"-"+String(idx+1).padStart(3,"0"),appId:appId,name:name,type:type,fp:fp,complexity:complexity,status:status,changeType:changeType,changePct:changePct};
Object.assign(row,STATUS_DATES[status]);
row.paid="Deployed"===status;
row.cost=Math.round(PRICE_BOOK[complexity]*fp*changeFactor(null,changeType,changePct));
return row})}
var SEED_ROWS=[].concat(
seedRows("aodb",[["1.1.0.1 - Flights - Schedule - Import","EI","High","Deployed"],["1.2.0.3 - Flights - Status - Update","EI","Medium","Deployed"],["1.4.1.0 - Stands - Allocation - View","EQ","Medium","Deployed"],["2.1.4.2 - Flights - Creation - Handler setting","EO","High","Tested"],["2.3.0.1 - Gates - Reassignment - Notify","EO","Medium","DoD"],["3.1.0.0 - Aircraft - Registry - File","ILF","High","DoR"],["3.2.0.1 - Turnaround - KPI - Report","EO","High","Open","Changed",40],["4.0.1.2 - Weather - Feed - Interface","EIF","Medium","Open","Deleted",100]]),
seedRows("ciss",[["1.1.0.1 - Passenger - Profile - Maintain","EI","Medium","Deployed"],["1.2.0.2 - Check-in - Status - Query","EQ","Low","Deployed"],["2.1.0.1 - Boarding - Pass - Generate","EO","High","Tested"],["2.2.0.3 - Seat - Map - Update","EI","Medium","DoR","Changed",60],["3.0.0.1 - Loyalty - Account - File","ILF","Medium","Open"],["3.1.0.0 - Notifications - Email - Interface","EIF","Low","Open"]]),
seedRows("ipf",[["1.1.0.1 - Assets - Register - Maintain","EI","Medium","Deployed"],["1.2.0.1 - Energy - Usage - Report","EO","Medium","Deployed"],["1.3.0.2 - Sensors - Reading - Import","EI","Low","Deployed"],["2.1.0.4 - Maintenance - Order - Create","EI","High","Tested"],["2.2.0.1 - Facilities - Booking - View","EQ","Low","DoD"],["3.0.0.1 - BIM - Model - File","ILF","High","DoR"],["3.1.0.0 - GIS - Layer - Interface","EIF","Medium","Open"],["3.2.0.2 - Compliance - Audit - Report","EO","Medium","Open","Changed",30]]),
seedRows("acro",[["1.1.0.1 - Shipment - Manifest - Import","EI","High","Deployed"],["1.2.0.1 - Customs - Status - Query","EQ","Medium","Tested"],["2.1.0.2 - Cargo - Booking - Create","EI","High","DoD"],["2.2.0.1 - Warehouse - Slot - Update","EI","Medium","Open","Deleted",100],["3.0.0.1 - Dangerous Goods - Registry - File","ILF","High","Open","Changed",70]]));
function defaultThresholds(){return{better:{green:80,amber:60},happier:{green:4,amber:3},cheaper:{green:18e3,amber:24e3,invert:!0},faster:{green:0,amber:-14}}}
var APPS=[
{appId:"aodb",name:"AODB",fullName:"Airport Operational Database",orgUnit:"Airport Operations",owner:"Owner A (redacted)",contractType:"fp",ratePerHour:150,hoursToDate:320,expectedThroughput:20,weeksElapsed:16,baselineDeadline:"2026-06-18",baselineStart:"2025-10-01",budgetFactor:1.04,scopeFactor:.96,overview:{loc:125e3,complexityIndex:7.2,developers:12},better:{security:99,maintainability:95,reliability:96,efficiency:94,functionalSuitability:97,mtbf:50,mttr:2},happier:{team:4.2,collaboration:4,usage:3.9},history:{"Last Month":{better:3,happier:.1,slackDays:2,spendShare:.1,eacShiftShare:-0.018,scopeFp:2,deliveredFp:3,locAdded:4200,mtbfD:2,mttrD:-1,cxD:-.1,devsD:1},"Last Quarter":{better:6,happier:.2,slackDays:4,spendShare:.28,eacShiftShare:-0.031,scopeFp:5,deliveredFp:7,locAdded:11800,mtbfD:5,mttrD:-2,cxD:-.2,devsD:2},"Last PI":{better:8,happier:.3,slackDays:5,spendShare:.36,eacShiftShare:-0.036,scopeFp:6,deliveredFp:9,locAdded:15400,mtbfD:7,mttrD:-3,cxD:-.3,devsD:3},YTD:{better:12,happier:.5,slackDays:8,spendShare:.66,eacShiftShare:0.014,scopeFp:9,deliveredFp:14,locAdded:28600,mtbfD:12,mttrD:-5,cxD:-.4,devsD:4}}},
{appId:"ciss",name:"CiSS",fullName:"Central Information System",orgUnit:"Passenger Services",owner:"Owner A (redacted)",contractType:"hour",ratePerHour:165,hoursToDate:240,expectedThroughput:4,weeksElapsed:14,baselineDeadline:"2026-05-01",baselineStart:"2025-11-03",budgetFactor:.9,scopeFactor:1.06,overview:{loc:89e3,complexityIndex:8.5,developers:8},better:{security:50,maintainability:60,reliability:52,efficiency:58,functionalSuitability:55,mtbf:50,mttr:14},happier:{team:4.3,collaboration:4.1,usage:4.2},history:{"Last Month":{better:-4,happier:.1,slackDays:-3,spendShare:.12,eacShiftShare:0.12,scopeFp:0,deliveredFp:1,locAdded:2600,mtbfD:-3,mttrD:2,cxD:.2,devsD:-1},"Last Quarter":{better:-9,happier:0,slackDays:-8,spendShare:.31,eacShiftShare:0.24,scopeFp:-2,deliveredFp:3,locAdded:7100,mtbfD:-7,mttrD:5,cxD:.4,devsD:-1},"Last PI":{better:-11,happier:.1,slackDays:-11,spendShare:.4,eacShiftShare:0.3,scopeFp:-2,deliveredFp:4,locAdded:9200,mtbfD:-9,mttrD:6,cxD:.5,devsD:-2},YTD:{better:-16,happier:.2,slackDays:-18,spendShare:.7,eacShiftShare:0.45,scopeFp:-3,deliveredFp:7,locAdded:17800,mtbfD:-14,mttrD:9,cxD:.8,devsD:-2}}},
{appId:"ipf",name:"IP&F",fullName:"Integrated Planning & Forecasting",orgUnit:"Infrastructure & Facilities",owner:"Owner B (redacted)",contractType:"fp",ratePerHour:145,hoursToDate:160,expectedThroughput:40,weeksElapsed:12,baselineDeadline:"2026-09-15",baselineStart:"2026-01-05",budgetFactor:1,scopeFactor:1,overview:{loc:156e3,complexityIndex:6.1,developers:15},better:{security:80,maintainability:75,reliability:78,efficiency:76,functionalSuitability:79,mtbf:30,mttr:6},happier:{team:3.6,collaboration:3.5,usage:3.4},history:{"Last Month":{better:1,happier:-.1,slackDays:0,spendShare:.08,eacShiftShare:0.004,scopeFp:1,deliveredFp:2,locAdded:5100,mtbfD:1,mttrD:0,cxD:.1,devsD:0},"Last Quarter":{better:2,happier:-.2,slackDays:-1,spendShare:.22,eacShiftShare:0.012,scopeFp:3,deliveredFp:6,locAdded:14200,mtbfD:2,mttrD:-1,cxD:.2,devsD:1},"Last PI":{better:3,happier:-.2,slackDays:-2,spendShare:.3,eacShiftShare:0.016,scopeFp:4,deliveredFp:8,locAdded:18700,mtbfD:2,mttrD:-1,cxD:.2,devsD:1},YTD:{better:5,happier:-.4,slackDays:-3,spendShare:.58,eacShiftShare:0.021,scopeFp:6,deliveredFp:12,locAdded:34500,mtbfD:4,mttrD:-2,cxD:.3,devsD:2}}},
{appId:"acro",name:"ACRO",fullName:"ACRO",orgUnit:"Cargo & Logistics",owner:"Owner C (redacted)",contractType:"hour",ratePerHour:155,hoursToDate:230,expectedThroughput:5,weeksElapsed:14,baselineDeadline:"2026-08-20",baselineStart:"2025-12-01",budgetFactor:.86,scopeFactor:.9,overview:{loc:43e3,complexityIndex:9.3,developers:5},better:{security:40,maintainability:45,reliability:42,efficiency:44,functionalSuitability:43,mtbf:10,mttr:23},happier:{team:3.3,collaboration:3.1,usage:3},history:{"Last Month":{better:-5,happier:-.2,slackDays:-4,spendShare:.14,eacShiftShare:0.09,scopeFp:3,deliveredFp:1,locAdded:1300,mtbfD:-2,mttrD:3,cxD:.3,devsD:-1},"Last Quarter":{better:-11,happier:-.4,slackDays:-9,spendShare:.35,eacShiftShare:0.19,scopeFp:6,deliveredFp:3,locAdded:3600,mtbfD:-5,mttrD:7,cxD:.6,devsD:-1},"Last PI":{better:-14,happier:-.5,slackDays:-12,spendShare:.44,eacShiftShare:0.24,scopeFp:7,deliveredFp:4,locAdded:4700,mtbfD:-6,mttrD:9,cxD:.8,devsD:-2},YTD:{better:-20,happier:-.8,slackDays:-20,spendShare:.75,eacShiftShare:0.38,scopeFp:10,deliveredFp:6,locAdded:8900,mtbfD:-9,mttrD:13,cxD:1.1,devsD:-3}}}];
function modelCost(app,rows){
if("fp"===app.contractType)return rows.reduce(function(a,r){return a+r.cost},0);
var effort=rows.filter(function(r){return"Deployed"!==r.status}).reduce(function(a,r){return a+EFFORT_HOURS[r.complexity]*changeFactor(null,r.changeType,r.changePct)},0);
return(app.hoursToDate+effort)*app.ratePerHour}
var SEED_CONFIGS=APPS.map(function(app){
var rows=SEED_ROWS.filter(function(r){return r.appId===app.appId});
var fp=rows.filter(function(r){return"Deleted"!==r.changeType}).reduce(function(a,r){return a+r.fp},0);
var cost=modelCost(app,rows);
return{appId:app.appId,name:app.name,fullName:app.fullName,orgUnit:app.orgUnit,qualityTarget:"A",owner:app.owner,contractType:app.contractType,fpMethod:"IFPUG",ratePerHour:app.ratePerHour,hoursToDate:app.hoursToDate,expectedThroughput:app.expectedThroughput,weeksElapsed:app.weeksElapsed,baselineBudget:1e3*Math.round(cost*app.budgetFactor/1e3),baselineDeadline:app.baselineDeadline,baselineStart:app.baselineStart,baselineScopeFp:Math.round(fp*app.scopeFactor),priceBook:Object.assign({},PRICE_BOOK),outputTariff:PRICE_BOOK.High,effortHoursByComplexity:Object.assign({},EFFORT_HOURS),changeRules:defaultChangeRules(),thresholds:defaultThresholds(),history:app.history,overview:app.overview,better:app.better,happier:app.happier}})},9835:function(__mod__,t,__wr__){"use strict";__wr__.d(t,{StoreProvider:function(){return StoreProvider},V:function(){return CURRENT_USER},o:function(){return useStore}});var jsx=__wr__(7437),React=__wr__(2265),D=__wr__(1930);
var STORAGE_KEY="core4-state-v2";
var CURRENT_USER="owner";
var Ctx=(0,React.createContext)(null);
var seq=0;
function entry(fields){seq+=1;return Object.assign({id:"a"+Date.now()+"-"+seq,timestamp:new Date().toISOString(),user:CURRENT_USER},fields)}
var initialState=function(){return{rows:D.R6.map(function(r){return Object.assign({},r)}),configs:D.it.map(function(c){return Object.assign({},c)}),audit:[]}};
var FUNCTIONAL_FIELDS=["name","type","complexity"];
function normalise(row){
if(void 0===row.changeType)row.changeType="New";
if(void 0===row.changePct)row.changePct="Changed"===row.changeType?50:100;
return row}
function StoreProvider(props){
var children=props.children;
var stateTuple=(0,React.useState)(initialState),state=stateTuple[0],setState=stateTuple[1];
var readyTuple=(0,React.useState)(!1),ready=readyTuple[0],setReady=readyTuple[1];
(0,React.useEffect)(function(){
var root=document.documentElement,opts=[].slice.call(document.querySelectorAll("[data-theme-set]"));
var mq=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;
function read(){try{var v=localStorage.getItem("core4-theme");return "light"===v||"dark"===v||"system"===v?v:"system"}catch(e){return "system"}}
function paint(pref){
root.setAttribute("data-theme","system"===pref?(mq&&mq.matches?"dark":"light"):pref);
opts.forEach(function(b){b.classList.toggle("is-on",b.getAttribute("data-theme-set")===pref)});
}
paint(read());
function onClick(e){var pref=e.currentTarget.getAttribute("data-theme-set");try{localStorage.setItem("core4-theme",pref)}catch(err){}paint(pref)}
opts.forEach(function(b){b.addEventListener("click",onClick)});
function onSystem(){if("system"===read())paint("system")}
mq&&mq.addEventListener&&mq.addEventListener("change",onSystem);
return function(){opts.forEach(function(b){b.removeEventListener("click",onClick)});mq&&mq.removeEventListener&&mq.removeEventListener("change",onSystem)}
},[]);
(0,React.useEffect)(function(){
var footer=document.querySelector("body > footer");
if(!footer)return;
var body=document.body,root=document.documentElement,frame=0,height=-1;
function atEnd(){return root.scrollHeight-(window.scrollY+window.innerHeight)<=2}
function sync(){
frame=0;
var h=footer.offsetHeight;
if(h!==height){height=h;root.style.setProperty("--footer-h",h+"px")}
body.classList.toggle("footer-landed",atEnd())}
function schedule(){if(!frame)frame=requestAnimationFrame(sync)}
sync();
window.addEventListener("scroll",schedule,{passive:!0});
window.addEventListener("resize",schedule);
var ro=window.ResizeObserver?new ResizeObserver(schedule):null;
ro&&ro.observe(body);
return function(){
frame&&cancelAnimationFrame(frame);
window.removeEventListener("scroll",schedule);
window.removeEventListener("resize",schedule);
ro&&ro.disconnect();
body.classList.remove("footer-landed")}
},[]);
(0,React.useEffect)(function(){try{var saved=localStorage.getItem(STORAGE_KEY);saved&&setState(JSON.parse(saved))}catch(e){}setReady(!0)},[]);
(0,React.useEffect)(function(){if(ready)try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(e){}},[state,ready]);
var updateRow=(0,React.useCallback)(function(id,patch){
setState(function(prev){
var log=[];
var rows=prev.rows.map(function(row){
if(row.id!==id)return row;
var config=prev.configs.find(function(c){return c.appId===row.appId});
var next=normalise(Object.assign({},row,patch));
if(void 0!==patch.type||void 0!==patch.complexity)next.fp=D.mS(next.type,next.complexity);
if(void 0===patch.changeType&&"Deployed"===row.status&&("New"===row.changeType||"Unchanged"===row.changeType)&&FUNCTIONAL_FIELDS.some(function(f){return void 0!==patch[f]&&String(patch[f])!==String(row[f])})){next.changeType="Changed";if(void 0===patch.changePct&&(void 0===row.changePct||100===row.changePct))next.changePct=50}
if(void 0===patch.cost&&(void 0!==patch.fp||void 0!==patch.complexity||void 0!==patch.type||next.changeType!==row.changeType||next.changePct!==row.changePct))next.cost=D.Uj(next,config);
Object.keys(next).forEach(function(field){
if(String(void 0===row[field]?"":row[field])!==String(void 0===next[field]?"":next[field]))log.push(entry({action:"update",target:id,field:String(field),oldValue:String(void 0===row[field]?"":row[field]),newValue:String(void 0===next[field]?"":next[field])}))});
return next});
return Object.assign({},prev,{rows:rows,audit:log.concat(prev.audit)})})},[]);
var addRow=(0,React.useCallback)(function(appId){
setState(function(prev){
var config=prev.configs.find(function(c){return c.appId===appId});
var n=prev.rows.filter(function(r){return r.appId===appId}).length+1;
var id=appId.toUpperCase()+"-NEW-"+n;
var row={id:id,appId:appId,name:"New function - describe…",type:"EI",fp:4,complexity:"Medium",status:"Open",changeType:"New",changePct:100,paid:!1};
row.cost=D.Uj(row,config);
return Object.assign({},prev,{rows:[row].concat(prev.rows),audit:[entry({action:"create",target:id,note:"Row added (change type New, factor "+Math.round(100*D.cf(config&&config.changeRules,"New",100))+"%)"})].concat(prev.audit)})})},[]);
var deleteRow=(0,React.useCallback)(function(id){
setState(function(prev){return Object.assign({},prev,{rows:prev.rows.filter(function(r){return r.id!==id}),audit:[entry({action:"delete",target:id,note:"Row deleted"})].concat(prev.audit)})})},[]);
var uploadRows=(0,React.useCallback)(function(appId,incoming){
setState(function(prev){
var config=prev.configs.find(function(c){return c.appId===appId});
var rows=incoming.map(function(r){var row=normalise(Object.assign({},r));if(void 0===r.cost)row.cost=D.Uj(row,config);return row});
return Object.assign({},prev,{rows:rows.concat(prev.rows.filter(function(r){return r.appId!==appId})),audit:[entry({action:"upload",target:"app:"+appId,note:"Uploaded "+rows.length+" rows (replaced sheet for "+appId.toUpperCase()+")"})].concat(prev.audit)})})},[]);
var recalcCosts=(0,React.useCallback)(function(appId){
setState(function(prev){
var config=prev.configs.find(function(c){return c.appId===appId});
var changed=0;
var rows=prev.rows.map(function(row){
if(row.appId!==appId)return row;
var cost=D.Uj(row,config);
if(cost===row.cost)return row;
changed+=1;
return Object.assign({},row,{cost:cost})});
return Object.assign({},prev,{rows:rows,audit:[entry({action:"recalc",target:"app:"+appId,note:"Recalculated cost from change rules for "+changed+" function(s)"})].concat(prev.audit)})})},[]);
var updateConfig=(0,React.useCallback)(function(appId,patch){
setState(function(prev){
var log=[];
var configs=prev.configs.map(function(config){
if(config.appId!==appId)return config;
var next=Object.assign({},config,patch);
Object.keys(patch).forEach(function(field){
var before=JSON.stringify(config[field]),after=JSON.stringify(next[field]);
before!==after&&log.push(entry({action:"config",target:"config:"+appId,field:String(field),oldValue:before,newValue:after}))});
return next});
return Object.assign({},prev,{configs:configs,audit:log.concat(prev.audit)})})},[]);
var reset=(0,React.useCallback)(function(){setState(initialState())},[]);
var value=(0,React.useMemo)(function(){return Object.assign({},state,{ready:ready,updateRow:updateRow,addRow:addRow,deleteRow:deleteRow,uploadRows:uploadRows,recalcCosts:recalcCosts,updateConfig:updateConfig,reset:reset})},[state,ready,updateRow,addRow,deleteRow,uploadRows,recalcCosts,updateConfig,reset]);
return(0,jsx.jsx)(Ctx.Provider,{value:value,children:children})}
function useStore(){var ctx=(0,React.useContext)(Ctx);if(!ctx)throw Error("useStore must be used within StoreProvider");return ctx}},7960:function(){}},function(e){e.O(0,[587,972,971,117,744],function(){return e(e.s=9030)}),_N_E=e.O()}]);