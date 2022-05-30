goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36101__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36102__i = 0, G__36102__a = new Array(arguments.length -  0);
while (G__36102__i < G__36102__a.length) {G__36102__a[G__36102__i] = arguments[G__36102__i + 0]; ++G__36102__i;}
  args = new cljs.core.IndexedSeq(G__36102__a,0,null);
} 
return G__36101__delegate.call(this,args);};
G__36101.cljs$lang$maxFixedArity = 0;
G__36101.cljs$lang$applyTo = (function (arglist__36103){
var args = cljs.core.seq(arglist__36103);
return G__36101__delegate(args);
});
G__36101.cljs$core$IFn$_invoke$arity$variadic = G__36101__delegate;
return G__36101;
})()
);

(o.error = (function() { 
var G__36104__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36109__i = 0, G__36109__a = new Array(arguments.length -  0);
while (G__36109__i < G__36109__a.length) {G__36109__a[G__36109__i] = arguments[G__36109__i + 0]; ++G__36109__i;}
  args = new cljs.core.IndexedSeq(G__36109__a,0,null);
} 
return G__36104__delegate.call(this,args);};
G__36104.cljs$lang$maxFixedArity = 0;
G__36104.cljs$lang$applyTo = (function (arglist__36110){
var args = cljs.core.seq(arglist__36110);
return G__36104__delegate(args);
});
G__36104.cljs$core$IFn$_invoke$arity$variadic = G__36104__delegate;
return G__36104;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map