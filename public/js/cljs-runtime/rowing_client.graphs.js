goog.provide('rowing_client.graphs');
var module$node_modules$d3$src$index=shadow.js.require("module$node_modules$d3$src$index", {});
rowing_client.graphs.power_profile = (function rowing_client$graphs$power_profile(splits){
var size = (300);
var durations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"duration","duration",1444101068),splits);
var values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"power","power",-937852079),splits);
var x = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,durations)], null))).range(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size], null)));
var y = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,values)], null))).range(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,(0)], null)));
var line = module$node_modules$d3$src$index.line().x((function (d){
var G__36985 = new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(d);
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__36985) : x.call(null,G__36985));
})).y((function (d){
var G__36986 = new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(d);
return (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(G__36986) : y.call(null,G__36986));
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"d","d",1972142424),(line.cljs$core$IFn$_invoke$arity$1 ? line.cljs$core$IFn$_invoke$arity$1(splits) : line.call(null,splits)),new cljs.core.Keyword(null,"fill","fill",883462889),"transparent",new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.first(module$node_modules$d3$src$index.schemeCategory10)], null)], null)], null);
});
rowing_client.graphs.appendDurations = (function rowing_client$graphs$appendDurations(splits){
return (function rowing_client$graphs$appendDurations_$_helper(arr,rem,sum){
if(((1) < cljs.core.count(rem))){
return rowing_client$graphs$appendDurations_$_helper(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(arr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(rem),new cljs.core.Keyword(null,"pos","pos",-864607220),sum)),cljs.core.rest(rem),(sum + new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(cljs.core.first(rem))));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(arr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(rem),new cljs.core.Keyword(null,"pos","pos",-864607220),sum));

}
})(cljs.core.PersistentVector.EMPTY,splits,(0));
});
rowing_client.graphs.workout = (function rowing_client$graphs$workout(s){
var splits = rowing_client.graphs.appendDurations(s);
var size = (400);
var durations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"duration","duration",1444101068),splits);
var powers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"power","power",-937852079),splits);
var endPos = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36987_SHARP_){
return (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__36987_SHARP_) + new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(p1__36987_SHARP_));
}),splits);
var y = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,powers)], null))).range(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,(0)], null)));
var x = module$node_modules$d3$src$index.scaleLinear().domain(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,endPos)], null))).range(cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36988){
var map__36989 = p__36988;
var map__36989__$1 = cljs.core.__destructure_map(map__36989);
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36989__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var power = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36989__$1,new cljs.core.Keyword(null,"power","power",-937852079));
var seq = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36989__$1,new cljs.core.Keyword(null,"seq","seq",-1817803783));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36989__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(pos) : x.call(null,pos))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(power) : y.call(null,power))),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"height","height",1025178622),(size - (y.cljs$core$IFn$_invoke$arity$1 ? y.cljs$core$IFn$_invoke$arity$1(power) : y.call(null,power))),new cljs.core.Keyword(null,"width","width",-384071477),(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(duration) : x.call(null,duration))], null)], null)], null);
}),splits)], null);
});

//# sourceMappingURL=rowing_client.graphs.js.map
