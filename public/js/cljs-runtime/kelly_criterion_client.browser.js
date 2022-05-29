goog.provide('kelly_criterion_client.browser');
if((typeof kelly_criterion_client !== 'undefined') && (typeof kelly_criterion_client.browser !== 'undefined') && (typeof kelly_criterion_client.browser.app_db !== 'undefined')){
} else {
kelly_criterion_client.browser.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}
if((typeof kelly_criterion_client !== 'undefined') && (typeof kelly_criterion_client.browser !== 'undefined') && (typeof kelly_criterion_client.browser.saved_response !== 'undefined')){
} else {
kelly_criterion_client.browser.saved_response = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
kelly_criterion_client.browser.start = (function kelly_criterion_client$browser$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(kelly_criterion_client.views.mainPage(kelly_criterion_client.browser.app_db),document.getElementById("app"));
});
kelly_criterion_client.browser.save_data = (function kelly_criterion_client$browser$save_data(vals,table_name,pk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,table_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__26746 = cljs.core.deref(kelly_criterion_client.browser.app_db);
return (table_name.cljs$core$IFn$_invoke$arity$1 ? table_name.cljs$core$IFn$_invoke$arity$1(G__26746) : table_name.call(null,G__26746));
})(),pk,vals));
});
kelly_criterion_client.browser.data_to_pk_list = (function kelly_criterion_client$browser$data_to_pk_list(data,list_target_id,target_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,list_target_id,cljs.core.map.cljs$core$IFn$_invoke$arity$2(target_id,(list_target_id.cljs$core$IFn$_invoke$arity$1 ? list_target_id.cljs$core$IFn$_invoke$arity$1(data) : list_target_id.call(null,data))));
});
kelly_criterion_client.browser.save_list = (function kelly_criterion_client$browser$save_list(var_args){
var G__26748 = arguments.length;
switch (G__26748) {
case 3:
return kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$3 = (function (data,list_target_id,target_id){
return kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$4(data,list_target_id,target_id,cljs.core.identity);
}));

(kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$4 = (function (data,list_target_id,target_id,transform_func){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));

var seq__26749 = cljs.core.seq((list_target_id.cljs$core$IFn$_invoke$arity$1 ? list_target_id.cljs$core$IFn$_invoke$arity$1(data) : list_target_id.call(null,data)));
var chunk__26750 = null;
var count__26751 = (0);
var i__26752 = (0);
while(true){
if((i__26752 < count__26751)){
var target_data = chunk__26750.cljs$core$IIndexed$_nth$arity$2(null,i__26752);
kelly_criterion_client.browser.save_data((transform_func.cljs$core$IFn$_invoke$arity$1 ? transform_func.cljs$core$IFn$_invoke$arity$1(target_data) : transform_func.call(null,target_data)),target_id,(target_id.cljs$core$IFn$_invoke$arity$1 ? target_id.cljs$core$IFn$_invoke$arity$1(target_data) : target_id.call(null,target_data)));


var G__26777 = seq__26749;
var G__26778 = chunk__26750;
var G__26779 = count__26751;
var G__26780 = (i__26752 + (1));
seq__26749 = G__26777;
chunk__26750 = G__26778;
count__26751 = G__26779;
i__26752 = G__26780;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__26749);
if(temp__5753__auto__){
var seq__26749__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26749__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__26749__$1);
var G__26781 = cljs.core.chunk_rest(seq__26749__$1);
var G__26782 = c__4679__auto__;
var G__26783 = cljs.core.count(c__4679__auto__);
var G__26784 = (0);
seq__26749 = G__26781;
chunk__26750 = G__26782;
count__26751 = G__26783;
i__26752 = G__26784;
continue;
} else {
var target_data = cljs.core.first(seq__26749__$1);
kelly_criterion_client.browser.save_data((transform_func.cljs$core$IFn$_invoke$arity$1 ? transform_func.cljs$core$IFn$_invoke$arity$1(target_data) : transform_func.call(null,target_data)),target_id,(target_id.cljs$core$IFn$_invoke$arity$1 ? target_id.cljs$core$IFn$_invoke$arity$1(target_data) : target_id.call(null,target_data)));


var G__26785 = cljs.core.next(seq__26749__$1);
var G__26786 = null;
var G__26787 = (0);
var G__26788 = (0);
seq__26749 = G__26785;
chunk__26750 = G__26786;
count__26751 = G__26787;
i__26752 = G__26788;
continue;
}
} else {
return null;
}
}
break;
}
}));

(kelly_criterion_client.browser.save_list.cljs$lang$maxFixedArity = 4);

kelly_criterion_client.browser.retrieve_erg_workout = (function kelly_criterion_client$browser$retrieve_erg_workout(response){
var erg_workout = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.reset_BANG_(kelly_criterion_client.browser.saved_response,erg_workout);

kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$4(erg_workout,new cljs.core.Keyword(null,"splits","splits",766856963),new cljs.core.Keyword(null,"ergSplit","ergSplit",-1169288437),kelly_criterion_client.splits.add_power);

kelly_criterion_client.browser.save_data(kelly_criterion_client.browser.data_to_pk_list(erg_workout,new cljs.core.Keyword(null,"splits","splits",766856963),new cljs.core.Keyword(null,"ergSplit","ergSplit",-1169288437)),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131).cljs$core$IFn$_invoke$arity$1(erg_workout));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"targetId","targetId",953177609),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131).cljs$core$IFn$_invoke$arity$1(erg_workout));
});
kelly_criterion_client.browser.retrieve_water_workout = (function kelly_criterion_client$browser$retrieve_water_workout(response){
var vals = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vals], 0));

cljs.core.reset_BANG_(kelly_criterion_client.browser.saved_response,vals);

var seq__26753_26789 = cljs.core.seq(new cljs.core.Keyword(null,"splits","splits",766856963).cljs$core$IFn$_invoke$arity$1(vals));
var chunk__26754_26790 = null;
var count__26755_26791 = (0);
var i__26756_26792 = (0);
while(true){
if((i__26756_26792 < count__26755_26791)){
var water_split_26793 = chunk__26754_26790.cljs$core$IIndexed$_nth$arity$2(null,i__26756_26792);
kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$3(water_split_26793,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775));

kelly_criterion_client.browser.save_data(kelly_criterion_client.browser.data_to_pk_list(water_split_26793,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775)),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921).cljs$core$IFn$_invoke$arity$1(water_split_26793));


var G__26794 = seq__26753_26789;
var G__26795 = chunk__26754_26790;
var G__26796 = count__26755_26791;
var G__26797 = (i__26756_26792 + (1));
seq__26753_26789 = G__26794;
chunk__26754_26790 = G__26795;
count__26755_26791 = G__26796;
i__26756_26792 = G__26797;
continue;
} else {
var temp__5753__auto___26798 = cljs.core.seq(seq__26753_26789);
if(temp__5753__auto___26798){
var seq__26753_26799__$1 = temp__5753__auto___26798;
if(cljs.core.chunked_seq_QMARK_(seq__26753_26799__$1)){
var c__4679__auto___26800 = cljs.core.chunk_first(seq__26753_26799__$1);
var G__26801 = cljs.core.chunk_rest(seq__26753_26799__$1);
var G__26802 = c__4679__auto___26800;
var G__26803 = cljs.core.count(c__4679__auto___26800);
var G__26804 = (0);
seq__26753_26789 = G__26801;
chunk__26754_26790 = G__26802;
count__26755_26791 = G__26803;
i__26756_26792 = G__26804;
continue;
} else {
var water_split_26805 = cljs.core.first(seq__26753_26799__$1);
kelly_criterion_client.browser.save_list.cljs$core$IFn$_invoke$arity$3(water_split_26805,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775));

kelly_criterion_client.browser.save_data(kelly_criterion_client.browser.data_to_pk_list(water_split_26805,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775)),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921).cljs$core$IFn$_invoke$arity$1(water_split_26805));


var G__26806 = cljs.core.next(seq__26753_26799__$1);
var G__26807 = null;
var G__26808 = (0);
var G__26809 = (0);
seq__26753_26789 = G__26806;
chunk__26754_26790 = G__26807;
count__26755_26791 = G__26808;
i__26756_26792 = G__26809;
continue;
}
} else {
}
}
break;
}

kelly_criterion_client.browser.save_data(kelly_criterion_client.browser.data_to_pk_list(vals,new cljs.core.Keyword(null,"splits","splits",766856963),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921)),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797).cljs$core$IFn$_invoke$arity$1(vals));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"targetId","targetId",953177609),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797).cljs$core$IFn$_invoke$arity$1(vals));
});
kelly_criterion_client.browser.get_request = (function kelly_criterion_client$browser$get_request(callback,url){
var c__26491__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26492__auto__ = (function (){var switch__26421__auto__ = (function (state_26768){
var state_val_26769 = (state_26768[(1)]);
if((state_val_26769 === (1))){
var inst_26757 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_26758 = ["Access-Control-Request-Method"];
var inst_26759 = ["GET"];
var inst_26760 = cljs.core.PersistentHashMap.fromArrays(inst_26758,inst_26759);
var inst_26761 = [inst_26760,false];
var inst_26762 = cljs.core.PersistentHashMap.fromArrays(inst_26757,inst_26761);
var inst_26763 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26762], 0));
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26768__$1,(2),inst_26763);
} else {
if((state_val_26769 === (2))){
var inst_26765 = (state_26768[(2)]);
var inst_26766 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_26765) : callback.call(null,inst_26765));
var state_26768__$1 = state_26768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26768__$1,inst_26766);
} else {
return null;
}
}
});
return (function() {
var kelly_criterion_client$browser$get_request_$_state_machine__26422__auto__ = null;
var kelly_criterion_client$browser$get_request_$_state_machine__26422__auto____0 = (function (){
var statearr_26770 = [null,null,null,null,null,null,null];
(statearr_26770[(0)] = kelly_criterion_client$browser$get_request_$_state_machine__26422__auto__);

(statearr_26770[(1)] = (1));

return statearr_26770;
});
var kelly_criterion_client$browser$get_request_$_state_machine__26422__auto____1 = (function (state_26768){
while(true){
var ret_value__26423__auto__ = (function (){try{while(true){
var result__26424__auto__ = switch__26421__auto__(state_26768);
if(cljs.core.keyword_identical_QMARK_(result__26424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26424__auto__;
}
break;
}
}catch (e26771){var ex__26425__auto__ = e26771;
var statearr_26772_26810 = state_26768;
(statearr_26772_26810[(2)] = ex__26425__auto__);


if(cljs.core.seq((state_26768[(4)]))){
var statearr_26773_26811 = state_26768;
(statearr_26773_26811[(1)] = cljs.core.first((state_26768[(4)])));

} else {
throw ex__26425__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26812 = state_26768;
state_26768 = G__26812;
continue;
} else {
return ret_value__26423__auto__;
}
break;
}
});
kelly_criterion_client$browser$get_request_$_state_machine__26422__auto__ = function(state_26768){
switch(arguments.length){
case 0:
return kelly_criterion_client$browser$get_request_$_state_machine__26422__auto____0.call(this);
case 1:
return kelly_criterion_client$browser$get_request_$_state_machine__26422__auto____1.call(this,state_26768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kelly_criterion_client$browser$get_request_$_state_machine__26422__auto__.cljs$core$IFn$_invoke$arity$0 = kelly_criterion_client$browser$get_request_$_state_machine__26422__auto____0;
kelly_criterion_client$browser$get_request_$_state_machine__26422__auto__.cljs$core$IFn$_invoke$arity$1 = kelly_criterion_client$browser$get_request_$_state_machine__26422__auto____1;
return kelly_criterion_client$browser$get_request_$_state_machine__26422__auto__;
})()
})();
var state__26493__auto__ = (function (){var statearr_26774 = f__26492__auto__();
(statearr_26774[(6)] = c__26491__auto__);

return statearr_26774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26493__auto__);
}));

return c__26491__auto__;
});
kelly_criterion_client.browser.send_request = (function kelly_criterion_client$browser$send_request(target,data){
var G__26775 = target;
var G__26775__$1 = (((G__26775 instanceof cljs.core.Keyword))?G__26775.fqn:null);
switch (G__26775__$1) {
case "ergWorkout":
return kelly_criterion_client.browser.get_request(kelly_criterion_client.browser.retrieve_erg_workout,["http://localhost:8080/workouts/erg/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"id"))].join(''));

break;
case "waterWorkout":
return kelly_criterion_client.browser.get_request(kelly_criterion_client.browser.retrieve_water_workout,["http://localhost:8080/workouts/water/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"id"))].join(''));

break;
case "workoutList":
return kelly_criterion_client.browser.get_request(kelly_criterion_client.browser.retrieve_workout_list,"http://localhost:8080/workouts");

break;
default:
return "default";

}
});
kelly_criterion_client.browser.match_url = (function kelly_criterion_client$browser$match_url(){
var data = kelly_criterion_client.router.decode_url(window.location.href);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(data));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"targetId","targetId",953177609),null);

return kelly_criterion_client.browser.send_request(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(data),data);
});
if((typeof kelly_criterion_client !== 'undefined') && (typeof kelly_criterion_client.browser !== 'undefined') && (typeof kelly_criterion_client.browser.initial_load !== 'undefined')){
} else {
kelly_criterion_client.browser.initial_load = kelly_criterion_client.browser.match_url();
}
kelly_criterion_client.browser.init = (function kelly_criterion_client$browser$init(){
return kelly_criterion_client.browser.start();
});
kelly_criterion_client.browser.stop = (function kelly_criterion_client$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=kelly_criterion_client.browser.js.map
