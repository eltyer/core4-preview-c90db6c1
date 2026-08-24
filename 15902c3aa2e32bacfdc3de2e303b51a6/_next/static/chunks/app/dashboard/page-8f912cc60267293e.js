(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{1113:function(e,t,a){Promise.resolve().then(a.bind(a,1720))},1720:function(__mod__,t,__wr__){"use strict";__wr__.r(t),__wr__.d(t,{default:function(){return DashboardPage}});var jsx=__wr__(7437),styledJsx=__wr__(29),SJ=__wr__.n(styledJsx),React=__wr__(2265),Store=__wr__(9835),D=__wr__(1930),F=__wr__(2369);
var RAG_CLASS={good:"text-good font-semibold",warn:"text-warn font-semibold",bad:"text-bad font-semibold"};
var RAG_TEXT={good:"text-good",warn:"text-warn",bad:"text-bad"};
var pct=function(v){return v+"%"};
var COST_NOTE="Cost covers build and built-in testing only. Separate test phases, licences and run/maintenance are not included in these figures.";
function vacLine(amount,percent,delta){var s="VAC "+amount;if(percent)s+=" ("+percent+")";if(delta)s+=" · Δ "+delta;return s}
function unit(v,one,many){return 1===Math.abs(v)?one:many}
function avg(list){return list.length?list.reduce(function(a,b){return a+b},0)/list.length:0}
var GROUPS=[
{key:"overview",title:"1. Overview",color:"bg-slate-100 text-slate-700",
headline:function(config,d){return{text:d.totalFp+" FP",sub:config.overview.developers+" devs"}},
rollup:function(configs,derived){return{text:derived.reduce(function(a,d){return a+d.totalFp},0)+" FP",sub:configs.reduce(function(a,c){return a+c.overview.developers},0)+" devs"}},
metrics:[
{label:"Contract type",source:"Configuration, contract-type toggle",cell:function(c){return{text:"fp"===c.contractType?"FP-based":"Hour-based"}}},
{label:"FP method",source:"Configuration, FP counting method",cell:function(c){return{text:c.fpMethod}}},
{label:"Lines of Code",source:"TiCS (interface)",cell:function(c){return{text:c.overview.loc.toLocaleString("en-US")}}},
{label:"Complexity Index",source:"TiCS (interface)",cell:function(c){return{text:c.overview.complexityIndex.toFixed(1)}}},
{label:"# Developers",source:"Oracle / roster",cell:function(c){return{text:String(c.overview.developers)}}}]},
{key:"better",title:"2. Better (Quality)",color:"bg-emerald-50 text-emerald-800",
headline:function(config,d,period){
var target=config.qualityTarget,floor=F.gF(target),g=F.b9(d.betterScore),vac=d.betterScore-floor,h=F.hy(config,period);
return{text:g+" ("+d.betterScore+"%)",sub:"target "+target+" ("+floor+"%)",vac:vacLine(F.qN(vac," "+unit(vac,"pt","pts")),F.pP(vac,floor),F.qN(h.better," "+unit(h.better,"pt","pts"))),rag:F.I(g)>=F.I(target)?"good":F.I(g)===F.I(target)-1?"warn":"bad"}},
rollup:function(configs,derived,period){
var score=Math.round(avg(derived.map(function(d){return d.betterScore})));
var floor=Math.round(avg(configs.map(function(c){return F.gF(c.qualityTarget)})));
var vac=score-floor,delta=Math.round(avg(configs.map(function(c){return F.hy(c,period).better})));
return{text:F.b9(score)+" ("+score+"%)",sub:"portfolio target "+F.b9(floor)+" ("+floor+"%)",vac:vacLine(F.qN(vac," "+unit(vac,"pt","pts")),F.pP(vac,floor),F.qN(delta," "+unit(delta,"pt","pts")))}},
metrics:[
{label:"Security (ISO 5055)",source:"TiCS (interface)",emphasis:!0,cell:function(c){return{text:pct(c.better.security),rag:F.wq(c.better.security,c.thresholds.better)}}},
{label:"Maintainability (ISO 5055)",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.maintainability),rag:F.wq(c.better.maintainability,c.thresholds.better)}}},
{label:"Reliability (ISO 5055)",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.reliability),rag:F.wq(c.better.reliability,c.thresholds.better)}}},
{label:"Efficiency (ISO 5055)",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.efficiency),rag:F.wq(c.better.efficiency,c.thresholds.better)}}},
{label:"Functional suitability",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.functionalSuitability),rag:F.wq(c.better.functionalSuitability,c.thresholds.better)}}},
{label:"MTBF",source:"Jira, incident tickets (open/close)",cell:function(c){return{text:c.better.mtbf+" days"}}},
{label:"MTTR",source:"Jira, incident tickets (open/close)",cell:function(c){return{text:c.better.mttr+" hrs"}}}]},
{key:"happier",title:"3. Happier (Happiness)",color:"bg-amber-50 text-amber-800",
headline:function(config,d,period){
var target=config.thresholds.happier.green,vac=d.happierScore-target,h=F.hy(config,period);
return{text:d.happierScore.toFixed(1),sub:"target "+target.toFixed(1),vac:vacLine(F.sd(vac,1),F.pP(vac,target),F.sd(h.happier,1)),rag:F.wq(d.happierScore,config.thresholds.happier)}},
rollup:function(configs,derived,period){
var score=Math.round(10*avg(derived.map(function(d){return d.happierScore})))/10;
var target=Math.round(10*avg(configs.map(function(c){return c.thresholds.happier.green})))/10;
var vac=score-target,delta=Math.round(10*avg(configs.map(function(c){return F.hy(c,period).happier})))/10;
return{text:score.toFixed(1),sub:"portfolio target "+target.toFixed(1),vac:vacLine(F.sd(vac,1),F.pP(vac,target),F.sd(delta,1))}},
metrics:[
{label:"Team happiness",source:"Happiness survey (per sprint)",emphasis:!0,cell:function(c){return{text:c.happier.team.toFixed(1),rag:F.wq(c.happier.team,c.thresholds.happier)}}},
{label:"Collaboration happiness",source:"Happiness survey (per sprint)",cell:function(c){return{text:c.happier.collaboration.toFixed(1),rag:F.wq(c.happier.collaboration,c.thresholds.happier)}}},
{label:"Usage happiness",source:"Happiness survey (per sprint)",cell:function(c){return{text:c.happier.usage.toFixed(1),rag:F.wq(c.happier.usage,c.thresholds.happier)}}}]},
{key:"cheaper",title:"4. Cheaper (Cost)",color:"bg-rose-50 text-rose-800",note:COST_NOTE,
headline:function(config,d,period){
var h=F.hy(config,period),spend=d.actuals*h.spendShare;
return{text:F.s7(d.eac),sub:"budget "+F.s7(config.baselineBudget),vac:vacLine((d.vacCost>0?"+":d.vacCost<0?"-":"")+F.s7(Math.abs(d.vacCost)),F.pP(d.vacCost,config.baselineBudget),F.s7(spend)+" spent"),rag:d.vacCost>=0?"good":d.vacCost>-.08*config.baselineBudget?"warn":"bad"}},
rollup:function(configs,derived,period){
var eac=derived.reduce(function(a,d){return a+d.eac},0),budget=configs.reduce(function(a,c){return a+c.baselineBudget},0),vac=budget-eac;
var spend=configs.reduce(function(a,c,i){return a+derived[i].actuals*F.hy(c,period).spendShare},0);
return{text:F.s7(eac),sub:"portfolio budget "+F.s7(budget),vac:vacLine((vac>0?"+":vac<0?"-":"")+F.s7(Math.abs(vac)),F.pP(vac,budget),F.s7(spend)+" spent"),rag:vac>=0?"good":"bad"}},
metrics:[
{label:"Actuals to date",source:"Hour: Oracle x rate. FP: sum of function prices",cell:function(c,d){return{text:F.s7(d.actuals)}}},
{label:"Estimate to Complete",source:"Hour: estimate (complexity x rate x change factor). FP: agreed price after change factor",cell:function(c,d){return{text:F.s7(d.etc),sub:"fp"===c.contractType?"agreed":"estimate"}}},
{label:"Forecast total spend (EAC)",source:"Derived: Actuals + Estimate to Complete",emphasis:!0,cell:function(c,d){return{text:F.s7(d.eac)}}},
{label:"Cost / FP",source:"FPA sheet (Cost divided by #FP)",emphasis:!0,cell:function(c,d){return{text:F.M1(d.costPerFp)+"/FP",rag:F.wq(d.costPerFp,c.thresholds.cheaper)}}},
{label:"Output tariff (L3)",source:"Contract (given, FP-based)",cell:function(c){return{text:"fp"===c.contractType?F.M1(c.outputTariff)+"/FP":"n/a"}}},
{label:"Variance at completion (VAC)",source:"Derived: Budget minus EAC, and the same gap as a share of budget",emphasis:!0,cell:function(c,d){return{text:F.s7(d.vacCost),sub:F.pP(d.vacCost,c.baselineBudget),rag:d.vacCost>=0?"good":d.vacCost>-.08*c.baselineBudget?"warn":"bad"}}}]},
{key:"faster",title:"5. Faster (Time & Scope)",color:"bg-sky-50 text-sky-800",
headline:function(config,d,period){
var h=F.hy(config,period);
return{text:F.G$(d.forecastDate),sub:"planned "+F.G$(config.baselineDeadline),vac:vacLine(F.qN(d.forecastSlackDays," "+unit(d.forecastSlackDays,"day","days")),F.pP(d.forecastSlackDays,d.plannedDays),F.qN(h.slackDays," "+unit(h.slackDays,"day","days"))),rag:F.wq(d.forecastSlackDays,config.thresholds.faster)}},
rollup:function(configs,derived,period){
var slack=Math.round(avg(derived.map(function(d){return d.forecastSlackDays})));
var planned=Math.round(avg(derived.map(function(d){return d.plannedDays})));
var delta=Math.round(avg(configs.map(function(c){return F.hy(c,period).slackDays})));
return{text:0===slack?"on time":slack>0?slack+" days early":-slack+" days late",sub:"avg vs plan",vac:vacLine(F.qN(slack," "+unit(slack,"day","days")),F.pP(slack,planned),F.qN(delta," "+unit(delta,"day","days"))),rag:slack>=0?"good":slack>-14?"warn":"bad"}},
metrics:[
{label:"Forecast vs planned (days)",source:"Derived: forecast date vs deadline",emphasis:!0,cell:function(c,d){return{text:F.qN(d.forecastSlackDays," days"),rag:F.wq(d.forecastSlackDays,c.thresholds.faster)}}},
{label:"Throughput",source:"FPA sheet (Deployed FP divided by time)",cell:function(c,d){return{text:d.throughput+" FP/wk"}}},
{label:"Delivery speed (L3)",source:"FPA sheet (Deployed FP per iteration)",cell:function(c,d){return{text:d.deliverySpeed+" FP/PI"}}},
{label:"Productivity (L3)",source:"Oracle hours divided by weekly FP",cell:function(c,d){return{text:d.productivity+" h/FP"}}},
{label:"Baseline scope target",source:"Configuration, baseline set by the project owner",cell:function(c){return{text:c.baselineScopeFp+" FP"}}},
{label:"Delivered FP",source:"FPA sheet (status = Deployed)",cell:function(c,d){return{text:d.deliveredFp+" FP"}}},
{label:"Remaining scope",source:"FPA sheet (status not Deployed)",cell:function(c,d){return{text:d.remainingFp+" FP"}}},
{label:"Descoped FP (change type Deleted)",source:"FPA sheet (change type = Deleted; still charged at the agreed removal factor)",cell:function(c,d){return{text:d.deletedFp+" FP"}}},
{label:"Total scope (forecast)",source:"Derived: sum of all counted FP, excluding deleted functions",emphasis:!0,cell:function(c,d){return{text:d.scopeEac+" FP"}}},
{label:"Scope variance",source:"Derived: total minus target (less scope is fine)",emphasis:!0,cell:function(c,d){
var g=d.scopeGrowth;
if(g<=0)return{text:g+" FP",sub:0===g?"on target":"under target",rag:"good"};
return{text:F.qN(g," FP"),sub:"scope growth",rag:g>.05*c.baselineScopeFp?"bad":"warn"}}}]}];
function DashboardPage(){
var store=(0,Store.o)(),configs=store.configs,rows=store.rows,ready=store.ready;
var collapsedTuple=(0,React.useState)({}),collapsed=collapsedTuple[0],setCollapsed=collapsedTuple[1];
var levelTuple=(0,React.useState)("IPF"),level=levelTuple[0],setLevel=levelTuple[1];
var periodTuple=(0,React.useState)("Last Month"),period=periodTuple[0],setPeriod=periodTuple[1];
var rollupTuple=(0,React.useState)(!0),showRollup=rollupTuple[0],setShowRollup=rollupTuple[1];
var sourceTuple=(0,React.useState)(null),source=sourceTuple[0],setSource=sourceTuple[1];
var derived=(0,React.useMemo)(function(){var map={};return configs.forEach(function(c){map[c.appId]=F.W$(c,rows)}),map},[configs,rows]);
var toggle=function(key){setCollapsed(function(prev){var next=Object.assign({},prev);return next[key]=!prev[key],next})};
return(0,jsx.jsxs)("div",{className:"jsx-448d443c98f438e mx-auto max-w-7xl px-6 py-8",children:[
(0,jsx.jsx)("h1",{className:"jsx-448d443c98f438e mb-1 text-2xl font-extrabold text-core-navy",children:"Core4 Software Delivery Dashboard"}),
(0,jsx.jsx)("p",{className:"jsx-448d443c98f438e mb-5 text-sm text-slate-500",children:"Scope, quality, time and cost across critical applications. Each category headline shows the forecast at completion with the agreed target beneath it, then the variance at completion (VAC) against that target with its percentage, and Δ, the change over the selected period. Expand a category for detail."}),
(0,jsx.jsxs)("div",{className:"jsx-448d443c98f438e mb-4 flex flex-wrap items-end gap-4 rounded-xl border border-slate-200 bg-white p-4",children:[
(0,jsx.jsx)(Field,{label:"Level (org roll-up)",children:(0,jsx.jsx)("select",{value:level,onChange:function(e){setLevel(e.target.value)},className:"jsx-448d443c98f438e input",children:D.HJ.map(function(l){return(0,jsx.jsx)("option",{value:l,className:"jsx-448d443c98f438e",children:l},l)})})}),
(0,jsx.jsx)(Field,{label:"Period (drives Δ)",children:(0,jsx.jsx)("select",{value:period,onChange:function(e){setPeriod(e.target.value)},className:"jsx-448d443c98f438e input",children:D.PR.map(function(p){return(0,jsx.jsx)("option",{className:"jsx-448d443c98f438e",children:p},p)})})}),
(0,jsx.jsxs)("button",{onClick:function(){setShowRollup(function(v){return!v})},className:"jsx-448d443c98f438e "+("btn "+(showRollup?"btn-on":"")),children:[showRollup?"on ":"","Show roll-up"]}),
!ready&&(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e text-xs text-slate-400",children:"loading saved state..."})]}),
(0,jsx.jsx)("div",{className:"jsx-448d443c98f438e overflow-x-auto rounded-xl border border-slate-200 bg-white",children:(0,jsx.jsxs)("table",{className:"jsx-448d443c98f438e w-full border-collapse text-sm",children:[
(0,jsx.jsx)("thead",{className:"jsx-448d443c98f438e",children:(0,jsx.jsxs)("tr",{className:"jsx-448d443c98f438e border-b border-slate-200 bg-slate-50 text-left",children:[
(0,jsx.jsx)("th",{className:"jsx-448d443c98f438e sticky left-0 z-10 bg-slate-50 px-4 py-3 font-semibold text-slate-600",children:"Metric"}),
showRollup&&(0,jsx.jsxs)("th",{className:"jsx-448d443c98f438e px-4 py-3 text-right font-bold text-core-navy",children:[level," ",(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e font-normal text-slate-400",children:"roll-up"})]}),
configs.map(function(c){return(0,jsx.jsxs)("th",{className:"jsx-448d443c98f438e px-4 py-3 text-right align-top font-bold text-core-navy",children:[
(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e block",children:c.name}),
(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e ml-auto block max-w-[11rem] text-xs font-normal leading-tight text-slate-400",children:c.fullName})]},c.appId)})]})}),
(0,jsx.jsx)("tbody",{className:"jsx-448d443c98f438e",children:GROUPS.map(function(group){return(0,jsx.jsx)(GroupRows,{group:group,configs:configs,derived:derived,period:period,collapsed:!!collapsed[group.key],onToggle:function(){toggle(group.key)},showRollup:showRollup,onSource:setSource},group.key)})})]})}),
(0,jsx.jsx)(Legend,{}),
source&&(0,jsx.jsx)("div",{onClick:function(){setSource(null)},className:"jsx-448d443c98f438e fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",children:(0,jsx.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:"jsx-448d443c98f438e w-full max-w-md rounded-xl bg-white p-6 shadow-xl",children:[
(0,jsx.jsx)("p",{className:"jsx-448d443c98f438e text-xs font-semibold uppercase tracking-wide text-core-accent",children:"Data source"}),
(0,jsx.jsx)("h3",{className:"jsx-448d443c98f438e mt-1 text-lg font-bold text-core-navy",children:source.metric}),
(0,jsx.jsxs)("p",{className:"jsx-448d443c98f438e text-sm text-slate-500",children:["Application: ",source.app]}),
(0,jsx.jsx)("div",{className:"jsx-448d443c98f438e mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700",children:source.text}),
(0,jsx.jsx)("button",{onClick:function(){setSource(null)},className:"jsx-448d443c98f438e mt-4 w-full rounded-lg bg-core-navy px-4 py-2 text-sm font-semibold text-white hover:bg-core-blue",children:"Close"})]})}),
(0,jsx.jsx)(SJ(),{id:"448d443c98f438e",children:".btn.jsx-448d443c98f438e{border:1px solid#cbd5e1;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:7px 12px;font-size:13px;background:white;font-weight:500}.btn-on.jsx-448d443c98f438e{background:#0a1f5c;color:white;border-color:#0a1f5c}"})]})}
function Field(props){return(0,jsx.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,jsx.jsx)("span",{className:"text-xs font-medium text-slate-500",children:props.label}),props.children]})}
function HeadCell(props){var cell=props.cell;return(0,jsx.jsxs)("div",{className:"text-right",children:[
(0,jsx.jsx)("span",{className:"text-base "+(cell.rag?RAG_CLASS[cell.rag]:"font-bold text-core-navy"),children:cell.text}),
cell.sub&&(0,jsx.jsx)("span",{className:"block text-xs font-normal text-slate-500",children:cell.sub}),
cell.vac&&(0,jsx.jsx)("span",{className:"block text-xs font-medium leading-tight "+(cell.rag?RAG_TEXT[cell.rag]:"text-slate-500"),children:cell.vac})]})}
function GroupRows(props){
var group=props.group,configs=props.configs,derived=props.derived,period=props.period,collapsed=props.collapsed,onToggle=props.onToggle,showRollup=props.showRollup,onSource=props.onSource;
return(0,jsx.jsxs)(jsx.Fragment,{children:[
(0,jsx.jsxs)("tr",{className:"cursor-pointer border-y border-slate-200 "+group.color,onClick:onToggle,children:[
(0,jsx.jsxs)("td",{title:group.note,className:"sticky left-0 z-10 px-4 py-2.5 font-semibold "+group.color,children:[
(0,jsx.jsx)("span",{className:"mr-2 inline-block w-3 text-slate-500",children:collapsed?"+":"-"}),
group.title,
group.note?(0,jsx.jsx)("span",{className:"ml-1.5 cursor-help align-super text-[10px] font-normal opacity-60",children:"ⓘ"}):null]}),
showRollup&&(0,jsx.jsx)("td",{className:"px-4 py-2.5",children:(0,jsx.jsx)(HeadCell,{cell:group.rollup(configs,configs.map(function(c){return derived[c.appId]}),period)})}),
configs.map(function(c){return(0,jsx.jsx)("td",{className:"px-4 py-2.5",children:(0,jsx.jsx)(HeadCell,{cell:group.headline(c,derived[c.appId],period)})},c.appId)})]}),
!collapsed&&group.metrics.map(function(metric){return(0,jsx.jsxs)("tr",{className:"border-b border-slate-100 hover:bg-slate-50/60",children:[
(0,jsx.jsx)("td",{className:"sticky left-0 z-10 bg-white px-4 py-2 "+(metric.emphasis?"font-semibold text-slate-800":"text-slate-600"),children:metric.label}),
showRollup&&(0,jsx.jsx)("td",{className:"px-4 py-2 text-right text-slate-400",children:rollupMetric(metric,configs,derived).text}),
configs.map(function(c){var cell=metric.cell(c,derived[c.appId]);
return(0,jsx.jsxs)("td",{className:"cursor-pointer px-4 py-2 text-right hover:bg-sky-50",onClick:function(){onSource({metric:metric.label,app:c.name,text:metric.source})},children:[
(0,jsx.jsx)("span",{className:cell.rag?RAG_CLASS[cell.rag]:"text-slate-800",children:cell.text}),
cell.sub&&(0,jsx.jsx)("span",{className:"block text-xs text-slate-400",children:cell.sub})]},c.appId)})]},metric.label)})]})}
function rollupMetric(metric,configs,derived){
var texts=configs.map(function(c){return metric.cell(c,derived[c.appId]).text});
var first=void 0===texts[0]?"":texts[0];
if(/20\d\d/.test(first)||/FP-based|Hour-based|IFPUG|Nesma|COSMIC|EFS|n\/a/.test(first))return{text:""};
var nums=texts.map(parseNum).filter(function(n){return null!==n});
if(!nums.length)return{text:""};
var sum=nums.reduce(function(a,b){return a+b},0),mean=sum/nums.length;
return first.includes("%")?{text:Math.round(mean)+"%"}:/€.*\/FP/.test(first)?{text:F.s7(mean)+"/FP"}:first.trim().startsWith("€")?{text:F.s7(sum)}:/h\/FP/.test(first)?{text:Math.round(10*mean)/10+" h/FP"}:/FP\/wk/.test(first)?{text:Math.round(10*sum)/10+" FP/wk"}:/FP\/PI/.test(first)?{text:Math.round(10*sum)/10+" FP/PI"}:/FP/.test(first)?{text:Math.round(sum)+" FP"}:/days|hrs/.test(first)?{text:Math.round(mean)+(first.includes("days")?" days":" hrs")}:{text:String(Math.round(10*mean)/10)}}
function parseNum(text){var m=text.match(/-?[\d.,]+/);if(!m)return null;var v=parseFloat(m[0].replace(/,/g,""));return isNaN(v)?null:(/M/.test(text)?v*=1e6:/K/.test(text)&&(v*=1e3),v)}
function Legend(){return(0,jsx.jsxs)("div",{className:"mt-4 flex flex-wrap items-center gap-5 text-xs text-slate-500",children:[
(0,jsx.jsx)("span",{className:"font-medium",children:"RAG:"}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-good"})," on target"]}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-warn"})," watch"]}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-bad"})," off target"]}),
(0,jsx.jsx)("span",{className:"ml-4",children:"VAC = forecast at completion minus target, with the same gap as a percentage of that target. Δ = change over the selected period."}),
(0,jsx.jsx)("span",{children:"Thresholds are owner-configurable per category (Configuration)."})]})}}},function(e){e.O(0,[29,620,971,117,744],function(){return e(e.s=1113)}),_N_E=e.O()}]);