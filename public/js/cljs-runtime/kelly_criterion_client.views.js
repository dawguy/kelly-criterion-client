goog.provide('kelly_criterion_client.views');
var module$node_modules$d3$src$index=shadow.js.require("module$node_modules$d3$src$index", {});
kelly_criterion_client.views.render = (function kelly_criterion_client$views$render(comp){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,document.getElementById("app"));
});
kelly_criterion_client.views.navbar = (function kelly_criterion_client$views$navbar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.bg-gray-800","nav.bg-gray-800",1083995317),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-1.flex.items-center.justify-center","div.flex-1.flex.items-center.justify-center",-868931591),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"sm:items-stretch sm:justify-start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.space-x-4","div.flex.space-x-4",1330971625),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-300.rounded-md.px-3.py-2","a.text-gray-300.rounded-md.px-3.py-2",1418539585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/home"], null),"Home"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.text-gray-300.rounded-md.px-3.py-2","a.text-gray-300.rounded-md.px-3.py-2",1418539585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/examples"], null),"Examples"], null)], null)], null)], null);
});
kelly_criterion_client.views.chanceListContainer = (function kelly_criterion_client$views$chanceListContainer(chance){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.w-full.p-3.text-center.border.lg:table-cell.border-b","td.w-full.p-3.text-center.border.lg:table-cell.border-b",-1835333626),new cljs.core.Keyword(null,"prob","prob",-507301258).cljs$core$IFn$_invoke$arity$1(chance)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.w-full.p-3.text-center.border.lg:table-cell.border-b","td.w-full.p-3.text-center.border.lg:table-cell.border-b",-1835333626),new cljs.core.Keyword(null,"payout","payout",1661925430).cljs$core$IFn$_invoke$arity$1(chance)], null)], null);
});
kelly_criterion_client.views.chancesContainer = (function kelly_criterion_client$views$chancesContainer(c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm:px-7.w-full","div.sm:px-7.w-full",-728656002),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-white.py-4.md:py-7.px-4.md:px-8.xl:px-10","div.bg-white.py-4.md:py-7.px-4.md:px-8.xl:px-10",1038606636),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.w-full.px-4.max-w-full.flex-grow.flex-1","div.relative.w-full.px-4.max-w-full.flex-grow.flex-1",686942200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.text-lg","h3.text-lg",-1108522769),"Probabilities"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-7.block.w-full.overflow-x-auto","div.mt-7.block.w-full.overflow-x-auto",900603128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.w-full.whitespace-nowrap","table.w-full.whitespace-nowrap",-812014924),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.p-3.font-bold.uppercase.border.lg:table-cell","th.p-3.font-bold.uppercase.border.lg:table-cell",-819077048),"Probability"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.p-3.font-bold.uppercase.border.lg:table-cell","th.p-3.font-bold.uppercase.border.lg:table-cell",-819077048),"Payoff"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map.cljs$core$IFn$_invoke$arity$2(kelly_criterion_client.views.chanceListContainer,c)], null)], null)], null)], null)], null);
});
kelly_criterion_client.views.growthRateContainer = (function kelly_criterion_client$views$growthRateContainer(growth_rates){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-md.","div.max-w-md.",-1262145597),kelly_criterion_client.graphs.growth_rate(growth_rates)], null);
});
kelly_criterion_client.views.chancesGraphContainer = (function kelly_criterion_client$views$chancesGraphContainer(chances){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core._GT_,new cljs.core.Keyword(null,"payout","payout",1661925430),chances)], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.max-w-md.","div.max-w-md.",-1262145597),kelly_criterion_client.graphs.chances(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"payout","payout",1661925430),chances))], null);
});
kelly_criterion_client.views.home = (function kelly_criterion_client$views$home(chances){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kelly_criterion_client.views.chancesContainer(chances)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kelly_criterion_client.views.chancesGraphContainer(chances)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kelly_criterion_client.views.growthRateContainer(kelly_criterion_client.kelly_criterion.find_growth_rates(chances))], null)], null);
});
kelly_criterion_client.views.page = (function kelly_criterion_client$views$page(data){
return (function (){
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var G__27848 = target;
switch (G__27848) {
default:
return kelly_criterion_client.views.home(new cljs.core.Keyword(null,"chances","chances",-463895539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));

}
});
});
kelly_criterion_client.views.mainPage = (function kelly_criterion_client$views$mainPage(data){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-screen.bg-gray-100","div.min-h-screen.bg-gray-100",-1767325493),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kelly_criterion_client.views.navbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kelly_criterion_client.views.page,data], null)], null);
});

//# sourceMappingURL=kelly_criterion_client.views.js.map