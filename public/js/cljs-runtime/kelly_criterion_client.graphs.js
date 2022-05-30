goog.provide('kelly_criterion_client.graphs');
var module$node_modules$d3$src$index=shadow.js.require("module$node_modules$d3$src$index", {});
kelly_criterion_client.graphs.growth_rate = (function kelly_criterion_client$graphs$growth_rate(growth_rates){
var size = (300);
var bet_sizes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,growth_rates);
var bet_growth_rates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,growth_rates);
var x = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,bet_sizes)], null))).range(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size], null)));
var y = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__4336__auto__ = -0.25;
var y__4337__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,bet_growth_rates);
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,bet_growth_rates)], null))).range(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,(0)], null)));
var line = module$node_modules$d3$src$index.line().x((function (g){
var G__27840 = cljs.core.first(g);
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__27840) : x.call(null,G__27840));
})).y((function (g){
var G__27841 = cljs.core.second(g);
return (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(G__27841) : y.call(null,G__27841));
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([growth_rates], 0));

return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(growth_rates) : line.call(null,growth_rates));
})()
,new cljs.core.Keyword(null,"fill","fill",883462889),"transparent",new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.first(module$node_modules$d3$src$index.schemeCategory10)], null)], null)], null);
});
kelly_criterion_client.graphs.add_starting_points = (function kelly_criterion_client$graphs$add_starting_points(chances){
var l = chances;
var r = cljs.core.PersistentVector.EMPTY;
var s = (0);
while(true){
if(((0) < cljs.core.count(l))){
var G__27845 = cljs.core.rest(l);
var G__27846 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(l),new cljs.core.Keyword(null,"p","p",151049309),(s + new cljs.core.Keyword(null,"prob","prob",-507301258).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l)))),cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(l),new cljs.core.Keyword(null,"p","p",151049309),s),r));
var G__27847 = (s + new cljs.core.Keyword(null,"prob","prob",-507301258).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l)));
l = G__27845;
r = G__27846;
s = G__27847;
continue;
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

return r;
}
break;
}
});
kelly_criterion_client.graphs.chances = (function kelly_criterion_client$graphs$chances(chances){
var size = (300);
var probs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prob","prob",-507301258),chances);
var payoffs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"payout","payout",1661925430),chances);
var x = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))).range(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size], null)));
var y = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,payoffs)], null))).range(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,(0)], null)));
var line = module$node_modules$d3$src$index.line().x((function (c){
var G__27842 = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(c);
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__27842) : x.call(null,G__27842));
})).y((function (c){
var G__27843 = new cljs.core.Keyword(null,"payout","payout",1661925430).cljs$core$IFn$_invoke$arity$1(c);
return (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(G__27843) : y.call(null,G__27843));
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),(function (){var G__27844 = kelly_criterion_client.graphs.add_starting_points(chances);
return (line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(G__27844) : line.call(null,G__27844));
})(),new cljs.core.Keyword(null,"fill","fill",883462889),"transparent",new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.first(module$node_modules$d3$src$index.schemeCategory10)], null)], null)], null);
});

//# sourceMappingURL=kelly_criterion_client.graphs.js.map
