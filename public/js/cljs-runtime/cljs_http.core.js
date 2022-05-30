goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5753__auto__ = (function (){var fexpr__37449 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__37449.cljs$core$IFn$_invoke$arity$1 ? fexpr__37449.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__37449.call(null,channel));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var req = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37450){
var vec__37451 = p__37450;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37451,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__37454 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__37454)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__37454)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__37454)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__37454)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__37454)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__37454)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37454)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__37455){
var map__37456 = p__37455;
var map__37456__$1 = cljs.core.__destructure_map(map__37456);
var request = map__37456__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37456__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37456__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37456__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__37457 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__37457,default_headers);

cljs_http.core.apply_response_type_BANG_(G__37457,response_type);

G__37457.setTimeoutInterval(timeout);

G__37457.setWithCredentials(send_credentials);

return G__37457;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__37458){
var map__37459 = p__37458;
var map__37459__$1 = cljs.core.__destructure_map(map__37459);
var request = map__37459__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37459__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4253__auto__ = request_method;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__37460 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__37460) : cljs_http.core.error_kw.call(null,G__37460));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_37500 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__37461_37501 = xhr;
G__37461_37501.setProgressEventsEnabled(true);

G__37461_37501.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_37500,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__37461_37501.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_37500,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__31080__auto___37504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_37472){
var state_val_37473 = (state_37472[(1)]);
if((state_val_37473 === (1))){
var state_37472__$1 = state_37472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37472__$1,(2),cancel);
} else {
if((state_val_37473 === (2))){
var inst_37463 = (state_37472[(2)]);
var inst_37464 = xhr.isComplete();
var inst_37465 = cljs.core.not(inst_37464);
var state_37472__$1 = (function (){var statearr_37474 = state_37472;
(statearr_37474[(7)] = inst_37463);

return statearr_37474;
})();
if(inst_37465){
var statearr_37475_37505 = state_37472__$1;
(statearr_37475_37505[(1)] = (3));

} else {
var statearr_37476_37506 = state_37472__$1;
(statearr_37476_37506[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37473 === (3))){
var inst_37467 = xhr.abort();
var state_37472__$1 = state_37472;
var statearr_37477_37510 = state_37472__$1;
(statearr_37477_37510[(2)] = inst_37467);

(statearr_37477_37510[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37473 === (4))){
var state_37472__$1 = state_37472;
var statearr_37478_37511 = state_37472__$1;
(statearr_37478_37511[(2)] = null);

(statearr_37478_37511[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37473 === (5))){
var inst_37470 = (state_37472[(2)]);
var state_37472__$1 = state_37472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37472__$1,inst_37470);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__30735__auto__ = null;
var cljs_http$core$xhr_$_state_machine__30735__auto____0 = (function (){
var statearr_37479 = [null,null,null,null,null,null,null,null];
(statearr_37479[(0)] = cljs_http$core$xhr_$_state_machine__30735__auto__);

(statearr_37479[(1)] = (1));

return statearr_37479;
});
var cljs_http$core$xhr_$_state_machine__30735__auto____1 = (function (state_37472){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_37472);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e37480){var ex__30738__auto__ = e37480;
var statearr_37481_37512 = state_37472;
(statearr_37481_37512[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_37472[(4)]))){
var statearr_37482_37513 = state_37472;
(statearr_37482_37513[(1)] = cljs.core.first((state_37472[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37514 = state_37472;
state_37472 = G__37514;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__30735__auto__ = function(state_37472){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__30735__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__30735__auto____1.call(this,state_37472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__30735__auto____0;
cljs_http$core$xhr_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__30735__auto____1;
return cljs_http$core$xhr_$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_37483 = f__31081__auto__();
(statearr_37483[(6)] = c__31080__auto___37504);

return statearr_37483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__37484){
var map__37485 = p__37484;
var map__37485__$1 = cljs.core.__destructure_map(map__37485);
var request = map__37485__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37485__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37485__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_37515 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_37515], null));

if(cljs.core.truth_(cancel)){
var c__31080__auto___37516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31081__auto__ = (function (){var switch__30734__auto__ = (function (state_37490){
var state_val_37491 = (state_37490[(1)]);
if((state_val_37491 === (1))){
var state_37490__$1 = state_37490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37490__$1,(2),cancel);
} else {
if((state_val_37491 === (2))){
var inst_37487 = (state_37490[(2)]);
var inst_37488 = jsonp.cancel(req_37515);
var state_37490__$1 = (function (){var statearr_37492 = state_37490;
(statearr_37492[(7)] = inst_37487);

return statearr_37492;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37490__$1,inst_37488);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__30735__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__30735__auto____0 = (function (){
var statearr_37493 = [null,null,null,null,null,null,null,null];
(statearr_37493[(0)] = cljs_http$core$jsonp_$_state_machine__30735__auto__);

(statearr_37493[(1)] = (1));

return statearr_37493;
});
var cljs_http$core$jsonp_$_state_machine__30735__auto____1 = (function (state_37490){
while(true){
var ret_value__30736__auto__ = (function (){try{while(true){
var result__30737__auto__ = switch__30734__auto__(state_37490);
if(cljs.core.keyword_identical_QMARK_(result__30737__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30737__auto__;
}
break;
}
}catch (e37494){var ex__30738__auto__ = e37494;
var statearr_37495_37517 = state_37490;
(statearr_37495_37517[(2)] = ex__30738__auto__);


if(cljs.core.seq((state_37490[(4)]))){
var statearr_37496_37519 = state_37490;
(statearr_37496_37519[(1)] = cljs.core.first((state_37490[(4)])));

} else {
throw ex__30738__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30736__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37520 = state_37490;
state_37490 = G__37520;
continue;
} else {
return ret_value__30736__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__30735__auto__ = function(state_37490){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__30735__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__30735__auto____1.call(this,state_37490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__30735__auto____0;
cljs_http$core$jsonp_$_state_machine__30735__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__30735__auto____1;
return cljs_http$core$jsonp_$_state_machine__30735__auto__;
})()
})();
var state__31082__auto__ = (function (){var statearr_37497 = f__31081__auto__();
(statearr_37497[(6)] = c__31080__auto___37516);

return statearr_37497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31082__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__37498){
var map__37499 = p__37498;
var map__37499__$1 = cljs.core.__destructure_map(map__37499);
var request = map__37499__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37499__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map