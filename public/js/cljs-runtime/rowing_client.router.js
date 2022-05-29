goog.provide('rowing_client.router');
rowing_client.router.routes = new cljs.core.PersistentArrayMap(null, 8, ["home",new cljs.core.Keyword(null,"home","home",-74557309),"workouts/erg/{id}",new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131),"workouts/water/{id}",new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797),"workouts",new cljs.core.Keyword(null,"workoutList","workoutList",1315029256),"splits/erg/{id}",new cljs.core.Keyword(null,"ergSplit","ergSplit",-1169288437),"splits/water/{id}",new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921),"splits/water/{id}/test/{abc}/otherTest/{efg}",new cljs.core.Keyword(null,"multipleVars","multipleVars",1365547374),"",new cljs.core.Keyword(null,"home","home",-74557309)], null);
rowing_client.router.matches = (function rowing_client$router$matches(url_pieces){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url_pieces], 0));

return (function (route){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([route], 0));

var G__37154 = url_pieces;
var vec__37156 = G__37154;
var seq__37157 = cljs.core.seq(vec__37156);
var first__37158 = cljs.core.first(seq__37157);
var seq__37157__$1 = cljs.core.next(seq__37157);
var first_piece = first__37158;
var remaining_pieces = seq__37157__$1;
var G__37155 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(route),/\//);
var vec__37159 = G__37155;
var seq__37160 = cljs.core.seq(vec__37159);
var first__37161 = cljs.core.first(seq__37160);
var seq__37160__$1 = cljs.core.next(seq__37160);
var first_remaining = first__37161;
var remaining_route_pieces = seq__37160__$1;
var G__37154__$1 = G__37154;
var G__37155__$1 = G__37155;
while(true){
var vec__37162 = G__37154__$1;
var seq__37163 = cljs.core.seq(vec__37162);
var first__37164 = cljs.core.first(seq__37163);
var seq__37163__$1 = cljs.core.next(seq__37163);
var first_piece__$1 = first__37164;
var remaining_pieces__$1 = seq__37163__$1;
var vec__37165 = G__37155__$1;
var seq__37166 = cljs.core.seq(vec__37165);
var first__37167 = cljs.core.first(seq__37166);
var seq__37166__$1 = cljs.core.next(seq__37166);
var first_remaining__$1 = first__37167;
var remaining_route_pieces__$1 = seq__37166__$1;
if((((first_piece__$1 == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(remaining_route_pieces__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(url_pieces),route], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(first_remaining__$1),"{")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_piece__$1,first_remaining__$1)))){
var G__37177 = remaining_pieces__$1;
var G__37178 = remaining_route_pieces__$1;
G__37154__$1 = G__37177;
G__37155__$1 = G__37178;
continue;
} else {
return null;
}
}
break;
}
});
});
rowing_client.router.first_match = (function rowing_client$router$first_match(url_pieces){
return cljs.core.some(rowing_client.router.matches(url_pieces),cljs.core.vec(rowing_client.router.routes));
});
rowing_client.router.matched_url_to_map = (function rowing_client$router$matched_url_to_map(route_pieces,url_pieces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37171_SHARP_,p2__37172_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37171_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(cljs.core.first(p2__37172_SHARP_)))),cljs.core.second(p2__37172_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37173_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.ffirst(p1__37173_SHARP_),"{");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),route_pieces,url_pieces)));
});
rowing_client.router.decode_url = (function rowing_client$router$decode_url(url){
var pieces = rowing_client.router.first_match(cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((7),url)),"http://"))?clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((7),url)):url),/\//)));
var url_pieces = cljs.core.first(pieces);
var route_pieces = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.second(pieces)),/\//);
var target = cljs.core.second(cljs.core.second(pieces));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rowing_client.router.matched_url_to_map(route_pieces,url_pieces),new cljs.core.Keyword(null,"target","target",253001721),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url","url",276297046),url], 0));
});

//# sourceMappingURL=rowing_client.router.js.map
