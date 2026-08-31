(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{1113:function(e,t,a){Promise.resolve().then(a.bind(a,1720))},1720:function(__mod__,t,__wr__){"use strict";__wr__.r(t),__wr__.d(t,{default:function(){return DashboardPage}});var jsx=__wr__(7437),styledJsx=__wr__(29),SJ=__wr__.n(styledJsx),React=__wr__(2265),Store=__wr__(9835),D=__wr__(1930),F=__wr__(2369);
var DAY=864e5;
var RAG_CLASS={good:"text-good font-semibold",warn:"text-warn font-semibold",bad:"text-bad font-semibold"};
var BASIS_CLASS={agreed:"text-slate-400","to date":"text-slate-400",period:"text-amber-500/70",forecast:"text-core-accent/70"};
var VIEWS=[{key:"completion",label:"At completion"},{key:"period",label:"This period"}];
var PERIOD_LABEL={"Last Month":"last month","Last Quarter":"last quarter","Last PI":"last PI",YTD:"year to date"};
var COST_NOTE="Cost covers build and built-in testing only. Separate test phases, licences and run/maintenance are not included in these figures.";
var pct=function(v){return v+"%"};
function periodLabel(p){return PERIOD_LABEL[p]||String(p).toLowerCase()}
function unit(v,one,many){return 1===Math.abs(v)?one:many}
function dirRag(v){return v>0?"good":v<0?"bad":null}
function abs(v){return Math.abs(v)}
function pctOf(v,base){var b=Math.abs(base);return isFinite(b)&&0!==b?Math.round(abs(v)/b*100)+"%":null}
function gapWord(gap,unitOne,unitMany,above,below,onTarget,target,base){
if(0===gap)return onTarget+" "+target;
var p=pctOf(gap,base);
return abs(gap)+" "+unit(gap,unitOne,unitMany)+" "+(gap>0?above:below)+" "+target+(p?" ("+p+")":"")}
function moveWord(v,unitOne,unitMany,up,down,flat){
return 0===v?flat:abs(v)+" "+unit(v,unitOne,unitMany)+" "+(v>0?up:down)}
function fixed1(v){return(Math.round(10*v)/10).toFixed(1)}
var PERIOD_WEEKS={"Last Month":4.3,"Last Quarter":13,"Last PI":10,YTD:26};
var BETTER_MIX={security:1.3,maintainability:.8,reliability:1.1,efficiency:.7,functionalSuitability:1.1};
var HAPPIER_MIX={team:1.2,collaboration:.9,usage:.9};
function sumBy(list,fn){return list.reduce(function(a,x,i){return a+fn(x,i)},0)}
function weeksIn(period){return PERIOD_WEEKS[period]||4.3}
function ptsMove(v){return moveWord(v,"pt","pts","higher","lower","no change")}
function decMove(v){return 0===v?"no change":fixed1(abs(v))+" "+(v>0?"higher":"lower")}
function moneyMove(v){return 0===Math.round(v)?"no change":F.s7(abs(v))+" "+(v>0?"higher":"lower")}
function fpMove(v){return 0===v?"no change":abs(v)+" FP "+(v>0?"added":"removed")}
function fpLevel(v){return 0===v?"no change":abs(v)+" FP "+(v>0?"higher":"lower")}
function spendIn(c,d,period){return d.actuals*F.hy(c,period).spendShare}
function eacMove(c,d,period){return d.eac*(F.hy(c,period).eacShiftShare||0)}
function avg(list){return list.length?list.reduce(function(a,b){return a+b},0)/list.length:0}
function shortDate(iso){return new Date(Date.parse(iso)).toLocaleDateString("en-GB",{day:"numeric",month:"short"})}
function shiftDate(iso,days){return new Date(Date.parse(iso)+days*DAY).toISOString().slice(0,10)}
var GROUPS=[
{key:"overview",title:"1. Overview",color:"bg-slate-100 text-slate-700",
completion:function(config,d){return{text:d.totalFp+" FP",sub:config.overview.developers+" developers"}},
change:function(config,d,period){
var moved=F.hy(config,period).scopeFp||0,prev=d.totalFp-moved;
return{text:0===moved?"no change":abs(moved)+" FP "+(moved>0?"added":"removed"),sub:prev+" FP → "+d.totalFp+" FP",rag:dirRag(-moved)}},
rollupCompletion:function(configs,derived){return{text:derived.reduce(function(a,d){return a+d.totalFp},0)+" FP",sub:configs.reduce(function(a,c){return a+c.overview.developers},0)+" developers"}},
rollupChange:function(configs,derived,period){
var moved=configs.reduce(function(a,c){return a+(F.hy(c,period).scopeFp||0)},0),total=derived.reduce(function(a,d){return a+d.totalFp},0);
return{text:0===moved?"no change":abs(moved)+" FP "+(moved>0?"added":"removed"),sub:total-moved+" FP → "+total+" FP",rag:dirRag(-moved)}},
metrics:[{label:"Contract type",basis:"agreed",noRollup:!0,source:"Configuration, contract-type toggle",cell:function(c){return{text:"fp"===c.contractType?"FP-based":"Hour-based"}}},{label:"FP method",basis:"agreed",noRollup:!0,source:"Configuration, FP counting method",cell:function(c){return{text:c.fpMethod}}},{label:"Lines of Code",basis:"to date",changeRollup:!0,source:"TiCS (interface)",cell:function(c){return{text:c.overview.loc.toLocaleString("en-US")}},change:function(c,d,period){var v=F.hy(c,period).locAdded||0;return{text:0===v?"no change":v.toLocaleString("en-US")+" added"}},rollupChangeCell:function(configs,derived,period){var v=sumBy(configs,function(c){return F.hy(c,period).locAdded||0});return{text:0===v?"no change":v.toLocaleString("en-US")+" added"}}},{label:"Complexity Index",basis:"to date",source:"TiCS (interface)",cell:function(c){return{text:c.overview.complexityIndex.toFixed(1)}}},{label:"# Developers",basis:"to date",source:"Oracle / roster",cell:function(c){return{text:String(c.overview.developers)}},rollupCell:function(configs){return{text:String(sumBy(configs,function(c){return c.overview.developers}))}}},{label:"Total scope",basis:"forecast",emphasis:!0,changeRollup:!0,source:"Derived: sum of all counted FP, excluding deleted functions",cell:function(c,d){return{text:d.totalFp+" FP"}},change:function(c,d,period){var v=F.hy(c,period).scopeFp||0;return{text:fpMove(v),rag:dirRag(-v)}}}]},
{key:"better",title:"2. Better (Quality)",color:"bg-emerald-50 text-emerald-800",
completion:function(config,d){
var target=config.qualityTarget,floor=F.gF(target),g=F.b9(d.betterScore);
return{text:g+" ("+d.betterScore+"%)",sub:gapWord(d.betterScore-floor,"pt","pts","above target","below target","on target",target,floor),rag:F.I(g)>=F.I(target)?"good":F.I(g)===F.I(target)-1?"warn":"bad"}},
change:function(config,d,period){
var h=F.hy(config,period),prev=d.betterScore-h.better,gNow=F.b9(d.betterScore),gPrev=F.b9(prev);
var move=prev+"% → "+d.betterScore+"%";
return{text:moveWord(h.better,"pt","pts","higher","lower","no change"),sub:gPrev!==gNow?gPrev+" → "+gNow+" ("+move+")":move,rag:dirRag(h.better)}},
rollupCompletion:function(configs,derived){
var score=Math.round(avg(derived.map(function(d){return d.betterScore}))),floor=Math.round(avg(configs.map(function(c){return F.gF(c.qualityTarget)})));
return{text:F.b9(score)+" ("+score+"%)",sub:gapWord(score-floor,"pt","pts","above target","below target","on target",F.b9(floor),floor)}},
rollupChange:function(configs,derived,period){
var score=Math.round(avg(derived.map(function(d){return d.betterScore}))),delta=Math.round(avg(configs.map(function(c){return F.hy(c,period).better})));
return{text:moveWord(delta,"pt","pts","higher","lower","no change"),sub:score-delta+"% → "+score+"%",rag:dirRag(delta)}},
metrics:[{label:"Agreed quality grade",basis:"agreed",source:"Configuration, agreed quality grade for this application",cell:function(c){return{text:c.qualityTarget+" ("+F.gF(c.qualityTarget)+"%)"}}},{label:"Security (ISO 5055)",basis:"to date",emphasis:!0,source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.security),rag:F.wq(c.better.security,c.thresholds.better)}},change:function(c,d,period){var v=Math.round(F.hy(c,period).better*BETTER_MIX.security);return{text:ptsMove(v),rag:dirRag(v)}}},{label:"Maintainability (ISO 5055)",basis:"to date",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.maintainability),rag:F.wq(c.better.maintainability,c.thresholds.better)}},change:function(c,d,period){var v=Math.round(F.hy(c,period).better*BETTER_MIX.maintainability);return{text:ptsMove(v),rag:dirRag(v)}}},{label:"Reliability (ISO 5055)",basis:"to date",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.reliability),rag:F.wq(c.better.reliability,c.thresholds.better)}},change:function(c,d,period){var v=Math.round(F.hy(c,period).better*BETTER_MIX.reliability);return{text:ptsMove(v),rag:dirRag(v)}}},{label:"Efficiency (ISO 5055)",basis:"to date",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.efficiency),rag:F.wq(c.better.efficiency,c.thresholds.better)}},change:function(c,d,period){var v=Math.round(F.hy(c,period).better*BETTER_MIX.efficiency);return{text:ptsMove(v),rag:dirRag(v)}}},{label:"Functional suitability",basis:"to date",source:"TiCS (interface)",cell:function(c){return{text:pct(c.better.functionalSuitability),rag:F.wq(c.better.functionalSuitability,c.thresholds.better)}},change:function(c,d,period){var v=Math.round(F.hy(c,period).better*BETTER_MIX.functionalSuitability);return{text:ptsMove(v),rag:dirRag(v)}}},{label:"MTBF",basis:"to date",source:"Jira, incident tickets (open/close). No period history is held for incident statistics in this prototype",cell:function(c){return{text:c.better.mtbf+" days"}}},{label:"MTTR",basis:"to date",source:"Jira, incident tickets (open/close). No period history is held for incident statistics in this prototype",cell:function(c){return{text:c.better.mttr+" hrs"}}},{label:"Quality at completion",changeLabel:"Quality score",basis:"forecast",emphasis:!0,source:"Derived: average of the five ISO 5055 scores. Quality has no separate forecast model, so today's score is the forecast",cell:function(c,d){var g=F.b9(d.betterScore);return{text:g+" ("+d.betterScore+"%)",rag:F.I(g)>=F.I(c.qualityTarget)?"good":F.I(g)===F.I(c.qualityTarget)-1?"warn":"bad"}},change:function(c,d,period){var h=F.hy(c,period);return{text:ptsMove(h.better),rag:dirRag(h.better)}}}]},
{key:"happier",title:"3. Happier (Happiness)",color:"bg-amber-50 text-amber-800",
completion:function(config,d){
var target=config.thresholds.happier.green,gap=Math.round(10*(d.happierScore-target))/10;
return{text:d.happierScore.toFixed(1),sub:0===gap?"on target "+target.toFixed(1):fixed1(abs(gap))+" "+(gap>0?"above target ":"below target ")+target.toFixed(1)+" ("+pctOf(gap,target)+")",rag:F.wq(d.happierScore,config.thresholds.happier)}},
change:function(config,d,period){
var h=F.hy(config,period),prev=Math.round(10*(d.happierScore-h.happier))/10;
return{text:0===h.happier?"no change":fixed1(abs(h.happier))+" "+(h.happier>0?"higher":"lower"),sub:prev.toFixed(1)+" → "+d.happierScore.toFixed(1),rag:dirRag(h.happier)}},
rollupCompletion:function(configs,derived){
var score=Math.round(10*avg(derived.map(function(d){return d.happierScore})))/10,target=Math.round(10*avg(configs.map(function(c){return c.thresholds.happier.green})))/10,gap=Math.round(10*(score-target))/10;
return{text:score.toFixed(1),sub:0===gap?"on target "+target.toFixed(1):fixed1(abs(gap))+" "+(gap>0?"above target ":"below target ")+target.toFixed(1)+" ("+pctOf(gap,target)+")"}},
rollupChange:function(configs,derived,period){
var score=Math.round(10*avg(derived.map(function(d){return d.happierScore})))/10,delta=Math.round(10*avg(configs.map(function(c){return F.hy(c,period).happier})))/10;
return{text:0===delta?"no change":fixed1(abs(delta))+" "+(delta>0?"higher":"lower"),sub:(Math.round(10*(score-delta))/10).toFixed(1)+" → "+score.toFixed(1),rag:dirRag(delta)}},
metrics:[{label:"Agreed target",basis:"agreed",source:"Configuration, RAG threshold for Happier",cell:function(c){return{text:c.thresholds.happier.green.toFixed(1)}}},{label:"Team happiness",basis:"to date",emphasis:!0,source:"Happiness survey (per sprint)",cell:function(c){return{text:c.happier.team.toFixed(1),rag:F.wq(c.happier.team,c.thresholds.happier)}},change:function(c,d,period){var v=Math.round(10*F.hy(c,period).happier*HAPPIER_MIX.team)/10;return{text:decMove(v),rag:dirRag(v)}}},{label:"Collaboration happiness",basis:"to date",source:"Happiness survey (per sprint)",cell:function(c){return{text:c.happier.collaboration.toFixed(1),rag:F.wq(c.happier.collaboration,c.thresholds.happier)}},change:function(c,d,period){var v=Math.round(10*F.hy(c,period).happier*HAPPIER_MIX.collaboration)/10;return{text:decMove(v),rag:dirRag(v)}}},{label:"Usage happiness",basis:"to date",source:"Happiness survey (per sprint)",cell:function(c){return{text:c.happier.usage.toFixed(1),rag:F.wq(c.happier.usage,c.thresholds.happier)}},change:function(c,d,period){var v=Math.round(10*F.hy(c,period).happier*HAPPIER_MIX.usage)/10;return{text:decMove(v),rag:dirRag(v)}}},{label:"Happiness at completion",changeLabel:"Happiness score",basis:"forecast",emphasis:!0,source:"Derived: average of the three survey scores. Happiness has no separate forecast model, so today's score is the forecast",cell:function(c,d){return{text:d.happierScore.toFixed(1),rag:F.wq(d.happierScore,c.thresholds.happier)}},change:function(c,d,period){var h=F.hy(c,period);return{text:decMove(h.happier),rag:dirRag(h.happier)}}}]},
{key:"cheaper",title:"4. Cheaper (Cost)",color:"bg-rose-50 text-rose-800",note:COST_NOTE,
completion:function(config,d){
var vac=d.vacCost;
return{text:F.s7(d.eac),sub:0===vac?"on budget "+F.s7(config.baselineBudget):F.s7(abs(vac))+" "+(vac>0?"under budget":"over budget")+" ("+pctOf(vac,config.baselineBudget)+")",rag:vac>=0?"good":vac>-.08*config.baselineBudget?"warn":"bad"}},
change:function(config,d,period){
var h=F.hy(config,period),prevEac=d.eac-d.eac*(h.eacShiftShare||0);
return{text:F.s7(d.actuals*h.spendShare)+" spent",sub:"forecast "+F.s7(prevEac)+" → "+F.s7(d.eac)}},
rollupCompletion:function(configs,derived){
var eac=derived.reduce(function(a,d){return a+d.eac},0),budget=configs.reduce(function(a,c){return a+c.baselineBudget},0),vac=budget-eac;
return{text:F.s7(eac),sub:0===vac?"on budget "+F.s7(budget):F.s7(abs(vac))+" "+(vac>0?"under budget":"over budget")+" ("+pctOf(vac,budget)+")",rag:vac>=0?"good":"bad"}},
rollupChange:function(configs,derived,period){
var spend=configs.reduce(function(a,c,i){return a+derived[i].actuals*F.hy(c,period).spendShare},0);
var eac=derived.reduce(function(a,d){return a+d.eac},0);
var prevEac=configs.reduce(function(a,c,i){return a+derived[i].eac-derived[i].eac*(F.hy(c,period).eacShiftShare||0)},0);
return{text:F.s7(spend)+" spent",sub:"forecast "+F.s7(prevEac)+" → "+F.s7(eac)}},
metrics:[{label:"Baseline budget",basis:"agreed",emphasis:!0,source:"Configuration, baseline budget set by the project owner",cell:function(c){return{text:F.s7(c.baselineBudget)}}},{label:"Output tariff (L3)",basis:"agreed",noRollup:!0,source:"Contract (given, FP-based)",cell:function(c){return{text:"fp"===c.contractType?F.M1(c.outputTariff)+"/FP":"n/a"}}},{label:"Actuals to date",changeLabel:"Spent",basis:"to date",changeRollup:!0,source:"Hour: Oracle x rate. FP: sum of function prices. In period view, the share of actuals booked inside the window",cell:function(c,d){return{text:F.s7(d.actuals)}},change:function(c,d,period){return{text:F.s7(spendIn(c,d,period))+" spent"}}},{label:"Cost / FP",basis:"to date",emphasis:!0,changeRollup:!0,source:"FPA sheet (Cost divided by #FP). In period view, money spent in the window divided by FP deployed in the window",cell:function(c,d){return{text:F.M1(d.costPerFp)+"/FP",rag:F.wq(d.costPerFp,c.thresholds.cheaper)}},change:function(c,d,period){var h=F.hy(c,period),fp=h.deliveredFp||0;if(!fp)return{text:"no FP deployed"};var v=spendIn(c,d,period)/fp;return{text:F.M1(v)+"/FP",rag:F.wq(v,c.thresholds.cheaper)}}},{label:"Estimate to Complete",basis:"forecast",source:"Hour: estimate (complexity x rate x change factor). FP: agreed price after change factor. In period view, how the remaining estimate moved",cell:function(c,d){return{text:F.s7(d.etc)+" · "+("fp"===c.contractType?"agreed":"estimate")}},change:function(c,d,period){var v=eacMove(c,d,period)-spendIn(c,d,period);return{text:moneyMove(v),rag:dirRag(-v)}}},{label:"Forecast total spend (EAC)",basis:"forecast",emphasis:!0,source:"Derived: Actuals + Estimate to Complete. In period view, how the forecast moved inside the window",cell:function(c,d){return{text:F.s7(d.eac)}},change:function(c,d,period){var v=eacMove(c,d,period);return{text:moneyMove(v),rag:dirRag(-v)}}},{label:"Variance at completion (VAC)",basis:"forecast",emphasis:!0,source:"Derived: Budget minus EAC. In period view, how that gap moved - with the budget fixed this is the EAC movement with the sign flipped",cell:function(c,d){return{text:F.s7(d.vacCost)+" · "+pctOf(d.vacCost,c.baselineBudget)+(d.vacCost>=0?" under":" over"),rag:d.vacCost>=0?"good":d.vacCost>-.08*c.baselineBudget?"warn":"bad"}},rollupCell:function(configs,derived){var v=sumBy(derived,function(d){return d.vacCost}),b=sumBy(configs,function(c){return c.baselineBudget});return{text:F.s7(v)+" · "+pctOf(v,b)+(v>=0?" under":" over")}},change:function(c,d,period){var v=-eacMove(c,d,period);return{text:moneyMove(v),rag:dirRag(v)}}}]},
{key:"faster",title:"5. Faster (Time & Scope)",color:"bg-sky-50 text-sky-800",
completion:function(config,d){
var slack=d.forecastSlackDays;
return{text:F.G$(d.forecastDate),sub:0===slack?"on time":abs(slack)+" "+unit(slack,"day","days")+" "+(slack>0?"early":"late")+" ("+pctOf(slack,d.plannedDays)+")",rag:F.wq(slack,config.thresholds.faster)}},
change:function(config,d,period){
var h=F.hy(config,period),prevSlack=d.forecastSlackDays-h.slackDays;
var prevForecast=shiftDate(config.baselineDeadline,-prevSlack);
return{text:moveWord(h.slackDays,"day","days","earlier","later","no change"),sub:shortDate(prevForecast)+" → "+F.G$(d.forecastDate),rag:dirRag(h.slackDays)}},
rollupCompletion:function(configs,derived){
var slack=Math.round(avg(derived.map(function(d){return d.forecastSlackDays}))),planned=Math.round(avg(derived.map(function(d){return d.plannedDays})));
return{text:0===slack?"on time":abs(slack)+" "+unit(slack,"day","days")+" "+(slack>0?"early":"late"),sub:0===slack?"on plan":pctOf(slack,planned)+(slack>0?" ahead of plan":" behind plan"),rag:slack>=0?"good":slack>-14?"warn":"bad"}},
rollupChange:function(configs,derived,period){
var delta=Math.round(avg(configs.map(function(c){return F.hy(c,period).slackDays})));
return{text:moveWord(delta,"day","days","earlier","later","no change"),rag:dirRag(delta)}},
metrics:[{label:"Planned deadline",basis:"agreed",noRollup:!0,source:"Configuration, target deadline set by the project owner",cell:function(c){return{text:F.G$(c.baselineDeadline)}}},{label:"Baseline scope target",basis:"agreed",source:"Configuration, baseline set by the project owner",cell:function(c){return{text:c.baselineScopeFp+" FP"}}},{label:"Delivered FP",basis:"to date",changeRollup:!0,source:"FPA sheet (status = Deployed). In period view, FP deployed inside the window",cell:function(c,d){return{text:d.deliveredFp+" FP"}},change:function(c,d,period){var v=F.hy(c,period).deliveredFp||0;return{text:0===v?"none deployed":v+" FP deployed"}}},{label:"Throughput",basis:"to date",source:"FPA sheet (Deployed FP divided by time). In period view, the rate achieved inside the window",cell:function(c,d){return{text:d.throughput+" FP/wk"}},change:function(c,d,period){var v=(F.hy(c,period).deliveredFp||0)/weeksIn(period);return{text:Math.round(10*v)/10+" FP/wk"}}},{label:"Delivery speed (L3)",basis:"to date",source:"FPA sheet (Deployed FP per iteration). In period view, the rate achieved inside the window",cell:function(c,d){return{text:d.deliverySpeed+" FP/PI"}},change:function(c,d,period){var v=2*(F.hy(c,period).deliveredFp||0)/weeksIn(period);return{text:Math.round(10*v)/10+" FP/PI"}}},{label:"Productivity (L3)",basis:"to date",source:"Oracle hours divided by weekly FP. In period view, hours booked in the window divided by FP deployed in the window",cell:function(c,d){return{text:d.productivity+" h/FP"}},change:function(c,d,period){var h=F.hy(c,period),fp=h.deliveredFp||0;if(!fp)return{text:"no FP deployed"};return{text:Math.round(10*(c.hoursToDate*h.spendShare/fp))/10+" h/FP"}}},{label:"Forecast completion date",changeLabel:"Forecast date",basis:"forecast",emphasis:!0,noRollup:!0,source:"Derived: remaining scope divided by the run rate, from today. In period view, where the forecast sat at the start of the window and where it sits now",cell:function(c,d){return{text:F.G$(d.forecastDate)}},change:function(c,d,period){var h=F.hy(c,period),prev=shiftDate(c.baselineDeadline,-(d.forecastSlackDays-h.slackDays));return{text:shortDate(prev)+" → "+F.G$(d.forecastDate),rag:dirRag(h.slackDays)}}},{label:"Forecast vs planned",basis:"forecast",emphasis:!0,source:"Derived: forecast date vs deadline. In period view, how many days the forecast moved inside the window",cell:function(c,d){return{text:F.qN(d.forecastSlackDays," days")+" · "+pctOf(d.forecastSlackDays,d.plannedDays)+(d.forecastSlackDays>=0?" early":" late"),rag:F.wq(d.forecastSlackDays,c.thresholds.faster)}},rollupCell:function(configs,derived){var v=Math.round(avg(derived.map(function(d){return d.forecastSlackDays}))),pl=Math.round(avg(derived.map(function(d){return d.plannedDays})));return{text:F.qN(v," days")+" · "+pctOf(v,pl)+(v>=0?" early":" late")}},change:function(c,d,period){var v=F.hy(c,period).slackDays;return{text:moveWord(v,"day","days","earlier","later","no change"),rag:dirRag(v)}}},{label:"Remaining scope",basis:"forecast",changeRollup:!0,source:"FPA sheet (status not Deployed). In period view, scope added less scope deployed inside the window",cell:function(c,d){return{text:d.remainingFp+" FP"}},change:function(c,d,period){var h=F.hy(c,period),v=(h.scopeFp||0)-(h.deliveredFp||0);return{text:fpLevel(v),rag:dirRag(-v)}},rollupChangeCell:function(configs,derived,period){var v=sumBy(configs,function(c){var h=F.hy(c,period);return(h.scopeFp||0)-(h.deliveredFp||0)});return{text:fpLevel(v),rag:dirRag(-v)}}},{label:"Descoped FP",basis:"forecast",source:"FPA sheet (change type = Deleted; still charged at the agreed removal factor). No period history is held for descoping in this prototype",cell:function(c,d){return{text:d.deletedFp+" FP"}}},{label:"Total scope",basis:"forecast",emphasis:!0,changeRollup:!0,source:"Derived: sum of all counted FP, excluding deleted functions",cell:function(c,d){return{text:d.scopeEac+" FP"}},change:function(c,d,period){var v=F.hy(c,period).scopeFp||0;return{text:fpMove(v),rag:dirRag(-v)}}},{label:"Scope variance",basis:"forecast",emphasis:!0,source:"Derived: total minus target (less scope is fine). In period view, how the gap to the scope target moved",cell:function(c,d){var g=d.scopeGrowth;if(g<=0)return{text:g+" FP · "+(0===g?"on target":"under target"),rag:"good"};return{text:F.qN(g," FP")+" · scope growth",rag:g>.05*c.baselineScopeFp?"bad":"warn"}},change:function(c,d,period){var v=F.hy(c,period).scopeFp||0;return{text:fpLevel(v),rag:dirRag(-v)}},rollupChangeCell:function(configs,derived,period){var v=sumBy(configs,function(c){return F.hy(c,period).scopeFp||0});return{text:fpLevel(v),rag:dirRag(-v)}}}]}];
function DashboardPage(){
var store=(0,Store.o)(),configs=store.configs,rows=store.rows,ready=store.ready;
var collapsedTuple=(0,React.useState)({}),collapsed=collapsedTuple[0],setCollapsed=collapsedTuple[1];
var levelTuple=(0,React.useState)("Airside"),level=levelTuple[0],setLevel=levelTuple[1];
var periodTuple=(0,React.useState)("Last Month"),period=periodTuple[0],setPeriod=periodTuple[1];
var viewTuple=(0,React.useState)("completion"),view=viewTuple[0],setView=viewTuple[1];
var rollupTuple=(0,React.useState)(!0),showRollup=rollupTuple[0],setShowRollup=rollupTuple[1];
var sourceTuple=(0,React.useState)(null),source=sourceTuple[0],setSource=sourceTuple[1];
var derived=(0,React.useMemo)(function(){var map={};return configs.forEach(function(c){map[c.appId]=F.W$(c,rows)}),map},[configs,rows]);
var toggle=function(key){setCollapsed(function(prev){var next=Object.assign({},prev);return next[key]=!prev[key],next})};
return(0,jsx.jsxs)("div",{className:"jsx-448d443c98f438e mx-auto max-w-7xl px-6 py-8",children:[
(0,jsx.jsx)("h1",{className:"jsx-448d443c98f438e mb-1 text-2xl font-extrabold text-core-navy",children:"Core4 Software Delivery Dashboard"}),
(0,jsx.jsx)("p",{className:"jsx-448d443c98f438e mb-5 text-sm text-slate-500",children:"Scope, quality, time and cost across critical applications. Each category headline answers one question at a time: At completion shows where the project lands against its agreed target, This period shows what moved over the selected window. Expand a category for the underlying metrics."}),
(0,jsx.jsxs)("div",{className:"jsx-448d443c98f438e mb-4 flex flex-wrap items-end gap-4 rounded-xl border border-slate-200 bg-white p-4",children:[
(0,jsx.jsx)(Field,{label:"Headline",children:(0,jsx.jsx)("div",{className:"jsx-448d443c98f438e flex overflow-hidden rounded-lg border border-slate-200",children:VIEWS.map(function(v){return(0,jsx.jsx)("button",{onClick:function(){setView(v.key)},className:"jsx-448d443c98f438e "+("px-4 py-1.5 text-sm font-medium "+(view===v.key?"bg-core-navy text-white":"bg-white text-slate-600 hover:bg-slate-50")),children:v.label},v.key)})})}),
(0,jsx.jsx)(Field,{label:"Level (org roll-up)",children:(0,jsx.jsx)("select",{value:level,onChange:function(e){setLevel(e.target.value)},className:"jsx-448d443c98f438e input",children:D.HJ.map(function(l){return(0,jsx.jsx)("option",{value:l,className:"jsx-448d443c98f438e",children:l},l)})})}),
(0,jsx.jsx)(Field,{label:"period"===view?"Period":"Period (used by This period)",children:(0,jsx.jsx)("select",{value:period,onChange:function(e){setPeriod(e.target.value)},className:"jsx-448d443c98f438e input",children:D.PR.map(function(p){return(0,jsx.jsx)("option",{className:"jsx-448d443c98f438e",children:p},p)})})}),
(0,jsx.jsxs)("button",{onClick:function(){setShowRollup(function(v){return!v})},className:"jsx-448d443c98f438e "+("btn "+(showRollup?"btn-on":"")),children:[showRollup?"on ":"","Show roll-up"]}),
!ready&&(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e text-xs text-slate-400",children:"loading saved state..."})]}),
(0,jsx.jsx)("div",{className:"jsx-448d443c98f438e overflow-x-auto rounded-xl border border-slate-200 bg-white",children:(0,jsx.jsxs)("table",{className:"jsx-448d443c98f438e w-full min-w-[1300px] table-fixed border-collapse text-sm",children:[
(0,jsx.jsx)("thead",{className:"jsx-448d443c98f438e",children:(0,jsx.jsxs)("tr",{className:"jsx-448d443c98f438e border-b border-slate-200 bg-slate-50 text-left",children:[
(0,jsx.jsx)("th",{className:"jsx-448d443c98f438e sticky left-0 z-10 w-[300px] bg-slate-50 px-4 py-3 font-semibold text-slate-600",children:"Metric"}),
showRollup&&(0,jsx.jsxs)("th",{className:"jsx-448d443c98f438e w-[200px] px-4 py-3 text-right align-top font-bold text-core-navy",children:[(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e block",children:level}),(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e ml-auto block max-w-[11rem] text-xs font-normal leading-tight text-slate-400",children:"Portfolio"})]}),
configs.map(function(c){return(0,jsx.jsxs)("th",{className:"jsx-448d443c98f438e w-[200px] px-4 py-3 text-right align-top font-bold text-core-navy",children:[
(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e block",children:c.name}),
(0,jsx.jsx)("span",{className:"jsx-448d443c98f438e ml-auto block max-w-[11rem] text-xs font-normal leading-tight text-slate-400",children:c.fullName})]},c.appId)})]})}),
(0,jsx.jsx)("tbody",{className:"jsx-448d443c98f438e",children:GROUPS.map(function(group){return(0,jsx.jsx)(GroupRows,{group:group,configs:configs,derived:derived,period:period,view:view,collapsed:!!collapsed[group.key],onToggle:function(){toggle(group.key)},showRollup:showRollup,onSource:setSource},group.key)})})]})}),
(0,jsx.jsx)(Legend,{view:view,period:period}),
source&&(0,jsx.jsx)("div",{onClick:function(){setSource(null)},className:"jsx-448d443c98f438e fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4",children:(0,jsx.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:"jsx-448d443c98f438e w-full max-w-md rounded-xl bg-white p-6 shadow-xl",children:[
(0,jsx.jsx)("p",{className:"jsx-448d443c98f438e text-xs font-semibold uppercase tracking-wide text-core-accent",children:"Data source"}),
(0,jsx.jsx)("h3",{className:"jsx-448d443c98f438e mt-1 text-lg font-bold text-core-navy",children:source.metric}),
(0,jsx.jsxs)("p",{className:"jsx-448d443c98f438e text-sm text-slate-500",children:["Application: ",source.app]}),
(0,jsx.jsx)("div",{className:"jsx-448d443c98f438e mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-700",children:source.text}),
(0,jsx.jsx)("button",{onClick:function(){setSource(null)},className:"jsx-448d443c98f438e mt-4 w-full rounded-lg bg-core-navy px-4 py-2 text-sm font-semibold text-white hover:bg-core-blue",children:"Close"})]})}),
(0,jsx.jsx)(SJ(),{id:"448d443c98f438e",children:".btn.jsx-448d443c98f438e{border:1px solid#cbd5e1;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:7px 12px;font-size:13px;background:white;font-weight:500}.btn-on.jsx-448d443c98f438e{background:#0a1f5c;color:white;border-color:#0a1f5c}"})]})}
function Field(props){return(0,jsx.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,jsx.jsx)("span",{className:"text-xs font-medium text-slate-500",children:props.label}),props.children]})}
function HeadCell(props){var cell=props.cell;return(0,jsx.jsxs)("div",{className:"text-right",children:[
(0,jsx.jsx)("span",{className:"block whitespace-nowrap text-base "+(cell.rag?RAG_CLASS[cell.rag]:"font-bold text-core-navy"),children:cell.text}),
(0,jsx.jsx)("span",{className:"block whitespace-nowrap text-xs font-normal leading-tight text-slate-500",children:cell.sub||"\u00a0"})]})}
function GroupRows(props){
var group=props.group,configs=props.configs,derived=props.derived,period=props.period,view=props.view,collapsed=props.collapsed,onToggle=props.onToggle,showRollup=props.showRollup,onSource=props.onSource;
var isPeriod="period"===view;
var head=isPeriod?group.change:group.completion;
var rollup=isPeriod?group.rollupChange:group.rollupCompletion;
var derivedList=configs.map(function(c){return derived[c.appId]});
return(0,jsx.jsxs)(jsx.Fragment,{children:[
(0,jsx.jsxs)("tr",{className:"cursor-pointer border-y border-slate-200 "+group.color,onClick:onToggle,children:[
(0,jsx.jsxs)("td",{title:group.note,className:"sticky left-0 z-10 px-4 py-2.5 font-semibold "+group.color,children:[
(0,jsx.jsx)("span",{className:"mr-2 inline-block w-3 text-slate-500",children:collapsed?"+":"-"}),
group.title,
group.note?(0,jsx.jsx)("span",{className:"ml-1.5 cursor-help align-super text-[10px] font-normal opacity-60",children:"ⓘ"}):null]}),
showRollup&&(0,jsx.jsx)("td",{className:"px-4 py-2.5",children:(0,jsx.jsx)(HeadCell,{cell:rollup(configs,derivedList,period)})}),
configs.map(function(c){return(0,jsx.jsx)("td",{className:"px-4 py-2.5",children:(0,jsx.jsx)(HeadCell,{cell:head(c,derived[c.appId],period)})},c.appId)})]}),
!collapsed&&group.metrics.filter(function(metric){return!isPeriod||!!metric.change}).map(function(metric){
var read=isPeriod?metric.change:metric.cell;
var label=isPeriod&&metric.changeLabel?metric.changeLabel:metric.label;
var rollupCell=isPeriod?(metric.rollupChangeCell?metric.rollupChangeCell(configs,derivedList,period):metric.changeRollup?rollupMetric(read,configs,derived,period):{text:""}):(metric.rollupCell?metric.rollupCell(configs,derivedList,period):metric.noRollup?{text:""}:rollupMetric(read,configs,derived,period));
return(0,jsx.jsxs)("tr",{className:"border-b border-slate-100 hover:bg-slate-50/60",children:[
(0,jsx.jsxs)("td",{className:"sticky left-0 z-10 whitespace-nowrap bg-white px-4 py-2 "+(metric.emphasis?"font-semibold text-slate-800":"text-slate-600"),children:[label,isPeriod?null:(0,jsx.jsx)("span",{className:"ml-2 text-[10px] font-normal uppercase tracking-wide "+BASIS_CLASS[metric.basis],children:metric.basis})]}),
showRollup&&(0,jsx.jsx)("td",{className:"px-4 py-2 text-right text-slate-400",children:rollupCell.text}),
configs.map(function(c){var cell=read(c,derived[c.appId],period);
return(0,jsx.jsxs)("td",{className:"cursor-pointer px-4 py-2 text-right hover:bg-sky-50",onClick:function(){onSource({metric:label,app:c.name,text:metric.source})},children:[
(0,jsx.jsx)("span",{className:"whitespace-nowrap "+(cell.rag?RAG_CLASS[cell.rag]:"text-slate-800"),children:cell.text})]},c.appId)})]},metric.label)})]})}
function rollupMetric(read,configs,derived,period){
var texts=configs.map(function(c){return read(c,derived[c.appId],period).text});
var first=void 0===texts[0]?"":texts[0];
if(/20\d\d/.test(first)||/FP-based|Hour-based|IFPUG|Nesma|COSMIC|EFS|n\/a/.test(first))return{text:""};
var nums=texts.map(parseNum).filter(function(n){return null!==n});
if(!nums.length)return{text:""};
var sum=nums.reduce(function(a,b){return a+b},0),mean=sum/nums.length;
return first.includes("%")?{text:Math.round(mean)+"%"}:/€.*\/FP/.test(first)?{text:F.s7(mean)+"/FP"}:first.trim().startsWith("€")?{text:F.s7(sum)}:/h\/FP/.test(first)?{text:Math.round(10*mean)/10+" h/FP"}:/FP\/wk/.test(first)?{text:Math.round(10*sum)/10+" FP/wk"}:/FP\/PI/.test(first)?{text:Math.round(10*sum)/10+" FP/PI"}:/FP/.test(first)?{text:Math.round(sum)+" FP"}:/days|hrs/.test(first)?{text:Math.round(mean)+(first.includes("days")?" days":" hrs")}:{text:String(Math.round(10*mean)/10)}}
function parseNum(text){var m=text.match(/-?[\d.,]+/);if(!m)return null;var v=parseFloat(m[0].replace(/,/g,""));return isNaN(v)?null:(/M/.test(text)?v*=1e6:/K/.test(text)&&(v*=1e3),v)}
function Legend(props){
var note="period"===props.view?"Headline is what moved over "+periodLabel(props.period)+"; beneath it, the forecast before and after. Colour marks the direction of travel. Cost shows money actually spent, and is left neutral because spend is not good or bad on its own.":"Headline is where the project lands; beneath it, the variance at completion - the gap to the agreed target, in its own unit and as a percentage of that target.";
return(0,jsx.jsxs)("div",{className:"mt-4 flex flex-wrap items-center gap-5 text-xs text-slate-500",children:[
(0,jsx.jsx)("span",{className:"font-medium",children:"RAG:"}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-good"})," on target"]}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-warn"})," watch"]}),
(0,jsx.jsxs)("span",{className:"flex items-center gap-1",children:[(0,jsx.jsx)("i",{className:"inline-block h-2.5 w-2.5 rounded-full bg-bad"})," off target"]}),
(0,jsx.jsx)("span",{className:"ml-4",children:note}),
(0,jsx.jsx)("span",{children:props.view==="period"?"Every row shows what moved over "+periodLabel(props.period)+". Rows with no period meaning - agreed baselines, and figures this prototype holds no history for - are hidden here and appear under At completion.":"Every metric is tagged with what it is measured against: agreed at baseline, to date, or forecast at completion. Switch to This period to see what moved. Thresholds are owner-configurable per category (Configuration)."})]})}}},function(e){e.O(0,[29,620,971,117,744],function(){return e(e.s=1113)}),_N_E=e.O()}]);