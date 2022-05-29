goog.provide('rowing_client.browser');
if((typeof rowing_client !== 'undefined') && (typeof rowing_client.browser !== 'undefined') && (typeof rowing_client.browser.app_db !== 'undefined')){
} else {
rowing_client.browser.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}
if((typeof rowing_client !== 'undefined') && (typeof rowing_client.browser !== 'undefined') && (typeof rowing_client.browser.saved_response !== 'undefined')){
} else {
rowing_client.browser.saved_response = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
rowing_client.browser.start = (function rowing_client$browser$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(rowing_client.views.mainPage(rowing_client.browser.app_db),document.getElementById("app"));
});
rowing_client.browser.save_data = (function rowing_client$browser$save_data(vals,table_name,pk){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.browser.app_db,cljs.core.assoc,table_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37658 = cljs.core.deref(rowing_client.browser.app_db);
return (table_name.cljs$core$IFn$_invoke$arity$1 ? table_name.cljs$core$IFn$_invoke$arity$1(G__37658) : table_name.call(null,G__37658));
})(),pk,vals));
});
rowing_client.browser.data_to_pk_list = (function rowing_client$browser$data_to_pk_list(data,list_target_id,target_id){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,list_target_id,cljs.core.map.cljs$core$IFn$_invoke$arity$2(target_id,(list_target_id.cljs$core$IFn$_invoke$arity$1 ? list_target_id.cljs$core$IFn$_invoke$arity$1(data) : list_target_id.call(null,data))));
});
rowing_client.browser.save_list = (function rowing_client$browser$save_list(var_args){
var G__37663 = arguments.length;
switch (G__37663) {
case 3:
return rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$3 = (function (data,list_target_id,target_id){
return rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$4(data,list_target_id,target_id,cljs.core.identity);
}));

(rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$4 = (function (data,list_target_id,target_id,transform_func){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));

var seq__37664 = cljs.core.seq((list_target_id.cljs$core$IFn$_invoke$arity$1 ? list_target_id.cljs$core$IFn$_invoke$arity$1(data) : list_target_id.call(null,data)));
var chunk__37665 = null;
var count__37666 = (0);
var i__37667 = (0);
while(true){
if((i__37667 < count__37666)){
var target_data = chunk__37665.cljs$core$IIndexed$_nth$arity$2(null,i__37667);
rowing_client.browser.save_data((transform_func.cljs$core$IFn$_invoke$arity$1 ? transform_func.cljs$core$IFn$_invoke$arity$1(target_data) : transform_func.call(null,target_data)),target_id,(target_id.cljs$core$IFn$_invoke$arity$1 ? target_id.cljs$core$IFn$_invoke$arity$1(target_data) : target_id.call(null,target_data)));


var G__37747 = seq__37664;
var G__37748 = chunk__37665;
var G__37749 = count__37666;
var G__37750 = (i__37667 + (1));
seq__37664 = G__37747;
chunk__37665 = G__37748;
count__37666 = G__37749;
i__37667 = G__37750;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37664);
if(temp__5753__auto__){
var seq__37664__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37664__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37664__$1);
var G__37751 = cljs.core.chunk_rest(seq__37664__$1);
var G__37752 = c__4679__auto__;
var G__37753 = cljs.core.count(c__4679__auto__);
var G__37754 = (0);
seq__37664 = G__37751;
chunk__37665 = G__37752;
count__37666 = G__37753;
i__37667 = G__37754;
continue;
} else {
var target_data = cljs.core.first(seq__37664__$1);
rowing_client.browser.save_data((transform_func.cljs$core$IFn$_invoke$arity$1 ? transform_func.cljs$core$IFn$_invoke$arity$1(target_data) : transform_func.call(null,target_data)),target_id,(target_id.cljs$core$IFn$_invoke$arity$1 ? target_id.cljs$core$IFn$_invoke$arity$1(target_data) : target_id.call(null,target_data)));


var G__37755 = cljs.core.next(seq__37664__$1);
var G__37756 = null;
var G__37757 = (0);
var G__37758 = (0);
seq__37664 = G__37755;
chunk__37665 = G__37756;
count__37666 = G__37757;
i__37667 = G__37758;
continue;
}
} else {
return null;
}
}
break;
}
}));

(rowing_client.browser.save_list.cljs$lang$maxFixedArity = 4);

rowing_client.browser.retrieve_erg_workout = (function rowing_client$browser$retrieve_erg_workout(response){
var erg_workout = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.reset_BANG_(rowing_client.browser.saved_response,erg_workout);

rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$4(erg_workout,new cljs.core.Keyword(null,"splits","splits",766856963),new cljs.core.Keyword(null,"ergSplit","ergSplit",-1169288437),rowing_client.splits.add_power);

rowing_client.browser.save_data(rowing_client.browser.data_to_pk_list(erg_workout,new cljs.core.Keyword(null,"splits","splits",766856963),new cljs.core.Keyword(null,"ergSplit","ergSplit",-1169288437)),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131).cljs$core$IFn$_invoke$arity$1(erg_workout));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"targetId","targetId",953177609),new cljs.core.Keyword(null,"ergWorkout","ergWorkout",1688275131).cljs$core$IFn$_invoke$arity$1(erg_workout));
});
rowing_client.browser.retrieve_water_workout = (function rowing_client$browser$retrieve_water_workout(response){
var vals = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vals], 0));

cljs.core.reset_BANG_(rowing_client.browser.saved_response,vals);

var seq__37696_37759 = cljs.core.seq(new cljs.core.Keyword(null,"splits","splits",766856963).cljs$core$IFn$_invoke$arity$1(vals));
var chunk__37697_37760 = null;
var count__37698_37761 = (0);
var i__37699_37762 = (0);
while(true){
if((i__37699_37762 < count__37698_37761)){
var water_split_37763 = chunk__37697_37760.cljs$core$IIndexed$_nth$arity$2(null,i__37699_37762);
rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$3(water_split_37763,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775));

rowing_client.browser.save_data(rowing_client.browser.data_to_pk_list(water_split_37763,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775)),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921).cljs$core$IFn$_invoke$arity$1(water_split_37763));


var G__37764 = seq__37696_37759;
var G__37765 = chunk__37697_37760;
var G__37766 = count__37698_37761;
var G__37767 = (i__37699_37762 + (1));
seq__37696_37759 = G__37764;
chunk__37697_37760 = G__37765;
count__37698_37761 = G__37766;
i__37699_37762 = G__37767;
continue;
} else {
var temp__5753__auto___37768 = cljs.core.seq(seq__37696_37759);
if(temp__5753__auto___37768){
var seq__37696_37769__$1 = temp__5753__auto___37768;
if(cljs.core.chunked_seq_QMARK_(seq__37696_37769__$1)){
var c__4679__auto___37770 = cljs.core.chunk_first(seq__37696_37769__$1);
var G__37771 = cljs.core.chunk_rest(seq__37696_37769__$1);
var G__37772 = c__4679__auto___37770;
var G__37773 = cljs.core.count(c__4679__auto___37770);
var G__37774 = (0);
seq__37696_37759 = G__37771;
chunk__37697_37760 = G__37772;
count__37698_37761 = G__37773;
i__37699_37762 = G__37774;
continue;
} else {
var water_split_37775 = cljs.core.first(seq__37696_37769__$1);
rowing_client.browser.save_list.cljs$core$IFn$_invoke$arity$3(water_split_37775,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775));

rowing_client.browser.save_data(rowing_client.browser.data_to_pk_list(water_split_37775,new cljs.core.Keyword(null,"waterWorkoutAthleteSplits","waterWorkoutAthleteSplits",1195949926),new cljs.core.Keyword(null,"waterWorkoutAthleteSplit","waterWorkoutAthleteSplit",189559775)),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921).cljs$core$IFn$_invoke$arity$1(water_split_37775));


var G__37776 = cljs.core.next(seq__37696_37769__$1);
var G__37777 = null;
var G__37778 = (0);
var G__37779 = (0);
seq__37696_37759 = G__37776;
chunk__37697_37760 = G__37777;
count__37698_37761 = G__37778;
i__37699_37762 = G__37779;
continue;
}
} else {
}
}
break;
}

rowing_client.browser.save_data(rowing_client.browser.data_to_pk_list(vals,new cljs.core.Keyword(null,"splits","splits",766856963),new cljs.core.Keyword(null,"waterSplit","waterSplit",1286252921)),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797).cljs$core$IFn$_invoke$arity$1(vals));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"targetId","targetId",953177609),new cljs.core.Keyword(null,"waterWorkout","waterWorkout",999583797).cljs$core$IFn$_invoke$arity$1(vals));
});
rowing_client.browser.get_request = (function rowing_client$browser$get_request(callback,url){
var c__31080__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_37723){
var state_val_37724 = (state_37723[(1)]);
if((state_val_37724 === (1))){
var inst_37712 = [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_37713 = ["Access-Control-Request-Method"];
var inst_37714 = ["GET"];
var inst_37715 = cljs.core.PersistentHashMap.fromArrays(inst_37713,inst_37714);
var inst_37716 = [inst_37715,false];
var inst_37717 = cljs.core.PersistentHashMap.fromArrays(inst_37712,inst_37716);
var inst_37718 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_37717], 0));
var state_37723__$1 = state_37723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37723__$1,(2),inst_37718);
} else {
if((state_val_37724 === (2))){
var inst_37720 = (state_37723[(2)]);
var inst_37721 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_37720) : callback.call(null,inst_37720));
var state_37723__$1 = state_37723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37723__$1,inst_37721);
} else {
return null;
}
}
});
return (function() {
var rowing_client$browser$get_request_$_state_machine__30735__auto__ = null;
var rowing_client$browser$get_request_$_state_machine__30735__auto____0 = (function (){
var statearr_37731 = [null,null,null,null,null,null,null];
(statearr_37731[(0)] = rowing_client$browser$get_request_$_state_machine__30735__auto__);

(statearr_37731[(1)] = (1));

return statearr_37731;
});
var rowing_client$browser$get_request_$_state_machine__30735__auto____1 = (function (state_37723){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_37723);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e37735){var ex__30738__auto__ = e37735;
var statearr_37736_37780 = state_37723;
(statearr_37736_37780[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_37723[(4)]))){
var statearr_37737_37781 = state_37723;
(statearr_37737_37781[(1)] = cljs.core.first((state_37723[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37782 = state_37723;
state_37723 = G__37782;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
rowing_client$browser$get_request_$_state_machine__30735__auto__ = function(state_37723){
switch(arguments.length){
case 0:
return rowing_client$browser$get_request_$_state_machine__30735__auto____0.call(this);
case 1:
return rowing_client$browser$get_request_$_state_machine__30735__auto____1.call(this,state_37723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rowing_client$browser$get_request_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = rowing_client$browser$get_request_$_state_machine__30735__auto____0;
rowing_client$browser$get_request_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = rowing_client$browser$get_request_$_state_machine__30735__auto____1;
return rowing_client$browser$get_request_$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_37741 = f__31081__auto__();
(statearr_37741[(6)] = c__31080__auto__);

return statearr_37741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

return c__31080__auto__;
});
rowing_client.browser.send_request = (function rowing_client$browser$send_request(target,data){
var G__37745 = target;
var G__37745__$1 = (((G__37745 instanceof cljs.core.Keyword))?G__37745.fqn:null);
switch (G__37745__$1) {
case "ergWorkout":
return rowing_client.browser.get_request(rowing_client.browser.retrieve_erg_workout,["http://localhost:8080/workouts/erg/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"id"))].join(''));

break;
case "waterWorkout":
return rowing_client.browser.get_request(rowing_client.browser.retrieve_water_workout,["http://localhost:8080/workouts/water/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"id"))].join(''));

break;
case "workoutList":
return rowing_client.browser.get_request(rowing_client.browser.retrieve_workout_list,"http://localhost:8080/workouts");

break;
default:
return "default";

}
});
rowing_client.browser.match_url = (function rowing_client$browser$match_url(){
var data = rowing_client.router.decode_url(window.location.href);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(data));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"targetId","targetId",953177609),null);

return rowing_client.browser.send_request(new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(data),data);
});
if((typeof rowing_client !== 'undefined') && (typeof rowing_client.browser !== 'undefined') && (typeof rowing_client.browser.initial_load !== 'undefined')){
} else {
rowing_client.browser.initial_load = rowing_client.browser.match_url();
}
rowing_client.browser.init = (function rowing_client$browser$init(){
return rowing_client.browser.start();
});
rowing_client.browser.stop = (function rowing_client$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=rowing_client.browser.js.map
