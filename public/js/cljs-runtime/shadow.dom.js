goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33397 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33397(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33398 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33398(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32722 = coll;
var G__32723 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32722,G__32723) : shadow.dom.lazy_native_coll_seq.call(null,G__32722,G__32723));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32758 = arguments.length;
switch (G__32758) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32788 = arguments.length;
switch (G__32788) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32792 = arguments.length;
switch (G__32792) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32805 = arguments.length;
switch (G__32805) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32824 = arguments.length;
switch (G__32824) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32837 = arguments.length;
switch (G__32837) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32853){if((e32853 instanceof Object)){
var e = e32853;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32853;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32858 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32859 = null;
var count__32860 = (0);
var i__32861 = (0);
while(true){
if((i__32861 < count__32860)){
var el = chunk__32859.cljs$core$IIndexed$_nth$arity$2(null,i__32861);
var handler_33405__$1 = ((function (seq__32858,chunk__32859,count__32860,i__32861,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32858,chunk__32859,count__32860,i__32861,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33405__$1);


var G__33406 = seq__32858;
var G__33407 = chunk__32859;
var G__33408 = count__32860;
var G__33409 = (i__32861 + (1));
seq__32858 = G__33406;
chunk__32859 = G__33407;
count__32860 = G__33408;
i__32861 = G__33409;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32858);
if(temp__5753__auto__){
var seq__32858__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32858__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32858__$1);
var G__33410 = cljs.core.chunk_rest(seq__32858__$1);
var G__33411 = c__4679__auto__;
var G__33412 = cljs.core.count(c__4679__auto__);
var G__33413 = (0);
seq__32858 = G__33410;
chunk__32859 = G__33411;
count__32860 = G__33412;
i__32861 = G__33413;
continue;
} else {
var el = cljs.core.first(seq__32858__$1);
var handler_33414__$1 = ((function (seq__32858,chunk__32859,count__32860,i__32861,el,seq__32858__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32858,chunk__32859,count__32860,i__32861,el,seq__32858__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33414__$1);


var G__33415 = cljs.core.next(seq__32858__$1);
var G__33416 = null;
var G__33417 = (0);
var G__33418 = (0);
seq__32858 = G__33415;
chunk__32859 = G__33416;
count__32860 = G__33417;
i__32861 = G__33418;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32899 = arguments.length;
switch (G__32899) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32923 = cljs.core.seq(events);
var chunk__32924 = null;
var count__32925 = (0);
var i__32926 = (0);
while(true){
if((i__32926 < count__32925)){
var vec__32937 = chunk__32924.cljs$core$IIndexed$_nth$arity$2(null,i__32926);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32937,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33420 = seq__32923;
var G__33421 = chunk__32924;
var G__33422 = count__32925;
var G__33423 = (i__32926 + (1));
seq__32923 = G__33420;
chunk__32924 = G__33421;
count__32925 = G__33422;
i__32926 = G__33423;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32923);
if(temp__5753__auto__){
var seq__32923__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32923__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32923__$1);
var G__33424 = cljs.core.chunk_rest(seq__32923__$1);
var G__33425 = c__4679__auto__;
var G__33426 = cljs.core.count(c__4679__auto__);
var G__33427 = (0);
seq__32923 = G__33424;
chunk__32924 = G__33425;
count__32925 = G__33426;
i__32926 = G__33427;
continue;
} else {
var vec__32943 = cljs.core.first(seq__32923__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32943,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33428 = cljs.core.next(seq__32923__$1);
var G__33429 = null;
var G__33430 = (0);
var G__33431 = (0);
seq__32923 = G__33428;
chunk__32924 = G__33429;
count__32925 = G__33430;
i__32926 = G__33431;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32950 = cljs.core.seq(styles);
var chunk__32951 = null;
var count__32952 = (0);
var i__32953 = (0);
while(true){
if((i__32953 < count__32952)){
var vec__32960 = chunk__32951.cljs$core$IIndexed$_nth$arity$2(null,i__32953);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32960,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33432 = seq__32950;
var G__33433 = chunk__32951;
var G__33434 = count__32952;
var G__33435 = (i__32953 + (1));
seq__32950 = G__33432;
chunk__32951 = G__33433;
count__32952 = G__33434;
i__32953 = G__33435;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32950);
if(temp__5753__auto__){
var seq__32950__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32950__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32950__$1);
var G__33436 = cljs.core.chunk_rest(seq__32950__$1);
var G__33437 = c__4679__auto__;
var G__33438 = cljs.core.count(c__4679__auto__);
var G__33439 = (0);
seq__32950 = G__33436;
chunk__32951 = G__33437;
count__32952 = G__33438;
i__32953 = G__33439;
continue;
} else {
var vec__32964 = cljs.core.first(seq__32950__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32964,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33440 = cljs.core.next(seq__32950__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__32950 = G__33440;
chunk__32951 = G__33441;
count__32952 = G__33442;
i__32953 = G__33443;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32971_33444 = key;
var G__32971_33445__$1 = (((G__32971_33444 instanceof cljs.core.Keyword))?G__32971_33444.fqn:null);
switch (G__32971_33445__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33447 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_33447,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_33447,"aria-");
}
})())){
el.setAttribute(ks_33447,value);
} else {
(el[ks_33447] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33003){
var map__33004 = p__33003;
var map__33004__$1 = cljs.core.__destructure_map(map__33004);
var props = map__33004__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33004__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33007 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33007,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33007,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33007,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33012 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33012,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33012;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33019 = arguments.length;
switch (G__33019) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33034){
var vec__33036 = p__33034;
var seq__33037 = cljs.core.seq(vec__33036);
var first__33038 = cljs.core.first(seq__33037);
var seq__33037__$1 = cljs.core.next(seq__33037);
var nn = first__33038;
var first__33038__$1 = cljs.core.first(seq__33037__$1);
var seq__33037__$2 = cljs.core.next(seq__33037__$1);
var np = first__33038__$1;
var nc = seq__33037__$2;
var node = vec__33036;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33043 = nn;
var G__33044 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33043,G__33044) : create_fn.call(null,G__33043,G__33044));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33046 = nn;
var G__33047 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33046,G__33047) : create_fn.call(null,G__33046,G__33047));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33052 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33052,(1),null);
var seq__33055_33449 = cljs.core.seq(node_children);
var chunk__33056_33450 = null;
var count__33057_33451 = (0);
var i__33058_33452 = (0);
while(true){
if((i__33058_33452 < count__33057_33451)){
var child_struct_33453 = chunk__33056_33450.cljs$core$IIndexed$_nth$arity$2(null,i__33058_33452);
var children_33454 = shadow.dom.dom_node(child_struct_33453);
if(cljs.core.seq_QMARK_(children_33454)){
var seq__33099_33455 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33454));
var chunk__33101_33456 = null;
var count__33102_33457 = (0);
var i__33103_33458 = (0);
while(true){
if((i__33103_33458 < count__33102_33457)){
var child_33459 = chunk__33101_33456.cljs$core$IIndexed$_nth$arity$2(null,i__33103_33458);
if(cljs.core.truth_(child_33459)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33459);


var G__33460 = seq__33099_33455;
var G__33461 = chunk__33101_33456;
var G__33462 = count__33102_33457;
var G__33463 = (i__33103_33458 + (1));
seq__33099_33455 = G__33460;
chunk__33101_33456 = G__33461;
count__33102_33457 = G__33462;
i__33103_33458 = G__33463;
continue;
} else {
var G__33464 = seq__33099_33455;
var G__33465 = chunk__33101_33456;
var G__33466 = count__33102_33457;
var G__33467 = (i__33103_33458 + (1));
seq__33099_33455 = G__33464;
chunk__33101_33456 = G__33465;
count__33102_33457 = G__33466;
i__33103_33458 = G__33467;
continue;
}
} else {
var temp__5753__auto___33468 = cljs.core.seq(seq__33099_33455);
if(temp__5753__auto___33468){
var seq__33099_33469__$1 = temp__5753__auto___33468;
if(cljs.core.chunked_seq_QMARK_(seq__33099_33469__$1)){
var c__4679__auto___33470 = cljs.core.chunk_first(seq__33099_33469__$1);
var G__33471 = cljs.core.chunk_rest(seq__33099_33469__$1);
var G__33472 = c__4679__auto___33470;
var G__33473 = cljs.core.count(c__4679__auto___33470);
var G__33474 = (0);
seq__33099_33455 = G__33471;
chunk__33101_33456 = G__33472;
count__33102_33457 = G__33473;
i__33103_33458 = G__33474;
continue;
} else {
var child_33475 = cljs.core.first(seq__33099_33469__$1);
if(cljs.core.truth_(child_33475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33475);


var G__33476 = cljs.core.next(seq__33099_33469__$1);
var G__33477 = null;
var G__33478 = (0);
var G__33479 = (0);
seq__33099_33455 = G__33476;
chunk__33101_33456 = G__33477;
count__33102_33457 = G__33478;
i__33103_33458 = G__33479;
continue;
} else {
var G__33480 = cljs.core.next(seq__33099_33469__$1);
var G__33481 = null;
var G__33482 = (0);
var G__33483 = (0);
seq__33099_33455 = G__33480;
chunk__33101_33456 = G__33481;
count__33102_33457 = G__33482;
i__33103_33458 = G__33483;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33454);
}


var G__33484 = seq__33055_33449;
var G__33485 = chunk__33056_33450;
var G__33486 = count__33057_33451;
var G__33487 = (i__33058_33452 + (1));
seq__33055_33449 = G__33484;
chunk__33056_33450 = G__33485;
count__33057_33451 = G__33486;
i__33058_33452 = G__33487;
continue;
} else {
var temp__5753__auto___33488 = cljs.core.seq(seq__33055_33449);
if(temp__5753__auto___33488){
var seq__33055_33489__$1 = temp__5753__auto___33488;
if(cljs.core.chunked_seq_QMARK_(seq__33055_33489__$1)){
var c__4679__auto___33491 = cljs.core.chunk_first(seq__33055_33489__$1);
var G__33492 = cljs.core.chunk_rest(seq__33055_33489__$1);
var G__33493 = c__4679__auto___33491;
var G__33494 = cljs.core.count(c__4679__auto___33491);
var G__33495 = (0);
seq__33055_33449 = G__33492;
chunk__33056_33450 = G__33493;
count__33057_33451 = G__33494;
i__33058_33452 = G__33495;
continue;
} else {
var child_struct_33496 = cljs.core.first(seq__33055_33489__$1);
var children_33497 = shadow.dom.dom_node(child_struct_33496);
if(cljs.core.seq_QMARK_(children_33497)){
var seq__33119_33498 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33497));
var chunk__33121_33499 = null;
var count__33122_33500 = (0);
var i__33123_33501 = (0);
while(true){
if((i__33123_33501 < count__33122_33500)){
var child_33502 = chunk__33121_33499.cljs$core$IIndexed$_nth$arity$2(null,i__33123_33501);
if(cljs.core.truth_(child_33502)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33502);


var G__33503 = seq__33119_33498;
var G__33504 = chunk__33121_33499;
var G__33505 = count__33122_33500;
var G__33506 = (i__33123_33501 + (1));
seq__33119_33498 = G__33503;
chunk__33121_33499 = G__33504;
count__33122_33500 = G__33505;
i__33123_33501 = G__33506;
continue;
} else {
var G__33507 = seq__33119_33498;
var G__33508 = chunk__33121_33499;
var G__33509 = count__33122_33500;
var G__33510 = (i__33123_33501 + (1));
seq__33119_33498 = G__33507;
chunk__33121_33499 = G__33508;
count__33122_33500 = G__33509;
i__33123_33501 = G__33510;
continue;
}
} else {
var temp__5753__auto___33511__$1 = cljs.core.seq(seq__33119_33498);
if(temp__5753__auto___33511__$1){
var seq__33119_33512__$1 = temp__5753__auto___33511__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33119_33512__$1)){
var c__4679__auto___33513 = cljs.core.chunk_first(seq__33119_33512__$1);
var G__33514 = cljs.core.chunk_rest(seq__33119_33512__$1);
var G__33515 = c__4679__auto___33513;
var G__33516 = cljs.core.count(c__4679__auto___33513);
var G__33517 = (0);
seq__33119_33498 = G__33514;
chunk__33121_33499 = G__33515;
count__33122_33500 = G__33516;
i__33123_33501 = G__33517;
continue;
} else {
var child_33518 = cljs.core.first(seq__33119_33512__$1);
if(cljs.core.truth_(child_33518)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33518);


var G__33519 = cljs.core.next(seq__33119_33512__$1);
var G__33520 = null;
var G__33521 = (0);
var G__33522 = (0);
seq__33119_33498 = G__33519;
chunk__33121_33499 = G__33520;
count__33122_33500 = G__33521;
i__33123_33501 = G__33522;
continue;
} else {
var G__33523 = cljs.core.next(seq__33119_33512__$1);
var G__33524 = null;
var G__33525 = (0);
var G__33526 = (0);
seq__33119_33498 = G__33523;
chunk__33121_33499 = G__33524;
count__33122_33500 = G__33525;
i__33123_33501 = G__33526;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33497);
}


var G__33527 = cljs.core.next(seq__33055_33489__$1);
var G__33528 = null;
var G__33529 = (0);
var G__33530 = (0);
seq__33055_33449 = G__33527;
chunk__33056_33450 = G__33528;
count__33057_33451 = G__33529;
i__33058_33452 = G__33530;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33143 = cljs.core.seq(node);
var chunk__33144 = null;
var count__33145 = (0);
var i__33146 = (0);
while(true){
if((i__33146 < count__33145)){
var n = chunk__33144.cljs$core$IIndexed$_nth$arity$2(null,i__33146);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33532 = seq__33143;
var G__33533 = chunk__33144;
var G__33534 = count__33145;
var G__33535 = (i__33146 + (1));
seq__33143 = G__33532;
chunk__33144 = G__33533;
count__33145 = G__33534;
i__33146 = G__33535;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33143);
if(temp__5753__auto__){
var seq__33143__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33143__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33143__$1);
var G__33536 = cljs.core.chunk_rest(seq__33143__$1);
var G__33537 = c__4679__auto__;
var G__33538 = cljs.core.count(c__4679__auto__);
var G__33539 = (0);
seq__33143 = G__33536;
chunk__33144 = G__33537;
count__33145 = G__33538;
i__33146 = G__33539;
continue;
} else {
var n = cljs.core.first(seq__33143__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33540 = cljs.core.next(seq__33143__$1);
var G__33541 = null;
var G__33542 = (0);
var G__33543 = (0);
seq__33143 = G__33540;
chunk__33144 = G__33541;
count__33145 = G__33542;
i__33146 = G__33543;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33171 = arguments.length;
switch (G__33171) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33180 = arguments.length;
switch (G__33180) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33198 = arguments.length;
switch (G__33198) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33549 = arguments.length;
var i__4865__auto___33550 = (0);
while(true){
if((i__4865__auto___33550 < len__4864__auto___33549)){
args__4870__auto__.push((arguments[i__4865__auto___33550]));

var G__33551 = (i__4865__auto___33550 + (1));
i__4865__auto___33550 = G__33551;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33223_33552 = cljs.core.seq(nodes);
var chunk__33224_33553 = null;
var count__33225_33554 = (0);
var i__33226_33555 = (0);
while(true){
if((i__33226_33555 < count__33225_33554)){
var node_33556 = chunk__33224_33553.cljs$core$IIndexed$_nth$arity$2(null,i__33226_33555);
fragment.appendChild(shadow.dom._to_dom(node_33556));


var G__33557 = seq__33223_33552;
var G__33558 = chunk__33224_33553;
var G__33559 = count__33225_33554;
var G__33560 = (i__33226_33555 + (1));
seq__33223_33552 = G__33557;
chunk__33224_33553 = G__33558;
count__33225_33554 = G__33559;
i__33226_33555 = G__33560;
continue;
} else {
var temp__5753__auto___33561 = cljs.core.seq(seq__33223_33552);
if(temp__5753__auto___33561){
var seq__33223_33562__$1 = temp__5753__auto___33561;
if(cljs.core.chunked_seq_QMARK_(seq__33223_33562__$1)){
var c__4679__auto___33563 = cljs.core.chunk_first(seq__33223_33562__$1);
var G__33564 = cljs.core.chunk_rest(seq__33223_33562__$1);
var G__33565 = c__4679__auto___33563;
var G__33566 = cljs.core.count(c__4679__auto___33563);
var G__33567 = (0);
seq__33223_33552 = G__33564;
chunk__33224_33553 = G__33565;
count__33225_33554 = G__33566;
i__33226_33555 = G__33567;
continue;
} else {
var node_33568 = cljs.core.first(seq__33223_33562__$1);
fragment.appendChild(shadow.dom._to_dom(node_33568));


var G__33569 = cljs.core.next(seq__33223_33562__$1);
var G__33570 = null;
var G__33571 = (0);
var G__33572 = (0);
seq__33223_33552 = G__33569;
chunk__33224_33553 = G__33570;
count__33225_33554 = G__33571;
i__33226_33555 = G__33572;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33217){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33217));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33241_33573 = cljs.core.seq(scripts);
var chunk__33242_33574 = null;
var count__33243_33575 = (0);
var i__33244_33576 = (0);
while(true){
if((i__33244_33576 < count__33243_33575)){
var vec__33259_33577 = chunk__33242_33574.cljs$core$IIndexed$_nth$arity$2(null,i__33244_33576);
var script_tag_33578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33259_33577,(0),null);
var script_body_33579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33259_33577,(1),null);
eval(script_body_33579);


var G__33580 = seq__33241_33573;
var G__33581 = chunk__33242_33574;
var G__33582 = count__33243_33575;
var G__33583 = (i__33244_33576 + (1));
seq__33241_33573 = G__33580;
chunk__33242_33574 = G__33581;
count__33243_33575 = G__33582;
i__33244_33576 = G__33583;
continue;
} else {
var temp__5753__auto___33584 = cljs.core.seq(seq__33241_33573);
if(temp__5753__auto___33584){
var seq__33241_33585__$1 = temp__5753__auto___33584;
if(cljs.core.chunked_seq_QMARK_(seq__33241_33585__$1)){
var c__4679__auto___33586 = cljs.core.chunk_first(seq__33241_33585__$1);
var G__33587 = cljs.core.chunk_rest(seq__33241_33585__$1);
var G__33588 = c__4679__auto___33586;
var G__33589 = cljs.core.count(c__4679__auto___33586);
var G__33590 = (0);
seq__33241_33573 = G__33587;
chunk__33242_33574 = G__33588;
count__33243_33575 = G__33589;
i__33244_33576 = G__33590;
continue;
} else {
var vec__33266_33591 = cljs.core.first(seq__33241_33585__$1);
var script_tag_33592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266_33591,(0),null);
var script_body_33593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266_33591,(1),null);
eval(script_body_33593);


var G__33594 = cljs.core.next(seq__33241_33585__$1);
var G__33595 = null;
var G__33596 = (0);
var G__33597 = (0);
seq__33241_33573 = G__33594;
chunk__33242_33574 = G__33595;
count__33243_33575 = G__33596;
i__33244_33576 = G__33597;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33271){
var vec__33274 = p__33271;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33274,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33274,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33279 = arguments.length;
switch (G__33279) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33280 = cljs.core.seq(style_keys);
var chunk__33281 = null;
var count__33282 = (0);
var i__33283 = (0);
while(true){
if((i__33283 < count__33282)){
var it = chunk__33281.cljs$core$IIndexed$_nth$arity$2(null,i__33283);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33599 = seq__33280;
var G__33600 = chunk__33281;
var G__33601 = count__33282;
var G__33602 = (i__33283 + (1));
seq__33280 = G__33599;
chunk__33281 = G__33600;
count__33282 = G__33601;
i__33283 = G__33602;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33280);
if(temp__5753__auto__){
var seq__33280__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33280__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33280__$1);
var G__33603 = cljs.core.chunk_rest(seq__33280__$1);
var G__33604 = c__4679__auto__;
var G__33605 = cljs.core.count(c__4679__auto__);
var G__33606 = (0);
seq__33280 = G__33603;
chunk__33281 = G__33604;
count__33282 = G__33605;
i__33283 = G__33606;
continue;
} else {
var it = cljs.core.first(seq__33280__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33607 = cljs.core.next(seq__33280__$1);
var G__33608 = null;
var G__33609 = (0);
var G__33610 = (0);
seq__33280 = G__33607;
chunk__33281 = G__33608;
count__33282 = G__33609;
i__33283 = G__33610;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33285,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33289 = k33285;
var G__33289__$1 = (((G__33289 instanceof cljs.core.Keyword))?G__33289.fqn:null);
switch (G__33289__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33285,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33290){
var vec__33291 = p__33290;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33291,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33291,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33284){
var self__ = this;
var G__33284__$1 = this;
return (new cljs.core.RecordIter((0),G__33284__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33286,other33287){
var self__ = this;
var this33286__$1 = this;
return (((!((other33287 == null)))) && ((((this33286__$1.constructor === other33287.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33286__$1.x,other33287.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33286__$1.y,other33287.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33286__$1.__extmap,other33287.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33285){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33294 = k33285;
var G__33294__$1 = (((G__33294 instanceof cljs.core.Keyword))?G__33294.fqn:null);
switch (G__33294__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33285);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33284){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33295 = cljs.core.keyword_identical_QMARK_;
var expr__33296 = k__4511__auto__;
if(cljs.core.truth_((pred__33295.cljs$core$IFn$_invoke$arity$2 ? pred__33295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33296) : pred__33295.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33296)))){
return (new shadow.dom.Coordinate(G__33284,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33295.cljs$core$IFn$_invoke$arity$2 ? pred__33295.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33296) : pred__33295.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33296)))){
return (new shadow.dom.Coordinate(self__.x,G__33284,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33284),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33284){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33284,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33288){
var extmap__4542__auto__ = (function (){var G__33298 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33288,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33288)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33298);
} else {
return G__33298;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33288),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33288),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33300,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33304 = k33300;
var G__33304__$1 = (((G__33304 instanceof cljs.core.Keyword))?G__33304.fqn:null);
switch (G__33304__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33300,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33305){
var vec__33306 = p__33305;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33306,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33299){
var self__ = this;
var G__33299__$1 = this;
return (new cljs.core.RecordIter((0),G__33299__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33301,other33302){
var self__ = this;
var this33301__$1 = this;
return (((!((other33302 == null)))) && ((((this33301__$1.constructor === other33302.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33301__$1.w,other33302.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33301__$1.h,other33302.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33301__$1.__extmap,other33302.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33300){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33309 = k33300;
var G__33309__$1 = (((G__33309 instanceof cljs.core.Keyword))?G__33309.fqn:null);
switch (G__33309__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33300);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33299){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33310 = cljs.core.keyword_identical_QMARK_;
var expr__33311 = k__4511__auto__;
if(cljs.core.truth_((pred__33310.cljs$core$IFn$_invoke$arity$2 ? pred__33310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33311) : pred__33310.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33311)))){
return (new shadow.dom.Size(G__33299,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33310.cljs$core$IFn$_invoke$arity$2 ? pred__33310.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33311) : pred__33310.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33311)))){
return (new shadow.dom.Size(self__.w,G__33299,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33299),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33299){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33299,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33303){
var extmap__4542__auto__ = (function (){var G__33313 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33303,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33303)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33313);
} else {
return G__33313;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33303),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33303),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__33616 = (i + (1));
var G__33617 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33616;
ret = G__33617;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33318){
var vec__33319 = p__33318;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33319,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33323 = arguments.length;
switch (G__33323) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33619 = ps;
var G__33620 = (i + (1));
el__$1 = G__33619;
i = G__33620;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33324 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33324,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33327_33622 = cljs.core.seq(props);
var chunk__33328_33623 = null;
var count__33329_33624 = (0);
var i__33330_33625 = (0);
while(true){
if((i__33330_33625 < count__33329_33624)){
var vec__33337_33626 = chunk__33328_33623.cljs$core$IIndexed$_nth$arity$2(null,i__33330_33625);
var k_33627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337_33626,(0),null);
var v_33628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33337_33626,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33627);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33627),v_33628);


var G__33629 = seq__33327_33622;
var G__33630 = chunk__33328_33623;
var G__33631 = count__33329_33624;
var G__33632 = (i__33330_33625 + (1));
seq__33327_33622 = G__33629;
chunk__33328_33623 = G__33630;
count__33329_33624 = G__33631;
i__33330_33625 = G__33632;
continue;
} else {
var temp__5753__auto___33633 = cljs.core.seq(seq__33327_33622);
if(temp__5753__auto___33633){
var seq__33327_33634__$1 = temp__5753__auto___33633;
if(cljs.core.chunked_seq_QMARK_(seq__33327_33634__$1)){
var c__4679__auto___33635 = cljs.core.chunk_first(seq__33327_33634__$1);
var G__33636 = cljs.core.chunk_rest(seq__33327_33634__$1);
var G__33637 = c__4679__auto___33635;
var G__33638 = cljs.core.count(c__4679__auto___33635);
var G__33639 = (0);
seq__33327_33622 = G__33636;
chunk__33328_33623 = G__33637;
count__33329_33624 = G__33638;
i__33330_33625 = G__33639;
continue;
} else {
var vec__33340_33640 = cljs.core.first(seq__33327_33634__$1);
var k_33641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33340_33640,(0),null);
var v_33642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33340_33640,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_33641);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33641),v_33642);


var G__33643 = cljs.core.next(seq__33327_33634__$1);
var G__33644 = null;
var G__33645 = (0);
var G__33646 = (0);
seq__33327_33622 = G__33643;
chunk__33328_33623 = G__33644;
count__33329_33624 = G__33645;
i__33330_33625 = G__33646;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33344 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33344,(1),null);
var seq__33347_33651 = cljs.core.seq(node_children);
var chunk__33349_33652 = null;
var count__33350_33653 = (0);
var i__33351_33654 = (0);
while(true){
if((i__33351_33654 < count__33350_33653)){
var child_struct_33655 = chunk__33349_33652.cljs$core$IIndexed$_nth$arity$2(null,i__33351_33654);
if((!((child_struct_33655 == null)))){
if(typeof child_struct_33655 === 'string'){
var text_33656 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33656),child_struct_33655].join(''));
} else {
var children_33658 = shadow.dom.svg_node(child_struct_33655);
if(cljs.core.seq_QMARK_(children_33658)){
var seq__33365_33659 = cljs.core.seq(children_33658);
var chunk__33367_33660 = null;
var count__33368_33661 = (0);
var i__33369_33662 = (0);
while(true){
if((i__33369_33662 < count__33368_33661)){
var child_33663 = chunk__33367_33660.cljs$core$IIndexed$_nth$arity$2(null,i__33369_33662);
if(cljs.core.truth_(child_33663)){
node.appendChild(child_33663);


var G__33664 = seq__33365_33659;
var G__33665 = chunk__33367_33660;
var G__33666 = count__33368_33661;
var G__33667 = (i__33369_33662 + (1));
seq__33365_33659 = G__33664;
chunk__33367_33660 = G__33665;
count__33368_33661 = G__33666;
i__33369_33662 = G__33667;
continue;
} else {
var G__33668 = seq__33365_33659;
var G__33669 = chunk__33367_33660;
var G__33670 = count__33368_33661;
var G__33671 = (i__33369_33662 + (1));
seq__33365_33659 = G__33668;
chunk__33367_33660 = G__33669;
count__33368_33661 = G__33670;
i__33369_33662 = G__33671;
continue;
}
} else {
var temp__5753__auto___33672 = cljs.core.seq(seq__33365_33659);
if(temp__5753__auto___33672){
var seq__33365_33673__$1 = temp__5753__auto___33672;
if(cljs.core.chunked_seq_QMARK_(seq__33365_33673__$1)){
var c__4679__auto___33674 = cljs.core.chunk_first(seq__33365_33673__$1);
var G__33675 = cljs.core.chunk_rest(seq__33365_33673__$1);
var G__33676 = c__4679__auto___33674;
var G__33677 = cljs.core.count(c__4679__auto___33674);
var G__33678 = (0);
seq__33365_33659 = G__33675;
chunk__33367_33660 = G__33676;
count__33368_33661 = G__33677;
i__33369_33662 = G__33678;
continue;
} else {
var child_33679 = cljs.core.first(seq__33365_33673__$1);
if(cljs.core.truth_(child_33679)){
node.appendChild(child_33679);


var G__33680 = cljs.core.next(seq__33365_33673__$1);
var G__33681 = null;
var G__33682 = (0);
var G__33683 = (0);
seq__33365_33659 = G__33680;
chunk__33367_33660 = G__33681;
count__33368_33661 = G__33682;
i__33369_33662 = G__33683;
continue;
} else {
var G__33684 = cljs.core.next(seq__33365_33673__$1);
var G__33685 = null;
var G__33686 = (0);
var G__33687 = (0);
seq__33365_33659 = G__33684;
chunk__33367_33660 = G__33685;
count__33368_33661 = G__33686;
i__33369_33662 = G__33687;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33658);
}
}


var G__33688 = seq__33347_33651;
var G__33689 = chunk__33349_33652;
var G__33690 = count__33350_33653;
var G__33691 = (i__33351_33654 + (1));
seq__33347_33651 = G__33688;
chunk__33349_33652 = G__33689;
count__33350_33653 = G__33690;
i__33351_33654 = G__33691;
continue;
} else {
var G__33692 = seq__33347_33651;
var G__33693 = chunk__33349_33652;
var G__33694 = count__33350_33653;
var G__33695 = (i__33351_33654 + (1));
seq__33347_33651 = G__33692;
chunk__33349_33652 = G__33693;
count__33350_33653 = G__33694;
i__33351_33654 = G__33695;
continue;
}
} else {
var temp__5753__auto___33696 = cljs.core.seq(seq__33347_33651);
if(temp__5753__auto___33696){
var seq__33347_33697__$1 = temp__5753__auto___33696;
if(cljs.core.chunked_seq_QMARK_(seq__33347_33697__$1)){
var c__4679__auto___33698 = cljs.core.chunk_first(seq__33347_33697__$1);
var G__33699 = cljs.core.chunk_rest(seq__33347_33697__$1);
var G__33700 = c__4679__auto___33698;
var G__33701 = cljs.core.count(c__4679__auto___33698);
var G__33702 = (0);
seq__33347_33651 = G__33699;
chunk__33349_33652 = G__33700;
count__33350_33653 = G__33701;
i__33351_33654 = G__33702;
continue;
} else {
var child_struct_33703 = cljs.core.first(seq__33347_33697__$1);
if((!((child_struct_33703 == null)))){
if(typeof child_struct_33703 === 'string'){
var text_33704 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33704),child_struct_33703].join(''));
} else {
var children_33705 = shadow.dom.svg_node(child_struct_33703);
if(cljs.core.seq_QMARK_(children_33705)){
var seq__33371_33706 = cljs.core.seq(children_33705);
var chunk__33373_33707 = null;
var count__33374_33708 = (0);
var i__33375_33709 = (0);
while(true){
if((i__33375_33709 < count__33374_33708)){
var child_33710 = chunk__33373_33707.cljs$core$IIndexed$_nth$arity$2(null,i__33375_33709);
if(cljs.core.truth_(child_33710)){
node.appendChild(child_33710);


var G__33711 = seq__33371_33706;
var G__33712 = chunk__33373_33707;
var G__33713 = count__33374_33708;
var G__33714 = (i__33375_33709 + (1));
seq__33371_33706 = G__33711;
chunk__33373_33707 = G__33712;
count__33374_33708 = G__33713;
i__33375_33709 = G__33714;
continue;
} else {
var G__33715 = seq__33371_33706;
var G__33716 = chunk__33373_33707;
var G__33717 = count__33374_33708;
var G__33718 = (i__33375_33709 + (1));
seq__33371_33706 = G__33715;
chunk__33373_33707 = G__33716;
count__33374_33708 = G__33717;
i__33375_33709 = G__33718;
continue;
}
} else {
var temp__5753__auto___33719__$1 = cljs.core.seq(seq__33371_33706);
if(temp__5753__auto___33719__$1){
var seq__33371_33720__$1 = temp__5753__auto___33719__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33371_33720__$1)){
var c__4679__auto___33721 = cljs.core.chunk_first(seq__33371_33720__$1);
var G__33722 = cljs.core.chunk_rest(seq__33371_33720__$1);
var G__33723 = c__4679__auto___33721;
var G__33724 = cljs.core.count(c__4679__auto___33721);
var G__33725 = (0);
seq__33371_33706 = G__33722;
chunk__33373_33707 = G__33723;
count__33374_33708 = G__33724;
i__33375_33709 = G__33725;
continue;
} else {
var child_33726 = cljs.core.first(seq__33371_33720__$1);
if(cljs.core.truth_(child_33726)){
node.appendChild(child_33726);


var G__33727 = cljs.core.next(seq__33371_33720__$1);
var G__33728 = null;
var G__33729 = (0);
var G__33730 = (0);
seq__33371_33706 = G__33727;
chunk__33373_33707 = G__33728;
count__33374_33708 = G__33729;
i__33375_33709 = G__33730;
continue;
} else {
var G__33731 = cljs.core.next(seq__33371_33720__$1);
var G__33732 = null;
var G__33733 = (0);
var G__33734 = (0);
seq__33371_33706 = G__33731;
chunk__33373_33707 = G__33732;
count__33374_33708 = G__33733;
i__33375_33709 = G__33734;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33705);
}
}


var G__33735 = cljs.core.next(seq__33347_33697__$1);
var G__33736 = null;
var G__33737 = (0);
var G__33738 = (0);
seq__33347_33651 = G__33735;
chunk__33349_33652 = G__33736;
count__33350_33653 = G__33737;
i__33351_33654 = G__33738;
continue;
} else {
var G__33739 = cljs.core.next(seq__33347_33697__$1);
var G__33740 = null;
var G__33741 = (0);
var G__33742 = (0);
seq__33347_33651 = G__33739;
chunk__33349_33652 = G__33740;
count__33350_33653 = G__33741;
i__33351_33654 = G__33742;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33744 = arguments.length;
var i__4865__auto___33745 = (0);
while(true){
if((i__4865__auto___33745 < len__4864__auto___33744)){
args__4870__auto__.push((arguments[i__4865__auto___33745]));

var G__33746 = (i__4865__auto___33745 + (1));
i__4865__auto___33745 = G__33746;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33377){
var G__33378 = cljs.core.first(seq33377);
var seq33377__$1 = cljs.core.next(seq33377);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33378,seq33377__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33380 = arguments.length;
switch (G__33380) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__31080__auto___33750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_33385){
var state_val_33386 = (state_33385[(1)]);
if((state_val_33386 === (1))){
var state_33385__$1 = state_33385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33385__$1,(2),once_or_cleanup);
} else {
if((state_val_33386 === (2))){
var inst_33382 = (state_33385[(2)]);
var inst_33383 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33385__$1 = (function (){var statearr_33387 = state_33385;
(statearr_33387[(7)] = inst_33382);

return statearr_33387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33385__$1,inst_33383);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30735__auto__ = null;
var shadow$dom$state_machine__30735__auto____0 = (function (){
var statearr_33388 = [null,null,null,null,null,null,null,null];
(statearr_33388[(0)] = shadow$dom$state_machine__30735__auto__);

(statearr_33388[(1)] = (1));

return statearr_33388;
});
var shadow$dom$state_machine__30735__auto____1 = (function (state_33385){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_33385);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e33389){var ex__30738__auto__ = e33389;
var statearr_33390_33756 = state_33385;
(statearr_33390_33756[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_33385[(4)]))){
var statearr_33391_33757 = state_33385;
(statearr_33391_33757[(1)] = cljs.core.first((state_33385[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33758 = state_33385;
state_33385 = G__33758;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
shadow$dom$state_machine__30735__auto__ = function(state_33385){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30735__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30735__auto____1.call(this,state_33385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30735__auto____0;
shadow$dom$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30735__auto____1;
return shadow$dom$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_33392 = f__31081__auto__();
(statearr_33392[(6)] = c__31080__auto___33750);

return statearr_33392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
