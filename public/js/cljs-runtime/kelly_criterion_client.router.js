goog.provide('kelly_criterion_client.router');
kelly_criterion_client.router.routes = new cljs.core.PersistentArrayMap(null, 8, ["home",new cljs.core.Keyword(null,"home","home",-74557309),"workouts/erg/{id}",new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131),"workouts/water/{id}",new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797),"workouts",new cljs.core.Keyword(null,"workoutList","workoutList",1315029256),"splits/erg/{id}",new cljs.core.Keyword(null,"ergSplit","ergSplit",-1169288437),"splits/water/{id}",new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921),"splits/water/{id}/test/{abc}/otherTest/{efg}",new cljs.core.Keyword(null,"multipleVars","multipleVars",1365547374),"",new cljs.core.Keyword(null,"home","home",-74557309)], null);
kelly_criterion_client.router.matches = (function kelly_criterion_client$router$matches(url_pieces){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url_pieces], 0));

return (function (route){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([route], 0));

var G__6164 = url_pieces;
var vec__6166 = G__6164;
var seq__6167 = cljs.core.seq(vec__6166);
var first__6168 = cljs.core.first(seq__6167);
var seq__6167__$1 = cljs.core.next(seq__6167);
var first_piece = first__6168;
var remaining_pieces = seq__6167__$1;
var G__6165 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(route),/\//);
var vec__6169 = G__6165;
var seq__6170 = cljs.core.seq(vec__6169);
var first__6171 = cljs.core.first(seq__6170);
var seq__6170__$1 = cljs.core.next(seq__6170);
var first_remaining = first__6171;
var remaining_route_pieces = seq__6170__$1;
var G__6164__$1 = G__6164;
var G__6165__$1 = G__6165;
while(true){
var vec__6172 = G__6164__$1;
var seq__6173 = cljs.core.seq(vec__6172);
var first__6174 = cljs.core.first(seq__6173);
var seq__6173__$1 = cljs.core.next(seq__6173);
var first_piece__$1 = first__6174;
var remaining_pieces__$1 = seq__6173__$1;
var vec__6175 = G__6165__$1;
var seq__6176 = cljs.core.seq(vec__6175);
var first__6177 = cljs.core.first(seq__6176);
var seq__6176__$1 = cljs.core.next(seq__6176);
var first_remaining__$1 = first__6177;
var remaining_route_pieces__$1 = seq__6176__$1;
if((((first_piece__$1 == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(remaining_route_pieces__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(url_pieces),route], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(first_remaining__$1),"{")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_piece__$1,first_remaining__$1)))){
var G__6185 = remaining_pieces__$1;
var G__6186 = remaining_route_pieces__$1;
G__6164__$1 = G__6185;
G__6165__$1 = G__6186;
continue;
} else {
return null;
}
}
break;
}
});
});
kelly_criterion_client.router.first_match = (function kelly_criterion_client$router$first_match(url_pieces){
return cljs.core.some(kelly_criterion_client.router.matches(url_pieces),cljs.core.vec(kelly_criterion_client.router.routes));
});
kelly_criterion_client.router.matched_url_to_map = (function kelly_criterion_client$router$matched_url_to_map(route_pieces,url_pieces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__6179_SHARP_,p2__6180_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__6179_SHARP_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(cljs.core.first(p2__6180_SHARP_)))),cljs.core.second(p2__6180_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.ffirst(p1__6181_SHARP_),"{");
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),route_pieces,url_pieces)));
});
kelly_criterion_client.router.decode_url = (function kelly_criterion_client$router$decode_url(url){
var pieces = kelly_criterion_client.router.first_match(cljs.core.rest(clojure.string.split.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((7),url)),"http://"))?clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((7),url)):url),/\//)));
var url_pieces = cljs.core.first(pieces);
var route_pieces = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.second(pieces)),/\//);
var target = cljs.core.second(cljs.core.second(pieces));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(kelly_criterion_client.router.matched_url_to_map(route_pieces,url_pieces),new cljs.core.Keyword(null,"target","target",253001721),target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url","url",276297046),url], 0));
});

//# sourceMappingURL=kelly_criterion_client.router.js.map
