goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35334){
var map__35335 = p__35334;
var map__35335__$1 = cljs.core.__destructure_map(map__35335);
var m = map__35335__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35338_35554 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35339_35555 = null;
var count__35340_35556 = (0);
var i__35341_35557 = (0);
while(true){
if((i__35341_35557 < count__35340_35556)){
var f_35558 = chunk__35339_35555.cljs$core$IIndexed$_nth$arity$2(null,i__35341_35557);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35558], 0));


var G__35559 = seq__35338_35554;
var G__35560 = chunk__35339_35555;
var G__35561 = count__35340_35556;
var G__35562 = (i__35341_35557 + (1));
seq__35338_35554 = G__35559;
chunk__35339_35555 = G__35560;
count__35340_35556 = G__35561;
i__35341_35557 = G__35562;
continue;
} else {
var temp__5753__auto___35563 = cljs.core.seq(seq__35338_35554);
if(temp__5753__auto___35563){
var seq__35338_35564__$1 = temp__5753__auto___35563;
if(cljs.core.chunked_seq_QMARK_(seq__35338_35564__$1)){
var c__4679__auto___35565 = cljs.core.chunk_first(seq__35338_35564__$1);
var G__35566 = cljs.core.chunk_rest(seq__35338_35564__$1);
var G__35567 = c__4679__auto___35565;
var G__35568 = cljs.core.count(c__4679__auto___35565);
var G__35569 = (0);
seq__35338_35554 = G__35566;
chunk__35339_35555 = G__35567;
count__35340_35556 = G__35568;
i__35341_35557 = G__35569;
continue;
} else {
var f_35570 = cljs.core.first(seq__35338_35564__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35570], 0));


var G__35571 = cljs.core.next(seq__35338_35564__$1);
var G__35572 = null;
var G__35573 = (0);
var G__35574 = (0);
seq__35338_35554 = G__35571;
chunk__35339_35555 = G__35572;
count__35340_35556 = G__35573;
i__35341_35557 = G__35574;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35575 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35575], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35575)))?cljs.core.second(arglists_35575):arglists_35575)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35347_35576 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35348_35577 = null;
var count__35349_35578 = (0);
var i__35350_35579 = (0);
while(true){
if((i__35350_35579 < count__35349_35578)){
var vec__35362_35580 = chunk__35348_35577.cljs$core$IIndexed$_nth$arity$2(null,i__35350_35579);
var name_35581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362_35580,(0),null);
var map__35365_35582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35362_35580,(1),null);
var map__35365_35583__$1 = cljs.core.__destructure_map(map__35365_35582);
var doc_35584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35365_35583__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35365_35583__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35581], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35585], 0));

if(cljs.core.truth_(doc_35584)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35584], 0));
} else {
}


var G__35586 = seq__35347_35576;
var G__35587 = chunk__35348_35577;
var G__35588 = count__35349_35578;
var G__35589 = (i__35350_35579 + (1));
seq__35347_35576 = G__35586;
chunk__35348_35577 = G__35587;
count__35349_35578 = G__35588;
i__35350_35579 = G__35589;
continue;
} else {
var temp__5753__auto___35590 = cljs.core.seq(seq__35347_35576);
if(temp__5753__auto___35590){
var seq__35347_35591__$1 = temp__5753__auto___35590;
if(cljs.core.chunked_seq_QMARK_(seq__35347_35591__$1)){
var c__4679__auto___35592 = cljs.core.chunk_first(seq__35347_35591__$1);
var G__35593 = cljs.core.chunk_rest(seq__35347_35591__$1);
var G__35594 = c__4679__auto___35592;
var G__35595 = cljs.core.count(c__4679__auto___35592);
var G__35596 = (0);
seq__35347_35576 = G__35593;
chunk__35348_35577 = G__35594;
count__35349_35578 = G__35595;
i__35350_35579 = G__35596;
continue;
} else {
var vec__35437_35597 = cljs.core.first(seq__35347_35591__$1);
var name_35598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35437_35597,(0),null);
var map__35440_35599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35437_35597,(1),null);
var map__35440_35600__$1 = cljs.core.__destructure_map(map__35440_35599);
var doc_35601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35440_35600__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35440_35600__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35598], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35602], 0));

if(cljs.core.truth_(doc_35601)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35601], 0));
} else {
}


var G__35607 = cljs.core.next(seq__35347_35591__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__35347_35576 = G__35607;
chunk__35348_35577 = G__35608;
count__35349_35578 = G__35609;
i__35350_35579 = G__35610;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35463 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35464 = null;
var count__35465 = (0);
var i__35466 = (0);
while(true){
if((i__35466 < count__35465)){
var role = chunk__35464.cljs$core$IIndexed$_nth$arity$2(null,i__35466);
var temp__5753__auto___35612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35612__$1)){
var spec_35613 = temp__5753__auto___35612__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35613)], 0));
} else {
}


var G__35614 = seq__35463;
var G__35615 = chunk__35464;
var G__35616 = count__35465;
var G__35617 = (i__35466 + (1));
seq__35463 = G__35614;
chunk__35464 = G__35615;
count__35465 = G__35616;
i__35466 = G__35617;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35463);
if(temp__5753__auto____$1){
var seq__35463__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35463__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35463__$1);
var G__35618 = cljs.core.chunk_rest(seq__35463__$1);
var G__35619 = c__4679__auto__;
var G__35620 = cljs.core.count(c__4679__auto__);
var G__35621 = (0);
seq__35463 = G__35618;
chunk__35464 = G__35619;
count__35465 = G__35620;
i__35466 = G__35621;
continue;
} else {
var role = cljs.core.first(seq__35463__$1);
var temp__5753__auto___35622__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35622__$2)){
var spec_35623 = temp__5753__auto___35622__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35623)], 0));
} else {
}


var G__35624 = cljs.core.next(seq__35463__$1);
var G__35625 = null;
var G__35626 = (0);
var G__35627 = (0);
seq__35463 = G__35624;
chunk__35464 = G__35625;
count__35465 = G__35626;
i__35466 = G__35627;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35629 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35630 = cljs.core.ex_cause(t);
via = G__35629;
t = G__35630;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35487 = datafied_throwable;
var map__35487__$1 = cljs.core.__destructure_map(map__35487);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35487__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35487__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35487__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35488 = cljs.core.last(via);
var map__35488__$1 = cljs.core.__destructure_map(map__35488);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35488__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35488__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35488__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35489 = data;
var map__35489__$1 = cljs.core.__destructure_map(map__35489);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35490 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35490__$1 = cljs.core.__destructure_map(map__35490);
var top_data = map__35490__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35490__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35491 = phase;
var G__35491__$1 = (((G__35491 instanceof cljs.core.Keyword))?G__35491.fqn:null);
switch (G__35491__$1) {
case "read-source":
var map__35492 = data;
var map__35492__$1 = cljs.core.__destructure_map(map__35492);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35493 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35493__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35493,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35493);
var G__35493__$2 = (cljs.core.truth_((function (){var fexpr__35494 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35494.cljs$core$IFn$_invoke$arity$1 ? fexpr__35494.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35494.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35493__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35493__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35493__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35493__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35495 = top_data;
var G__35495__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35495,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35495);
var G__35495__$2 = (cljs.core.truth_((function (){var fexpr__35496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35496.cljs$core$IFn$_invoke$arity$1 ? fexpr__35496.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35496.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35495__$1);
var G__35495__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35495__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35495__$2);
var G__35495__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35495__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35495__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35495__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35495__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35498 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(3),null);
var G__35501 = top_data;
var G__35501__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35501);
var G__35501__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35501__$1);
var G__35501__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35501__$2);
var G__35501__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35501__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35501__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35501__$4;
}

break;
case "execution":
var vec__35502 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35502,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35502,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35502,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35502,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35482_SHARP_){
var or__4253__auto__ = (p1__35482_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35505.cljs$core$IFn$_invoke$arity$1 ? fexpr__35505.cljs$core$IFn$_invoke$arity$1(p1__35482_SHARP_) : fexpr__35505.call(null,p1__35482_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35507 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35507__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35507);
var G__35507__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35507__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35507__$1);
var G__35507__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35507__$2);
var G__35507__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35507__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35507__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35491__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35510){
var map__35511 = p__35510;
var map__35511__$1 = cljs.core.__destructure_map(map__35511);
var triage_data = map__35511__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35511__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35512 = phase;
var G__35512__$1 = (((G__35512 instanceof cljs.core.Keyword))?G__35512.fqn:null);
switch (G__35512__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35513 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35515 = loc;
var G__35516 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35517_35642 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35518_35643 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35519_35644 = true;
var _STAR_print_fn_STAR__temp_val__35520_35645 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35519_35644);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35520_35645);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35508_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35508_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35518_35643);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35517_35642);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35513,G__35514,G__35515,G__35516) : format.call(null,G__35513,G__35514,G__35515,G__35516));

break;
case "macroexpansion":
var G__35521 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35522 = cause_type;
var G__35523 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35524 = loc;
var G__35525 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35521,G__35522,G__35523,G__35524,G__35525) : format.call(null,G__35521,G__35522,G__35523,G__35524,G__35525));

break;
case "compile-syntax-check":
var G__35526 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35527 = cause_type;
var G__35528 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35529 = loc;
var G__35530 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35526,G__35527,G__35528,G__35529,G__35530) : format.call(null,G__35526,G__35527,G__35528,G__35529,G__35530));

break;
case "compilation":
var G__35531 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35532 = cause_type;
var G__35533 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35534 = loc;
var G__35535 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35531,G__35532,G__35533,G__35534,G__35535) : format.call(null,G__35531,G__35532,G__35533,G__35534,G__35535));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35536 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35537 = symbol;
var G__35538 = loc;
var G__35539 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35540_35648 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35541_35649 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35542_35650 = true;
var _STAR_print_fn_STAR__temp_val__35543_35651 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35542_35650);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35543_35651);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35509_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35509_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35541_35649);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35540_35648);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35536,G__35537,G__35538,G__35539) : format.call(null,G__35536,G__35537,G__35538,G__35539));
} else {
var G__35545 = "Execution error%s at %s(%s).\n%s\n";
var G__35546 = cause_type;
var G__35547 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35548 = loc;
var G__35549 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35545,G__35546,G__35547,G__35548,G__35549) : format.call(null,G__35545,G__35546,G__35547,G__35548,G__35549));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35512__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
