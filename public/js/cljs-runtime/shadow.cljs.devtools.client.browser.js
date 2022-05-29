goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36501 = arguments.length;
var i__4865__auto___36502 = (0);
while(true){
if((i__4865__auto___36502 < len__4864__auto___36501)){
args__4870__auto__.push((arguments[i__4865__auto___36502]));

var G__36503 = (i__4865__auto___36502 + (1));
i__4865__auto___36502 = G__36503;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36099){
var G__36100 = cljs.core.first(seq36099);
var seq36099__$1 = cljs.core.next(seq36099);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36100,seq36099__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36105 = cljs.core.seq(sources);
var chunk__36106 = null;
var count__36107 = (0);
var i__36108 = (0);
while(true){
if((i__36108 < count__36107)){
var map__36115 = chunk__36106.cljs$core$IIndexed$_nth$arity$2(null,i__36108);
var map__36115__$1 = cljs.core.__destructure_map(map__36115);
var src = map__36115__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36116){var e_36506 = e36116;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36506);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36506.message)].join('')));
}

var G__36507 = seq__36105;
var G__36508 = chunk__36106;
var G__36509 = count__36107;
var G__36510 = (i__36108 + (1));
seq__36105 = G__36507;
chunk__36106 = G__36508;
count__36107 = G__36509;
i__36108 = G__36510;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36105);
if(temp__5753__auto__){
var seq__36105__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36105__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36105__$1);
var G__36511 = cljs.core.chunk_rest(seq__36105__$1);
var G__36512 = c__4679__auto__;
var G__36513 = cljs.core.count(c__4679__auto__);
var G__36514 = (0);
seq__36105 = G__36511;
chunk__36106 = G__36512;
count__36107 = G__36513;
i__36108 = G__36514;
continue;
} else {
var map__36117 = cljs.core.first(seq__36105__$1);
var map__36117__$1 = cljs.core.__destructure_map(map__36117);
var src = map__36117__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36118){var e_36515 = e36118;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36515);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36515.message)].join('')));
}

var G__36516 = cljs.core.next(seq__36105__$1);
var G__36517 = null;
var G__36518 = (0);
var G__36519 = (0);
seq__36105 = G__36516;
chunk__36106 = G__36517;
count__36107 = G__36518;
i__36108 = G__36519;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36126 = cljs.core.seq(js_requires);
var chunk__36127 = null;
var count__36128 = (0);
var i__36129 = (0);
while(true){
if((i__36129 < count__36128)){
var js_ns = chunk__36127.cljs$core$IIndexed$_nth$arity$2(null,i__36129);
var require_str_36520 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36520);


var G__36521 = seq__36126;
var G__36522 = chunk__36127;
var G__36523 = count__36128;
var G__36524 = (i__36129 + (1));
seq__36126 = G__36521;
chunk__36127 = G__36522;
count__36128 = G__36523;
i__36129 = G__36524;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36126);
if(temp__5753__auto__){
var seq__36126__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36126__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36126__$1);
var G__36525 = cljs.core.chunk_rest(seq__36126__$1);
var G__36526 = c__4679__auto__;
var G__36527 = cljs.core.count(c__4679__auto__);
var G__36528 = (0);
seq__36126 = G__36525;
chunk__36127 = G__36526;
count__36128 = G__36527;
i__36129 = G__36528;
continue;
} else {
var js_ns = cljs.core.first(seq__36126__$1);
var require_str_36529 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36529);


var G__36530 = cljs.core.next(seq__36126__$1);
var G__36531 = null;
var G__36532 = (0);
var G__36533 = (0);
seq__36126 = G__36530;
chunk__36127 = G__36531;
count__36128 = G__36532;
i__36129 = G__36533;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36135){
var map__36136 = p__36135;
var map__36136__$1 = cljs.core.__destructure_map(map__36136);
var msg = map__36136__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36136__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36137(s__36138){
return (new cljs.core.LazySeq(null,(function (){
var s__36138__$1 = s__36138;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36138__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36143 = cljs.core.first(xs__6308__auto__);
var map__36143__$1 = cljs.core.__destructure_map(map__36143);
var src = map__36143__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36143__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36138__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36136,map__36136__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36137_$_iter__36139(s__36140){
return (new cljs.core.LazySeq(null,((function (s__36138__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36136,map__36136__$1,msg,info,reload_info){
return (function (){
var s__36140__$1 = s__36140;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36140__$1);
if(temp__5753__auto____$1){
var s__36140__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36140__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36140__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36142 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36141 = (0);
while(true){
if((i__36141 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36141);
cljs.core.chunk_append(b__36142,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36534 = (i__36141 + (1));
i__36141 = G__36534;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36142),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36137_$_iter__36139(cljs.core.chunk_rest(s__36140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36142),null);
}
} else {
var warning = cljs.core.first(s__36140__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36137_$_iter__36139(cljs.core.rest(s__36140__$2)));
}
} else {
return null;
}
break;
}
});})(s__36138__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36136,map__36136__$1,msg,info,reload_info))
,null,null));
});})(s__36138__$1,map__36143,map__36143__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36136,map__36136__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36137(cljs.core.rest(s__36138__$1)));
} else {
var G__36535 = cljs.core.rest(s__36138__$1);
s__36138__$1 = G__36535;
continue;
}
} else {
var G__36536 = cljs.core.rest(s__36138__$1);
s__36138__$1 = G__36536;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36144_36537 = cljs.core.seq(warnings);
var chunk__36145_36538 = null;
var count__36146_36539 = (0);
var i__36147_36540 = (0);
while(true){
if((i__36147_36540 < count__36146_36539)){
var map__36150_36541 = chunk__36145_36538.cljs$core$IIndexed$_nth$arity$2(null,i__36147_36540);
var map__36150_36542__$1 = cljs.core.__destructure_map(map__36150_36541);
var w_36543 = map__36150_36542__$1;
var msg_36544__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36542__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36542__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36542__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36150_36542__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36547)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36545),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36546),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36544__$1)].join(''));


var G__36548 = seq__36144_36537;
var G__36549 = chunk__36145_36538;
var G__36550 = count__36146_36539;
var G__36551 = (i__36147_36540 + (1));
seq__36144_36537 = G__36548;
chunk__36145_36538 = G__36549;
count__36146_36539 = G__36550;
i__36147_36540 = G__36551;
continue;
} else {
var temp__5753__auto___36552 = cljs.core.seq(seq__36144_36537);
if(temp__5753__auto___36552){
var seq__36144_36553__$1 = temp__5753__auto___36552;
if(cljs.core.chunked_seq_QMARK_(seq__36144_36553__$1)){
var c__4679__auto___36554 = cljs.core.chunk_first(seq__36144_36553__$1);
var G__36555 = cljs.core.chunk_rest(seq__36144_36553__$1);
var G__36556 = c__4679__auto___36554;
var G__36557 = cljs.core.count(c__4679__auto___36554);
var G__36558 = (0);
seq__36144_36537 = G__36555;
chunk__36145_36538 = G__36556;
count__36146_36539 = G__36557;
i__36147_36540 = G__36558;
continue;
} else {
var map__36151_36559 = cljs.core.first(seq__36144_36553__$1);
var map__36151_36560__$1 = cljs.core.__destructure_map(map__36151_36559);
var w_36561 = map__36151_36560__$1;
var msg_36562__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36560__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36560__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36560__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36151_36560__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36565)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36563),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36564),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36562__$1)].join(''));


var G__36566 = cljs.core.next(seq__36144_36553__$1);
var G__36567 = null;
var G__36568 = (0);
var G__36569 = (0);
seq__36144_36537 = G__36566;
chunk__36145_36538 = G__36567;
count__36146_36539 = G__36568;
i__36147_36540 = G__36569;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36134_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36134_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36152){
var map__36153 = p__36152;
var map__36153__$1 = cljs.core.__destructure_map(map__36153);
var msg = map__36153__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36154 = cljs.core.seq(updates);
var chunk__36156 = null;
var count__36157 = (0);
var i__36158 = (0);
while(true){
if((i__36158 < count__36157)){
var path = chunk__36156.cljs$core$IIndexed$_nth$arity$2(null,i__36158);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36309_36570 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36313_36571 = null;
var count__36314_36572 = (0);
var i__36315_36573 = (0);
while(true){
if((i__36315_36573 < count__36314_36572)){
var node_36574 = chunk__36313_36571.cljs$core$IIndexed$_nth$arity$2(null,i__36315_36573);
if(cljs.core.not(node_36574.shadow$old)){
var path_match_36575 = shadow.cljs.devtools.client.browser.match_paths(node_36574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36575)){
var new_link_36576 = (function (){var G__36350 = node_36574.cloneNode(true);
G__36350.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36575),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36350;
})();
(node_36574.shadow$old = true);

(new_link_36576.onload = ((function (seq__36309_36570,chunk__36313_36571,count__36314_36572,i__36315_36573,seq__36154,chunk__36156,count__36157,i__36158,new_link_36576,path_match_36575,node_36574,path,map__36153,map__36153__$1,msg,updates,reload_info){
return (function (e){
var seq__36351_36577 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36353_36578 = null;
var count__36354_36579 = (0);
var i__36355_36580 = (0);
while(true){
if((i__36355_36580 < count__36354_36579)){
var map__36380_36581 = chunk__36353_36578.cljs$core$IIndexed$_nth$arity$2(null,i__36355_36580);
var map__36380_36582__$1 = cljs.core.__destructure_map(map__36380_36581);
var task_36583 = map__36380_36582__$1;
var fn_str_36584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36380_36582__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36380_36582__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36586 = goog.getObjectByName(fn_str_36584,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36585)].join(''));

(fn_obj_36586.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36586.cljs$core$IFn$_invoke$arity$2(path,new_link_36576) : fn_obj_36586.call(null,path,new_link_36576));


var G__36587 = seq__36351_36577;
var G__36588 = chunk__36353_36578;
var G__36589 = count__36354_36579;
var G__36590 = (i__36355_36580 + (1));
seq__36351_36577 = G__36587;
chunk__36353_36578 = G__36588;
count__36354_36579 = G__36589;
i__36355_36580 = G__36590;
continue;
} else {
var temp__5753__auto___36591 = cljs.core.seq(seq__36351_36577);
if(temp__5753__auto___36591){
var seq__36351_36592__$1 = temp__5753__auto___36591;
if(cljs.core.chunked_seq_QMARK_(seq__36351_36592__$1)){
var c__4679__auto___36593 = cljs.core.chunk_first(seq__36351_36592__$1);
var G__36594 = cljs.core.chunk_rest(seq__36351_36592__$1);
var G__36595 = c__4679__auto___36593;
var G__36596 = cljs.core.count(c__4679__auto___36593);
var G__36597 = (0);
seq__36351_36577 = G__36594;
chunk__36353_36578 = G__36595;
count__36354_36579 = G__36596;
i__36355_36580 = G__36597;
continue;
} else {
var map__36382_36598 = cljs.core.first(seq__36351_36592__$1);
var map__36382_36599__$1 = cljs.core.__destructure_map(map__36382_36598);
var task_36600 = map__36382_36599__$1;
var fn_str_36601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382_36599__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36382_36599__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36603 = goog.getObjectByName(fn_str_36601,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36602)].join(''));

(fn_obj_36603.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36603.cljs$core$IFn$_invoke$arity$2(path,new_link_36576) : fn_obj_36603.call(null,path,new_link_36576));


var G__36604 = cljs.core.next(seq__36351_36592__$1);
var G__36605 = null;
var G__36606 = (0);
var G__36607 = (0);
seq__36351_36577 = G__36604;
chunk__36353_36578 = G__36605;
count__36354_36579 = G__36606;
i__36355_36580 = G__36607;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36574);
});})(seq__36309_36570,chunk__36313_36571,count__36314_36572,i__36315_36573,seq__36154,chunk__36156,count__36157,i__36158,new_link_36576,path_match_36575,node_36574,path,map__36153,map__36153__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36575], 0));

goog.dom.insertSiblingAfter(new_link_36576,node_36574);


var G__36608 = seq__36309_36570;
var G__36609 = chunk__36313_36571;
var G__36610 = count__36314_36572;
var G__36611 = (i__36315_36573 + (1));
seq__36309_36570 = G__36608;
chunk__36313_36571 = G__36609;
count__36314_36572 = G__36610;
i__36315_36573 = G__36611;
continue;
} else {
var G__36612 = seq__36309_36570;
var G__36613 = chunk__36313_36571;
var G__36614 = count__36314_36572;
var G__36615 = (i__36315_36573 + (1));
seq__36309_36570 = G__36612;
chunk__36313_36571 = G__36613;
count__36314_36572 = G__36614;
i__36315_36573 = G__36615;
continue;
}
} else {
var G__36616 = seq__36309_36570;
var G__36617 = chunk__36313_36571;
var G__36618 = count__36314_36572;
var G__36619 = (i__36315_36573 + (1));
seq__36309_36570 = G__36616;
chunk__36313_36571 = G__36617;
count__36314_36572 = G__36618;
i__36315_36573 = G__36619;
continue;
}
} else {
var temp__5753__auto___36620 = cljs.core.seq(seq__36309_36570);
if(temp__5753__auto___36620){
var seq__36309_36621__$1 = temp__5753__auto___36620;
if(cljs.core.chunked_seq_QMARK_(seq__36309_36621__$1)){
var c__4679__auto___36622 = cljs.core.chunk_first(seq__36309_36621__$1);
var G__36623 = cljs.core.chunk_rest(seq__36309_36621__$1);
var G__36624 = c__4679__auto___36622;
var G__36625 = cljs.core.count(c__4679__auto___36622);
var G__36626 = (0);
seq__36309_36570 = G__36623;
chunk__36313_36571 = G__36624;
count__36314_36572 = G__36625;
i__36315_36573 = G__36626;
continue;
} else {
var node_36627 = cljs.core.first(seq__36309_36621__$1);
if(cljs.core.not(node_36627.shadow$old)){
var path_match_36628 = shadow.cljs.devtools.client.browser.match_paths(node_36627.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36628)){
var new_link_36629 = (function (){var G__36386 = node_36627.cloneNode(true);
G__36386.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36628),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36386;
})();
(node_36627.shadow$old = true);

(new_link_36629.onload = ((function (seq__36309_36570,chunk__36313_36571,count__36314_36572,i__36315_36573,seq__36154,chunk__36156,count__36157,i__36158,new_link_36629,path_match_36628,node_36627,seq__36309_36621__$1,temp__5753__auto___36620,path,map__36153,map__36153__$1,msg,updates,reload_info){
return (function (e){
var seq__36387_36630 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36389_36631 = null;
var count__36390_36632 = (0);
var i__36391_36633 = (0);
while(true){
if((i__36391_36633 < count__36390_36632)){
var map__36395_36634 = chunk__36389_36631.cljs$core$IIndexed$_nth$arity$2(null,i__36391_36633);
var map__36395_36635__$1 = cljs.core.__destructure_map(map__36395_36634);
var task_36636 = map__36395_36635__$1;
var fn_str_36637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36395_36635__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36395_36635__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36639 = goog.getObjectByName(fn_str_36637,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36638)].join(''));

(fn_obj_36639.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36639.cljs$core$IFn$_invoke$arity$2(path,new_link_36629) : fn_obj_36639.call(null,path,new_link_36629));


var G__36640 = seq__36387_36630;
var G__36641 = chunk__36389_36631;
var G__36642 = count__36390_36632;
var G__36643 = (i__36391_36633 + (1));
seq__36387_36630 = G__36640;
chunk__36389_36631 = G__36641;
count__36390_36632 = G__36642;
i__36391_36633 = G__36643;
continue;
} else {
var temp__5753__auto___36644__$1 = cljs.core.seq(seq__36387_36630);
if(temp__5753__auto___36644__$1){
var seq__36387_36645__$1 = temp__5753__auto___36644__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36387_36645__$1)){
var c__4679__auto___36646 = cljs.core.chunk_first(seq__36387_36645__$1);
var G__36647 = cljs.core.chunk_rest(seq__36387_36645__$1);
var G__36648 = c__4679__auto___36646;
var G__36649 = cljs.core.count(c__4679__auto___36646);
var G__36650 = (0);
seq__36387_36630 = G__36647;
chunk__36389_36631 = G__36648;
count__36390_36632 = G__36649;
i__36391_36633 = G__36650;
continue;
} else {
var map__36397_36651 = cljs.core.first(seq__36387_36645__$1);
var map__36397_36652__$1 = cljs.core.__destructure_map(map__36397_36651);
var task_36653 = map__36397_36652__$1;
var fn_str_36654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36397_36652__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36397_36652__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36656 = goog.getObjectByName(fn_str_36654,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36655)].join(''));

(fn_obj_36656.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36656.cljs$core$IFn$_invoke$arity$2(path,new_link_36629) : fn_obj_36656.call(null,path,new_link_36629));


var G__36657 = cljs.core.next(seq__36387_36645__$1);
var G__36658 = null;
var G__36659 = (0);
var G__36660 = (0);
seq__36387_36630 = G__36657;
chunk__36389_36631 = G__36658;
count__36390_36632 = G__36659;
i__36391_36633 = G__36660;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36627);
});})(seq__36309_36570,chunk__36313_36571,count__36314_36572,i__36315_36573,seq__36154,chunk__36156,count__36157,i__36158,new_link_36629,path_match_36628,node_36627,seq__36309_36621__$1,temp__5753__auto___36620,path,map__36153,map__36153__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36628], 0));

goog.dom.insertSiblingAfter(new_link_36629,node_36627);


var G__36661 = cljs.core.next(seq__36309_36621__$1);
var G__36662 = null;
var G__36663 = (0);
var G__36664 = (0);
seq__36309_36570 = G__36661;
chunk__36313_36571 = G__36662;
count__36314_36572 = G__36663;
i__36315_36573 = G__36664;
continue;
} else {
var G__36665 = cljs.core.next(seq__36309_36621__$1);
var G__36666 = null;
var G__36667 = (0);
var G__36668 = (0);
seq__36309_36570 = G__36665;
chunk__36313_36571 = G__36666;
count__36314_36572 = G__36667;
i__36315_36573 = G__36668;
continue;
}
} else {
var G__36669 = cljs.core.next(seq__36309_36621__$1);
var G__36670 = null;
var G__36671 = (0);
var G__36672 = (0);
seq__36309_36570 = G__36669;
chunk__36313_36571 = G__36670;
count__36314_36572 = G__36671;
i__36315_36573 = G__36672;
continue;
}
}
} else {
}
}
break;
}


var G__36673 = seq__36154;
var G__36674 = chunk__36156;
var G__36675 = count__36157;
var G__36676 = (i__36158 + (1));
seq__36154 = G__36673;
chunk__36156 = G__36674;
count__36157 = G__36675;
i__36158 = G__36676;
continue;
} else {
var G__36677 = seq__36154;
var G__36678 = chunk__36156;
var G__36679 = count__36157;
var G__36680 = (i__36158 + (1));
seq__36154 = G__36677;
chunk__36156 = G__36678;
count__36157 = G__36679;
i__36158 = G__36680;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36154);
if(temp__5753__auto__){
var seq__36154__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36154__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36154__$1);
var G__36681 = cljs.core.chunk_rest(seq__36154__$1);
var G__36682 = c__4679__auto__;
var G__36683 = cljs.core.count(c__4679__auto__);
var G__36684 = (0);
seq__36154 = G__36681;
chunk__36156 = G__36682;
count__36157 = G__36683;
i__36158 = G__36684;
continue;
} else {
var path = cljs.core.first(seq__36154__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36402_36685 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36406_36686 = null;
var count__36407_36687 = (0);
var i__36408_36688 = (0);
while(true){
if((i__36408_36688 < count__36407_36687)){
var node_36689 = chunk__36406_36686.cljs$core$IIndexed$_nth$arity$2(null,i__36408_36688);
if(cljs.core.not(node_36689.shadow$old)){
var path_match_36690 = shadow.cljs.devtools.client.browser.match_paths(node_36689.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36690)){
var new_link_36691 = (function (){var G__36451 = node_36689.cloneNode(true);
G__36451.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36690),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36451;
})();
(node_36689.shadow$old = true);

(new_link_36691.onload = ((function (seq__36402_36685,chunk__36406_36686,count__36407_36687,i__36408_36688,seq__36154,chunk__36156,count__36157,i__36158,new_link_36691,path_match_36690,node_36689,path,seq__36154__$1,temp__5753__auto__,map__36153,map__36153__$1,msg,updates,reload_info){
return (function (e){
var seq__36452_36692 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36454_36693 = null;
var count__36455_36694 = (0);
var i__36456_36695 = (0);
while(true){
if((i__36456_36695 < count__36455_36694)){
var map__36462_36696 = chunk__36454_36693.cljs$core$IIndexed$_nth$arity$2(null,i__36456_36695);
var map__36462_36697__$1 = cljs.core.__destructure_map(map__36462_36696);
var task_36698 = map__36462_36697__$1;
var fn_str_36699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36462_36697__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36462_36697__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36701 = goog.getObjectByName(fn_str_36699,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36700)].join(''));

(fn_obj_36701.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36701.cljs$core$IFn$_invoke$arity$2(path,new_link_36691) : fn_obj_36701.call(null,path,new_link_36691));


var G__36702 = seq__36452_36692;
var G__36703 = chunk__36454_36693;
var G__36704 = count__36455_36694;
var G__36705 = (i__36456_36695 + (1));
seq__36452_36692 = G__36702;
chunk__36454_36693 = G__36703;
count__36455_36694 = G__36704;
i__36456_36695 = G__36705;
continue;
} else {
var temp__5753__auto___36706__$1 = cljs.core.seq(seq__36452_36692);
if(temp__5753__auto___36706__$1){
var seq__36452_36707__$1 = temp__5753__auto___36706__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36452_36707__$1)){
var c__4679__auto___36708 = cljs.core.chunk_first(seq__36452_36707__$1);
var G__36709 = cljs.core.chunk_rest(seq__36452_36707__$1);
var G__36710 = c__4679__auto___36708;
var G__36711 = cljs.core.count(c__4679__auto___36708);
var G__36712 = (0);
seq__36452_36692 = G__36709;
chunk__36454_36693 = G__36710;
count__36455_36694 = G__36711;
i__36456_36695 = G__36712;
continue;
} else {
var map__36463_36713 = cljs.core.first(seq__36452_36707__$1);
var map__36463_36714__$1 = cljs.core.__destructure_map(map__36463_36713);
var task_36715 = map__36463_36714__$1;
var fn_str_36716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463_36714__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463_36714__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36718 = goog.getObjectByName(fn_str_36716,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36717)].join(''));

(fn_obj_36718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36718.cljs$core$IFn$_invoke$arity$2(path,new_link_36691) : fn_obj_36718.call(null,path,new_link_36691));


var G__36719 = cljs.core.next(seq__36452_36707__$1);
var G__36720 = null;
var G__36721 = (0);
var G__36722 = (0);
seq__36452_36692 = G__36719;
chunk__36454_36693 = G__36720;
count__36455_36694 = G__36721;
i__36456_36695 = G__36722;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36689);
});})(seq__36402_36685,chunk__36406_36686,count__36407_36687,i__36408_36688,seq__36154,chunk__36156,count__36157,i__36158,new_link_36691,path_match_36690,node_36689,path,seq__36154__$1,temp__5753__auto__,map__36153,map__36153__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36690], 0));

goog.dom.insertSiblingAfter(new_link_36691,node_36689);


var G__36723 = seq__36402_36685;
var G__36724 = chunk__36406_36686;
var G__36725 = count__36407_36687;
var G__36726 = (i__36408_36688 + (1));
seq__36402_36685 = G__36723;
chunk__36406_36686 = G__36724;
count__36407_36687 = G__36725;
i__36408_36688 = G__36726;
continue;
} else {
var G__36727 = seq__36402_36685;
var G__36728 = chunk__36406_36686;
var G__36729 = count__36407_36687;
var G__36730 = (i__36408_36688 + (1));
seq__36402_36685 = G__36727;
chunk__36406_36686 = G__36728;
count__36407_36687 = G__36729;
i__36408_36688 = G__36730;
continue;
}
} else {
var G__36731 = seq__36402_36685;
var G__36732 = chunk__36406_36686;
var G__36733 = count__36407_36687;
var G__36734 = (i__36408_36688 + (1));
seq__36402_36685 = G__36731;
chunk__36406_36686 = G__36732;
count__36407_36687 = G__36733;
i__36408_36688 = G__36734;
continue;
}
} else {
var temp__5753__auto___36735__$1 = cljs.core.seq(seq__36402_36685);
if(temp__5753__auto___36735__$1){
var seq__36402_36736__$1 = temp__5753__auto___36735__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36402_36736__$1)){
var c__4679__auto___36737 = cljs.core.chunk_first(seq__36402_36736__$1);
var G__36738 = cljs.core.chunk_rest(seq__36402_36736__$1);
var G__36739 = c__4679__auto___36737;
var G__36740 = cljs.core.count(c__4679__auto___36737);
var G__36741 = (0);
seq__36402_36685 = G__36738;
chunk__36406_36686 = G__36739;
count__36407_36687 = G__36740;
i__36408_36688 = G__36741;
continue;
} else {
var node_36742 = cljs.core.first(seq__36402_36736__$1);
if(cljs.core.not(node_36742.shadow$old)){
var path_match_36743 = shadow.cljs.devtools.client.browser.match_paths(node_36742.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36743)){
var new_link_36744 = (function (){var G__36464 = node_36742.cloneNode(true);
G__36464.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36743),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36464;
})();
(node_36742.shadow$old = true);

(new_link_36744.onload = ((function (seq__36402_36685,chunk__36406_36686,count__36407_36687,i__36408_36688,seq__36154,chunk__36156,count__36157,i__36158,new_link_36744,path_match_36743,node_36742,seq__36402_36736__$1,temp__5753__auto___36735__$1,path,seq__36154__$1,temp__5753__auto__,map__36153,map__36153__$1,msg,updates,reload_info){
return (function (e){
var seq__36465_36754 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36467_36755 = null;
var count__36468_36756 = (0);
var i__36469_36757 = (0);
while(true){
if((i__36469_36757 < count__36468_36756)){
var map__36473_36758 = chunk__36467_36755.cljs$core$IIndexed$_nth$arity$2(null,i__36469_36757);
var map__36473_36759__$1 = cljs.core.__destructure_map(map__36473_36758);
var task_36760 = map__36473_36759__$1;
var fn_str_36761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473_36759__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473_36759__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36763 = goog.getObjectByName(fn_str_36761,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36762)].join(''));

(fn_obj_36763.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36763.cljs$core$IFn$_invoke$arity$2(path,new_link_36744) : fn_obj_36763.call(null,path,new_link_36744));


var G__36764 = seq__36465_36754;
var G__36765 = chunk__36467_36755;
var G__36766 = count__36468_36756;
var G__36767 = (i__36469_36757 + (1));
seq__36465_36754 = G__36764;
chunk__36467_36755 = G__36765;
count__36468_36756 = G__36766;
i__36469_36757 = G__36767;
continue;
} else {
var temp__5753__auto___36768__$2 = cljs.core.seq(seq__36465_36754);
if(temp__5753__auto___36768__$2){
var seq__36465_36769__$1 = temp__5753__auto___36768__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36465_36769__$1)){
var c__4679__auto___36770 = cljs.core.chunk_first(seq__36465_36769__$1);
var G__36771 = cljs.core.chunk_rest(seq__36465_36769__$1);
var G__36772 = c__4679__auto___36770;
var G__36773 = cljs.core.count(c__4679__auto___36770);
var G__36774 = (0);
seq__36465_36754 = G__36771;
chunk__36467_36755 = G__36772;
count__36468_36756 = G__36773;
i__36469_36757 = G__36774;
continue;
} else {
var map__36474_36775 = cljs.core.first(seq__36465_36769__$1);
var map__36474_36776__$1 = cljs.core.__destructure_map(map__36474_36775);
var task_36777 = map__36474_36776__$1;
var fn_str_36778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36474_36776__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36474_36776__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36780 = goog.getObjectByName(fn_str_36778,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36779)].join(''));

(fn_obj_36780.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36780.cljs$core$IFn$_invoke$arity$2(path,new_link_36744) : fn_obj_36780.call(null,path,new_link_36744));


var G__36781 = cljs.core.next(seq__36465_36769__$1);
var G__36782 = null;
var G__36783 = (0);
var G__36784 = (0);
seq__36465_36754 = G__36781;
chunk__36467_36755 = G__36782;
count__36468_36756 = G__36783;
i__36469_36757 = G__36784;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36742);
});})(seq__36402_36685,chunk__36406_36686,count__36407_36687,i__36408_36688,seq__36154,chunk__36156,count__36157,i__36158,new_link_36744,path_match_36743,node_36742,seq__36402_36736__$1,temp__5753__auto___36735__$1,path,seq__36154__$1,temp__5753__auto__,map__36153,map__36153__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36743], 0));

goog.dom.insertSiblingAfter(new_link_36744,node_36742);


var G__36785 = cljs.core.next(seq__36402_36736__$1);
var G__36786 = null;
var G__36787 = (0);
var G__36788 = (0);
seq__36402_36685 = G__36785;
chunk__36406_36686 = G__36786;
count__36407_36687 = G__36787;
i__36408_36688 = G__36788;
continue;
} else {
var G__36789 = cljs.core.next(seq__36402_36736__$1);
var G__36790 = null;
var G__36791 = (0);
var G__36792 = (0);
seq__36402_36685 = G__36789;
chunk__36406_36686 = G__36790;
count__36407_36687 = G__36791;
i__36408_36688 = G__36792;
continue;
}
} else {
var G__36793 = cljs.core.next(seq__36402_36736__$1);
var G__36794 = null;
var G__36795 = (0);
var G__36796 = (0);
seq__36402_36685 = G__36793;
chunk__36406_36686 = G__36794;
count__36407_36687 = G__36795;
i__36408_36688 = G__36796;
continue;
}
}
} else {
}
}
break;
}


var G__36797 = cljs.core.next(seq__36154__$1);
var G__36798 = null;
var G__36799 = (0);
var G__36800 = (0);
seq__36154 = G__36797;
chunk__36156 = G__36798;
count__36157 = G__36799;
i__36158 = G__36800;
continue;
} else {
var G__36801 = cljs.core.next(seq__36154__$1);
var G__36802 = null;
var G__36803 = (0);
var G__36804 = (0);
seq__36154 = G__36801;
chunk__36156 = G__36802;
count__36157 = G__36803;
i__36158 = G__36804;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36477){
var map__36478 = p__36477;
var map__36478__$1 = cljs.core.__destructure_map(map__36478);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36479){
var map__36480 = p__36479;
var map__36480__$1 = cljs.core.__destructure_map(map__36480);
var _ = map__36480__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36480__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36481,done,error){
var map__36482 = p__36481;
var map__36482__$1 = cljs.core.__destructure_map(map__36482);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36482__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36483,done,error){
var map__36484 = p__36483;
var map__36484__$1 = cljs.core.__destructure_map(map__36484);
var msg = map__36484__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36485){
var map__36486 = p__36485;
var map__36486__$1 = cljs.core.__destructure_map(map__36486);
var src = map__36486__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36486__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36487 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36487) : done.call(null,G__36487));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36488){
var map__36489 = p__36488;
var map__36489__$1 = cljs.core.__destructure_map(map__36489);
var msg__$1 = map__36489__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36489__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36490){var ex = e36490;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36491){
var map__36492 = p__36491;
var map__36492__$1 = cljs.core.__destructure_map(map__36492);
var env = map__36492__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36492__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36496){
var map__36497 = p__36496;
var map__36497__$1 = cljs.core.__destructure_map(map__36497);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36497__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36497__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36499){
var map__36500 = p__36499;
var map__36500__$1 = cljs.core.__destructure_map(map__36500);
var svc = map__36500__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36500__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
