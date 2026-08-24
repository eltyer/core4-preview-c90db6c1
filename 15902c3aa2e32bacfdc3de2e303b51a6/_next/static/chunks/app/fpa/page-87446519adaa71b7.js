(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{8324:function(e,t,s){Promise.resolve().then(s.bind(s,3859))},3859:function(__mod__,t,__wr__){"use strict";__wr__.r(t),__wr__.d(t,{default:function(){return FpaPage}});var jsx=__wr__(7437),styledJsx=__wr__(29),SJ=__wr__.n(styledJsx),React=__wr__(2265),Store=__wr__(9835),F=__wr__(2369),D=__wr__(1930);
var TYPES=["EI","EO","EQ","ILF","EIF"];
var COMPLEXITIES=["Low","Medium","High"];
var STATUSES=["Open","DoR","DoD","Tested","Deployed"];
var STATUS_COLOR={Open:"bg-slate-100 text-slate-600",DoR:"bg-sky-100 text-sky-700",DoD:"bg-indigo-100 text-indigo-700",Tested:"bg-amber-100 text-amber-700",Deployed:"bg-emerald-100 text-emerald-700"};
var CHANGE_COLOR={New:"bg-emerald-100 text-emerald-700",Changed:"bg-amber-100 text-amber-700",Deleted:"bg-rose-100 text-rose-700",Unchanged:"bg-slate-100 text-slate-600"};
function factorPct(config,row){return Math.round(100*D.cf(config&&config.changeRules,row.changeType,row.changePct))}
function FpaPage(){
var store=(0,Store.o)(),rows=store.rows,configs=store.configs,audit=store.audit,addRow=store.addRow,deleteRow=store.deleteRow,updateRow=store.updateRow,uploadRows=store.uploadRows,recalcCosts=store.recalcCosts,reset=store.reset;
var appTuple=(0,React.useState)("aodb"),appId=appTuple[0],setAppId=appTuple[1];
var modeTuple=(0,React.useState)("view"),mode=modeTuple[0],setMode=modeTuple[1];
var auditTuple=(0,React.useState)(!1),showAudit=auditTuple[0],setShowAudit=auditTuple[1];
var queryTuple=(0,React.useState)(""),query=queryTuple[0],setQuery=queryTuple[1];
var typeTuple=(0,React.useState)("all"),typeFilter=typeTuple[0],setTypeFilter=typeTuple[1];
var cxTuple=(0,React.useState)("all"),cxFilter=cxTuple[0],setCxFilter=cxTuple[1];
var statusTuple=(0,React.useState)("all"),statusFilter=statusTuple[0],setStatusFilter=statusTuple[1];
var changeTuple=(0,React.useState)("all"),changeFilter=changeTuple[0],setChangeFilter=changeTuple[1];
var fileRef=(0,React.useRef)(null);
var appRows=(0,React.useMemo)(function(){return rows.filter(function(r){return r.appId===appId})},[rows,appId]);
var config=configs.find(function(c){return c.appId===appId});
var visible=(0,React.useMemo)(function(){return appRows.filter(function(r){
return("all"===typeFilter||r.type===typeFilter)&&("all"===cxFilter||r.complexity===cxFilter)&&("all"===statusFilter||r.status===statusFilter)&&("all"===changeFilter||r.changeType===changeFilter)&&(""===query.trim()||(r.id+" "+r.name).toLowerCase().includes(query.trim().toLowerCase()))})},[appRows,typeFilter,cxFilter,statusFilter,changeFilter,query]);
var liveRows=appRows.filter(function(r){return"Deleted"!==r.changeType});
var totalFp=liveRows.reduce(function(a,r){return a+r.fp},0);
var deliveredFp=liveRows.filter(function(r){return"Deployed"===r.status}).reduce(function(a,r){return a+r.fp},0);
var totalCost=appRows.reduce(function(a,r){return a+r.cost},0);
var visibleFp=visible.reduce(function(a,r){return a+r.fp},0);
var appAudit=audit.filter(function(a){return a.target==="app:"+appId||a.target.startsWith(appId.toUpperCase())||a.target==="config:"+appId});
var clearFilters=function(){setQuery(""),setTypeFilter("all"),setCxFilter("all"),setStatusFilter("all"),setChangeFilter("all")};
var filtersActive=query||"all"!==typeFilter||"all"!==cxFilter||"all"!==statusFilter||"all"!==changeFilter;
return(0,jsx.jsxs)("div",{className:"mx-auto max-w-7xl px-6 py-8",children:[
(0,jsx.jsxs)("div",{className:"mb-1 flex items-baseline justify-between",children:[
(0,jsx.jsx)("h1",{className:"text-2xl font-extrabold text-core-navy",children:"FPA sheet"}),
(0,jsx.jsx)("button",{onClick:reset,className:"text-xs text-slate-400 hover:text-bad",children:"reset all to seed"})]}),
(0,jsx.jsxs)("p",{className:"mb-5 text-sm text-slate-500",children:[config.fullName,". Uploaded by the certified counter, then editable in-browser. Method:"," ",(0,jsx.jsx)("strong",{children:config.fpMethod}),". Use ",(0,jsx.jsx)("strong",{children:"View"})," to read, ",(0,jsx.jsx)("strong",{children:"Edit"})," to change (every change is recorded in the audit trail)."]}),
(0,jsx.jsxs)("div",{className:"mb-4 flex flex-wrap items-center gap-2",children:[
configs.map(function(c){return(0,jsx.jsx)("button",{onClick:function(){setAppId(c.appId)},className:"rounded-lg px-3 py-1.5 text-sm font-medium "+(appId===c.appId?"bg-core-navy text-white":"border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"),children:c.name},c.appId)}),
(0,jsx.jsxs)("div",{className:"ml-auto flex items-center gap-3",children:[
(0,jsx.jsx)("div",{className:"flex overflow-hidden rounded-lg border border-slate-200",children:["view","edit"].map(function(m){return(0,jsx.jsx)("button",{onClick:function(){setMode(m)},className:"px-3 py-1.5 text-sm font-medium capitalize "+(mode===m?"bg-core-navy text-white":"bg-white text-slate-600 hover:bg-slate-50"),children:m},m)})}),
"edit"===mode&&(0,jsx.jsxs)("div",{className:"flex items-center gap-2",children:[
(0,jsx.jsx)("button",{onClick:function(){addRow(appId)},className:"rounded-lg bg-core-blue px-3 py-1.5 text-sm font-semibold text-white hover:bg-core-navy",children:"Add function"}),
(0,jsx.jsx)("button",{onClick:function(){recalcCosts(appId)},title:"Re-apply the project's FPA change rules to every function in this sheet",className:"rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50",children:"Recalculate from rules"}),
(0,jsx.jsx)("button",{onClick:function(){
var n=appRows.length+1;
var next=appRows.map(function(r){return Object.assign({},r)});
next.push({id:appId.toUpperCase()+"-UPL-"+n,appId:appId,name:n+".0.0.0 - Imported function (from upload)",type:"EI",fp:5,complexity:"Medium",status:"DoR",changeType:"New",changePct:100,dateDoR:"2026-06-15",paid:!1});
uploadRows(appId,next)},className:"rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50",children:"Simulate upload"}),
(0,jsx.jsx)("button",{onClick:function(){fileRef.current&&fileRef.current.click()},className:"rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50",children:"Upload CSV"}),
(0,jsx.jsx)("input",{ref:fileRef,type:"file",accept:".csv,text/csv",className:"hidden",onChange:function(e){
var file=e.target.files&&e.target.files[0];
if(!file)return;
var reader=new FileReader;
reader.onload=function(){try{var parsed=parseCsv(String(reader.result),appId);parsed.length&&uploadRows(appId,parsed)}catch(err){alert("Could not parse CSV. Expected header: identifier,name,type,fp,complexity,status,change,changepct")}};
reader.readAsText(file),e.target.value=""}})]})]})]}),
(0,jsx.jsxs)("div",{className:"mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4",children:[
(0,jsx.jsx)(Stat,{label:"Functions",value:String(appRows.length)}),
(0,jsx.jsx)(Stat,{label:"Total FP (excl. deleted)",value:totalFp+" FP"}),
(0,jsx.jsx)(Stat,{label:"Delivered FP",value:deliveredFp+" FP"}),
(0,jsx.jsx)(Stat,{label:"Chargeable value (after change factors)",value:F.s7(totalCost)})]}),
(0,jsx.jsxs)("div",{className:"mb-3 flex flex-wrap items-center gap-2",children:[
(0,jsx.jsx)("input",{value:query,onChange:function(e){setQuery(e.target.value)},placeholder:"Search identifier or name",className:"input w-64"}),
(0,jsx.jsxs)("select",{value:typeFilter,onChange:function(e){setTypeFilter(e.target.value)},className:"input",children:[(0,jsx.jsx)("option",{value:"all",children:"All types"}),TYPES.map(function(v){return(0,jsx.jsx)("option",{children:v},v)})]}),
(0,jsx.jsxs)("select",{value:cxFilter,onChange:function(e){setCxFilter(e.target.value)},className:"input",children:[(0,jsx.jsx)("option",{value:"all",children:"All complexity"}),COMPLEXITIES.map(function(v){return(0,jsx.jsx)("option",{children:v},v)})]}),
(0,jsx.jsxs)("select",{value:changeFilter,onChange:function(e){setChangeFilter(e.target.value)},className:"input",children:[(0,jsx.jsx)("option",{value:"all",children:"All change types"}),D.CT.map(function(v){return(0,jsx.jsx)("option",{children:v},v)})]}),
(0,jsx.jsxs)("select",{value:statusFilter,onChange:function(e){setStatusFilter(e.target.value)},className:"input",children:[(0,jsx.jsx)("option",{value:"all",children:"All statuses"}),STATUSES.map(function(v){return(0,jsx.jsx)("option",{children:v},v)})]}),
filtersActive&&(0,jsx.jsx)("button",{onClick:clearFilters,className:"text-sm text-slate-400 hover:text-bad",children:"clear"}),
(0,jsx.jsxs)("span",{className:"ml-auto text-sm text-slate-500",children:[visible.length," of ",appRows.length," functions · ",visibleFp," FP"]})]}),
"view"===mode?(0,jsx.jsx)(ViewTable,{rows:visible,config:config}):(0,jsx.jsxs)(jsx.Fragment,{children:[
(0,jsx.jsx)("div",{className:"overflow-x-auto rounded-xl border border-slate-200 bg-white",children:(0,jsx.jsxs)("table",{className:"w-full border-collapse text-sm",children:[
(0,jsx.jsx)("thead",{children:(0,jsx.jsxs)("tr",{className:"border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500",children:[
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"Identifier"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"FPA name"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"Type"}),
(0,jsx.jsx)("th",{className:"px-3 py-2 text-right",children:"#FP"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"Complexity"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"Change"}),
(0,jsx.jsx)("th",{className:"px-3 py-2 text-right",children:"Chg %"}),
(0,jsx.jsx)("th",{className:"px-3 py-2 text-right",children:"Factor"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"Status"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"DoR"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"DoD"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"Tested"}),
(0,jsx.jsx)("th",{className:"px-3 py-2",children:"Deployed"}),
(0,jsx.jsx)("th",{className:"px-3 py-2 text-center",children:"Paid"}),
(0,jsx.jsx)("th",{className:"px-3 py-2 text-right",children:"Cost"}),
(0,jsx.jsx)("th",{className:"px-3 py-2"})]})}),
(0,jsx.jsxs)("tbody",{children:[
visible.map(function(r){return(0,jsx.jsx)(EditRow,{row:r,config:config,onChange:updateRow,onDelete:deleteRow,statusColor:STATUS_COLOR},r.id)}),
0===visible.length&&(0,jsx.jsx)("tr",{children:(0,jsx.jsx)("td",{colSpan:16,className:"px-3 py-6 text-center text-slate-400",children:"No functions match the filters."})})]})]})}),
(0,jsx.jsx)("p",{className:"mt-2 text-xs text-slate-400",children:"#FP is set automatically from the IFPUG weights for the chosen type and complexity. Cost follows #FP times the complexity price book times the change factor that the project's FPA change rules assign to the change type and degree of change (Configuration). Editing an already deployed function switches its change type to Changed automatically. Override Cost by editing it directly."})]}),
(0,jsx.jsxs)("div",{className:"mt-8",children:[
(0,jsx.jsxs)("button",{onClick:function(){setShowAudit(function(v){return!v})},className:"mb-3 flex items-center gap-2 text-lg font-bold text-core-navy",children:[
(0,jsx.jsx)("span",{className:"text-slate-400",children:showAudit?"-":"+"})," Audit trail",
(0,jsx.jsx)("span",{className:"rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500",children:appAudit.length})]}),
showAudit&&(0,jsx.jsx)("div",{className:"overflow-hidden rounded-xl border border-slate-200 bg-white",children:0===appAudit.length?(0,jsx.jsxs)("p",{className:"px-4 py-6 text-center text-sm text-slate-400",children:["No changes yet for ",config.name,". Switch to Edit and change a cell to see the trail."]}):(0,jsx.jsxs)("table",{className:"w-full text-sm",children:[
(0,jsx.jsx)("thead",{children:(0,jsx.jsxs)("tr",{className:"border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500",children:[
(0,jsx.jsx)("th",{className:"px-4 py-2",children:"When"}),
(0,jsx.jsx)("th",{className:"px-4 py-2",children:"User"}),
(0,jsx.jsx)("th",{className:"px-4 py-2",children:"Action"}),
(0,jsx.jsx)("th",{className:"px-4 py-2",children:"Target"}),
(0,jsx.jsx)("th",{className:"px-4 py-2",children:"Field"}),
(0,jsx.jsx)("th",{className:"px-4 py-2",children:"Change"})]})}),
(0,jsx.jsx)("tbody",{children:appAudit.slice(0,60).map(function(a){return(0,jsx.jsxs)("tr",{className:"border-b border-slate-100",children:[
(0,jsx.jsx)("td",{className:"whitespace-nowrap px-4 py-1.5 text-slate-500",children:new Date(a.timestamp).toLocaleString("en-GB")}),
(0,jsx.jsx)("td",{className:"px-4 py-1.5 text-slate-700",children:a.user}),
(0,jsx.jsx)("td",{className:"px-4 py-1.5",children:(0,jsx.jsx)("span",{className:"rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-slate-600",children:a.action})}),
(0,jsx.jsx)("td",{className:"px-4 py-1.5 font-mono text-xs text-slate-500",children:a.target}),
(0,jsx.jsx)("td",{className:"px-4 py-1.5 text-slate-600",children:void 0===a.field?"":a.field}),
(0,jsx.jsx)("td",{className:"px-4 py-1.5 text-slate-600",children:a.note?a.note:(0,jsx.jsxs)("span",{children:["from ",(0,jsx.jsx)("span",{className:"text-bad/80",children:trunc(a.oldValue)})," to ",(0,jsx.jsx)("span",{className:"text-good",children:trunc(a.newValue)})]})})]},a.id)})})]})})]})]})}
function parseCsv(text,appId){
var lines=text.trim().split(/\r?\n/);
var head=lines[0].toLowerCase().split(",").map(function(s){return s.trim()});
var at=function(name){return head.indexOf(name)};
return lines.slice(1).filter(Boolean).map(function(line,idx){
var cells=line.split(",").map(function(s){return s.trim()});
var fp=parseFloat(cells[at("fp")]||"0")||0;
var complexity=cells[at("complexity")]||"Medium";
var changeType=cells[at("change")]||"New";
var changePct=parseFloat(cells[at("changepct")]||"")||("Changed"===changeType?50:100);
return{id:cells[at("identifier")]||appId.toUpperCase()+"-CSV-"+(idx+1),appId:appId,name:cells[at("name")]||"Imported",type:cells[at("type")]||"EI",fp:fp,complexity:complexity,status:cells[at("status")]||"Open",changeType:changeType,changePct:changePct,paid:!1}})}
function ViewTable(props){var rows=props.rows,config=props.config;
return(0,jsx.jsx)("div",{className:"overflow-x-auto rounded-xl border border-slate-200 bg-white",children:(0,jsx.jsxs)("table",{className:"w-full border-collapse text-sm",children:[
(0,jsx.jsx)("thead",{children:(0,jsx.jsxs)("tr",{className:"border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500",children:[
(0,jsx.jsx)("th",{className:"px-4 py-2.5",children:"Identifier"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5",children:"FPA name"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5",children:"Type"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5 text-right",children:"#FP"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5",children:"Complexity"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5",children:"Change"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5 text-right",children:"Factor"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5",children:"Status"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5",children:"Deployed"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5 text-center",children:"Paid"}),
(0,jsx.jsx)("th",{className:"px-4 py-2.5 text-right",children:"Cost"})]})}),
(0,jsx.jsxs)("tbody",{children:[
rows.map(function(r){return(0,jsx.jsxs)("tr",{className:"border-b border-slate-100 hover:bg-slate-50/50"+("Deleted"===r.changeType?" opacity-60":""),children:[
(0,jsx.jsx)("td",{className:"px-4 py-2 font-mono text-xs text-slate-400",children:r.id}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-slate-700"+("Deleted"===r.changeType?" line-through":""),children:r.name}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-slate-600",children:r.type}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-right font-medium text-slate-800",children:r.fp}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-slate-600",children:r.complexity}),
(0,jsx.jsx)("td",{className:"px-4 py-2",children:(0,jsx.jsx)("span",{className:"rounded-full px-2 py-0.5 text-xs font-medium "+CHANGE_COLOR[r.changeType],children:changeLabel(r)})}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-right text-slate-600",children:factorPct(config,r)+"%"}),
(0,jsx.jsx)("td",{className:"px-4 py-2",children:(0,jsx.jsx)("span",{className:"rounded-full px-2 py-0.5 text-xs font-medium "+STATUS_COLOR[r.status],children:r.status})}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-slate-500",children:r.dateDeployed?F.G$(r.dateDeployed):""}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-center",children:r.paid?"Yes":"No"}),
(0,jsx.jsx)("td",{className:"px-4 py-2 text-right text-slate-700",children:F.s7(r.cost)})]},r.id)}),
0===rows.length&&(0,jsx.jsx)("tr",{children:(0,jsx.jsx)("td",{colSpan:11,className:"px-4 py-6 text-center text-slate-400",children:"No functions yet."})})]})]})})}
function changeLabel(row){return"Changed"===row.changeType?"Changed "+(void 0===row.changePct?50:row.changePct)+"%":row.changeType}
function trunc(v){if(!v)return"(empty)";var s=v.replace(/^"|"$/g,"");return s.length>28?s.slice(0,28)+"...":s}
function Stat(props){return(0,jsx.jsxs)("div",{className:"rounded-xl border border-slate-200 bg-white px-4 py-3",children:[(0,jsx.jsx)("p",{className:"text-xs text-slate-500",children:props.label}),(0,jsx.jsx)("p",{className:"text-lg font-bold text-core-navy",children:props.value})]})}
function EditRow(props){
var row=props.row,config=props.config,onChange=props.onChange,onDelete=props.onDelete,statusColor=props.statusColor;
var isChanged="Changed"===row.changeType;
return(0,jsx.jsxs)("tr",{className:"jsx-8601196c1c51a128 border-b border-slate-100 hover:bg-slate-50/50"+("Deleted"===row.changeType?" opacity-60":""),children:[
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5 font-mono text-xs text-slate-400",children:row.id}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5",children:(0,jsx.jsx)(TextCell,{value:row.name,onCommit:function(v){onChange(row.id,{name:v})},className:"w-72"})}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5",children:(0,jsx.jsx)("select",{value:row.type,onChange:function(e){onChange(row.id,{type:e.target.value})},className:"jsx-8601196c1c51a128 cell-select",children:TYPES.map(function(v){return(0,jsx.jsx)("option",{className:"jsx-8601196c1c51a128",children:v},v)})})}),
(0,jsx.jsx)("td",{title:"Set by IFPUG weights from type and complexity",className:"jsx-8601196c1c51a128 px-3 py-1.5 text-right font-medium text-slate-700",children:row.fp}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5",children:(0,jsx.jsx)("select",{value:row.complexity,onChange:function(e){onChange(row.id,{complexity:e.target.value})},className:"jsx-8601196c1c51a128 cell-select",children:COMPLEXITIES.map(function(v){return(0,jsx.jsx)("option",{className:"jsx-8601196c1c51a128",children:v},v)})})}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5",children:(0,jsx.jsx)("select",{value:row.changeType,onChange:function(e){onChange(row.id,{changeType:e.target.value})},title:"Which FPA change rule applies to this function",className:"jsx-8601196c1c51a128 "+("cell-select "+CHANGE_COLOR[row.changeType]),children:D.CT.map(function(v){return(0,jsx.jsx)("option",{className:"jsx-8601196c1c51a128",children:v},v)})})}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5 text-right",children:isChanged?(0,jsx.jsx)(NumberCell,{value:void 0===row.changePct?50:row.changePct,onCommit:function(v){onChange(row.id,{changePct:v})},className:"w-16"}):(0,jsx.jsx)("span",{className:"jsx-8601196c1c51a128 text-slate-300",children:"—"})}),
(0,jsx.jsx)("td",{title:"Derived from the project's FPA change rules (Configuration)",className:"jsx-8601196c1c51a128 px-3 py-1.5 text-right font-medium text-slate-700",children:factorPct(config,row)+"%"}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5",children:(0,jsx.jsx)("select",{value:row.status,onChange:function(e){onChange(row.id,{status:e.target.value})},className:"jsx-8601196c1c51a128 "+("cell-select "+statusColor[row.status]),children:STATUSES.map(function(v){return(0,jsx.jsx)("option",{className:"jsx-8601196c1c51a128",children:v},v)})})}),
(0,jsx.jsx)(DateCell,{value:row.dateDoR,onCommit:function(v){onChange(row.id,{dateDoR:v})}}),
(0,jsx.jsx)(DateCell,{value:row.dateDoD,onCommit:function(v){onChange(row.id,{dateDoD:v})}}),
(0,jsx.jsx)(DateCell,{value:row.dateTested,onCommit:function(v){onChange(row.id,{dateTested:v})}}),
(0,jsx.jsx)(DateCell,{value:row.dateDeployed,onCommit:function(v){onChange(row.id,{dateDeployed:v})}}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5 text-center",children:(0,jsx.jsx)("input",{type:"checkbox",checked:row.paid,onChange:function(e){onChange(row.id,{paid:e.target.checked})},className:"jsx-8601196c1c51a128"})}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5 text-right",children:(0,jsx.jsx)(NumberCell,{value:row.cost,onCommit:function(v){onChange(row.id,{cost:v})},className:"w-24"})}),
(0,jsx.jsx)("td",{className:"jsx-8601196c1c51a128 px-3 py-1.5",children:(0,jsx.jsx)("button",{onClick:function(){onDelete(row.id)},title:"Delete",className:"jsx-8601196c1c51a128 text-slate-300 hover:text-bad",children:"x"})}),
(0,jsx.jsx)(SJ(),{id:"8601196c1c51a128",children:".cell-select{border:1px solid#e2e8f0;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;padding:3px 6px;font-size:13px;background:white}"})]})}
function TextCell(props){var value=props.value,onCommit=props.onCommit,cls=props.className||"";
var st=(0,React.useState)(value),draft=st[0],setDraft=st[1];
(0,React.useEffect)(function(){setDraft(value)},[value]);
return(0,jsx.jsx)("input",{className:"rounded-md border border-slate-200 px-2 py-1 text-sm "+cls,value:draft,onChange:function(e){setDraft(e.target.value)},onBlur:function(){draft!==value&&onCommit(draft)}})}
function NumberCell(props){var value=props.value,onCommit=props.onCommit,cls=props.className||"w-16";
var st=(0,React.useState)(String(value)),draft=st[0],setDraft=st[1];
(0,React.useEffect)(function(){setDraft(String(value))},[value]);
return(0,jsx.jsx)("input",{type:"number",className:"rounded-md border border-slate-200 px-2 py-1 text-right text-sm "+cls,value:draft,onChange:function(e){setDraft(e.target.value)},onBlur:function(){var v=parseFloat(draft);isNaN(v)||v===value?setDraft(String(value)):onCommit(v)}})}
function DateCell(props){var value=props.value,onCommit=props.onCommit;
return(0,jsx.jsx)("td",{className:"px-3 py-1.5",children:(0,jsx.jsx)("input",{type:"date",value:null!=value?value:"",onChange:function(e){onCommit(e.target.value)},className:"rounded-md border border-slate-200 px-1.5 py-1 text-xs text-slate-600"})})}}},function(e){e.O(0,[29,620,971,117,744],function(){return e(e.s=8324)}),_N_E=e.O()}]);