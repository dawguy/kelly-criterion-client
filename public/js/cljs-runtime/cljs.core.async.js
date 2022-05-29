goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31154 = arguments.length;
switch (G__31154) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31155 = (function (f,blockable,meta31156){
this.f = f;
this.blockable = blockable;
this.meta31156 = meta31156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31157,meta31156__$1){
var self__ = this;
var _31157__$1 = this;
return (new cljs.core.async.t_cljs$core$async31155(self__.f,self__.blockable,meta31156__$1));
}));

(cljs.core.async.t_cljs$core$async31155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31157){
var self__ = this;
var _31157__$1 = this;
return self__.meta31156;
}));

(cljs.core.async.t_cljs$core$async31155.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31156","meta31156",-247075981,null)], null);
}));

(cljs.core.async.t_cljs$core$async31155.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31155");

(cljs.core.async.t_cljs$core$async31155.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31155");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31155.
 */
cljs.core.async.__GT_t_cljs$core$async31155 = (function cljs$core$async$__GT_t_cljs$core$async31155(f__$1,blockable__$1,meta31156){
return (new cljs.core.async.t_cljs$core$async31155(f__$1,blockable__$1,meta31156));
});

}

return (new cljs.core.async.t_cljs$core$async31155(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31166 = arguments.length;
switch (G__31166) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31168 = arguments.length;
switch (G__31168) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31170 = arguments.length;
switch (G__31170) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32691 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32691) : fn1.call(null,val_32691));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32691) : fn1.call(null,val_32691));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31172 = arguments.length;
switch (G__31172) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32693 = n;
var x_32694 = (0);
while(true){
if((x_32694 < n__4741__auto___32693)){
(a[x_32694] = x_32694);

var G__32695 = (x_32694 + (1));
x_32694 = G__32695;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31173 = (function (flag,meta31174){
this.flag = flag;
this.meta31174 = meta31174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31175,meta31174__$1){
var self__ = this;
var _31175__$1 = this;
return (new cljs.core.async.t_cljs$core$async31173(self__.flag,meta31174__$1));
}));

(cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31175){
var self__ = this;
var _31175__$1 = this;
return self__.meta31174;
}));

(cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31174","meta31174",905491078,null)], null);
}));

(cljs.core.async.t_cljs$core$async31173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31173");

(cljs.core.async.t_cljs$core$async31173.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31173.
 */
cljs.core.async.__GT_t_cljs$core$async31173 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31173(flag__$1,meta31174){
return (new cljs.core.async.t_cljs$core$async31173(flag__$1,meta31174));
});

}

return (new cljs.core.async.t_cljs$core$async31173(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31176 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31176 = (function (flag,cb,meta31177){
this.flag = flag;
this.cb = cb;
this.meta31177 = meta31177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31178,meta31177__$1){
var self__ = this;
var _31178__$1 = this;
return (new cljs.core.async.t_cljs$core$async31176(self__.flag,self__.cb,meta31177__$1));
}));

(cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31178){
var self__ = this;
var _31178__$1 = this;
return self__.meta31177;
}));

(cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31177","meta31177",780088473,null)], null);
}));

(cljs.core.async.t_cljs$core$async31176.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31176");

(cljs.core.async.t_cljs$core$async31176.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31176");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31176.
 */
cljs.core.async.__GT_t_cljs$core$async31176 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31176(flag__$1,cb__$1,meta31177){
return (new cljs.core.async.t_cljs$core$async31176(flag__$1,cb__$1,meta31177));
});

}

return (new cljs.core.async.t_cljs$core$async31176(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31179_SHARP_){
var G__31181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31179_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31181) : fret.call(null,G__31181));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31180_SHARP_){
var G__31182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31180_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31182) : fret.call(null,G__31182));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32696 = (i + (1));
i = G__32696;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32697 = arguments.length;
var i__4865__auto___32698 = (0);
while(true){
if((i__4865__auto___32698 < len__4864__auto___32697)){
args__4870__auto__.push((arguments[i__4865__auto___32698]));

var G__32699 = (i__4865__auto___32698 + (1));
i__4865__auto___32698 = G__32699;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31185){
var map__31186 = p__31185;
var map__31186__$1 = cljs.core.__destructure_map(map__31186);
var opts = map__31186__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31183){
var G__31184 = cljs.core.first(seq31183);
var seq31183__$1 = cljs.core.next(seq31183);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31184,seq31183__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31188 = arguments.length;
switch (G__31188) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31080__auto___32701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31212){
var state_val_31213 = (state_31212[(1)]);
if((state_val_31213 === (7))){
var inst_31208 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
var statearr_31214_32702 = state_31212__$1;
(statearr_31214_32702[(2)] = inst_31208);

(statearr_31214_32702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (1))){
var state_31212__$1 = state_31212;
var statearr_31215_32703 = state_31212__$1;
(statearr_31215_32703[(2)] = null);

(statearr_31215_32703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (4))){
var inst_31191 = (state_31212[(7)]);
var inst_31191__$1 = (state_31212[(2)]);
var inst_31192 = (inst_31191__$1 == null);
var state_31212__$1 = (function (){var statearr_31216 = state_31212;
(statearr_31216[(7)] = inst_31191__$1);

return statearr_31216;
})();
if(cljs.core.truth_(inst_31192)){
var statearr_31217_32704 = state_31212__$1;
(statearr_31217_32704[(1)] = (5));

} else {
var statearr_31218_32705 = state_31212__$1;
(statearr_31218_32705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (13))){
var state_31212__$1 = state_31212;
var statearr_31219_32706 = state_31212__$1;
(statearr_31219_32706[(2)] = null);

(statearr_31219_32706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (6))){
var inst_31191 = (state_31212[(7)]);
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31212__$1,(11),to,inst_31191);
} else {
if((state_val_31213 === (3))){
var inst_31210 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31212__$1,inst_31210);
} else {
if((state_val_31213 === (12))){
var state_31212__$1 = state_31212;
var statearr_31220_32707 = state_31212__$1;
(statearr_31220_32707[(2)] = null);

(statearr_31220_32707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (2))){
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31212__$1,(4),from);
} else {
if((state_val_31213 === (11))){
var inst_31201 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
if(cljs.core.truth_(inst_31201)){
var statearr_31221_32708 = state_31212__$1;
(statearr_31221_32708[(1)] = (12));

} else {
var statearr_31222_32709 = state_31212__$1;
(statearr_31222_32709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (9))){
var state_31212__$1 = state_31212;
var statearr_31223_32710 = state_31212__$1;
(statearr_31223_32710[(2)] = null);

(statearr_31223_32710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (5))){
var state_31212__$1 = state_31212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31224_32711 = state_31212__$1;
(statearr_31224_32711[(1)] = (8));

} else {
var statearr_31225_32712 = state_31212__$1;
(statearr_31225_32712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (14))){
var inst_31206 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
var statearr_31226_32713 = state_31212__$1;
(statearr_31226_32713[(2)] = inst_31206);

(statearr_31226_32713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (10))){
var inst_31198 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
var statearr_31227_32714 = state_31212__$1;
(statearr_31227_32714[(2)] = inst_31198);

(statearr_31227_32714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (8))){
var inst_31195 = cljs.core.async.close_BANG_(to);
var state_31212__$1 = state_31212;
var statearr_31228_32715 = state_31212__$1;
(statearr_31228_32715[(2)] = inst_31195);

(statearr_31228_32715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_31229 = [null,null,null,null,null,null,null,null];
(statearr_31229[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_31229[(1)] = (1));

return statearr_31229;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_31212){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31212);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31230){var ex__30738__auto__ = e31230;
var statearr_31231_32716 = state_31212;
(statearr_31231_32716[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31212[(4)]))){
var statearr_31232_32717 = state_31212;
(statearr_31232_32717[(1)] = cljs.core.first((state_31212[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32718 = state_31212;
state_31212 = G__32718;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_31212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_31212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31233 = f__31081__auto__();
(statearr_31233[(6)] = c__31080__auto___32701);

return statearr_31233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__31234){
var vec__31235 = p__31234;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31235,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31235,(1),null);
var job = vec__31235;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31080__auto___32719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31242){
var state_val_31243 = (state_31242[(1)]);
if((state_val_31243 === (1))){
var state_31242__$1 = state_31242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31242__$1,(2),res,v);
} else {
if((state_val_31243 === (2))){
var inst_31239 = (state_31242[(2)]);
var inst_31240 = cljs.core.async.close_BANG_(res);
var state_31242__$1 = (function (){var statearr_31244 = state_31242;
(statearr_31244[(7)] = inst_31239);

return statearr_31244;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31242__$1,inst_31240);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0 = (function (){
var statearr_31245 = [null,null,null,null,null,null,null,null];
(statearr_31245[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__);

(statearr_31245[(1)] = (1));

return statearr_31245;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1 = (function (state_31242){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31242);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31246){var ex__30738__auto__ = e31246;
var statearr_31247_32720 = state_31242;
(statearr_31247_32720[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31242[(4)]))){
var statearr_31248_32721 = state_31242;
(statearr_31248_32721[(1)] = cljs.core.first((state_31242[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32724 = state_31242;
state_31242 = G__32724;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = function(state_31242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1.call(this,state_31242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31249 = f__31081__auto__();
(statearr_31249[(6)] = c__31080__auto___32719);

return statearr_31249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31250){
var vec__31251 = p__31250;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31251,(1),null);
var job = vec__31251;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32725 = n;
var __32726 = (0);
while(true){
if((__32726 < n__4741__auto___32725)){
var G__31254_32727 = type;
var G__31254_32728__$1 = (((G__31254_32727 instanceof cljs.core.Keyword))?G__31254_32727.fqn:null);
switch (G__31254_32728__$1) {
case "compute":
var c__31080__auto___32730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32726,c__31080__auto___32730,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async){
return (function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = ((function (__32726,c__31080__auto___32730,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async){
return (function (state_31267){
var state_val_31268 = (state_31267[(1)]);
if((state_val_31268 === (1))){
var state_31267__$1 = state_31267;
var statearr_31269_32731 = state_31267__$1;
(statearr_31269_32731[(2)] = null);

(statearr_31269_32731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (2))){
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31267__$1,(4),jobs);
} else {
if((state_val_31268 === (3))){
var inst_31265 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31267__$1,inst_31265);
} else {
if((state_val_31268 === (4))){
var inst_31257 = (state_31267[(2)]);
var inst_31258 = process(inst_31257);
var state_31267__$1 = state_31267;
if(cljs.core.truth_(inst_31258)){
var statearr_31270_32732 = state_31267__$1;
(statearr_31270_32732[(1)] = (5));

} else {
var statearr_31271_32733 = state_31267__$1;
(statearr_31271_32733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (5))){
var state_31267__$1 = state_31267;
var statearr_31272_32734 = state_31267__$1;
(statearr_31272_32734[(2)] = null);

(statearr_31272_32734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (6))){
var state_31267__$1 = state_31267;
var statearr_31273_32735 = state_31267__$1;
(statearr_31273_32735[(2)] = null);

(statearr_31273_32735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (7))){
var inst_31263 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
var statearr_31274_32736 = state_31267__$1;
(statearr_31274_32736[(2)] = inst_31263);

(statearr_31274_32736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32726,c__31080__auto___32730,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async))
;
return ((function (__32726,switch__30734__auto__,c__31080__auto___32730,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0 = (function (){
var statearr_31275 = [null,null,null,null,null,null,null];
(statearr_31275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__);

(statearr_31275[(1)] = (1));

return statearr_31275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1 = (function (state_31267){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31267);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31276){var ex__30738__auto__ = e31276;
var statearr_31277_32737 = state_31267;
(statearr_31277_32737[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31267[(4)]))){
var statearr_31278_32738 = state_31267;
(statearr_31278_32738[(1)] = cljs.core.first((state_31267[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32739 = state_31267;
state_31267 = G__32739;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = function(state_31267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1.call(this,state_31267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__;
})()
;})(__32726,switch__30734__auto__,c__31080__auto___32730,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async))
})();
var state__31082__auto__ = (function (){var statearr_31279 = f__31081__auto__();
(statearr_31279[(6)] = c__31080__auto___32730);

return statearr_31279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
});})(__32726,c__31080__auto___32730,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async))
);


break;
case "async":
var c__31080__auto___32740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32726,c__31080__auto___32740,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async){
return (function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = ((function (__32726,c__31080__auto___32740,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async){
return (function (state_31292){
var state_val_31293 = (state_31292[(1)]);
if((state_val_31293 === (1))){
var state_31292__$1 = state_31292;
var statearr_31294_32741 = state_31292__$1;
(statearr_31294_32741[(2)] = null);

(statearr_31294_32741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (2))){
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31292__$1,(4),jobs);
} else {
if((state_val_31293 === (3))){
var inst_31290 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31292__$1,inst_31290);
} else {
if((state_val_31293 === (4))){
var inst_31282 = (state_31292[(2)]);
var inst_31283 = async(inst_31282);
var state_31292__$1 = state_31292;
if(cljs.core.truth_(inst_31283)){
var statearr_31295_32742 = state_31292__$1;
(statearr_31295_32742[(1)] = (5));

} else {
var statearr_31296_32743 = state_31292__$1;
(statearr_31296_32743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (5))){
var state_31292__$1 = state_31292;
var statearr_31297_32744 = state_31292__$1;
(statearr_31297_32744[(2)] = null);

(statearr_31297_32744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (6))){
var state_31292__$1 = state_31292;
var statearr_31298_32745 = state_31292__$1;
(statearr_31298_32745[(2)] = null);

(statearr_31298_32745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31293 === (7))){
var inst_31288 = (state_31292[(2)]);
var state_31292__$1 = state_31292;
var statearr_31299_32746 = state_31292__$1;
(statearr_31299_32746[(2)] = inst_31288);

(statearr_31299_32746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32726,c__31080__auto___32740,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async))
;
return ((function (__32726,switch__30734__auto__,c__31080__auto___32740,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0 = (function (){
var statearr_31300 = [null,null,null,null,null,null,null];
(statearr_31300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__);

(statearr_31300[(1)] = (1));

return statearr_31300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1 = (function (state_31292){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31292);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31301){var ex__30738__auto__ = e31301;
var statearr_31302_32747 = state_31292;
(statearr_31302_32747[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31292[(4)]))){
var statearr_31303_32748 = state_31292;
(statearr_31303_32748[(1)] = cljs.core.first((state_31292[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32749 = state_31292;
state_31292 = G__32749;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = function(state_31292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1.call(this,state_31292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__;
})()
;})(__32726,switch__30734__auto__,c__31080__auto___32740,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async))
})();
var state__31082__auto__ = (function (){var statearr_31304 = f__31081__auto__();
(statearr_31304[(6)] = c__31080__auto___32740);

return statearr_31304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
});})(__32726,c__31080__auto___32740,G__31254_32727,G__31254_32728__$1,n__4741__auto___32725,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31254_32728__$1)].join('')));

}

var G__32751 = (__32726 + (1));
__32726 = G__32751;
continue;
} else {
}
break;
}

var c__31080__auto___32752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31326){
var state_val_31327 = (state_31326[(1)]);
if((state_val_31327 === (7))){
var inst_31322 = (state_31326[(2)]);
var state_31326__$1 = state_31326;
var statearr_31328_32753 = state_31326__$1;
(statearr_31328_32753[(2)] = inst_31322);

(statearr_31328_32753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (1))){
var state_31326__$1 = state_31326;
var statearr_31329_32754 = state_31326__$1;
(statearr_31329_32754[(2)] = null);

(statearr_31329_32754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (4))){
var inst_31307 = (state_31326[(7)]);
var inst_31307__$1 = (state_31326[(2)]);
var inst_31308 = (inst_31307__$1 == null);
var state_31326__$1 = (function (){var statearr_31330 = state_31326;
(statearr_31330[(7)] = inst_31307__$1);

return statearr_31330;
})();
if(cljs.core.truth_(inst_31308)){
var statearr_31331_32755 = state_31326__$1;
(statearr_31331_32755[(1)] = (5));

} else {
var statearr_31332_32756 = state_31326__$1;
(statearr_31332_32756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (6))){
var inst_31312 = (state_31326[(8)]);
var inst_31307 = (state_31326[(7)]);
var inst_31312__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31314 = [inst_31307,inst_31312__$1];
var inst_31315 = (new cljs.core.PersistentVector(null,2,(5),inst_31313,inst_31314,null));
var state_31326__$1 = (function (){var statearr_31333 = state_31326;
(statearr_31333[(8)] = inst_31312__$1);

return statearr_31333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31326__$1,(8),jobs,inst_31315);
} else {
if((state_val_31327 === (3))){
var inst_31324 = (state_31326[(2)]);
var state_31326__$1 = state_31326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31326__$1,inst_31324);
} else {
if((state_val_31327 === (2))){
var state_31326__$1 = state_31326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31326__$1,(4),from);
} else {
if((state_val_31327 === (9))){
var inst_31319 = (state_31326[(2)]);
var state_31326__$1 = (function (){var statearr_31334 = state_31326;
(statearr_31334[(9)] = inst_31319);

return statearr_31334;
})();
var statearr_31335_32759 = state_31326__$1;
(statearr_31335_32759[(2)] = null);

(statearr_31335_32759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (5))){
var inst_31310 = cljs.core.async.close_BANG_(jobs);
var state_31326__$1 = state_31326;
var statearr_31336_32760 = state_31326__$1;
(statearr_31336_32760[(2)] = inst_31310);

(statearr_31336_32760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31327 === (8))){
var inst_31312 = (state_31326[(8)]);
var inst_31317 = (state_31326[(2)]);
var state_31326__$1 = (function (){var statearr_31337 = state_31326;
(statearr_31337[(10)] = inst_31317);

return statearr_31337;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31326__$1,(9),results,inst_31312);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0 = (function (){
var statearr_31338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31338[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__);

(statearr_31338[(1)] = (1));

return statearr_31338;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1 = (function (state_31326){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31326);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31339){var ex__30738__auto__ = e31339;
var statearr_31340_32761 = state_31326;
(statearr_31340_32761[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31326[(4)]))){
var statearr_31341_32762 = state_31326;
(statearr_31341_32762[(1)] = cljs.core.first((state_31326[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32763 = state_31326;
state_31326 = G__32763;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = function(state_31326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1.call(this,state_31326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31342 = f__31081__auto__();
(statearr_31342[(6)] = c__31080__auto___32752);

return statearr_31342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


var c__31080__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31380){
var state_val_31381 = (state_31380[(1)]);
if((state_val_31381 === (7))){
var inst_31376 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
var statearr_31382_32764 = state_31380__$1;
(statearr_31382_32764[(2)] = inst_31376);

(statearr_31382_32764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (20))){
var state_31380__$1 = state_31380;
var statearr_31383_32765 = state_31380__$1;
(statearr_31383_32765[(2)] = null);

(statearr_31383_32765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (1))){
var state_31380__$1 = state_31380;
var statearr_31384_32766 = state_31380__$1;
(statearr_31384_32766[(2)] = null);

(statearr_31384_32766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (4))){
var inst_31345 = (state_31380[(7)]);
var inst_31345__$1 = (state_31380[(2)]);
var inst_31346 = (inst_31345__$1 == null);
var state_31380__$1 = (function (){var statearr_31385 = state_31380;
(statearr_31385[(7)] = inst_31345__$1);

return statearr_31385;
})();
if(cljs.core.truth_(inst_31346)){
var statearr_31386_32767 = state_31380__$1;
(statearr_31386_32767[(1)] = (5));

} else {
var statearr_31387_32768 = state_31380__$1;
(statearr_31387_32768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (15))){
var inst_31358 = (state_31380[(8)]);
var state_31380__$1 = state_31380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31380__$1,(18),to,inst_31358);
} else {
if((state_val_31381 === (21))){
var inst_31371 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
var statearr_31388_32769 = state_31380__$1;
(statearr_31388_32769[(2)] = inst_31371);

(statearr_31388_32769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (13))){
var inst_31373 = (state_31380[(2)]);
var state_31380__$1 = (function (){var statearr_31389 = state_31380;
(statearr_31389[(9)] = inst_31373);

return statearr_31389;
})();
var statearr_31390_32770 = state_31380__$1;
(statearr_31390_32770[(2)] = null);

(statearr_31390_32770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (6))){
var inst_31345 = (state_31380[(7)]);
var state_31380__$1 = state_31380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31380__$1,(11),inst_31345);
} else {
if((state_val_31381 === (17))){
var inst_31366 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
if(cljs.core.truth_(inst_31366)){
var statearr_31391_32771 = state_31380__$1;
(statearr_31391_32771[(1)] = (19));

} else {
var statearr_31392_32772 = state_31380__$1;
(statearr_31392_32772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (3))){
var inst_31378 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31380__$1,inst_31378);
} else {
if((state_val_31381 === (12))){
var inst_31355 = (state_31380[(10)]);
var state_31380__$1 = state_31380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31380__$1,(14),inst_31355);
} else {
if((state_val_31381 === (2))){
var state_31380__$1 = state_31380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31380__$1,(4),results);
} else {
if((state_val_31381 === (19))){
var state_31380__$1 = state_31380;
var statearr_31393_32773 = state_31380__$1;
(statearr_31393_32773[(2)] = null);

(statearr_31393_32773[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (11))){
var inst_31355 = (state_31380[(2)]);
var state_31380__$1 = (function (){var statearr_31394 = state_31380;
(statearr_31394[(10)] = inst_31355);

return statearr_31394;
})();
var statearr_31395_32774 = state_31380__$1;
(statearr_31395_32774[(2)] = null);

(statearr_31395_32774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (9))){
var state_31380__$1 = state_31380;
var statearr_31396_32775 = state_31380__$1;
(statearr_31396_32775[(2)] = null);

(statearr_31396_32775[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (5))){
var state_31380__$1 = state_31380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31397_32776 = state_31380__$1;
(statearr_31397_32776[(1)] = (8));

} else {
var statearr_31398_32777 = state_31380__$1;
(statearr_31398_32777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (14))){
var inst_31360 = (state_31380[(11)]);
var inst_31358 = (state_31380[(8)]);
var inst_31358__$1 = (state_31380[(2)]);
var inst_31359 = (inst_31358__$1 == null);
var inst_31360__$1 = cljs.core.not(inst_31359);
var state_31380__$1 = (function (){var statearr_31399 = state_31380;
(statearr_31399[(11)] = inst_31360__$1);

(statearr_31399[(8)] = inst_31358__$1);

return statearr_31399;
})();
if(inst_31360__$1){
var statearr_31400_32778 = state_31380__$1;
(statearr_31400_32778[(1)] = (15));

} else {
var statearr_31401_32779 = state_31380__$1;
(statearr_31401_32779[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (16))){
var inst_31360 = (state_31380[(11)]);
var state_31380__$1 = state_31380;
var statearr_31402_32780 = state_31380__$1;
(statearr_31402_32780[(2)] = inst_31360);

(statearr_31402_32780[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (10))){
var inst_31352 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
var statearr_31403_32781 = state_31380__$1;
(statearr_31403_32781[(2)] = inst_31352);

(statearr_31403_32781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (18))){
var inst_31363 = (state_31380[(2)]);
var state_31380__$1 = state_31380;
var statearr_31404_32782 = state_31380__$1;
(statearr_31404_32782[(2)] = inst_31363);

(statearr_31404_32782[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31381 === (8))){
var inst_31349 = cljs.core.async.close_BANG_(to);
var state_31380__$1 = state_31380;
var statearr_31405_32783 = state_31380__$1;
(statearr_31405_32783[(2)] = inst_31349);

(statearr_31405_32783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0 = (function (){
var statearr_31406 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__);

(statearr_31406[(1)] = (1));

return statearr_31406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1 = (function (state_31380){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31380);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31407){var ex__30738__auto__ = e31407;
var statearr_31408_32785 = state_31380;
(statearr_31408_32785[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31380[(4)]))){
var statearr_31409_32786 = state_31380;
(statearr_31409_32786[(1)] = cljs.core.first((state_31380[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32787 = state_31380;
state_31380 = G__32787;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__ = function(state_31380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1.call(this,state_31380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30735__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31410 = f__31081__auto__();
(statearr_31410[(6)] = c__31080__auto__);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

return c__31080__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31412 = arguments.length;
switch (G__31412) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31414 = arguments.length;
switch (G__31414) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31416 = arguments.length;
switch (G__31416) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31080__auto___32794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31442){
var state_val_31443 = (state_31442[(1)]);
if((state_val_31443 === (7))){
var inst_31438 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
var statearr_31444_32795 = state_31442__$1;
(statearr_31444_32795[(2)] = inst_31438);

(statearr_31444_32795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (1))){
var state_31442__$1 = state_31442;
var statearr_31445_32796 = state_31442__$1;
(statearr_31445_32796[(2)] = null);

(statearr_31445_32796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (4))){
var inst_31419 = (state_31442[(7)]);
var inst_31419__$1 = (state_31442[(2)]);
var inst_31420 = (inst_31419__$1 == null);
var state_31442__$1 = (function (){var statearr_31446 = state_31442;
(statearr_31446[(7)] = inst_31419__$1);

return statearr_31446;
})();
if(cljs.core.truth_(inst_31420)){
var statearr_31447_32797 = state_31442__$1;
(statearr_31447_32797[(1)] = (5));

} else {
var statearr_31448_32798 = state_31442__$1;
(statearr_31448_32798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (13))){
var state_31442__$1 = state_31442;
var statearr_31449_32799 = state_31442__$1;
(statearr_31449_32799[(2)] = null);

(statearr_31449_32799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (6))){
var inst_31419 = (state_31442[(7)]);
var inst_31425 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31419) : p.call(null,inst_31419));
var state_31442__$1 = state_31442;
if(cljs.core.truth_(inst_31425)){
var statearr_31450_32800 = state_31442__$1;
(statearr_31450_32800[(1)] = (9));

} else {
var statearr_31451_32801 = state_31442__$1;
(statearr_31451_32801[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (3))){
var inst_31440 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31442__$1,inst_31440);
} else {
if((state_val_31443 === (12))){
var state_31442__$1 = state_31442;
var statearr_31452_32802 = state_31442__$1;
(statearr_31452_32802[(2)] = null);

(statearr_31452_32802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (2))){
var state_31442__$1 = state_31442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31442__$1,(4),ch);
} else {
if((state_val_31443 === (11))){
var inst_31419 = (state_31442[(7)]);
var inst_31429 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31442__$1,(8),inst_31429,inst_31419);
} else {
if((state_val_31443 === (9))){
var state_31442__$1 = state_31442;
var statearr_31453_32804 = state_31442__$1;
(statearr_31453_32804[(2)] = tc);

(statearr_31453_32804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (5))){
var inst_31422 = cljs.core.async.close_BANG_(tc);
var inst_31423 = cljs.core.async.close_BANG_(fc);
var state_31442__$1 = (function (){var statearr_31454 = state_31442;
(statearr_31454[(8)] = inst_31422);

return statearr_31454;
})();
var statearr_31455_32806 = state_31442__$1;
(statearr_31455_32806[(2)] = inst_31423);

(statearr_31455_32806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (14))){
var inst_31436 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
var statearr_31456_32807 = state_31442__$1;
(statearr_31456_32807[(2)] = inst_31436);

(statearr_31456_32807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (10))){
var state_31442__$1 = state_31442;
var statearr_31457_32808 = state_31442__$1;
(statearr_31457_32808[(2)] = fc);

(statearr_31457_32808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31443 === (8))){
var inst_31431 = (state_31442[(2)]);
var state_31442__$1 = state_31442;
if(cljs.core.truth_(inst_31431)){
var statearr_31458_32809 = state_31442__$1;
(statearr_31458_32809[(1)] = (12));

} else {
var statearr_31459_32810 = state_31442__$1;
(statearr_31459_32810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_31460 = [null,null,null,null,null,null,null,null,null];
(statearr_31460[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_31460[(1)] = (1));

return statearr_31460;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_31442){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31442);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31461){var ex__30738__auto__ = e31461;
var statearr_31462_32811 = state_31442;
(statearr_31462_32811[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31442[(4)]))){
var statearr_31463_32812 = state_31442;
(statearr_31463_32812[(1)] = cljs.core.first((state_31442[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32813 = state_31442;
state_31442 = G__32813;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_31442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_31442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31464 = f__31081__auto__();
(statearr_31464[(6)] = c__31080__auto___32794);

return statearr_31464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31080__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31486){
var state_val_31487 = (state_31486[(1)]);
if((state_val_31487 === (7))){
var inst_31482 = (state_31486[(2)]);
var state_31486__$1 = state_31486;
var statearr_31488_32814 = state_31486__$1;
(statearr_31488_32814[(2)] = inst_31482);

(statearr_31488_32814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (1))){
var inst_31465 = init;
var inst_31466 = inst_31465;
var state_31486__$1 = (function (){var statearr_31489 = state_31486;
(statearr_31489[(7)] = inst_31466);

return statearr_31489;
})();
var statearr_31490_32815 = state_31486__$1;
(statearr_31490_32815[(2)] = null);

(statearr_31490_32815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (4))){
var inst_31469 = (state_31486[(8)]);
var inst_31469__$1 = (state_31486[(2)]);
var inst_31470 = (inst_31469__$1 == null);
var state_31486__$1 = (function (){var statearr_31491 = state_31486;
(statearr_31491[(8)] = inst_31469__$1);

return statearr_31491;
})();
if(cljs.core.truth_(inst_31470)){
var statearr_31492_32816 = state_31486__$1;
(statearr_31492_32816[(1)] = (5));

} else {
var statearr_31493_32817 = state_31486__$1;
(statearr_31493_32817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (6))){
var inst_31469 = (state_31486[(8)]);
var inst_31466 = (state_31486[(7)]);
var inst_31473 = (state_31486[(9)]);
var inst_31473__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31466,inst_31469) : f.call(null,inst_31466,inst_31469));
var inst_31474 = cljs.core.reduced_QMARK_(inst_31473__$1);
var state_31486__$1 = (function (){var statearr_31494 = state_31486;
(statearr_31494[(9)] = inst_31473__$1);

return statearr_31494;
})();
if(inst_31474){
var statearr_31495_32818 = state_31486__$1;
(statearr_31495_32818[(1)] = (8));

} else {
var statearr_31496_32819 = state_31486__$1;
(statearr_31496_32819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (3))){
var inst_31484 = (state_31486[(2)]);
var state_31486__$1 = state_31486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31486__$1,inst_31484);
} else {
if((state_val_31487 === (2))){
var state_31486__$1 = state_31486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31486__$1,(4),ch);
} else {
if((state_val_31487 === (9))){
var inst_31473 = (state_31486[(9)]);
var inst_31466 = inst_31473;
var state_31486__$1 = (function (){var statearr_31497 = state_31486;
(statearr_31497[(7)] = inst_31466);

return statearr_31497;
})();
var statearr_31498_32820 = state_31486__$1;
(statearr_31498_32820[(2)] = null);

(statearr_31498_32820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (5))){
var inst_31466 = (state_31486[(7)]);
var state_31486__$1 = state_31486;
var statearr_31499_32821 = state_31486__$1;
(statearr_31499_32821[(2)] = inst_31466);

(statearr_31499_32821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (10))){
var inst_31480 = (state_31486[(2)]);
var state_31486__$1 = state_31486;
var statearr_31500_32823 = state_31486__$1;
(statearr_31500_32823[(2)] = inst_31480);

(statearr_31500_32823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31487 === (8))){
var inst_31473 = (state_31486[(9)]);
var inst_31476 = cljs.core.deref(inst_31473);
var state_31486__$1 = state_31486;
var statearr_31501_32825 = state_31486__$1;
(statearr_31501_32825[(2)] = inst_31476);

(statearr_31501_32825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30735__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30735__auto____0 = (function (){
var statearr_31502 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31502[(0)] = cljs$core$async$reduce_$_state_machine__30735__auto__);

(statearr_31502[(1)] = (1));

return statearr_31502;
});
var cljs$core$async$reduce_$_state_machine__30735__auto____1 = (function (state_31486){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31486);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31503){var ex__30738__auto__ = e31503;
var statearr_31504_32826 = state_31486;
(statearr_31504_32826[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31486[(4)]))){
var statearr_31505_32827 = state_31486;
(statearr_31505_32827[(1)] = cljs.core.first((state_31486[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32828 = state_31486;
state_31486 = G__32828;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30735__auto__ = function(state_31486){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30735__auto____1.call(this,state_31486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30735__auto____0;
cljs$core$async$reduce_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30735__auto____1;
return cljs$core$async$reduce_$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31506 = f__31081__auto__();
(statearr_31506[(6)] = c__31080__auto__);

return statearr_31506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

return c__31080__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31080__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31512){
var state_val_31513 = (state_31512[(1)]);
if((state_val_31513 === (1))){
var inst_31507 = cljs.core.async.reduce(f__$1,init,ch);
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31512__$1,(2),inst_31507);
} else {
if((state_val_31513 === (2))){
var inst_31509 = (state_31512[(2)]);
var inst_31510 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31509) : f__$1.call(null,inst_31509));
var state_31512__$1 = state_31512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31512__$1,inst_31510);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30735__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30735__auto____0 = (function (){
var statearr_31514 = [null,null,null,null,null,null,null];
(statearr_31514[(0)] = cljs$core$async$transduce_$_state_machine__30735__auto__);

(statearr_31514[(1)] = (1));

return statearr_31514;
});
var cljs$core$async$transduce_$_state_machine__30735__auto____1 = (function (state_31512){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31512);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31515){var ex__30738__auto__ = e31515;
var statearr_31516_32829 = state_31512;
(statearr_31516_32829[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31512[(4)]))){
var statearr_31517_32830 = state_31512;
(statearr_31517_32830[(1)] = cljs.core.first((state_31512[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32831 = state_31512;
state_31512 = G__32831;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30735__auto__ = function(state_31512){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30735__auto____1.call(this,state_31512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30735__auto____0;
cljs$core$async$transduce_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30735__auto____1;
return cljs$core$async$transduce_$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31522 = f__31081__auto__();
(statearr_31522[(6)] = c__31080__auto__);

return statearr_31522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

return c__31080__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31524 = arguments.length;
switch (G__31524) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31080__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31552){
var state_val_31553 = (state_31552[(1)]);
if((state_val_31553 === (7))){
var inst_31534 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
var statearr_31556_32833 = state_31552__$1;
(statearr_31556_32833[(2)] = inst_31534);

(statearr_31556_32833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (1))){
var inst_31528 = cljs.core.seq(coll);
var inst_31529 = inst_31528;
var state_31552__$1 = (function (){var statearr_31557 = state_31552;
(statearr_31557[(7)] = inst_31529);

return statearr_31557;
})();
var statearr_31558_32834 = state_31552__$1;
(statearr_31558_32834[(2)] = null);

(statearr_31558_32834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (4))){
var inst_31529 = (state_31552[(7)]);
var inst_31532 = cljs.core.first(inst_31529);
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31552__$1,(7),ch,inst_31532);
} else {
if((state_val_31553 === (13))){
var inst_31546 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
var statearr_31559_32836 = state_31552__$1;
(statearr_31559_32836[(2)] = inst_31546);

(statearr_31559_32836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (6))){
var inst_31537 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
if(cljs.core.truth_(inst_31537)){
var statearr_31560_32838 = state_31552__$1;
(statearr_31560_32838[(1)] = (8));

} else {
var statearr_31561_32839 = state_31552__$1;
(statearr_31561_32839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (3))){
var inst_31550 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31552__$1,inst_31550);
} else {
if((state_val_31553 === (12))){
var state_31552__$1 = state_31552;
var statearr_31562_32840 = state_31552__$1;
(statearr_31562_32840[(2)] = null);

(statearr_31562_32840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (2))){
var inst_31529 = (state_31552[(7)]);
var state_31552__$1 = state_31552;
if(cljs.core.truth_(inst_31529)){
var statearr_31563_32841 = state_31552__$1;
(statearr_31563_32841[(1)] = (4));

} else {
var statearr_31564_32842 = state_31552__$1;
(statearr_31564_32842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (11))){
var inst_31543 = cljs.core.async.close_BANG_(ch);
var state_31552__$1 = state_31552;
var statearr_31565_32843 = state_31552__$1;
(statearr_31565_32843[(2)] = inst_31543);

(statearr_31565_32843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (9))){
var state_31552__$1 = state_31552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31566_32844 = state_31552__$1;
(statearr_31566_32844[(1)] = (11));

} else {
var statearr_31567_32845 = state_31552__$1;
(statearr_31567_32845[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (5))){
var inst_31529 = (state_31552[(7)]);
var state_31552__$1 = state_31552;
var statearr_31568_32846 = state_31552__$1;
(statearr_31568_32846[(2)] = inst_31529);

(statearr_31568_32846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (10))){
var inst_31548 = (state_31552[(2)]);
var state_31552__$1 = state_31552;
var statearr_31569_32847 = state_31552__$1;
(statearr_31569_32847[(2)] = inst_31548);

(statearr_31569_32847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31553 === (8))){
var inst_31529 = (state_31552[(7)]);
var inst_31539 = cljs.core.next(inst_31529);
var inst_31529__$1 = inst_31539;
var state_31552__$1 = (function (){var statearr_31570 = state_31552;
(statearr_31570[(7)] = inst_31529__$1);

return statearr_31570;
})();
var statearr_31571_32848 = state_31552__$1;
(statearr_31571_32848[(2)] = null);

(statearr_31571_32848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_31572 = [null,null,null,null,null,null,null,null];
(statearr_31572[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_31572[(1)] = (1));

return statearr_31572;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_31552){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31552);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31573){var ex__30738__auto__ = e31573;
var statearr_31574_32849 = state_31552;
(statearr_31574_32849[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31552[(4)]))){
var statearr_31575_32850 = state_31552;
(statearr_31575_32850[(1)] = cljs.core.first((state_31552[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32851 = state_31552;
state_31552 = G__32851;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_31552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_31552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31576 = f__31081__auto__();
(statearr_31576[(6)] = c__31080__auto__);

return statearr_31576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

return c__31080__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31578 = arguments.length;
switch (G__31578) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32854 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32854(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32855 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32855(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32856 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32856(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32857 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32857(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31582 = (function (ch,cs,meta31583){
this.ch = ch;
this.cs = cs;
this.meta31583 = meta31583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31584,meta31583__$1){
var self__ = this;
var _31584__$1 = this;
return (new cljs.core.async.t_cljs$core$async31582(self__.ch,self__.cs,meta31583__$1));
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31584){
var self__ = this;
var _31584__$1 = this;
return self__.meta31583;
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31582.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31583","meta31583",1517025545,null)], null);
}));

(cljs.core.async.t_cljs$core$async31582.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31582");

(cljs.core.async.t_cljs$core$async31582.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31582");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31582.
 */
cljs.core.async.__GT_t_cljs$core$async31582 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31582(ch__$1,cs__$1,meta31583){
return (new cljs.core.async.t_cljs$core$async31582(ch__$1,cs__$1,meta31583));
});

}

return (new cljs.core.async.t_cljs$core$async31582(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31080__auto___32862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31724){
var state_val_31725 = (state_31724[(1)]);
if((state_val_31725 === (7))){
var inst_31720 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31726_32863 = state_31724__$1;
(statearr_31726_32863[(2)] = inst_31720);

(statearr_31726_32863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (20))){
var inst_31622 = (state_31724[(7)]);
var inst_31636 = cljs.core.first(inst_31622);
var inst_31637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31636,(0),null);
var inst_31638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31636,(1),null);
var state_31724__$1 = (function (){var statearr_31727 = state_31724;
(statearr_31727[(8)] = inst_31637);

return statearr_31727;
})();
if(cljs.core.truth_(inst_31638)){
var statearr_31728_32864 = state_31724__$1;
(statearr_31728_32864[(1)] = (22));

} else {
var statearr_31729_32865 = state_31724__$1;
(statearr_31729_32865[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (27))){
var inst_31668 = (state_31724[(9)]);
var inst_31590 = (state_31724[(10)]);
var inst_31666 = (state_31724[(11)]);
var inst_31673 = (state_31724[(12)]);
var inst_31673__$1 = cljs.core._nth(inst_31666,inst_31668);
var inst_31674 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31673__$1,inst_31590,done);
var state_31724__$1 = (function (){var statearr_31730 = state_31724;
(statearr_31730[(12)] = inst_31673__$1);

return statearr_31730;
})();
if(cljs.core.truth_(inst_31674)){
var statearr_31731_32866 = state_31724__$1;
(statearr_31731_32866[(1)] = (30));

} else {
var statearr_31732_32867 = state_31724__$1;
(statearr_31732_32867[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (1))){
var state_31724__$1 = state_31724;
var statearr_31733_32868 = state_31724__$1;
(statearr_31733_32868[(2)] = null);

(statearr_31733_32868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (24))){
var inst_31622 = (state_31724[(7)]);
var inst_31643 = (state_31724[(2)]);
var inst_31644 = cljs.core.next(inst_31622);
var inst_31599 = inst_31644;
var inst_31600 = null;
var inst_31601 = (0);
var inst_31602 = (0);
var state_31724__$1 = (function (){var statearr_31734 = state_31724;
(statearr_31734[(13)] = inst_31599);

(statearr_31734[(14)] = inst_31601);

(statearr_31734[(15)] = inst_31602);

(statearr_31734[(16)] = inst_31600);

(statearr_31734[(17)] = inst_31643);

return statearr_31734;
})();
var statearr_31735_32869 = state_31724__$1;
(statearr_31735_32869[(2)] = null);

(statearr_31735_32869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (39))){
var state_31724__$1 = state_31724;
var statearr_31739_32870 = state_31724__$1;
(statearr_31739_32870[(2)] = null);

(statearr_31739_32870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (4))){
var inst_31590 = (state_31724[(10)]);
var inst_31590__$1 = (state_31724[(2)]);
var inst_31591 = (inst_31590__$1 == null);
var state_31724__$1 = (function (){var statearr_31740 = state_31724;
(statearr_31740[(10)] = inst_31590__$1);

return statearr_31740;
})();
if(cljs.core.truth_(inst_31591)){
var statearr_31741_32871 = state_31724__$1;
(statearr_31741_32871[(1)] = (5));

} else {
var statearr_31742_32872 = state_31724__$1;
(statearr_31742_32872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (15))){
var inst_31599 = (state_31724[(13)]);
var inst_31601 = (state_31724[(14)]);
var inst_31602 = (state_31724[(15)]);
var inst_31600 = (state_31724[(16)]);
var inst_31618 = (state_31724[(2)]);
var inst_31619 = (inst_31602 + (1));
var tmp31736 = inst_31599;
var tmp31737 = inst_31601;
var tmp31738 = inst_31600;
var inst_31599__$1 = tmp31736;
var inst_31600__$1 = tmp31738;
var inst_31601__$1 = tmp31737;
var inst_31602__$1 = inst_31619;
var state_31724__$1 = (function (){var statearr_31743 = state_31724;
(statearr_31743[(13)] = inst_31599__$1);

(statearr_31743[(14)] = inst_31601__$1);

(statearr_31743[(18)] = inst_31618);

(statearr_31743[(15)] = inst_31602__$1);

(statearr_31743[(16)] = inst_31600__$1);

return statearr_31743;
})();
var statearr_31744_32873 = state_31724__$1;
(statearr_31744_32873[(2)] = null);

(statearr_31744_32873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (21))){
var inst_31647 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31748_32874 = state_31724__$1;
(statearr_31748_32874[(2)] = inst_31647);

(statearr_31748_32874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (31))){
var inst_31673 = (state_31724[(12)]);
var inst_31678 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31673);
var state_31724__$1 = state_31724;
var statearr_31749_32875 = state_31724__$1;
(statearr_31749_32875[(2)] = inst_31678);

(statearr_31749_32875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (32))){
var inst_31668 = (state_31724[(9)]);
var inst_31665 = (state_31724[(19)]);
var inst_31667 = (state_31724[(20)]);
var inst_31666 = (state_31724[(11)]);
var inst_31680 = (state_31724[(2)]);
var inst_31681 = (inst_31668 + (1));
var tmp31745 = inst_31665;
var tmp31746 = inst_31667;
var tmp31747 = inst_31666;
var inst_31665__$1 = tmp31745;
var inst_31666__$1 = tmp31747;
var inst_31667__$1 = tmp31746;
var inst_31668__$1 = inst_31681;
var state_31724__$1 = (function (){var statearr_31750 = state_31724;
(statearr_31750[(9)] = inst_31668__$1);

(statearr_31750[(19)] = inst_31665__$1);

(statearr_31750[(20)] = inst_31667__$1);

(statearr_31750[(11)] = inst_31666__$1);

(statearr_31750[(21)] = inst_31680);

return statearr_31750;
})();
var statearr_31751_32876 = state_31724__$1;
(statearr_31751_32876[(2)] = null);

(statearr_31751_32876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (40))){
var inst_31693 = (state_31724[(22)]);
var inst_31697 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31693);
var state_31724__$1 = state_31724;
var statearr_31752_32877 = state_31724__$1;
(statearr_31752_32877[(2)] = inst_31697);

(statearr_31752_32877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (33))){
var inst_31684 = (state_31724[(23)]);
var inst_31686 = cljs.core.chunked_seq_QMARK_(inst_31684);
var state_31724__$1 = state_31724;
if(inst_31686){
var statearr_31763_32878 = state_31724__$1;
(statearr_31763_32878[(1)] = (36));

} else {
var statearr_31765_32879 = state_31724__$1;
(statearr_31765_32879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (13))){
var inst_31612 = (state_31724[(24)]);
var inst_31615 = cljs.core.async.close_BANG_(inst_31612);
var state_31724__$1 = state_31724;
var statearr_31766_32880 = state_31724__$1;
(statearr_31766_32880[(2)] = inst_31615);

(statearr_31766_32880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (22))){
var inst_31637 = (state_31724[(8)]);
var inst_31640 = cljs.core.async.close_BANG_(inst_31637);
var state_31724__$1 = state_31724;
var statearr_31767_32881 = state_31724__$1;
(statearr_31767_32881[(2)] = inst_31640);

(statearr_31767_32881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (36))){
var inst_31684 = (state_31724[(23)]);
var inst_31688 = cljs.core.chunk_first(inst_31684);
var inst_31689 = cljs.core.chunk_rest(inst_31684);
var inst_31690 = cljs.core.count(inst_31688);
var inst_31665 = inst_31689;
var inst_31666 = inst_31688;
var inst_31667 = inst_31690;
var inst_31668 = (0);
var state_31724__$1 = (function (){var statearr_31781 = state_31724;
(statearr_31781[(9)] = inst_31668);

(statearr_31781[(19)] = inst_31665);

(statearr_31781[(20)] = inst_31667);

(statearr_31781[(11)] = inst_31666);

return statearr_31781;
})();
var statearr_31784_32882 = state_31724__$1;
(statearr_31784_32882[(2)] = null);

(statearr_31784_32882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (41))){
var inst_31684 = (state_31724[(23)]);
var inst_31699 = (state_31724[(2)]);
var inst_31700 = cljs.core.next(inst_31684);
var inst_31665 = inst_31700;
var inst_31666 = null;
var inst_31667 = (0);
var inst_31668 = (0);
var state_31724__$1 = (function (){var statearr_31789 = state_31724;
(statearr_31789[(9)] = inst_31668);

(statearr_31789[(25)] = inst_31699);

(statearr_31789[(19)] = inst_31665);

(statearr_31789[(20)] = inst_31667);

(statearr_31789[(11)] = inst_31666);

return statearr_31789;
})();
var statearr_31792_32883 = state_31724__$1;
(statearr_31792_32883[(2)] = null);

(statearr_31792_32883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (43))){
var state_31724__$1 = state_31724;
var statearr_31793_32884 = state_31724__$1;
(statearr_31793_32884[(2)] = null);

(statearr_31793_32884[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (29))){
var inst_31708 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31794_32885 = state_31724__$1;
(statearr_31794_32885[(2)] = inst_31708);

(statearr_31794_32885[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (44))){
var inst_31717 = (state_31724[(2)]);
var state_31724__$1 = (function (){var statearr_31796 = state_31724;
(statearr_31796[(26)] = inst_31717);

return statearr_31796;
})();
var statearr_31797_32886 = state_31724__$1;
(statearr_31797_32886[(2)] = null);

(statearr_31797_32886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (6))){
var inst_31657 = (state_31724[(27)]);
var inst_31656 = cljs.core.deref(cs);
var inst_31657__$1 = cljs.core.keys(inst_31656);
var inst_31658 = cljs.core.count(inst_31657__$1);
var inst_31659 = cljs.core.reset_BANG_(dctr,inst_31658);
var inst_31664 = cljs.core.seq(inst_31657__$1);
var inst_31665 = inst_31664;
var inst_31666 = null;
var inst_31667 = (0);
var inst_31668 = (0);
var state_31724__$1 = (function (){var statearr_31802 = state_31724;
(statearr_31802[(9)] = inst_31668);

(statearr_31802[(27)] = inst_31657__$1);

(statearr_31802[(19)] = inst_31665);

(statearr_31802[(20)] = inst_31667);

(statearr_31802[(28)] = inst_31659);

(statearr_31802[(11)] = inst_31666);

return statearr_31802;
})();
var statearr_31804_32887 = state_31724__$1;
(statearr_31804_32887[(2)] = null);

(statearr_31804_32887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (28))){
var inst_31665 = (state_31724[(19)]);
var inst_31684 = (state_31724[(23)]);
var inst_31684__$1 = cljs.core.seq(inst_31665);
var state_31724__$1 = (function (){var statearr_31815 = state_31724;
(statearr_31815[(23)] = inst_31684__$1);

return statearr_31815;
})();
if(inst_31684__$1){
var statearr_31816_32888 = state_31724__$1;
(statearr_31816_32888[(1)] = (33));

} else {
var statearr_31817_32889 = state_31724__$1;
(statearr_31817_32889[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (25))){
var inst_31668 = (state_31724[(9)]);
var inst_31667 = (state_31724[(20)]);
var inst_31670 = (inst_31668 < inst_31667);
var inst_31671 = inst_31670;
var state_31724__$1 = state_31724;
if(cljs.core.truth_(inst_31671)){
var statearr_31818_32890 = state_31724__$1;
(statearr_31818_32890[(1)] = (27));

} else {
var statearr_31819_32891 = state_31724__$1;
(statearr_31819_32891[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (34))){
var state_31724__$1 = state_31724;
var statearr_31829_32892 = state_31724__$1;
(statearr_31829_32892[(2)] = null);

(statearr_31829_32892[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (17))){
var state_31724__$1 = state_31724;
var statearr_31830_32893 = state_31724__$1;
(statearr_31830_32893[(2)] = null);

(statearr_31830_32893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (3))){
var inst_31722 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31724__$1,inst_31722);
} else {
if((state_val_31725 === (12))){
var inst_31652 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31831_32894 = state_31724__$1;
(statearr_31831_32894[(2)] = inst_31652);

(statearr_31831_32894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (2))){
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31724__$1,(4),ch);
} else {
if((state_val_31725 === (23))){
var state_31724__$1 = state_31724;
var statearr_31832_32895 = state_31724__$1;
(statearr_31832_32895[(2)] = null);

(statearr_31832_32895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (35))){
var inst_31706 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31833_32896 = state_31724__$1;
(statearr_31833_32896[(2)] = inst_31706);

(statearr_31833_32896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (19))){
var inst_31622 = (state_31724[(7)]);
var inst_31628 = cljs.core.chunk_first(inst_31622);
var inst_31629 = cljs.core.chunk_rest(inst_31622);
var inst_31630 = cljs.core.count(inst_31628);
var inst_31599 = inst_31629;
var inst_31600 = inst_31628;
var inst_31601 = inst_31630;
var inst_31602 = (0);
var state_31724__$1 = (function (){var statearr_31845 = state_31724;
(statearr_31845[(13)] = inst_31599);

(statearr_31845[(14)] = inst_31601);

(statearr_31845[(15)] = inst_31602);

(statearr_31845[(16)] = inst_31600);

return statearr_31845;
})();
var statearr_31846_32898 = state_31724__$1;
(statearr_31846_32898[(2)] = null);

(statearr_31846_32898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (11))){
var inst_31599 = (state_31724[(13)]);
var inst_31622 = (state_31724[(7)]);
var inst_31622__$1 = cljs.core.seq(inst_31599);
var state_31724__$1 = (function (){var statearr_31847 = state_31724;
(statearr_31847[(7)] = inst_31622__$1);

return statearr_31847;
})();
if(inst_31622__$1){
var statearr_31848_32900 = state_31724__$1;
(statearr_31848_32900[(1)] = (16));

} else {
var statearr_31849_32901 = state_31724__$1;
(statearr_31849_32901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (9))){
var inst_31654 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31850_32902 = state_31724__$1;
(statearr_31850_32902[(2)] = inst_31654);

(statearr_31850_32902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (5))){
var inst_31597 = cljs.core.deref(cs);
var inst_31598 = cljs.core.seq(inst_31597);
var inst_31599 = inst_31598;
var inst_31600 = null;
var inst_31601 = (0);
var inst_31602 = (0);
var state_31724__$1 = (function (){var statearr_31851 = state_31724;
(statearr_31851[(13)] = inst_31599);

(statearr_31851[(14)] = inst_31601);

(statearr_31851[(15)] = inst_31602);

(statearr_31851[(16)] = inst_31600);

return statearr_31851;
})();
var statearr_31852_32903 = state_31724__$1;
(statearr_31852_32903[(2)] = null);

(statearr_31852_32903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (14))){
var state_31724__$1 = state_31724;
var statearr_31853_32904 = state_31724__$1;
(statearr_31853_32904[(2)] = null);

(statearr_31853_32904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (45))){
var inst_31714 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31854_32905 = state_31724__$1;
(statearr_31854_32905[(2)] = inst_31714);

(statearr_31854_32905[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (26))){
var inst_31657 = (state_31724[(27)]);
var inst_31710 = (state_31724[(2)]);
var inst_31711 = cljs.core.seq(inst_31657);
var state_31724__$1 = (function (){var statearr_31855 = state_31724;
(statearr_31855[(29)] = inst_31710);

return statearr_31855;
})();
if(inst_31711){
var statearr_31856_32906 = state_31724__$1;
(statearr_31856_32906[(1)] = (42));

} else {
var statearr_31857_32907 = state_31724__$1;
(statearr_31857_32907[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (16))){
var inst_31622 = (state_31724[(7)]);
var inst_31626 = cljs.core.chunked_seq_QMARK_(inst_31622);
var state_31724__$1 = state_31724;
if(inst_31626){
var statearr_31858_32908 = state_31724__$1;
(statearr_31858_32908[(1)] = (19));

} else {
var statearr_31859_32909 = state_31724__$1;
(statearr_31859_32909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (38))){
var inst_31703 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31860_32910 = state_31724__$1;
(statearr_31860_32910[(2)] = inst_31703);

(statearr_31860_32910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (30))){
var state_31724__$1 = state_31724;
var statearr_31861_32911 = state_31724__$1;
(statearr_31861_32911[(2)] = null);

(statearr_31861_32911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (10))){
var inst_31602 = (state_31724[(15)]);
var inst_31600 = (state_31724[(16)]);
var inst_31611 = cljs.core._nth(inst_31600,inst_31602);
var inst_31612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31611,(0),null);
var inst_31613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31611,(1),null);
var state_31724__$1 = (function (){var statearr_31862 = state_31724;
(statearr_31862[(24)] = inst_31612);

return statearr_31862;
})();
if(cljs.core.truth_(inst_31613)){
var statearr_31863_32912 = state_31724__$1;
(statearr_31863_32912[(1)] = (13));

} else {
var statearr_31864_32913 = state_31724__$1;
(statearr_31864_32913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (18))){
var inst_31650 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31865_32914 = state_31724__$1;
(statearr_31865_32914[(2)] = inst_31650);

(statearr_31865_32914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (42))){
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31724__$1,(45),dchan);
} else {
if((state_val_31725 === (37))){
var inst_31590 = (state_31724[(10)]);
var inst_31684 = (state_31724[(23)]);
var inst_31693 = (state_31724[(22)]);
var inst_31693__$1 = cljs.core.first(inst_31684);
var inst_31694 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31693__$1,inst_31590,done);
var state_31724__$1 = (function (){var statearr_31866 = state_31724;
(statearr_31866[(22)] = inst_31693__$1);

return statearr_31866;
})();
if(cljs.core.truth_(inst_31694)){
var statearr_31867_32915 = state_31724__$1;
(statearr_31867_32915[(1)] = (39));

} else {
var statearr_31868_32916 = state_31724__$1;
(statearr_31868_32916[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31725 === (8))){
var inst_31601 = (state_31724[(14)]);
var inst_31602 = (state_31724[(15)]);
var inst_31604 = (inst_31602 < inst_31601);
var inst_31605 = inst_31604;
var state_31724__$1 = state_31724;
if(cljs.core.truth_(inst_31605)){
var statearr_31869_32917 = state_31724__$1;
(statearr_31869_32917[(1)] = (10));

} else {
var statearr_31870_32918 = state_31724__$1;
(statearr_31870_32918[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30735__auto__ = null;
var cljs$core$async$mult_$_state_machine__30735__auto____0 = (function (){
var statearr_31871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31871[(0)] = cljs$core$async$mult_$_state_machine__30735__auto__);

(statearr_31871[(1)] = (1));

return statearr_31871;
});
var cljs$core$async$mult_$_state_machine__30735__auto____1 = (function (state_31724){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31724);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31872){var ex__30738__auto__ = e31872;
var statearr_31873_32919 = state_31724;
(statearr_31873_32919[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31724[(4)]))){
var statearr_31874_32920 = state_31724;
(statearr_31874_32920[(1)] = cljs.core.first((state_31724[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32921 = state_31724;
state_31724 = G__32921;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30735__auto__ = function(state_31724){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30735__auto____1.call(this,state_31724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30735__auto____0;
cljs$core$async$mult_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30735__auto____1;
return cljs$core$async$mult_$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_31875 = f__31081__auto__();
(statearr_31875[(6)] = c__31080__auto___32862);

return statearr_31875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31877 = arguments.length;
switch (G__31877) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32930 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32930(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32931 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32931(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32935 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32935(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32936 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32936(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32940 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32940(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32941 = arguments.length;
var i__4865__auto___32942 = (0);
while(true){
if((i__4865__auto___32942 < len__4864__auto___32941)){
args__4870__auto__.push((arguments[i__4865__auto___32942]));

var G__32946 = (i__4865__auto___32942 + (1));
i__4865__auto___32942 = G__32946;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31882){
var map__31883 = p__31882;
var map__31883__$1 = cljs.core.__destructure_map(map__31883);
var opts = map__31883__$1;
var statearr_31884_32947 = state;
(statearr_31884_32947[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31885_32948 = state;
(statearr_31885_32948[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31886_32949 = state;
(statearr_31886_32949[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31878){
var G__31879 = cljs.core.first(seq31878);
var seq31878__$1 = cljs.core.next(seq31878);
var G__31880 = cljs.core.first(seq31878__$1);
var seq31878__$2 = cljs.core.next(seq31878__$1);
var G__31881 = cljs.core.first(seq31878__$2);
var seq31878__$3 = cljs.core.next(seq31878__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31879,G__31880,G__31881,seq31878__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31887 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31888){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31888 = meta31888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31889,meta31888__$1){
var self__ = this;
var _31889__$1 = this;
return (new cljs.core.async.t_cljs$core$async31887(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31888__$1));
}));

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31889){
var self__ = this;
var _31889__$1 = this;
return self__.meta31888;
}));

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31887.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31888","meta31888",-122001142,null)], null);
}));

(cljs.core.async.t_cljs$core$async31887.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31887");

(cljs.core.async.t_cljs$core$async31887.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31887");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31887.
 */
cljs.core.async.__GT_t_cljs$core$async31887 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31887(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31888){
return (new cljs.core.async.t_cljs$core$async31887(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31888));
});

}

return (new cljs.core.async.t_cljs$core$async31887(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31080__auto___32963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_31957){
var state_val_31958 = (state_31957[(1)]);
if((state_val_31958 === (7))){
var inst_31917 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31917)){
var statearr_31959_32967 = state_31957__$1;
(statearr_31959_32967[(1)] = (8));

} else {
var statearr_31960_32968 = state_31957__$1;
(statearr_31960_32968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (20))){
var inst_31910 = (state_31957[(7)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31957__$1,(23),out,inst_31910);
} else {
if((state_val_31958 === (1))){
var inst_31893 = calc_state();
var inst_31894 = cljs.core.__destructure_map(inst_31893);
var inst_31895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31894,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31894,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31894,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31898 = inst_31893;
var state_31957__$1 = (function (){var statearr_31961 = state_31957;
(statearr_31961[(8)] = inst_31898);

(statearr_31961[(9)] = inst_31897);

(statearr_31961[(10)] = inst_31896);

(statearr_31961[(11)] = inst_31895);

return statearr_31961;
})();
var statearr_31962_32969 = state_31957__$1;
(statearr_31962_32969[(2)] = null);

(statearr_31962_32969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (24))){
var inst_31901 = (state_31957[(12)]);
var inst_31898 = inst_31901;
var state_31957__$1 = (function (){var statearr_31963 = state_31957;
(statearr_31963[(8)] = inst_31898);

return statearr_31963;
})();
var statearr_31964_32970 = state_31957__$1;
(statearr_31964_32970[(2)] = null);

(statearr_31964_32970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (4))){
var inst_31910 = (state_31957[(7)]);
var inst_31912 = (state_31957[(13)]);
var inst_31909 = (state_31957[(2)]);
var inst_31910__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31909,(0),null);
var inst_31911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31909,(1),null);
var inst_31912__$1 = (inst_31910__$1 == null);
var state_31957__$1 = (function (){var statearr_31965 = state_31957;
(statearr_31965[(7)] = inst_31910__$1);

(statearr_31965[(13)] = inst_31912__$1);

(statearr_31965[(14)] = inst_31911);

return statearr_31965;
})();
if(cljs.core.truth_(inst_31912__$1)){
var statearr_31966_32972 = state_31957__$1;
(statearr_31966_32972[(1)] = (5));

} else {
var statearr_31967_32973 = state_31957__$1;
(statearr_31967_32973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (15))){
var inst_31902 = (state_31957[(15)]);
var inst_31931 = (state_31957[(16)]);
var inst_31931__$1 = cljs.core.empty_QMARK_(inst_31902);
var state_31957__$1 = (function (){var statearr_31968 = state_31957;
(statearr_31968[(16)] = inst_31931__$1);

return statearr_31968;
})();
if(inst_31931__$1){
var statearr_31969_32974 = state_31957__$1;
(statearr_31969_32974[(1)] = (17));

} else {
var statearr_31970_32975 = state_31957__$1;
(statearr_31970_32975[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (21))){
var inst_31901 = (state_31957[(12)]);
var inst_31898 = inst_31901;
var state_31957__$1 = (function (){var statearr_31971 = state_31957;
(statearr_31971[(8)] = inst_31898);

return statearr_31971;
})();
var statearr_31972_32976 = state_31957__$1;
(statearr_31972_32976[(2)] = null);

(statearr_31972_32976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (13))){
var inst_31924 = (state_31957[(2)]);
var inst_31925 = calc_state();
var inst_31898 = inst_31925;
var state_31957__$1 = (function (){var statearr_31973 = state_31957;
(statearr_31973[(8)] = inst_31898);

(statearr_31973[(17)] = inst_31924);

return statearr_31973;
})();
var statearr_31974_32977 = state_31957__$1;
(statearr_31974_32977[(2)] = null);

(statearr_31974_32977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (22))){
var inst_31951 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31975_32978 = state_31957__$1;
(statearr_31975_32978[(2)] = inst_31951);

(statearr_31975_32978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (6))){
var inst_31911 = (state_31957[(14)]);
var inst_31915 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31911,change);
var state_31957__$1 = state_31957;
var statearr_31976_32979 = state_31957__$1;
(statearr_31976_32979[(2)] = inst_31915);

(statearr_31976_32979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (25))){
var state_31957__$1 = state_31957;
var statearr_31977_32980 = state_31957__$1;
(statearr_31977_32980[(2)] = null);

(statearr_31977_32980[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (17))){
var inst_31903 = (state_31957[(18)]);
var inst_31911 = (state_31957[(14)]);
var inst_31933 = (inst_31903.cljs$core$IFn$_invoke$arity$1 ? inst_31903.cljs$core$IFn$_invoke$arity$1(inst_31911) : inst_31903.call(null,inst_31911));
var inst_31934 = cljs.core.not(inst_31933);
var state_31957__$1 = state_31957;
var statearr_31978_32981 = state_31957__$1;
(statearr_31978_32981[(2)] = inst_31934);

(statearr_31978_32981[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (3))){
var inst_31955 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31957__$1,inst_31955);
} else {
if((state_val_31958 === (12))){
var state_31957__$1 = state_31957;
var statearr_31979_32982 = state_31957__$1;
(statearr_31979_32982[(2)] = null);

(statearr_31979_32982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (2))){
var inst_31898 = (state_31957[(8)]);
var inst_31901 = (state_31957[(12)]);
var inst_31901__$1 = cljs.core.__destructure_map(inst_31898);
var inst_31902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31901__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31901__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31901__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31957__$1 = (function (){var statearr_31980 = state_31957;
(statearr_31980[(18)] = inst_31903);

(statearr_31980[(15)] = inst_31902);

(statearr_31980[(12)] = inst_31901__$1);

return statearr_31980;
})();
return cljs.core.async.ioc_alts_BANG_(state_31957__$1,(4),inst_31904);
} else {
if((state_val_31958 === (23))){
var inst_31942 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31942)){
var statearr_31981_32983 = state_31957__$1;
(statearr_31981_32983[(1)] = (24));

} else {
var statearr_31982_32984 = state_31957__$1;
(statearr_31982_32984[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (19))){
var inst_31937 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31983_32985 = state_31957__$1;
(statearr_31983_32985[(2)] = inst_31937);

(statearr_31983_32985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (11))){
var inst_31911 = (state_31957[(14)]);
var inst_31921 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31911);
var state_31957__$1 = state_31957;
var statearr_31984_32986 = state_31957__$1;
(statearr_31984_32986[(2)] = inst_31921);

(statearr_31984_32986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (9))){
var inst_31902 = (state_31957[(15)]);
var inst_31928 = (state_31957[(19)]);
var inst_31911 = (state_31957[(14)]);
var inst_31928__$1 = (inst_31902.cljs$core$IFn$_invoke$arity$1 ? inst_31902.cljs$core$IFn$_invoke$arity$1(inst_31911) : inst_31902.call(null,inst_31911));
var state_31957__$1 = (function (){var statearr_31985 = state_31957;
(statearr_31985[(19)] = inst_31928__$1);

return statearr_31985;
})();
if(cljs.core.truth_(inst_31928__$1)){
var statearr_31986_32987 = state_31957__$1;
(statearr_31986_32987[(1)] = (14));

} else {
var statearr_31987_32988 = state_31957__$1;
(statearr_31987_32988[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (5))){
var inst_31912 = (state_31957[(13)]);
var state_31957__$1 = state_31957;
var statearr_31988_32989 = state_31957__$1;
(statearr_31988_32989[(2)] = inst_31912);

(statearr_31988_32989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (14))){
var inst_31928 = (state_31957[(19)]);
var state_31957__$1 = state_31957;
var statearr_31989_32990 = state_31957__$1;
(statearr_31989_32990[(2)] = inst_31928);

(statearr_31989_32990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (26))){
var inst_31947 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31990_32991 = state_31957__$1;
(statearr_31990_32991[(2)] = inst_31947);

(statearr_31990_32991[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (16))){
var inst_31939 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31939)){
var statearr_31991_32992 = state_31957__$1;
(statearr_31991_32992[(1)] = (20));

} else {
var statearr_31992_32993 = state_31957__$1;
(statearr_31992_32993[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (10))){
var inst_31953 = (state_31957[(2)]);
var state_31957__$1 = state_31957;
var statearr_31993_32994 = state_31957__$1;
(statearr_31993_32994[(2)] = inst_31953);

(statearr_31993_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (18))){
var inst_31931 = (state_31957[(16)]);
var state_31957__$1 = state_31957;
var statearr_31994_32995 = state_31957__$1;
(statearr_31994_32995[(2)] = inst_31931);

(statearr_31994_32995[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (8))){
var inst_31910 = (state_31957[(7)]);
var inst_31919 = (inst_31910 == null);
var state_31957__$1 = state_31957;
if(cljs.core.truth_(inst_31919)){
var statearr_31995_32996 = state_31957__$1;
(statearr_31995_32996[(1)] = (11));

} else {
var statearr_31996_32997 = state_31957__$1;
(statearr_31996_32997[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30735__auto__ = null;
var cljs$core$async$mix_$_state_machine__30735__auto____0 = (function (){
var statearr_31997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31997[(0)] = cljs$core$async$mix_$_state_machine__30735__auto__);

(statearr_31997[(1)] = (1));

return statearr_31997;
});
var cljs$core$async$mix_$_state_machine__30735__auto____1 = (function (state_31957){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_31957);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e31998){var ex__30738__auto__ = e31998;
var statearr_31999_32998 = state_31957;
(statearr_31999_32998[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_31957[(4)]))){
var statearr_32000_32999 = state_31957;
(statearr_32000_32999[(1)] = cljs.core.first((state_31957[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33000 = state_31957;
state_31957 = G__33000;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30735__auto__ = function(state_31957){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30735__auto____1.call(this,state_31957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30735__auto____0;
cljs$core$async$mix_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30735__auto____1;
return cljs$core$async$mix_$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32001 = f__31081__auto__();
(statearr_32001[(6)] = c__31080__auto___32963);

return statearr_32001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33001 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33001(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33002 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33002(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33005 = (function() {
var G__33006 = null;
var G__33006__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33006__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33006 = function(p,v){
switch(arguments.length){
case 1:
return G__33006__1.call(this,p);
case 2:
return G__33006__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33006.cljs$core$IFn$_invoke$arity$1 = G__33006__1;
G__33006.cljs$core$IFn$_invoke$arity$2 = G__33006__2;
return G__33006;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32003 = arguments.length;
switch (G__32003) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33005(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33005(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32006 = arguments.length;
switch (G__32006) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32004_SHARP_){
if(cljs.core.truth_((p1__32004_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32004_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32004_SHARP_.call(null,topic)))){
return p1__32004_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32004_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32007 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32008){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32008 = meta32008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32009,meta32008__$1){
var self__ = this;
var _32009__$1 = this;
return (new cljs.core.async.t_cljs$core$async32007(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32008__$1));
}));

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32009){
var self__ = this;
var _32009__$1 = this;
return self__.meta32008;
}));

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32007.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32008","meta32008",-31550480,null)], null);
}));

(cljs.core.async.t_cljs$core$async32007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32007");

(cljs.core.async.t_cljs$core$async32007.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32007.
 */
cljs.core.async.__GT_t_cljs$core$async32007 = (function cljs$core$async$__GT_t_cljs$core$async32007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32008){
return (new cljs.core.async.t_cljs$core$async32007(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32008));
});

}

return (new cljs.core.async.t_cljs$core$async32007(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31080__auto___33013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32081){
var state_val_32082 = (state_32081[(1)]);
if((state_val_32082 === (7))){
var inst_32077 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32083_33014 = state_32081__$1;
(statearr_32083_33014[(2)] = inst_32077);

(statearr_32083_33014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (20))){
var state_32081__$1 = state_32081;
var statearr_32084_33015 = state_32081__$1;
(statearr_32084_33015[(2)] = null);

(statearr_32084_33015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (1))){
var state_32081__$1 = state_32081;
var statearr_32085_33016 = state_32081__$1;
(statearr_32085_33016[(2)] = null);

(statearr_32085_33016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (24))){
var inst_32060 = (state_32081[(7)]);
var inst_32069 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32060);
var state_32081__$1 = state_32081;
var statearr_32086_33018 = state_32081__$1;
(statearr_32086_33018[(2)] = inst_32069);

(statearr_32086_33018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (4))){
var inst_32012 = (state_32081[(8)]);
var inst_32012__$1 = (state_32081[(2)]);
var inst_32013 = (inst_32012__$1 == null);
var state_32081__$1 = (function (){var statearr_32087 = state_32081;
(statearr_32087[(8)] = inst_32012__$1);

return statearr_32087;
})();
if(cljs.core.truth_(inst_32013)){
var statearr_32088_33020 = state_32081__$1;
(statearr_32088_33020[(1)] = (5));

} else {
var statearr_32089_33021 = state_32081__$1;
(statearr_32089_33021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (15))){
var inst_32054 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32090_33022 = state_32081__$1;
(statearr_32090_33022[(2)] = inst_32054);

(statearr_32090_33022[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (21))){
var inst_32074 = (state_32081[(2)]);
var state_32081__$1 = (function (){var statearr_32091 = state_32081;
(statearr_32091[(9)] = inst_32074);

return statearr_32091;
})();
var statearr_32092_33023 = state_32081__$1;
(statearr_32092_33023[(2)] = null);

(statearr_32092_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (13))){
var inst_32036 = (state_32081[(10)]);
var inst_32038 = cljs.core.chunked_seq_QMARK_(inst_32036);
var state_32081__$1 = state_32081;
if(inst_32038){
var statearr_32093_33024 = state_32081__$1;
(statearr_32093_33024[(1)] = (16));

} else {
var statearr_32094_33025 = state_32081__$1;
(statearr_32094_33025[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (22))){
var inst_32066 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32066)){
var statearr_32095_33026 = state_32081__$1;
(statearr_32095_33026[(1)] = (23));

} else {
var statearr_32096_33027 = state_32081__$1;
(statearr_32096_33027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (6))){
var inst_32012 = (state_32081[(8)]);
var inst_32062 = (state_32081[(11)]);
var inst_32060 = (state_32081[(7)]);
var inst_32060__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32012) : topic_fn.call(null,inst_32012));
var inst_32061 = cljs.core.deref(mults);
var inst_32062__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32061,inst_32060__$1);
var state_32081__$1 = (function (){var statearr_32097 = state_32081;
(statearr_32097[(11)] = inst_32062__$1);

(statearr_32097[(7)] = inst_32060__$1);

return statearr_32097;
})();
if(cljs.core.truth_(inst_32062__$1)){
var statearr_32098_33028 = state_32081__$1;
(statearr_32098_33028[(1)] = (19));

} else {
var statearr_32099_33029 = state_32081__$1;
(statearr_32099_33029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (25))){
var inst_32071 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32100_33030 = state_32081__$1;
(statearr_32100_33030[(2)] = inst_32071);

(statearr_32100_33030[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (17))){
var inst_32036 = (state_32081[(10)]);
var inst_32045 = cljs.core.first(inst_32036);
var inst_32046 = cljs.core.async.muxch_STAR_(inst_32045);
var inst_32047 = cljs.core.async.close_BANG_(inst_32046);
var inst_32048 = cljs.core.next(inst_32036);
var inst_32022 = inst_32048;
var inst_32023 = null;
var inst_32024 = (0);
var inst_32025 = (0);
var state_32081__$1 = (function (){var statearr_32101 = state_32081;
(statearr_32101[(12)] = inst_32024);

(statearr_32101[(13)] = inst_32022);

(statearr_32101[(14)] = inst_32025);

(statearr_32101[(15)] = inst_32047);

(statearr_32101[(16)] = inst_32023);

return statearr_32101;
})();
var statearr_32102_33031 = state_32081__$1;
(statearr_32102_33031[(2)] = null);

(statearr_32102_33031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (3))){
var inst_32079 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32081__$1,inst_32079);
} else {
if((state_val_32082 === (12))){
var inst_32056 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32103_33032 = state_32081__$1;
(statearr_32103_33032[(2)] = inst_32056);

(statearr_32103_33032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (2))){
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32081__$1,(4),ch);
} else {
if((state_val_32082 === (23))){
var state_32081__$1 = state_32081;
var statearr_32104_33033 = state_32081__$1;
(statearr_32104_33033[(2)] = null);

(statearr_32104_33033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (19))){
var inst_32012 = (state_32081[(8)]);
var inst_32062 = (state_32081[(11)]);
var inst_32064 = cljs.core.async.muxch_STAR_(inst_32062);
var state_32081__$1 = state_32081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32081__$1,(22),inst_32064,inst_32012);
} else {
if((state_val_32082 === (11))){
var inst_32036 = (state_32081[(10)]);
var inst_32022 = (state_32081[(13)]);
var inst_32036__$1 = cljs.core.seq(inst_32022);
var state_32081__$1 = (function (){var statearr_32105 = state_32081;
(statearr_32105[(10)] = inst_32036__$1);

return statearr_32105;
})();
if(inst_32036__$1){
var statearr_32106_33035 = state_32081__$1;
(statearr_32106_33035[(1)] = (13));

} else {
var statearr_32107_33039 = state_32081__$1;
(statearr_32107_33039[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (9))){
var inst_32058 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32108_33040 = state_32081__$1;
(statearr_32108_33040[(2)] = inst_32058);

(statearr_32108_33040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (5))){
var inst_32019 = cljs.core.deref(mults);
var inst_32020 = cljs.core.vals(inst_32019);
var inst_32021 = cljs.core.seq(inst_32020);
var inst_32022 = inst_32021;
var inst_32023 = null;
var inst_32024 = (0);
var inst_32025 = (0);
var state_32081__$1 = (function (){var statearr_32109 = state_32081;
(statearr_32109[(12)] = inst_32024);

(statearr_32109[(13)] = inst_32022);

(statearr_32109[(14)] = inst_32025);

(statearr_32109[(16)] = inst_32023);

return statearr_32109;
})();
var statearr_32110_33041 = state_32081__$1;
(statearr_32110_33041[(2)] = null);

(statearr_32110_33041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (14))){
var state_32081__$1 = state_32081;
var statearr_32114_33042 = state_32081__$1;
(statearr_32114_33042[(2)] = null);

(statearr_32114_33042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (16))){
var inst_32036 = (state_32081[(10)]);
var inst_32040 = cljs.core.chunk_first(inst_32036);
var inst_32041 = cljs.core.chunk_rest(inst_32036);
var inst_32042 = cljs.core.count(inst_32040);
var inst_32022 = inst_32041;
var inst_32023 = inst_32040;
var inst_32024 = inst_32042;
var inst_32025 = (0);
var state_32081__$1 = (function (){var statearr_32115 = state_32081;
(statearr_32115[(12)] = inst_32024);

(statearr_32115[(13)] = inst_32022);

(statearr_32115[(14)] = inst_32025);

(statearr_32115[(16)] = inst_32023);

return statearr_32115;
})();
var statearr_32116_33045 = state_32081__$1;
(statearr_32116_33045[(2)] = null);

(statearr_32116_33045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (10))){
var inst_32024 = (state_32081[(12)]);
var inst_32022 = (state_32081[(13)]);
var inst_32025 = (state_32081[(14)]);
var inst_32023 = (state_32081[(16)]);
var inst_32030 = cljs.core._nth(inst_32023,inst_32025);
var inst_32031 = cljs.core.async.muxch_STAR_(inst_32030);
var inst_32032 = cljs.core.async.close_BANG_(inst_32031);
var inst_32033 = (inst_32025 + (1));
var tmp32111 = inst_32024;
var tmp32112 = inst_32022;
var tmp32113 = inst_32023;
var inst_32022__$1 = tmp32112;
var inst_32023__$1 = tmp32113;
var inst_32024__$1 = tmp32111;
var inst_32025__$1 = inst_32033;
var state_32081__$1 = (function (){var statearr_32117 = state_32081;
(statearr_32117[(12)] = inst_32024__$1);

(statearr_32117[(17)] = inst_32032);

(statearr_32117[(13)] = inst_32022__$1);

(statearr_32117[(14)] = inst_32025__$1);

(statearr_32117[(16)] = inst_32023__$1);

return statearr_32117;
})();
var statearr_32118_33048 = state_32081__$1;
(statearr_32118_33048[(2)] = null);

(statearr_32118_33048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (18))){
var inst_32051 = (state_32081[(2)]);
var state_32081__$1 = state_32081;
var statearr_32119_33049 = state_32081__$1;
(statearr_32119_33049[(2)] = inst_32051);

(statearr_32119_33049[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32082 === (8))){
var inst_32024 = (state_32081[(12)]);
var inst_32025 = (state_32081[(14)]);
var inst_32027 = (inst_32025 < inst_32024);
var inst_32028 = inst_32027;
var state_32081__$1 = state_32081;
if(cljs.core.truth_(inst_32028)){
var statearr_32120_33050 = state_32081__$1;
(statearr_32120_33050[(1)] = (10));

} else {
var statearr_32121_33051 = state_32081__$1;
(statearr_32121_33051[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32122[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32122[(1)] = (1));

return statearr_32122;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32081){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32081);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32123){var ex__30738__auto__ = e32123;
var statearr_32124_33059 = state_32081;
(statearr_32124_33059[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32081[(4)]))){
var statearr_32125_33060 = state_32081;
(statearr_32125_33060[(1)] = cljs.core.first((state_32081[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33061 = state_32081;
state_32081 = G__33061;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32126 = f__31081__auto__();
(statearr_32126[(6)] = c__31080__auto___33013);

return statearr_32126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32128 = arguments.length;
switch (G__32128) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32130 = arguments.length;
switch (G__32130) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32132 = arguments.length;
switch (G__32132) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31080__auto___33071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32175){
var state_val_32176 = (state_32175[(1)]);
if((state_val_32176 === (7))){
var state_32175__$1 = state_32175;
var statearr_32177_33072 = state_32175__$1;
(statearr_32177_33072[(2)] = null);

(statearr_32177_33072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (1))){
var state_32175__$1 = state_32175;
var statearr_32178_33073 = state_32175__$1;
(statearr_32178_33073[(2)] = null);

(statearr_32178_33073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (4))){
var inst_32135 = (state_32175[(7)]);
var inst_32136 = (state_32175[(8)]);
var inst_32138 = (inst_32136 < inst_32135);
var state_32175__$1 = state_32175;
if(cljs.core.truth_(inst_32138)){
var statearr_32179_33074 = state_32175__$1;
(statearr_32179_33074[(1)] = (6));

} else {
var statearr_32180_33075 = state_32175__$1;
(statearr_32180_33075[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (15))){
var inst_32161 = (state_32175[(9)]);
var inst_32166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32161);
var state_32175__$1 = state_32175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32175__$1,(17),out,inst_32166);
} else {
if((state_val_32176 === (13))){
var inst_32161 = (state_32175[(9)]);
var inst_32161__$1 = (state_32175[(2)]);
var inst_32162 = cljs.core.some(cljs.core.nil_QMARK_,inst_32161__$1);
var state_32175__$1 = (function (){var statearr_32181 = state_32175;
(statearr_32181[(9)] = inst_32161__$1);

return statearr_32181;
})();
if(cljs.core.truth_(inst_32162)){
var statearr_32182_33076 = state_32175__$1;
(statearr_32182_33076[(1)] = (14));

} else {
var statearr_32183_33077 = state_32175__$1;
(statearr_32183_33077[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (6))){
var state_32175__$1 = state_32175;
var statearr_32184_33078 = state_32175__$1;
(statearr_32184_33078[(2)] = null);

(statearr_32184_33078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (17))){
var inst_32168 = (state_32175[(2)]);
var state_32175__$1 = (function (){var statearr_32186 = state_32175;
(statearr_32186[(10)] = inst_32168);

return statearr_32186;
})();
var statearr_32187_33079 = state_32175__$1;
(statearr_32187_33079[(2)] = null);

(statearr_32187_33079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (3))){
var inst_32173 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32175__$1,inst_32173);
} else {
if((state_val_32176 === (12))){
var _ = (function (){var statearr_32188 = state_32175;
(statearr_32188[(4)] = cljs.core.rest((state_32175[(4)])));

return statearr_32188;
})();
var state_32175__$1 = state_32175;
var ex32185 = (state_32175__$1[(2)]);
var statearr_32189_33080 = state_32175__$1;
(statearr_32189_33080[(5)] = ex32185);


if((ex32185 instanceof Object)){
var statearr_32190_33081 = state_32175__$1;
(statearr_32190_33081[(1)] = (11));

(statearr_32190_33081[(5)] = null);

} else {
throw ex32185;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (2))){
var inst_32134 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32135 = cnt;
var inst_32136 = (0);
var state_32175__$1 = (function (){var statearr_32191 = state_32175;
(statearr_32191[(11)] = inst_32134);

(statearr_32191[(7)] = inst_32135);

(statearr_32191[(8)] = inst_32136);

return statearr_32191;
})();
var statearr_32192_33088 = state_32175__$1;
(statearr_32192_33088[(2)] = null);

(statearr_32192_33088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (11))){
var inst_32140 = (state_32175[(2)]);
var inst_32141 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32175__$1 = (function (){var statearr_32193 = state_32175;
(statearr_32193[(12)] = inst_32140);

return statearr_32193;
})();
var statearr_32194_33089 = state_32175__$1;
(statearr_32194_33089[(2)] = inst_32141);

(statearr_32194_33089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (9))){
var inst_32136 = (state_32175[(8)]);
var _ = (function (){var statearr_32195 = state_32175;
(statearr_32195[(4)] = cljs.core.cons((12),(state_32175[(4)])));

return statearr_32195;
})();
var inst_32147 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32136) : chs__$1.call(null,inst_32136));
var inst_32148 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32136) : done.call(null,inst_32136));
var inst_32149 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32147,inst_32148);
var ___$1 = (function (){var statearr_32196 = state_32175;
(statearr_32196[(4)] = cljs.core.rest((state_32175[(4)])));

return statearr_32196;
})();
var state_32175__$1 = state_32175;
var statearr_32197_33090 = state_32175__$1;
(statearr_32197_33090[(2)] = inst_32149);

(statearr_32197_33090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (5))){
var inst_32159 = (state_32175[(2)]);
var state_32175__$1 = (function (){var statearr_32198 = state_32175;
(statearr_32198[(13)] = inst_32159);

return statearr_32198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32175__$1,(13),dchan);
} else {
if((state_val_32176 === (14))){
var inst_32164 = cljs.core.async.close_BANG_(out);
var state_32175__$1 = state_32175;
var statearr_32199_33091 = state_32175__$1;
(statearr_32199_33091[(2)] = inst_32164);

(statearr_32199_33091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (16))){
var inst_32171 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32200_33092 = state_32175__$1;
(statearr_32200_33092[(2)] = inst_32171);

(statearr_32200_33092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (10))){
var inst_32136 = (state_32175[(8)]);
var inst_32152 = (state_32175[(2)]);
var inst_32153 = (inst_32136 + (1));
var inst_32136__$1 = inst_32153;
var state_32175__$1 = (function (){var statearr_32201 = state_32175;
(statearr_32201[(14)] = inst_32152);

(statearr_32201[(8)] = inst_32136__$1);

return statearr_32201;
})();
var statearr_32202_33093 = state_32175__$1;
(statearr_32202_33093[(2)] = null);

(statearr_32202_33093[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32176 === (8))){
var inst_32157 = (state_32175[(2)]);
var state_32175__$1 = state_32175;
var statearr_32203_33094 = state_32175__$1;
(statearr_32203_33094[(2)] = inst_32157);

(statearr_32203_33094[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32204[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32175){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32175);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32205){var ex__30738__auto__ = e32205;
var statearr_32206_33095 = state_32175;
(statearr_32206_33095[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32175[(4)]))){
var statearr_32207_33096 = state_32175;
(statearr_32207_33096[(1)] = cljs.core.first((state_32175[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33097 = state_32175;
state_32175 = G__33097;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32208 = f__31081__auto__();
(statearr_32208[(6)] = c__31080__auto___33071);

return statearr_32208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32211 = arguments.length;
switch (G__32211) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31080__auto___33105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32243){
var state_val_32244 = (state_32243[(1)]);
if((state_val_32244 === (7))){
var inst_32223 = (state_32243[(7)]);
var inst_32222 = (state_32243[(8)]);
var inst_32222__$1 = (state_32243[(2)]);
var inst_32223__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32222__$1,(0),null);
var inst_32224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32222__$1,(1),null);
var inst_32225 = (inst_32223__$1 == null);
var state_32243__$1 = (function (){var statearr_32245 = state_32243;
(statearr_32245[(9)] = inst_32224);

(statearr_32245[(7)] = inst_32223__$1);

(statearr_32245[(8)] = inst_32222__$1);

return statearr_32245;
})();
if(cljs.core.truth_(inst_32225)){
var statearr_32246_33106 = state_32243__$1;
(statearr_32246_33106[(1)] = (8));

} else {
var statearr_32247_33107 = state_32243__$1;
(statearr_32247_33107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (1))){
var inst_32212 = cljs.core.vec(chs);
var inst_32213 = inst_32212;
var state_32243__$1 = (function (){var statearr_32248 = state_32243;
(statearr_32248[(10)] = inst_32213);

return statearr_32248;
})();
var statearr_32249_33108 = state_32243__$1;
(statearr_32249_33108[(2)] = null);

(statearr_32249_33108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (4))){
var inst_32213 = (state_32243[(10)]);
var state_32243__$1 = state_32243;
return cljs.core.async.ioc_alts_BANG_(state_32243__$1,(7),inst_32213);
} else {
if((state_val_32244 === (6))){
var inst_32239 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32250_33109 = state_32243__$1;
(statearr_32250_33109[(2)] = inst_32239);

(statearr_32250_33109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (3))){
var inst_32241 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32243__$1,inst_32241);
} else {
if((state_val_32244 === (2))){
var inst_32213 = (state_32243[(10)]);
var inst_32215 = cljs.core.count(inst_32213);
var inst_32216 = (inst_32215 > (0));
var state_32243__$1 = state_32243;
if(cljs.core.truth_(inst_32216)){
var statearr_32252_33110 = state_32243__$1;
(statearr_32252_33110[(1)] = (4));

} else {
var statearr_32253_33111 = state_32243__$1;
(statearr_32253_33111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (11))){
var inst_32213 = (state_32243[(10)]);
var inst_32232 = (state_32243[(2)]);
var tmp32251 = inst_32213;
var inst_32213__$1 = tmp32251;
var state_32243__$1 = (function (){var statearr_32254 = state_32243;
(statearr_32254[(10)] = inst_32213__$1);

(statearr_32254[(11)] = inst_32232);

return statearr_32254;
})();
var statearr_32255_33112 = state_32243__$1;
(statearr_32255_33112[(2)] = null);

(statearr_32255_33112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (9))){
var inst_32223 = (state_32243[(7)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32243__$1,(11),out,inst_32223);
} else {
if((state_val_32244 === (5))){
var inst_32237 = cljs.core.async.close_BANG_(out);
var state_32243__$1 = state_32243;
var statearr_32256_33113 = state_32243__$1;
(statearr_32256_33113[(2)] = inst_32237);

(statearr_32256_33113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (10))){
var inst_32235 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32257_33114 = state_32243__$1;
(statearr_32257_33114[(2)] = inst_32235);

(statearr_32257_33114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (8))){
var inst_32224 = (state_32243[(9)]);
var inst_32213 = (state_32243[(10)]);
var inst_32223 = (state_32243[(7)]);
var inst_32222 = (state_32243[(8)]);
var inst_32227 = (function (){var cs = inst_32213;
var vec__32218 = inst_32222;
var v = inst_32223;
var c = inst_32224;
return (function (p1__32209_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32209_SHARP_);
});
})();
var inst_32228 = cljs.core.filterv(inst_32227,inst_32213);
var inst_32213__$1 = inst_32228;
var state_32243__$1 = (function (){var statearr_32258 = state_32243;
(statearr_32258[(10)] = inst_32213__$1);

return statearr_32258;
})();
var statearr_32259_33115 = state_32243__$1;
(statearr_32259_33115[(2)] = null);

(statearr_32259_33115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32260[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32260[(1)] = (1));

return statearr_32260;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32243){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32243);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32261){var ex__30738__auto__ = e32261;
var statearr_32262_33116 = state_32243;
(statearr_32262_33116[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32243[(4)]))){
var statearr_32263_33117 = state_32243;
(statearr_32263_33117[(1)] = cljs.core.first((state_32243[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33118 = state_32243;
state_32243 = G__33118;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32264 = f__31081__auto__();
(statearr_32264[(6)] = c__31080__auto___33105);

return statearr_32264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32266 = arguments.length;
switch (G__32266) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31080__auto___33126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32290){
var state_val_32291 = (state_32290[(1)]);
if((state_val_32291 === (7))){
var inst_32272 = (state_32290[(7)]);
var inst_32272__$1 = (state_32290[(2)]);
var inst_32273 = (inst_32272__$1 == null);
var inst_32274 = cljs.core.not(inst_32273);
var state_32290__$1 = (function (){var statearr_32292 = state_32290;
(statearr_32292[(7)] = inst_32272__$1);

return statearr_32292;
})();
if(inst_32274){
var statearr_32293_33127 = state_32290__$1;
(statearr_32293_33127[(1)] = (8));

} else {
var statearr_32294_33128 = state_32290__$1;
(statearr_32294_33128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (1))){
var inst_32267 = (0);
var state_32290__$1 = (function (){var statearr_32295 = state_32290;
(statearr_32295[(8)] = inst_32267);

return statearr_32295;
})();
var statearr_32296_33129 = state_32290__$1;
(statearr_32296_33129[(2)] = null);

(statearr_32296_33129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (4))){
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32290__$1,(7),ch);
} else {
if((state_val_32291 === (6))){
var inst_32285 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32297_33130 = state_32290__$1;
(statearr_32297_33130[(2)] = inst_32285);

(statearr_32297_33130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (3))){
var inst_32287 = (state_32290[(2)]);
var inst_32288 = cljs.core.async.close_BANG_(out);
var state_32290__$1 = (function (){var statearr_32298 = state_32290;
(statearr_32298[(9)] = inst_32287);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32290__$1,inst_32288);
} else {
if((state_val_32291 === (2))){
var inst_32267 = (state_32290[(8)]);
var inst_32269 = (inst_32267 < n);
var state_32290__$1 = state_32290;
if(cljs.core.truth_(inst_32269)){
var statearr_32299_33131 = state_32290__$1;
(statearr_32299_33131[(1)] = (4));

} else {
var statearr_32300_33132 = state_32290__$1;
(statearr_32300_33132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (11))){
var inst_32267 = (state_32290[(8)]);
var inst_32277 = (state_32290[(2)]);
var inst_32278 = (inst_32267 + (1));
var inst_32267__$1 = inst_32278;
var state_32290__$1 = (function (){var statearr_32301 = state_32290;
(statearr_32301[(10)] = inst_32277);

(statearr_32301[(8)] = inst_32267__$1);

return statearr_32301;
})();
var statearr_32302_33133 = state_32290__$1;
(statearr_32302_33133[(2)] = null);

(statearr_32302_33133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (9))){
var state_32290__$1 = state_32290;
var statearr_32303_33134 = state_32290__$1;
(statearr_32303_33134[(2)] = null);

(statearr_32303_33134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (5))){
var state_32290__$1 = state_32290;
var statearr_32304_33135 = state_32290__$1;
(statearr_32304_33135[(2)] = null);

(statearr_32304_33135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (10))){
var inst_32282 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32305_33136 = state_32290__$1;
(statearr_32305_33136[(2)] = inst_32282);

(statearr_32305_33136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (8))){
var inst_32272 = (state_32290[(7)]);
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32290__$1,(11),out,inst_32272);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32306[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32306[(1)] = (1));

return statearr_32306;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32290){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32290);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32307){var ex__30738__auto__ = e32307;
var statearr_32308_33137 = state_32290;
(statearr_32308_33137[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32290[(4)]))){
var statearr_32309_33138 = state_32290;
(statearr_32309_33138[(1)] = cljs.core.first((state_32290[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33139 = state_32290;
state_32290 = G__33139;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32310 = f__31081__auto__();
(statearr_32310[(6)] = c__31080__auto___33126);

return statearr_32310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32312 = (function (f,ch,meta32313){
this.f = f;
this.ch = ch;
this.meta32313 = meta32313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32314,meta32313__$1){
var self__ = this;
var _32314__$1 = this;
return (new cljs.core.async.t_cljs$core$async32312(self__.f,self__.ch,meta32313__$1));
}));

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32314){
var self__ = this;
var _32314__$1 = this;
return self__.meta32313;
}));

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32315 = (function (f,ch,meta32313,_,fn1,meta32316){
this.f = f;
this.ch = ch;
this.meta32313 = meta32313;
this._ = _;
this.fn1 = fn1;
this.meta32316 = meta32316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32317,meta32316__$1){
var self__ = this;
var _32317__$1 = this;
return (new cljs.core.async.t_cljs$core$async32315(self__.f,self__.ch,self__.meta32313,self__._,self__.fn1,meta32316__$1));
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32317){
var self__ = this;
var _32317__$1 = this;
return self__.meta32316;
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32311_SHARP_){
var G__32318 = (((p1__32311_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32311_SHARP_) : self__.f.call(null,p1__32311_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32318) : f1.call(null,G__32318));
});
}));

(cljs.core.async.t_cljs$core$async32315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32313","meta32313",2025033275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32312","cljs.core.async/t_cljs$core$async32312",1814829701,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32316","meta32316",-1593979183,null)], null);
}));

(cljs.core.async.t_cljs$core$async32315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32315");

(cljs.core.async.t_cljs$core$async32315.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32315.
 */
cljs.core.async.__GT_t_cljs$core$async32315 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32315(f__$1,ch__$1,meta32313__$1,___$2,fn1__$1,meta32316){
return (new cljs.core.async.t_cljs$core$async32315(f__$1,ch__$1,meta32313__$1,___$2,fn1__$1,meta32316));
});

}

return (new cljs.core.async.t_cljs$core$async32315(self__.f,self__.ch,self__.meta32313,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32319 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32319) : self__.f.call(null,G__32319));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32313","meta32313",2025033275,null)], null);
}));

(cljs.core.async.t_cljs$core$async32312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32312");

(cljs.core.async.t_cljs$core$async32312.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32312.
 */
cljs.core.async.__GT_t_cljs$core$async32312 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32312(f__$1,ch__$1,meta32313){
return (new cljs.core.async.t_cljs$core$async32312(f__$1,ch__$1,meta32313));
});

}

return (new cljs.core.async.t_cljs$core$async32312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32320 = (function (f,ch,meta32321){
this.f = f;
this.ch = ch;
this.meta32321 = meta32321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32322,meta32321__$1){
var self__ = this;
var _32322__$1 = this;
return (new cljs.core.async.t_cljs$core$async32320(self__.f,self__.ch,meta32321__$1));
}));

(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32322){
var self__ = this;
var _32322__$1 = this;
return self__.meta32321;
}));

(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32320.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32321","meta32321",-649820574,null)], null);
}));

(cljs.core.async.t_cljs$core$async32320.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32320");

(cljs.core.async.t_cljs$core$async32320.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32320");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32320.
 */
cljs.core.async.__GT_t_cljs$core$async32320 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32320(f__$1,ch__$1,meta32321){
return (new cljs.core.async.t_cljs$core$async32320(f__$1,ch__$1,meta32321));
});

}

return (new cljs.core.async.t_cljs$core$async32320(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32323 = (function (p,ch,meta32324){
this.p = p;
this.ch = ch;
this.meta32324 = meta32324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32325,meta32324__$1){
var self__ = this;
var _32325__$1 = this;
return (new cljs.core.async.t_cljs$core$async32323(self__.p,self__.ch,meta32324__$1));
}));

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32325){
var self__ = this;
var _32325__$1 = this;
return self__.meta32324;
}));

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32324","meta32324",-2116167312,null)], null);
}));

(cljs.core.async.t_cljs$core$async32323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32323");

(cljs.core.async.t_cljs$core$async32323.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32323.
 */
cljs.core.async.__GT_t_cljs$core$async32323 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32323(p__$1,ch__$1,meta32324){
return (new cljs.core.async.t_cljs$core$async32323(p__$1,ch__$1,meta32324));
});

}

return (new cljs.core.async.t_cljs$core$async32323(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32327 = arguments.length;
switch (G__32327) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31080__auto___33142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32348){
var state_val_32349 = (state_32348[(1)]);
if((state_val_32349 === (7))){
var inst_32344 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
var statearr_32350_33147 = state_32348__$1;
(statearr_32350_33147[(2)] = inst_32344);

(statearr_32350_33147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (1))){
var state_32348__$1 = state_32348;
var statearr_32351_33148 = state_32348__$1;
(statearr_32351_33148[(2)] = null);

(statearr_32351_33148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (4))){
var inst_32330 = (state_32348[(7)]);
var inst_32330__$1 = (state_32348[(2)]);
var inst_32331 = (inst_32330__$1 == null);
var state_32348__$1 = (function (){var statearr_32352 = state_32348;
(statearr_32352[(7)] = inst_32330__$1);

return statearr_32352;
})();
if(cljs.core.truth_(inst_32331)){
var statearr_32353_33149 = state_32348__$1;
(statearr_32353_33149[(1)] = (5));

} else {
var statearr_32354_33150 = state_32348__$1;
(statearr_32354_33150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (6))){
var inst_32330 = (state_32348[(7)]);
var inst_32335 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32330) : p.call(null,inst_32330));
var state_32348__$1 = state_32348;
if(cljs.core.truth_(inst_32335)){
var statearr_32355_33151 = state_32348__$1;
(statearr_32355_33151[(1)] = (8));

} else {
var statearr_32356_33152 = state_32348__$1;
(statearr_32356_33152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (3))){
var inst_32346 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32348__$1,inst_32346);
} else {
if((state_val_32349 === (2))){
var state_32348__$1 = state_32348;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32348__$1,(4),ch);
} else {
if((state_val_32349 === (11))){
var inst_32338 = (state_32348[(2)]);
var state_32348__$1 = state_32348;
var statearr_32357_33153 = state_32348__$1;
(statearr_32357_33153[(2)] = inst_32338);

(statearr_32357_33153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (9))){
var state_32348__$1 = state_32348;
var statearr_32358_33154 = state_32348__$1;
(statearr_32358_33154[(2)] = null);

(statearr_32358_33154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (5))){
var inst_32333 = cljs.core.async.close_BANG_(out);
var state_32348__$1 = state_32348;
var statearr_32359_33155 = state_32348__$1;
(statearr_32359_33155[(2)] = inst_32333);

(statearr_32359_33155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (10))){
var inst_32341 = (state_32348[(2)]);
var state_32348__$1 = (function (){var statearr_32360 = state_32348;
(statearr_32360[(8)] = inst_32341);

return statearr_32360;
})();
var statearr_32361_33156 = state_32348__$1;
(statearr_32361_33156[(2)] = null);

(statearr_32361_33156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32349 === (8))){
var inst_32330 = (state_32348[(7)]);
var state_32348__$1 = state_32348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32348__$1,(11),out,inst_32330);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32362 = [null,null,null,null,null,null,null,null,null];
(statearr_32362[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32362[(1)] = (1));

return statearr_32362;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32348){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32348);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32363){var ex__30738__auto__ = e32363;
var statearr_32364_33157 = state_32348;
(statearr_32364_33157[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32348[(4)]))){
var statearr_32365_33158 = state_32348;
(statearr_32365_33158[(1)] = cljs.core.first((state_32348[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33159 = state_32348;
state_32348 = G__33159;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32366 = f__31081__auto__();
(statearr_32366[(6)] = c__31080__auto___33142);

return statearr_32366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32368 = arguments.length;
switch (G__32368) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31080__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32430){
var state_val_32431 = (state_32430[(1)]);
if((state_val_32431 === (7))){
var inst_32426 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32432_33161 = state_32430__$1;
(statearr_32432_33161[(2)] = inst_32426);

(statearr_32432_33161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (20))){
var inst_32396 = (state_32430[(7)]);
var inst_32407 = (state_32430[(2)]);
var inst_32408 = cljs.core.next(inst_32396);
var inst_32382 = inst_32408;
var inst_32383 = null;
var inst_32384 = (0);
var inst_32385 = (0);
var state_32430__$1 = (function (){var statearr_32433 = state_32430;
(statearr_32433[(8)] = inst_32383);

(statearr_32433[(9)] = inst_32382);

(statearr_32433[(10)] = inst_32385);

(statearr_32433[(11)] = inst_32384);

(statearr_32433[(12)] = inst_32407);

return statearr_32433;
})();
var statearr_32434_33162 = state_32430__$1;
(statearr_32434_33162[(2)] = null);

(statearr_32434_33162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (1))){
var state_32430__$1 = state_32430;
var statearr_32435_33163 = state_32430__$1;
(statearr_32435_33163[(2)] = null);

(statearr_32435_33163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (4))){
var inst_32371 = (state_32430[(13)]);
var inst_32371__$1 = (state_32430[(2)]);
var inst_32372 = (inst_32371__$1 == null);
var state_32430__$1 = (function (){var statearr_32436 = state_32430;
(statearr_32436[(13)] = inst_32371__$1);

return statearr_32436;
})();
if(cljs.core.truth_(inst_32372)){
var statearr_32437_33164 = state_32430__$1;
(statearr_32437_33164[(1)] = (5));

} else {
var statearr_32438_33165 = state_32430__$1;
(statearr_32438_33165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (15))){
var state_32430__$1 = state_32430;
var statearr_32442_33166 = state_32430__$1;
(statearr_32442_33166[(2)] = null);

(statearr_32442_33166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (21))){
var state_32430__$1 = state_32430;
var statearr_32443_33167 = state_32430__$1;
(statearr_32443_33167[(2)] = null);

(statearr_32443_33167[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (13))){
var inst_32383 = (state_32430[(8)]);
var inst_32382 = (state_32430[(9)]);
var inst_32385 = (state_32430[(10)]);
var inst_32384 = (state_32430[(11)]);
var inst_32392 = (state_32430[(2)]);
var inst_32393 = (inst_32385 + (1));
var tmp32439 = inst_32383;
var tmp32440 = inst_32382;
var tmp32441 = inst_32384;
var inst_32382__$1 = tmp32440;
var inst_32383__$1 = tmp32439;
var inst_32384__$1 = tmp32441;
var inst_32385__$1 = inst_32393;
var state_32430__$1 = (function (){var statearr_32444 = state_32430;
(statearr_32444[(8)] = inst_32383__$1);

(statearr_32444[(9)] = inst_32382__$1);

(statearr_32444[(10)] = inst_32385__$1);

(statearr_32444[(14)] = inst_32392);

(statearr_32444[(11)] = inst_32384__$1);

return statearr_32444;
})();
var statearr_32445_33168 = state_32430__$1;
(statearr_32445_33168[(2)] = null);

(statearr_32445_33168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (22))){
var state_32430__$1 = state_32430;
var statearr_32446_33169 = state_32430__$1;
(statearr_32446_33169[(2)] = null);

(statearr_32446_33169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (6))){
var inst_32371 = (state_32430[(13)]);
var inst_32380 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32371) : f.call(null,inst_32371));
var inst_32381 = cljs.core.seq(inst_32380);
var inst_32382 = inst_32381;
var inst_32383 = null;
var inst_32384 = (0);
var inst_32385 = (0);
var state_32430__$1 = (function (){var statearr_32447 = state_32430;
(statearr_32447[(8)] = inst_32383);

(statearr_32447[(9)] = inst_32382);

(statearr_32447[(10)] = inst_32385);

(statearr_32447[(11)] = inst_32384);

return statearr_32447;
})();
var statearr_32448_33172 = state_32430__$1;
(statearr_32448_33172[(2)] = null);

(statearr_32448_33172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (17))){
var inst_32396 = (state_32430[(7)]);
var inst_32400 = cljs.core.chunk_first(inst_32396);
var inst_32401 = cljs.core.chunk_rest(inst_32396);
var inst_32402 = cljs.core.count(inst_32400);
var inst_32382 = inst_32401;
var inst_32383 = inst_32400;
var inst_32384 = inst_32402;
var inst_32385 = (0);
var state_32430__$1 = (function (){var statearr_32449 = state_32430;
(statearr_32449[(8)] = inst_32383);

(statearr_32449[(9)] = inst_32382);

(statearr_32449[(10)] = inst_32385);

(statearr_32449[(11)] = inst_32384);

return statearr_32449;
})();
var statearr_32450_33173 = state_32430__$1;
(statearr_32450_33173[(2)] = null);

(statearr_32450_33173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (3))){
var inst_32428 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32430__$1,inst_32428);
} else {
if((state_val_32431 === (12))){
var inst_32416 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32451_33174 = state_32430__$1;
(statearr_32451_33174[(2)] = inst_32416);

(statearr_32451_33174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (2))){
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32430__$1,(4),in$);
} else {
if((state_val_32431 === (23))){
var inst_32424 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32452_33175 = state_32430__$1;
(statearr_32452_33175[(2)] = inst_32424);

(statearr_32452_33175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (19))){
var inst_32411 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32453_33176 = state_32430__$1;
(statearr_32453_33176[(2)] = inst_32411);

(statearr_32453_33176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (11))){
var inst_32382 = (state_32430[(9)]);
var inst_32396 = (state_32430[(7)]);
var inst_32396__$1 = cljs.core.seq(inst_32382);
var state_32430__$1 = (function (){var statearr_32454 = state_32430;
(statearr_32454[(7)] = inst_32396__$1);

return statearr_32454;
})();
if(inst_32396__$1){
var statearr_32455_33178 = state_32430__$1;
(statearr_32455_33178[(1)] = (14));

} else {
var statearr_32456_33179 = state_32430__$1;
(statearr_32456_33179[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (9))){
var inst_32418 = (state_32430[(2)]);
var inst_32419 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32430__$1 = (function (){var statearr_32457 = state_32430;
(statearr_32457[(15)] = inst_32418);

return statearr_32457;
})();
if(cljs.core.truth_(inst_32419)){
var statearr_32458_33181 = state_32430__$1;
(statearr_32458_33181[(1)] = (21));

} else {
var statearr_32459_33182 = state_32430__$1;
(statearr_32459_33182[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (5))){
var inst_32374 = cljs.core.async.close_BANG_(out);
var state_32430__$1 = state_32430;
var statearr_32460_33183 = state_32430__$1;
(statearr_32460_33183[(2)] = inst_32374);

(statearr_32460_33183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (14))){
var inst_32396 = (state_32430[(7)]);
var inst_32398 = cljs.core.chunked_seq_QMARK_(inst_32396);
var state_32430__$1 = state_32430;
if(inst_32398){
var statearr_32461_33184 = state_32430__$1;
(statearr_32461_33184[(1)] = (17));

} else {
var statearr_32462_33185 = state_32430__$1;
(statearr_32462_33185[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (16))){
var inst_32414 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32463_33186 = state_32430__$1;
(statearr_32463_33186[(2)] = inst_32414);

(statearr_32463_33186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (10))){
var inst_32383 = (state_32430[(8)]);
var inst_32385 = (state_32430[(10)]);
var inst_32390 = cljs.core._nth(inst_32383,inst_32385);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32430__$1,(13),out,inst_32390);
} else {
if((state_val_32431 === (18))){
var inst_32396 = (state_32430[(7)]);
var inst_32405 = cljs.core.first(inst_32396);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32430__$1,(20),out,inst_32405);
} else {
if((state_val_32431 === (8))){
var inst_32385 = (state_32430[(10)]);
var inst_32384 = (state_32430[(11)]);
var inst_32387 = (inst_32385 < inst_32384);
var inst_32388 = inst_32387;
var state_32430__$1 = state_32430;
if(cljs.core.truth_(inst_32388)){
var statearr_32464_33187 = state_32430__$1;
(statearr_32464_33187[(1)] = (10));

} else {
var statearr_32465_33188 = state_32430__$1;
(statearr_32465_33188[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30735__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30735__auto____0 = (function (){
var statearr_32466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32466[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30735__auto__);

(statearr_32466[(1)] = (1));

return statearr_32466;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30735__auto____1 = (function (state_32430){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32430);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32467){var ex__30738__auto__ = e32467;
var statearr_32468_33189 = state_32430;
(statearr_32468_33189[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32430[(4)]))){
var statearr_32469_33190 = state_32430;
(statearr_32469_33190[(1)] = cljs.core.first((state_32430[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33191 = state_32430;
state_32430 = G__33191;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30735__auto__ = function(state_32430){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30735__auto____1.call(this,state_32430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30735__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30735__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32470 = f__31081__auto__();
(statearr_32470[(6)] = c__31080__auto__);

return statearr_32470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

return c__31080__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32472 = arguments.length;
switch (G__32472) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32474 = arguments.length;
switch (G__32474) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32476 = arguments.length;
switch (G__32476) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31080__auto___33195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32500){
var state_val_32501 = (state_32500[(1)]);
if((state_val_32501 === (7))){
var inst_32495 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32502_33197 = state_32500__$1;
(statearr_32502_33197[(2)] = inst_32495);

(statearr_32502_33197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (1))){
var inst_32477 = null;
var state_32500__$1 = (function (){var statearr_32503 = state_32500;
(statearr_32503[(7)] = inst_32477);

return statearr_32503;
})();
var statearr_32504_33199 = state_32500__$1;
(statearr_32504_33199[(2)] = null);

(statearr_32504_33199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (4))){
var inst_32480 = (state_32500[(8)]);
var inst_32480__$1 = (state_32500[(2)]);
var inst_32481 = (inst_32480__$1 == null);
var inst_32482 = cljs.core.not(inst_32481);
var state_32500__$1 = (function (){var statearr_32505 = state_32500;
(statearr_32505[(8)] = inst_32480__$1);

return statearr_32505;
})();
if(inst_32482){
var statearr_32506_33200 = state_32500__$1;
(statearr_32506_33200[(1)] = (5));

} else {
var statearr_32507_33201 = state_32500__$1;
(statearr_32507_33201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (6))){
var state_32500__$1 = state_32500;
var statearr_32508_33202 = state_32500__$1;
(statearr_32508_33202[(2)] = null);

(statearr_32508_33202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (3))){
var inst_32497 = (state_32500[(2)]);
var inst_32498 = cljs.core.async.close_BANG_(out);
var state_32500__$1 = (function (){var statearr_32509 = state_32500;
(statearr_32509[(9)] = inst_32497);

return statearr_32509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32500__$1,inst_32498);
} else {
if((state_val_32501 === (2))){
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32500__$1,(4),ch);
} else {
if((state_val_32501 === (11))){
var inst_32480 = (state_32500[(8)]);
var inst_32489 = (state_32500[(2)]);
var inst_32477 = inst_32480;
var state_32500__$1 = (function (){var statearr_32510 = state_32500;
(statearr_32510[(10)] = inst_32489);

(statearr_32510[(7)] = inst_32477);

return statearr_32510;
})();
var statearr_32511_33203 = state_32500__$1;
(statearr_32511_33203[(2)] = null);

(statearr_32511_33203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (9))){
var inst_32480 = (state_32500[(8)]);
var state_32500__$1 = state_32500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32500__$1,(11),out,inst_32480);
} else {
if((state_val_32501 === (5))){
var inst_32477 = (state_32500[(7)]);
var inst_32480 = (state_32500[(8)]);
var inst_32484 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32480,inst_32477);
var state_32500__$1 = state_32500;
if(inst_32484){
var statearr_32513_33204 = state_32500__$1;
(statearr_32513_33204[(1)] = (8));

} else {
var statearr_32514_33205 = state_32500__$1;
(statearr_32514_33205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (10))){
var inst_32492 = (state_32500[(2)]);
var state_32500__$1 = state_32500;
var statearr_32515_33206 = state_32500__$1;
(statearr_32515_33206[(2)] = inst_32492);

(statearr_32515_33206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32501 === (8))){
var inst_32477 = (state_32500[(7)]);
var tmp32512 = inst_32477;
var inst_32477__$1 = tmp32512;
var state_32500__$1 = (function (){var statearr_32516 = state_32500;
(statearr_32516[(7)] = inst_32477__$1);

return statearr_32516;
})();
var statearr_32517_33207 = state_32500__$1;
(statearr_32517_33207[(2)] = null);

(statearr_32517_33207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32518[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32518[(1)] = (1));

return statearr_32518;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32500){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32500);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32519){var ex__30738__auto__ = e32519;
var statearr_32520_33208 = state_32500;
(statearr_32520_33208[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32500[(4)]))){
var statearr_32521_33209 = state_32500;
(statearr_32521_33209[(1)] = cljs.core.first((state_32500[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33210 = state_32500;
state_32500 = G__33210;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32522 = f__31081__auto__();
(statearr_32522[(6)] = c__31080__auto___33195);

return statearr_32522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32524 = arguments.length;
switch (G__32524) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31080__auto___33212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32562){
var state_val_32563 = (state_32562[(1)]);
if((state_val_32563 === (7))){
var inst_32558 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
var statearr_32564_33213 = state_32562__$1;
(statearr_32564_33213[(2)] = inst_32558);

(statearr_32564_33213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (1))){
var inst_32525 = (new Array(n));
var inst_32526 = inst_32525;
var inst_32527 = (0);
var state_32562__$1 = (function (){var statearr_32565 = state_32562;
(statearr_32565[(7)] = inst_32526);

(statearr_32565[(8)] = inst_32527);

return statearr_32565;
})();
var statearr_32566_33214 = state_32562__$1;
(statearr_32566_33214[(2)] = null);

(statearr_32566_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (4))){
var inst_32530 = (state_32562[(9)]);
var inst_32530__$1 = (state_32562[(2)]);
var inst_32531 = (inst_32530__$1 == null);
var inst_32532 = cljs.core.not(inst_32531);
var state_32562__$1 = (function (){var statearr_32567 = state_32562;
(statearr_32567[(9)] = inst_32530__$1);

return statearr_32567;
})();
if(inst_32532){
var statearr_32568_33215 = state_32562__$1;
(statearr_32568_33215[(1)] = (5));

} else {
var statearr_32569_33216 = state_32562__$1;
(statearr_32569_33216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (15))){
var inst_32552 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
var statearr_32570_33218 = state_32562__$1;
(statearr_32570_33218[(2)] = inst_32552);

(statearr_32570_33218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (13))){
var state_32562__$1 = state_32562;
var statearr_32571_33219 = state_32562__$1;
(statearr_32571_33219[(2)] = null);

(statearr_32571_33219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (6))){
var inst_32527 = (state_32562[(8)]);
var inst_32548 = (inst_32527 > (0));
var state_32562__$1 = state_32562;
if(cljs.core.truth_(inst_32548)){
var statearr_32572_33220 = state_32562__$1;
(statearr_32572_33220[(1)] = (12));

} else {
var statearr_32573_33221 = state_32562__$1;
(statearr_32573_33221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (3))){
var inst_32560 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32562__$1,inst_32560);
} else {
if((state_val_32563 === (12))){
var inst_32526 = (state_32562[(7)]);
var inst_32550 = cljs.core.vec(inst_32526);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32562__$1,(15),out,inst_32550);
} else {
if((state_val_32563 === (2))){
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32562__$1,(4),ch);
} else {
if((state_val_32563 === (11))){
var inst_32542 = (state_32562[(2)]);
var inst_32543 = (new Array(n));
var inst_32526 = inst_32543;
var inst_32527 = (0);
var state_32562__$1 = (function (){var statearr_32574 = state_32562;
(statearr_32574[(7)] = inst_32526);

(statearr_32574[(8)] = inst_32527);

(statearr_32574[(10)] = inst_32542);

return statearr_32574;
})();
var statearr_32575_33222 = state_32562__$1;
(statearr_32575_33222[(2)] = null);

(statearr_32575_33222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (9))){
var inst_32526 = (state_32562[(7)]);
var inst_32540 = cljs.core.vec(inst_32526);
var state_32562__$1 = state_32562;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32562__$1,(11),out,inst_32540);
} else {
if((state_val_32563 === (5))){
var inst_32526 = (state_32562[(7)]);
var inst_32527 = (state_32562[(8)]);
var inst_32530 = (state_32562[(9)]);
var inst_32535 = (state_32562[(11)]);
var inst_32534 = (inst_32526[inst_32527] = inst_32530);
var inst_32535__$1 = (inst_32527 + (1));
var inst_32536 = (inst_32535__$1 < n);
var state_32562__$1 = (function (){var statearr_32576 = state_32562;
(statearr_32576[(12)] = inst_32534);

(statearr_32576[(11)] = inst_32535__$1);

return statearr_32576;
})();
if(cljs.core.truth_(inst_32536)){
var statearr_32577_33227 = state_32562__$1;
(statearr_32577_33227[(1)] = (8));

} else {
var statearr_32578_33228 = state_32562__$1;
(statearr_32578_33228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (14))){
var inst_32555 = (state_32562[(2)]);
var inst_32556 = cljs.core.async.close_BANG_(out);
var state_32562__$1 = (function (){var statearr_32580 = state_32562;
(statearr_32580[(13)] = inst_32555);

return statearr_32580;
})();
var statearr_32581_33229 = state_32562__$1;
(statearr_32581_33229[(2)] = inst_32556);

(statearr_32581_33229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (10))){
var inst_32546 = (state_32562[(2)]);
var state_32562__$1 = state_32562;
var statearr_32582_33230 = state_32562__$1;
(statearr_32582_33230[(2)] = inst_32546);

(statearr_32582_33230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32563 === (8))){
var inst_32526 = (state_32562[(7)]);
var inst_32535 = (state_32562[(11)]);
var tmp32579 = inst_32526;
var inst_32526__$1 = tmp32579;
var inst_32527 = inst_32535;
var state_32562__$1 = (function (){var statearr_32583 = state_32562;
(statearr_32583[(7)] = inst_32526__$1);

(statearr_32583[(8)] = inst_32527);

return statearr_32583;
})();
var statearr_32584_33231 = state_32562__$1;
(statearr_32584_33231[(2)] = null);

(statearr_32584_33231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32585[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32585[(1)] = (1));

return statearr_32585;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32562){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32562);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32586){var ex__30738__auto__ = e32586;
var statearr_32587_33232 = state_32562;
(statearr_32587_33232[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32562[(4)]))){
var statearr_32588_33233 = state_32562;
(statearr_32588_33233[(1)] = cljs.core.first((state_32562[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33234 = state_32562;
state_32562 = G__33234;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32589 = f__31081__auto__();
(statearr_32589[(6)] = c__31080__auto___33212);

return statearr_32589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32591 = arguments.length;
switch (G__32591) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31080__auto___33236 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_32636){
var state_val_32637 = (state_32636[(1)]);
if((state_val_32637 === (7))){
var inst_32632 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32638_33237 = state_32636__$1;
(statearr_32638_33237[(2)] = inst_32632);

(statearr_32638_33237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (1))){
var inst_32592 = [];
var inst_32593 = inst_32592;
var inst_32594 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32636__$1 = (function (){var statearr_32639 = state_32636;
(statearr_32639[(7)] = inst_32594);

(statearr_32639[(8)] = inst_32593);

return statearr_32639;
})();
var statearr_32640_33238 = state_32636__$1;
(statearr_32640_33238[(2)] = null);

(statearr_32640_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (4))){
var inst_32597 = (state_32636[(9)]);
var inst_32597__$1 = (state_32636[(2)]);
var inst_32598 = (inst_32597__$1 == null);
var inst_32599 = cljs.core.not(inst_32598);
var state_32636__$1 = (function (){var statearr_32641 = state_32636;
(statearr_32641[(9)] = inst_32597__$1);

return statearr_32641;
})();
if(inst_32599){
var statearr_32642_33239 = state_32636__$1;
(statearr_32642_33239[(1)] = (5));

} else {
var statearr_32643_33240 = state_32636__$1;
(statearr_32643_33240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (15))){
var inst_32593 = (state_32636[(8)]);
var inst_32624 = cljs.core.vec(inst_32593);
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32636__$1,(18),out,inst_32624);
} else {
if((state_val_32637 === (13))){
var inst_32619 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32644_33245 = state_32636__$1;
(statearr_32644_33245[(2)] = inst_32619);

(statearr_32644_33245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (6))){
var inst_32593 = (state_32636[(8)]);
var inst_32621 = inst_32593.length;
var inst_32622 = (inst_32621 > (0));
var state_32636__$1 = state_32636;
if(cljs.core.truth_(inst_32622)){
var statearr_32645_33246 = state_32636__$1;
(statearr_32645_33246[(1)] = (15));

} else {
var statearr_32646_33247 = state_32636__$1;
(statearr_32646_33247[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (17))){
var inst_32629 = (state_32636[(2)]);
var inst_32630 = cljs.core.async.close_BANG_(out);
var state_32636__$1 = (function (){var statearr_32647 = state_32636;
(statearr_32647[(10)] = inst_32629);

return statearr_32647;
})();
var statearr_32648_33251 = state_32636__$1;
(statearr_32648_33251[(2)] = inst_32630);

(statearr_32648_33251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (3))){
var inst_32634 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32636__$1,inst_32634);
} else {
if((state_val_32637 === (12))){
var inst_32593 = (state_32636[(8)]);
var inst_32612 = cljs.core.vec(inst_32593);
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32636__$1,(14),out,inst_32612);
} else {
if((state_val_32637 === (2))){
var state_32636__$1 = state_32636;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32636__$1,(4),ch);
} else {
if((state_val_32637 === (11))){
var inst_32597 = (state_32636[(9)]);
var inst_32593 = (state_32636[(8)]);
var inst_32601 = (state_32636[(11)]);
var inst_32609 = inst_32593.push(inst_32597);
var tmp32649 = inst_32593;
var inst_32593__$1 = tmp32649;
var inst_32594 = inst_32601;
var state_32636__$1 = (function (){var statearr_32650 = state_32636;
(statearr_32650[(12)] = inst_32609);

(statearr_32650[(7)] = inst_32594);

(statearr_32650[(8)] = inst_32593__$1);

return statearr_32650;
})();
var statearr_32651_33252 = state_32636__$1;
(statearr_32651_33252[(2)] = null);

(statearr_32651_33252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (9))){
var inst_32594 = (state_32636[(7)]);
var inst_32605 = cljs.core.keyword_identical_QMARK_(inst_32594,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32636__$1 = state_32636;
var statearr_32652_33256 = state_32636__$1;
(statearr_32652_33256[(2)] = inst_32605);

(statearr_32652_33256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (5))){
var inst_32597 = (state_32636[(9)]);
var inst_32602 = (state_32636[(13)]);
var inst_32594 = (state_32636[(7)]);
var inst_32601 = (state_32636[(11)]);
var inst_32601__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32597) : f.call(null,inst_32597));
var inst_32602__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32601__$1,inst_32594);
var state_32636__$1 = (function (){var statearr_32653 = state_32636;
(statearr_32653[(13)] = inst_32602__$1);

(statearr_32653[(11)] = inst_32601__$1);

return statearr_32653;
})();
if(inst_32602__$1){
var statearr_32654_33257 = state_32636__$1;
(statearr_32654_33257[(1)] = (8));

} else {
var statearr_32655_33258 = state_32636__$1;
(statearr_32655_33258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (14))){
var inst_32597 = (state_32636[(9)]);
var inst_32601 = (state_32636[(11)]);
var inst_32614 = (state_32636[(2)]);
var inst_32615 = [];
var inst_32616 = inst_32615.push(inst_32597);
var inst_32593 = inst_32615;
var inst_32594 = inst_32601;
var state_32636__$1 = (function (){var statearr_32656 = state_32636;
(statearr_32656[(14)] = inst_32616);

(statearr_32656[(7)] = inst_32594);

(statearr_32656[(8)] = inst_32593);

(statearr_32656[(15)] = inst_32614);

return statearr_32656;
})();
var statearr_32657_33262 = state_32636__$1;
(statearr_32657_33262[(2)] = null);

(statearr_32657_33262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (16))){
var state_32636__$1 = state_32636;
var statearr_32658_33263 = state_32636__$1;
(statearr_32658_33263[(2)] = null);

(statearr_32658_33263[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (10))){
var inst_32607 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
if(cljs.core.truth_(inst_32607)){
var statearr_32659_33264 = state_32636__$1;
(statearr_32659_33264[(1)] = (11));

} else {
var statearr_32660_33265 = state_32636__$1;
(statearr_32660_33265[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (18))){
var inst_32626 = (state_32636[(2)]);
var state_32636__$1 = state_32636;
var statearr_32661_33269 = state_32636__$1;
(statearr_32661_33269[(2)] = inst_32626);

(statearr_32661_33269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32637 === (8))){
var inst_32602 = (state_32636[(13)]);
var state_32636__$1 = state_32636;
var statearr_32662_33270 = state_32636__$1;
(statearr_32662_33270[(2)] = inst_32602);

(statearr_32662_33270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30735__auto__ = null;
var cljs$core$async$state_machine__30735__auto____0 = (function (){
var statearr_32663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32663[(0)] = cljs$core$async$state_machine__30735__auto__);

(statearr_32663[(1)] = (1));

return statearr_32663;
});
var cljs$core$async$state_machine__30735__auto____1 = (function (state_32636){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_32636);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e32664){var ex__30738__auto__ = e32664;
var statearr_32665_33272 = state_32636;
(statearr_32665_33272[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_32636[(4)]))){
var statearr_32666_33273 = state_32636;
(statearr_32666_33273[(1)] = cljs.core.first((state_32636[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33277 = state_32636;
state_32636 = G__33277;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs$core$async$state_machine__30735__auto__ = function(state_32636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30735__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30735__auto____1.call(this,state_32636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30735__auto____0;
cljs$core$async$state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30735__auto____1;
return cljs$core$async$state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_32667 = f__31081__auto__();
(statearr_32667[(6)] = c__31080__auto___33236);

return statearr_32667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
