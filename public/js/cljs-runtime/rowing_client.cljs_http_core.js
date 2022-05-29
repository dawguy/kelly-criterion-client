goog.provide('rowing_client.cljs_http_core');
rowing_client.cljs_http_core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
rowing_client.cljs_http_core.abort_BANG_ = (function rowing_client$cljs_http_core$abort_BANG_(channel){
var temp__5753__auto__ = (function (){var fexpr__26746 = cljs.core.deref(rowing_client.cljs_http_core.pending_requests);
return (fexpr__26746.cljs$core$IFn$_invoke$arity$1 ? fexpr__26746.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__26746.call(null,channel));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var req = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rowing_client.cljs_http_core.pending_requests,cljs.core.dissoc,channel);

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
rowing_client.cljs_http_core.aborted_QMARK_ = (function rowing_client$cljs_http_core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
rowing_client.cljs_http_core.apply_default_headers_BANG_ = (function rowing_client$cljs_http_core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(rowing_client.cljs_http_util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26747){
var vec__26748 = p__26747;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
rowing_client.cljs_http_core.apply_response_type_BANG_ = (function rowing_client$cljs_http_core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__26751 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__26751)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__26751)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__26751)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__26751)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__26751)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__26751)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26751)].join('')));

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
rowing_client.cljs_http_core.build_xhr = (function rowing_client$cljs_http_core$build_xhr(p__26752){
var map__26753 = p__26752;
var map__26753__$1 = cljs.core.__destructure_map(map__26753);
var request = map__26753__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26753__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__26754 = (new goog.net.XhrIo());
rowing_client.cljs_http_core.apply_default_headers_BANG_(G__26754,default_headers);

rowing_client.cljs_http_core.apply_response_type_BANG_(G__26754,response_type);

G__26754.setTimeoutInterval(timeout);

G__26754.setWithCredentials(send_credentials);

return G__26754;
});
rowing_client.cljs_http_core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
rowing_client.cljs_http_core.xhr = (function rowing_client$cljs_http_core$xhr(p__26755){
var map__26756 = p__26755;
var map__26756__$1 = cljs.core.__destructure_map(map__26756);
var request = map__26756__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26756__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = rowing_client.cljs_http_util.build_url(request);
var method = cljs.core.name((function (){var or__4253__auto__ = request_method;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = rowing_client.cljs_http_util.build_headers(headers);
var xhr = rowing_client.cljs_http_core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.cljs_http_core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),rowing_client.cljs_http_util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__26757 = target.getLastErrorCode();
return (rowing_client.cljs_http_core.error_kw.cljs$core$IFn$_invoke$arity$1 ? rowing_client.cljs_http_core.error_kw.cljs$core$IFn$_invoke$arity$1(G__26757) : rowing_client.cljs_http_core.error_kw.call(null,G__26757));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(rowing_client.cljs_http_core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rowing_client.cljs_http_core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_26807 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__26758_26808 = xhr;
G__26758_26808.setProgressEventsEnabled(true);

G__26758_26808.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_26807,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__26758_26808.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_26807,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__26491__auto___26810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26492__auto__ = (function (){var switch__26421__auto__ = (function (state_26769){
var state_val_26770 = (state_26769[(1)]);
if((state_val_26770 === (1))){
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26769__$1,(2),cancel);
} else {
if((state_val_26770 === (2))){
var inst_26760 = (state_26769[(2)]);
var inst_26761 = xhr.isComplete();
var inst_26762 = cljs.core.not(inst_26761);
var state_26769__$1 = (function (){var statearr_26771 = state_26769;
(statearr_26771[(7)] = inst_26760);

return statearr_26771;
})();
if(inst_26762){
var statearr_26772_26811 = state_26769__$1;
(statearr_26772_26811[(1)] = (3));

} else {
var statearr_26773_26812 = state_26769__$1;
(statearr_26773_26812[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (3))){
var inst_26764 = xhr.abort();
var state_26769__$1 = state_26769;
var statearr_26774_26813 = state_26769__$1;
(statearr_26774_26813[(2)] = inst_26764);

(statearr_26774_26813[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (4))){
var state_26769__$1 = state_26769;
var statearr_26775_26814 = state_26769__$1;
(statearr_26775_26814[(2)] = null);

(statearr_26775_26814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (5))){
var inst_26767 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26769__$1,inst_26767);
} else {
return null;
}
}
}
}
}
});
return (function() {
var rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto__ = null;
var rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto____0 = (function (){
var statearr_26776 = [null,null,null,null,null,null,null,null];
(statearr_26776[(0)] = rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto__);

(statearr_26776[(1)] = (1));

return statearr_26776;
});
var rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto____1 = (function (state_26769){
while(true){
var ret_value__26423__auto__ = (function (){try{while(true){
var result__26424__auto__ = switch__26421__auto__(state_26769);
if(cljs.core.keyword_identical_QMARK_(result__26424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26424__auto__;
}
break;
}
}catch (e26777){var ex__26425__auto__ = e26777;
var statearr_26778_26815 = state_26769;
(statearr_26778_26815[(2)] = ex__26425__auto__);


if(cljs.core.seq((state_26769[(4)]))){
var statearr_26779_26816 = state_26769;
(statearr_26779_26816[(1)] = cljs.core.first((state_26769[(4)])));

} else {
throw ex__26425__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26817 = state_26769;
state_26769 = G__26817;
continue;
} else {
return ret_value__26423__auto__;
}
break;
}
});
rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto____0.call(this);
case 1:
return rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto__.cljs$core$IFn$_invoke$arity$0 = rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto____0;
rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto__.cljs$core$IFn$_invoke$arity$1 = rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto____1;
return rowing_client$cljs_http_core$xhr_$_state_machine__26422__auto__;
})()
})();
var state__26493__auto__ = (function (){var statearr_26780 = f__26492__auto__();
(statearr_26780[(6)] = c__26491__auto___26810);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26493__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
rowing_client.cljs_http_core.jsonp = (function rowing_client$cljs_http_core$jsonp(p__26781){
var map__26782 = p__26781;
var map__26782__$1 = cljs.core.__destructure_map(map__26782);
var request = map__26782__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26782__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26782__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26782__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26782__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(rowing_client.cljs_http_util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_26819 = jsonp.send(null,(function rowing_client$cljs_http_core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rowing_client.cljs_http_core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function rowing_client$cljs_http_core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rowing_client.cljs_http_core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rowing_client.cljs_http_core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_26819], null));

if(cljs.core.truth_(cancel)){
var c__26491__auto___26821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26492__auto__ = (function (){var switch__26421__auto__ = (function (state_26787){
var state_val_26788 = (state_26787[(1)]);
if((state_val_26788 === (1))){
var state_26787__$1 = state_26787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26787__$1,(2),cancel);
} else {
if((state_val_26788 === (2))){
var inst_26784 = (state_26787[(2)]);
var inst_26785 = jsonp.cancel(req_26819);
var state_26787__$1 = (function (){var statearr_26789 = state_26787;
(statearr_26789[(7)] = inst_26784);

return statearr_26789;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26787__$1,inst_26785);
} else {
return null;
}
}
});
return (function() {
var rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto__ = null;
var rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto____0 = (function (){
var statearr_26790 = [null,null,null,null,null,null,null,null];
(statearr_26790[(0)] = rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto__);

(statearr_26790[(1)] = (1));

return statearr_26790;
});
var rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto____1 = (function (state_26787){
while(true){
var ret_value__26423__auto__ = (function (){try{while(true){
var result__26424__auto__ = switch__26421__auto__(state_26787);
if(cljs.core.keyword_identical_QMARK_(result__26424__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26424__auto__;
}
break;
}
}catch (e26791){var ex__26425__auto__ = e26791;
var statearr_26792_26823 = state_26787;
(statearr_26792_26823[(2)] = ex__26425__auto__);


if(cljs.core.seq((state_26787[(4)]))){
var statearr_26793_26824 = state_26787;
(statearr_26793_26824[(1)] = cljs.core.first((state_26787[(4)])));

} else {
throw ex__26425__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26423__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26826 = state_26787;
state_26787 = G__26826;
continue;
} else {
return ret_value__26423__auto__;
}
break;
}
});
rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto__ = function(state_26787){
switch(arguments.length){
case 0:
return rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto____0.call(this);
case 1:
return rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto____1.call(this,state_26787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto__.cljs$core$IFn$_invoke$arity$0 = rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto____0;
rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto__.cljs$core$IFn$_invoke$arity$1 = rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto____1;
return rowing_client$cljs_http_core$jsonp_$_state_machine__26422__auto__;
})()
})();
var state__26493__auto__ = (function (){var statearr_26794 = f__26492__auto__();
(statearr_26794[(6)] = c__26491__auto___26821);

return statearr_26794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26493__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
rowing_client.cljs_http_core.request = (function rowing_client$cljs_http_core$request(p__26795){
var map__26796 = p__26795;
var map__26796__$1 = cljs.core.__destructure_map(map__26796);
var request = map__26796__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26796__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return rowing_client.cljs_http_core.jsonp(request);
} else {
return rowing_client.cljs_http_core.xhr(request);
}
});

//# sourceMappingURL=rowing_client.cljs_http_core.js.map
