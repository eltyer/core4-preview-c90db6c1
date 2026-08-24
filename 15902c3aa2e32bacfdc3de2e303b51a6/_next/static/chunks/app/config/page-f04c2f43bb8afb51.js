(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{5679:function(e,t,a){Promise.resolve().then(a.bind(a,1924))},1924:function(__mod__,t,__wr__){"use strict";__wr__.r(t),__wr__.d(t,{default:function(){return ConfigPage}});var jsx=__wr__(7437),React=__wr__(2265),Store=__wr__(9835),D=__wr__(1930);
var APPS=[{id:"aodb",name:"AODB"},{id:"ciss",name:"CiSS"},{id:"ipf",name:"IP&F"},{id:"acro",name:"ACRO"}];
var FP_METHODS=["IFPUG","Nesma","COSMIC","EFS"];
var COMPLEXITIES=["Low","Medium","High"];
function ConfigPage(){
var store=(0,Store.o)(),configs=store.configs,updateConfig=store.updateConfig;
var appTuple=(0,React.useState)("aodb"),appId=appTuple[0],setAppId=appTuple[1];
var config=configs.find(function(c){return c.appId===appId});
var commit=function(patch){return updateConfig(appId,patch)};
var rules=config.changeRules||D.CR();
var tiers=rules.changedTiers||[];
var setRules=function(patch){commit({changeRules:Object.assign({},rules,patch)})};
var setTier=function(index,patch){setRules({changedTiers:tiers.map(function(t,i){return i===index?Object.assign({},t,patch):t})})};
var exampleFp=10,examplePrice=config.priceBook.Medium,exampleFactor=D.cf(rules,"Changed",40);
return(0,jsx.jsxs)("div",{className:"mx-auto max-w-5xl px-6 py-8",children:[
(0,jsx.jsx)("h1",{className:"text-2xl font-extrabold text-core-navy",children:"Configuration"}),
(0,jsx.jsxs)("p",{className:"mb-5 text-sm text-slate-500",children:["Per-application setup. Everything here drives the dashboard derivations and is recorded in the audit trail. Logged in as ",(0,jsx.jsx)("strong",{children:Store.V}),"."]}),
(0,jsx.jsx)("div",{className:"mb-6 flex flex-wrap gap-2",children:APPS.map(function(a){return(0,jsx.jsx)("button",{onClick:function(){setAppId(a.id)},className:"rounded-lg px-3 py-1.5 text-sm font-medium "+(appId===a.id?"bg-core-navy text-white":"border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"),children:a.name},a.id)})}),
(0,jsx.jsxs)("div",{className:"space-y-6",children:[
(0,jsx.jsxs)(Section,{title:"Contract & counting method",subtitle:"How this application is priced and counted",children:[
(0,jsx.jsx)(Field,{label:"Contract type",children:(0,jsx.jsx)("div",{className:"flex overflow-hidden rounded-lg border border-slate-200",children:["hour","fp"].map(function(v){return(0,jsx.jsx)("button",{onClick:function(){commit({contractType:v})},className:"px-4 py-1.5 text-sm font-medium "+(config.contractType===v?"bg-core-navy text-white":"bg-white text-slate-600 hover:bg-slate-50"),children:"hour"===v?"Hour-based (T&M)":"FP-based (output)"},v)})})}),
(0,jsx.jsx)(Field,{label:"FP counting method",children:(0,jsx.jsx)("select",{value:config.fpMethod,onChange:function(e){commit({fpMethod:e.target.value})},className:"input",children:FP_METHODS.map(function(v){return(0,jsx.jsx)("option",{children:v},v)})})}),
(0,jsx.jsx)(Field,{label:"Full name",children:(0,jsx.jsx)(TextInput,{value:config.fullName,onCommit:function(v){commit({fullName:v})}})}),
(0,jsx.jsx)(Field,{label:"Project owner",hint:"Only the owner may change RAG thresholds",children:(0,jsx.jsx)(TextInput,{value:config.owner,onCommit:function(v){commit({owner:v})}})}),
(0,jsx.jsx)(Field,{label:"Org unit (rolls up under IPF)",children:(0,jsx.jsx)(TextInput,{value:config.orgUnit,onCommit:function(v){commit({orgUnit:v})}})}),
(0,jsx.jsx)(Field,{label:"Agreed quality grade (target)",children:(0,jsx.jsx)(TextInput,{value:config.qualityTarget,onCommit:function(v){commit({qualityTarget:v})}})})]}),
(0,jsx.jsxs)(Section,{title:"Cost inputs",subtitle:"Rate card, output tariff, price book, effort",children:[
(0,jsx.jsx)(Field,{label:"Rate card (€/hour)",children:(0,jsx.jsx)(NumberInput,{value:config.ratePerHour,onCommit:function(v){commit({ratePerHour:v})}})}),
(0,jsx.jsx)(Field,{label:"Output tariff (€/FP)",hint:"Given for FP-based projects",children:(0,jsx.jsx)(NumberInput,{value:config.outputTariff,onCommit:function(v){commit({outputTariff:v})}})}),
(0,jsx.jsx)(Field,{label:"Hours to date (Oracle)",children:(0,jsx.jsx)(NumberInput,{value:config.hoursToDate,onCommit:function(v){commit({hoursToDate:v})}})}),
(0,jsx.jsx)("div",{}),
(0,jsx.jsxs)("div",{className:"col-span-full",children:[
(0,jsx.jsx)("p",{className:"mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400",children:"Function price book (€/FP by complexity)"}),
(0,jsx.jsx)("div",{className:"flex gap-4",children:COMPLEXITIES.map(function(cx){return(0,jsx.jsxs)("div",{className:"flex items-center gap-2",children:[
(0,jsx.jsx)("span",{className:"w-16 text-sm text-slate-600",children:cx}),
(0,jsx.jsx)(NumberInput,{value:config.priceBook[cx],onCommit:function(v){var next=Object.assign({},config.priceBook);next[cx]=v,commit({priceBook:next})}})]},cx)})})]}),
(0,jsx.jsxs)("div",{className:"col-span-full",children:[
(0,jsx.jsx)("p",{className:"mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400",children:"Effort for ETC estimate (hours per remaining function, by complexity)"}),
(0,jsx.jsx)("div",{className:"flex gap-4",children:COMPLEXITIES.map(function(cx){return(0,jsx.jsxs)("div",{className:"flex items-center gap-2",children:[
(0,jsx.jsx)("span",{className:"w-16 text-sm text-slate-600",children:cx}),
(0,jsx.jsx)(NumberInput,{value:config.effortHoursByComplexity[cx],onCommit:function(v){var next=Object.assign({},config.effortHoursByComplexity);next[cx]=v,commit({effortHoursByComplexity:next})}})]},cx)})})]})]}),
(0,jsx.jsx)(Section,{title:"FPA change rules",subtitle:"Share of the function price charged when a counted function is added, changed or removed",children:(0,jsx.jsxs)("div",{className:"col-span-full space-y-4",children:[
(0,jsx.jsx)("div",{className:"flex flex-wrap gap-4",children:[{key:"newFactor",label:"New function",fallback:100},{key:"deletedFactor",label:"Deleted function",fallback:20},{key:"unchangedFactor",label:"Unchanged",fallback:0}].map(function(f){return(0,jsx.jsxs)("div",{className:"flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2",children:[
(0,jsx.jsx)("span",{className:"w-36 text-sm text-slate-700",children:f.label}),
(0,jsx.jsx)(NumberInput,{value:void 0===rules[f.key]?f.fallback:rules[f.key],onCommit:function(v){var patch={};patch[f.key]=v,setRules(patch)},className:"w-20"}),
(0,jsx.jsx)("span",{className:"text-sm text-slate-500",children:"% of price"})]},f.key)})}),
(0,jsx.jsxs)("div",{children:[
(0,jsx.jsx)("p",{className:"mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400",children:"Changed function - by degree of change"}),
(0,jsx.jsx)("div",{className:"space-y-2",children:tiers.map(function(tier,i){return(0,jsx.jsxs)("div",{className:"flex flex-wrap items-center gap-2 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2",children:[
(0,jsx.jsx)("span",{className:"text-sm text-slate-700",children:"changed up to"}),
(0,jsx.jsx)(NumberInput,{value:tier.upTo,onCommit:function(v){setTier(i,{upTo:v})},className:"w-20"}),
(0,jsx.jsx)("span",{className:"text-sm text-slate-500",children:"% → charge"}),
(0,jsx.jsx)(NumberInput,{value:tier.factor,onCommit:function(v){setTier(i,{factor:v})},className:"w-20"}),
(0,jsx.jsx)("span",{className:"text-sm text-slate-500",children:"% of the function price"}),
(0,jsx.jsx)("button",{onClick:function(){setRules({changedTiers:tiers.filter(function(_,j){return j!==i})})},title:"Remove tier",className:"ml-auto text-slate-300 hover:text-bad",children:"x"})]},i)})}),
(0,jsx.jsx)("button",{onClick:function(){setRules({changedTiers:tiers.concat([{upTo:100,factor:100}])})},className:"mt-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50",children:"Add tier"})]}),
(0,jsx.jsxs)("p",{className:"text-xs text-slate-400",children:["Tiers are read low to high: the first tier whose limit covers the degree of change wins. Worked example - a Medium function of ",String(exampleFp)," FP at €",examplePrice.toLocaleString("en-US"),"/FP, changed by 40%, is charged ",Math.round(100*exampleFactor),"% = €",Math.round(exampleFp*examplePrice*exampleFactor).toLocaleString("en-US"),". Change the rules here, then use Recalculate from rules on the FPA sheet to re-apply them to existing functions."]})]})}),
(0,jsx.jsxs)(Section,{title:"Targets & baselines",subtitle:"Entered by the project owner",children:[
(0,jsx.jsx)(Field,{label:"Baseline budget (€)",children:(0,jsx.jsx)(NumberInput,{value:config.baselineBudget,onCommit:function(v){commit({baselineBudget:v})},className:"w-40"})}),
(0,jsx.jsx)(Field,{label:"Target deadline",children:(0,jsx.jsx)("input",{type:"date",value:config.baselineDeadline,onChange:function(e){commit({baselineDeadline:e.target.value})},className:"input"})}),
(0,jsx.jsx)(Field,{label:"Scope target (FP)",children:(0,jsx.jsx)(NumberInput,{value:config.baselineScopeFp,onCommit:function(v){commit({baselineScopeFp:v})}})}),
(0,jsx.jsx)(Field,{label:"Expected throughput (FP/week)",children:(0,jsx.jsx)(NumberInput,{value:config.expectedThroughput,onCommit:function(v){commit({expectedThroughput:v})}})}),
(0,jsx.jsx)(Field,{label:"Weeks elapsed (since baseline)",children:(0,jsx.jsx)(NumberInput,{value:config.weeksElapsed,onCommit:function(v){commit({weeksElapsed:v})}})})]}),
(0,jsx.jsx)(Section,{title:"RAG thresholds by category",subtitle:"Owned by "+config.owner+", set per category, not per metric",children:(0,jsx.jsxs)("div",{className:"col-span-full space-y-3",children:[
(0,jsx.jsx)(ThresholdRow,{label:"Better (quality %)",hintHi:"green ≥",hintLo:"amber ≥",green:config.thresholds.better.green,amber:config.thresholds.better.amber,onGreen:function(v){commit({thresholds:Object.assign({},config.thresholds,{better:Object.assign({},config.thresholds.better,{green:v})})})},onAmber:function(v){commit({thresholds:Object.assign({},config.thresholds,{better:Object.assign({},config.thresholds.better,{amber:v})})})},disabled:!1}),
(0,jsx.jsx)(ThresholdRow,{label:"Happier (1-5)",hintHi:"green ≥",hintLo:"amber ≥",green:config.thresholds.happier.green,amber:config.thresholds.happier.amber,onGreen:function(v){commit({thresholds:Object.assign({},config.thresholds,{happier:Object.assign({},config.thresholds.happier,{green:v})})})},onAmber:function(v){commit({thresholds:Object.assign({},config.thresholds,{happier:Object.assign({},config.thresholds.happier,{amber:v})})})},disabled:!1}),
(0,jsx.jsx)(ThresholdRow,{label:"Cheaper (€/FP, lower better)",hintHi:"green ≤",hintLo:"amber ≤",green:config.thresholds.cheaper.green,amber:config.thresholds.cheaper.amber,onGreen:function(v){commit({thresholds:Object.assign({},config.thresholds,{cheaper:Object.assign({},config.thresholds.cheaper,{green:v})})})},onAmber:function(v){commit({thresholds:Object.assign({},config.thresholds,{cheaper:Object.assign({},config.thresholds.cheaper,{amber:v})})})},disabled:!1}),
(0,jsx.jsx)(ThresholdRow,{label:"Faster (days slack vs deadline)",hintHi:"green ≥",hintLo:"amber ≥",green:config.thresholds.faster.green,amber:config.thresholds.faster.amber,onGreen:function(v){commit({thresholds:Object.assign({},config.thresholds,{faster:Object.assign({},config.thresholds.faster,{green:v})})})},onAmber:function(v){commit({thresholds:Object.assign({},config.thresholds,{faster:Object.assign({},config.thresholds.faster,{amber:v})})})},disabled:!1})]})})]})]})}
function Section(props){return(0,jsx.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-white p-5",children:[
(0,jsx.jsx)("h2",{className:"text-lg font-bold text-core-navy",children:props.title}),
props.subtitle&&(0,jsx.jsx)("p",{className:"mb-4 text-sm text-slate-400",children:props.subtitle}),
(0,jsx.jsx)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:props.children})]})}
function Field(props){return(0,jsx.jsxs)("div",{className:"flex flex-col gap-1",children:[
(0,jsx.jsx)("label",{className:"text-sm font-medium text-slate-600",children:props.label}),
props.children,
props.hint&&(0,jsx.jsx)("span",{className:"text-xs text-slate-400",children:props.hint})]})}
function ThresholdRow(props){return(0,jsx.jsxs)("div",{className:"flex flex-wrap items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2",children:[
(0,jsx.jsx)("span",{className:"w-56 text-sm text-slate-700",children:props.label}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1.5 text-sm",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-good"})," ",props.hintHi]}),
(0,jsx.jsx)(NumberInput,{value:props.green,onCommit:props.onGreen,disabled:props.disabled}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1.5 text-sm",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-warn"})," ",props.hintLo]}),
(0,jsx.jsx)(NumberInput,{value:props.amber,onCommit:props.onAmber,disabled:props.disabled})]})}
function TextInput(props){var value=props.value,onCommit=props.onCommit;
var st=(0,React.useState)(value),draft=st[0],setDraft=st[1];
(0,React.useEffect)(function(){setDraft(value)},[value]);
return(0,jsx.jsx)("input",{className:"input",value:draft,onChange:function(e){setDraft(e.target.value)},onBlur:function(){draft!==value&&onCommit(draft)}})}
function NumberInput(props){var value=props.value,onCommit=props.onCommit,cls=props.className||"w-28",disabled=props.disabled;
var st=(0,React.useState)(String(value)),draft=st[0],setDraft=st[1];
(0,React.useEffect)(function(){setDraft(String(value))},[value]);
return(0,jsx.jsx)("input",{type:"number",disabled:disabled,className:"input "+cls+" "+(disabled?"opacity-50":""),value:draft,onChange:function(e){setDraft(e.target.value)},onBlur:function(){var v=parseFloat(draft);isNaN(v)||v===value?setDraft(String(value)):onCommit(v)}})}},1930:function(__mod__,t,__wr__){"use strict";__wr__.d(t,{CR:function(){return defaultChangeRules},CT:function(){return CHANGE_TYPES},HJ:function(){return LEVELS},PR:function(){return PERIODS},QP:function(){return PRICE_BOOK},R6:function(){return SEED_ROWS},Uj:function(){return rowCost},c3:function(){return TODAY},cf:function(){return changeFactor},it:function(){return SEED_CONFIGS},mS:function(){return fpWeight}});
var TODAY="2026-06-27";
var LEVELS=["LSTO","BPSO","IPF"];
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
{appId:"aodb",name:"AODB",fullName:"Airport Operational Database",orgUnit:"Airport Operations",owner:"Owner A (redacted)",contractType:"fp",ratePerHour:150,hoursToDate:320,expectedThroughput:20,weeksElapsed:16,baselineDeadline:"2026-06-18",budgetFactor:1.04,scopeFactor:.96,overview:{loc:125e3,complexityIndex:7.2,developers:12},better:{security:99,maintainability:95,reliability:96,efficiency:94,functionalSuitability:97,mtbf:50,mttr:2},happier:{team:4.2,collaboration:4,usage:3.9},history:{"Last Month":{better:3,happier:.1,slackDays:2,spendShare:.1},"Last Quarter":{better:6,happier:.2,slackDays:4,spendShare:.28},"Last PI":{better:8,happier:.3,slackDays:5,spendShare:.36},YTD:{better:12,happier:.5,slackDays:8,spendShare:.66}}},
{appId:"ciss",name:"CiSS",fullName:"Central Information System",orgUnit:"Passenger Services",owner:"Owner A (redacted)",contractType:"hour",ratePerHour:165,hoursToDate:240,expectedThroughput:4,weeksElapsed:14,baselineDeadline:"2026-05-01",budgetFactor:.9,scopeFactor:1.06,overview:{loc:89e3,complexityIndex:8.5,developers:8},better:{security:50,maintainability:60,reliability:52,efficiency:58,functionalSuitability:55,mtbf:50,mttr:14},happier:{team:4.3,collaboration:4.1,usage:4.2},history:{"Last Month":{better:-4,happier:.1,slackDays:-3,spendShare:.12},"Last Quarter":{better:-9,happier:0,slackDays:-8,spendShare:.31},"Last PI":{better:-11,happier:.1,slackDays:-11,spendShare:.4},YTD:{better:-16,happier:.2,slackDays:-18,spendShare:.7}}},
{appId:"ipf",name:"IP&F",fullName:"Integrated Planning & Forecasting",orgUnit:"Infrastructure & Facilities",owner:"Owner B (redacted)",contractType:"fp",ratePerHour:145,hoursToDate:160,expectedThroughput:40,weeksElapsed:12,baselineDeadline:"2026-09-15",budgetFactor:1,scopeFactor:1,overview:{loc:156e3,complexityIndex:6.1,developers:15},better:{security:80,maintainability:75,reliability:78,efficiency:76,functionalSuitability:79,mtbf:30,mttr:6},happier:{team:3.6,collaboration:3.5,usage:3.4},history:{"Last Month":{better:1,happier:-.1,slackDays:0,spendShare:.08},"Last Quarter":{better:2,happier:-.2,slackDays:-1,spendShare:.22},"Last PI":{better:3,happier:-.2,slackDays:-2,spendShare:.3},YTD:{better:5,happier:-.4,slackDays:-3,spendShare:.58}}},
{appId:"acro",name:"ACRO",fullName:"ACRO",orgUnit:"Cargo & Logistics",owner:"Owner C (redacted)",contractType:"hour",ratePerHour:155,hoursToDate:230,expectedThroughput:5,weeksElapsed:14,baselineDeadline:"2026-08-20",budgetFactor:.86,scopeFactor:.9,overview:{loc:43e3,complexityIndex:9.3,developers:5},better:{security:40,maintainability:45,reliability:42,efficiency:44,functionalSuitability:43,mtbf:10,mttr:23},happier:{team:3.3,collaboration:3.1,usage:3},history:{"Last Month":{better:-5,happier:-.2,slackDays:-4,spendShare:.14},"Last Quarter":{better:-11,happier:-.4,slackDays:-9,spendShare:.35},"Last PI":{better:-14,happier:-.5,slackDays:-12,spendShare:.44},YTD:{better:-20,happier:-.8,slackDays:-20,spendShare:.75}}}];
var SEED_CONFIGS=APPS.map(function(app){
var rows=SEED_ROWS.filter(function(r){return r.appId===app.appId});
var fp=rows.filter(function(r){return"Deleted"!==r.changeType}).reduce(function(a,r){return a+r.fp},0);
var cost=rows.reduce(function(a,r){return a+r.cost},0);
return{appId:app.appId,name:app.name,fullName:app.fullName,orgUnit:app.orgUnit,qualityTarget:"A",owner:app.owner,contractType:app.contractType,fpMethod:"IFPUG",ratePerHour:app.ratePerHour,hoursToDate:app.hoursToDate,expectedThroughput:app.expectedThroughput,weeksElapsed:app.weeksElapsed,baselineBudget:1e3*Math.round(cost*app.budgetFactor/1e3),baselineDeadline:app.baselineDeadline,baselineScopeFp:Math.round(fp*app.scopeFactor),priceBook:Object.assign({},PRICE_BOOK),outputTariff:PRICE_BOOK.High,effortHoursByComplexity:Object.assign({},EFFORT_HOURS),changeRules:defaultChangeRules(),thresholds:defaultThresholds(),history:app.history,overview:app.overview,better:app.better,happier:app.happier}})},9835:function(__mod__,t,__wr__){"use strict";__wr__.d(t,{StoreProvider:function(){return StoreProvider},V:function(){return CURRENT_USER},o:function(){return useStore}});var jsx=__wr__(7437),React=__wr__(2265),D=__wr__(1930);
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
function useStore(){var ctx=(0,React.useContext)(Ctx);if(!ctx)throw Error("useStore must be used within StoreProvider");return ctx}}},function(e){e.O(0,[971,117,744],function(){return e(e.s=5679)}),_N_E=e.O()}]);