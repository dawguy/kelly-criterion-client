goog.provide('rowing_client.cljs_http_client');
rowing_client.cljs_http_client.if_pos = (function rowing_client$cljs_http_client$if_pos(v){
if(cljs.core.truth_((function (){var and__4251__auto__ = v;
if(cljs.core.truth_(and__4251__auto__)){
return (v > (0));
} else {
return and__4251__auto__;
}
})())){
return v;
} else {
return null;
}
});
rowing_client.cljs_http_client.acc_param = (function rowing_client$cljs_http_client$acc_param(o,v){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(o,v);
} else {
if((!((o == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
rowing_client.cljs_http_client.parse_query_params = (function rowing_client$cljs_http_client$parse_query_params(s){
if((!(clojure.string.blank_QMARK_(s)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26798_SHARP_,p2__26797_SHARP_){
var vec__26799 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__26797_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__26798_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),rowing_client.cljs_http_client.acc_param,no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
rowing_client.cljs_http_client.parse_url = (function rowing_client$cljs_http_client$parse_url(url){
if((!(clojure.string.blank_QMARK_(url)))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),rowing_client.cljs_http_client.if_pos(uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not(query_data.isEmpty()))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not(query_data.isEmpty()))?rowing_client.cljs_http_client.parse_query_params(cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)):null)], null);
} else {
return null;
}
});
rowing_client.cljs_http_client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
rowing_client.cljs_http_client.encode_val = (function rowing_client$cljs_http_client$encode_val(k,v){
return [no.en.core.url_encode(cljs.core.name(k)),"=",no.en.core.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))].join('');
});
rowing_client.cljs_http_client.encode_vals = (function rowing_client$cljs_http_client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26802_SHARP_){
return rowing_client.cljs_http_client.encode_val(k,p1__26802_SHARP_);
}),vs));
});
rowing_client.cljs_http_client.encode_param = (function rowing_client$cljs_http_client$encode_param(p__26803){
var vec__26804 = p__26803;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26804,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26804,(1),null);
if(cljs.core.coll_QMARK_(v)){
return rowing_client.cljs_http_client.encode_vals(k,v);
} else {
return rowing_client.cljs_http_client.encode_val(k,v);
}
});
rowing_client.cljs_http_client.generate_query_string = (function rowing_client$cljs_http_client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(rowing_client.cljs_http_client.encode_param,params));
});
rowing_client.cljs_http_client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26809_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26809_SHARP_)].join('');
}),esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
rowing_client.cljs_http_client.escape_special = (function rowing_client$cljs_http_client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(rowing_client.cljs_http_client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
rowing_client.cljs_http_client.decode_body = (function rowing_client$cljs_http_client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4251__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern(["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rowing_client.cljs_http_client.escape_special(content_type))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type","")));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
rowing_client.cljs_http_client.wrap_edn_params = (function rowing_client$cljs_http_client$wrap_edn_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__26818 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0))),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26818) : client.call(null,G__26818));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
rowing_client.cljs_http_client.wrap_edn_response = (function rowing_client$cljs_http_client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26820_SHARP_){
return rowing_client.cljs_http_client.decode_body(p1__26820_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
rowing_client.cljs_http_client.wrap_default_headers = (function rowing_client$cljs_http_client$wrap_default_headers(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26949 = arguments.length;
var i__4865__auto___26950 = (0);
while(true){
if((i__4865__auto___26950 < len__4864__auto___26949)){
args__4870__auto__.push((arguments[i__4865__auto___26950]));

var G__26951 = (i__4865__auto___26950 + (1));
i__4865__auto___26950 = G__26951;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26827){
var vec__26828 = p__26827;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26828,(0),null);
return (function (request){
var temp__5751__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var default_headers__$1 = temp__5751__auto__;
var G__26831 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26831) : client.call(null,G__26831));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(rowing_client.cljs_http_client.wrap_default_headers.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.wrap_default_headers.cljs$lang$applyTo = (function (seq26822){
var G__26825 = cljs.core.first(seq26822);
var seq26822__$1 = cljs.core.next(seq26822);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26825,seq26822__$1);
}));

rowing_client.cljs_http_client.wrap_accept = (function rowing_client$cljs_http_client$wrap_accept(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26952 = arguments.length;
var i__4865__auto___26953 = (0);
while(true){
if((i__4865__auto___26953 < len__4864__auto___26952)){
args__4870__auto__.push((arguments[i__4865__auto___26953]));

var G__26954 = (i__4865__auto___26953 + (1));
i__4865__auto___26953 = G__26954;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26834){
var vec__26835 = p__26834;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(0),null);
return (function (request){
var temp__5751__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var accept__$1 = temp__5751__auto__;
var G__26838 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26838) : client.call(null,G__26838));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(rowing_client.cljs_http_client.wrap_accept.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.wrap_accept.cljs$lang$applyTo = (function (seq26832){
var G__26833 = cljs.core.first(seq26832);
var seq26832__$1 = cljs.core.next(seq26832);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26833,seq26832__$1);
}));

rowing_client.cljs_http_client.wrap_content_type = (function rowing_client$cljs_http_client$wrap_content_type(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26955 = arguments.length;
var i__4865__auto___26956 = (0);
while(true){
if((i__4865__auto___26956 < len__4864__auto___26955)){
args__4870__auto__.push((arguments[i__4865__auto___26956]));

var G__26957 = (i__4865__auto___26956 + (1));
i__4865__auto___26956 = G__26957;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26841){
var vec__26842 = p__26841;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26842,(0),null);
return (function (request){
var temp__5751__auto__ = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var content_type__$1 = temp__5751__auto__;
var G__26845 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26845) : client.call(null,G__26845));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
}));

(rowing_client.cljs_http_client.wrap_content_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.wrap_content_type.cljs$lang$applyTo = (function (seq26839){
var G__26840 = cljs.core.first(seq26839);
var seq26839__$1 = cljs.core.next(seq26839);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26840,seq26839__$1);
}));

rowing_client.cljs_http_client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
rowing_client.cljs_http_client.wrap_transit_params = (function rowing_client$cljs_http_client$wrap_transit_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var map__26846 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rowing_client.cljs_http_client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26846__$1 = cljs.core.__destructure_map(map__26846);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26846__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26846__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__26847 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),rowing_client.cljs_http_util.transit_encode(params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26847) : client.call(null,G__26847));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
rowing_client.cljs_http_client.wrap_transit_response = (function rowing_client$cljs_http_client$wrap_transit_response(client){
return (function (request){
var map__26850 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rowing_client.cljs_http_client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__26850__$1 = cljs.core.__destructure_map(map__26850);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26850__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26850__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = (function (p1__26848_SHARP_){
return rowing_client.cljs_http_util.transit_decode(p1__26848_SHARP_,decoding,decoding_opts);
});
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26849_SHARP_){
return rowing_client.cljs_http_client.decode_body(p1__26849_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
rowing_client.cljs_http_client.wrap_json_params = (function rowing_client$cljs_http_client$wrap_json_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__26851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),rowing_client.cljs_http_util.json_encode(params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26851) : client.call(null,G__26851));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
rowing_client.cljs_http_client.wrap_json_response = (function rowing_client$cljs_http_client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__26852_SHARP_){
return rowing_client.cljs_http_client.decode_body(p1__26852_SHARP_,rowing_client.cljs_http_util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
rowing_client.cljs_http_client.wrap_query_params = (function rowing_client$cljs_http_client$wrap_query_params(client){
return (function (p__26853){
var map__26854 = p__26853;
var map__26854__$1 = cljs.core.__destructure_map(map__26854);
var req = map__26854__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
var G__26855 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),rowing_client.cljs_http_client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26855) : client.call(null,G__26855));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
rowing_client.cljs_http_client.wrap_form_params = (function rowing_client$cljs_http_client$wrap_form_params(client){
return (function (p__26856){
var map__26857 = p__26856;
var map__26857__$1 = cljs.core.__destructure_map(map__26857);
var request = map__26857__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26857__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26857__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26857__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4251__auto__ = form_params;
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__26858 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__26858.cljs$core$IFn$_invoke$arity$1 ? fexpr__26858.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__26858.call(null,request_method));
} else {
return and__4251__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__26859 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),rowing_client.cljs_http_client.generate_query_string(form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26859) : client.call(null,G__26859));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
rowing_client.cljs_http_client.generate_form_data = (function rowing_client$cljs_http_client$generate_form_data(params){
var form_data = (new FormData());
var seq__26860_26958 = cljs.core.seq(params);
var chunk__26861_26959 = null;
var count__26862_26960 = (0);
var i__26863_26961 = (0);
while(true){
if((i__26863_26961 < count__26862_26960)){
var vec__26870_26962 = chunk__26861_26959.cljs$core$IIndexed$_nth$arity$2(null,i__26863_26961);
var k_26963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26870_26962,(0),null);
var v_26964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26870_26962,(1),null);
if(cljs.core.coll_QMARK_(v_26964)){
form_data.append(cljs.core.name(k_26963),cljs.core.first(v_26964),cljs.core.second(v_26964));
} else {
form_data.append(cljs.core.name(k_26963),v_26964);
}


var G__26965 = seq__26860_26958;
var G__26966 = chunk__26861_26959;
var G__26967 = count__26862_26960;
var G__26968 = (i__26863_26961 + (1));
seq__26860_26958 = G__26965;
chunk__26861_26959 = G__26966;
count__26862_26960 = G__26967;
i__26863_26961 = G__26968;
continue;
} else {
var temp__5753__auto___26969 = cljs.core.seq(seq__26860_26958);
if(temp__5753__auto___26969){
var seq__26860_26970__$1 = temp__5753__auto___26969;
if(cljs.core.chunked_seq_QMARK_(seq__26860_26970__$1)){
var c__4679__auto___26971 = cljs.core.chunk_first(seq__26860_26970__$1);
var G__26972 = cljs.core.chunk_rest(seq__26860_26970__$1);
var G__26973 = c__4679__auto___26971;
var G__26974 = cljs.core.count(c__4679__auto___26971);
var G__26975 = (0);
seq__26860_26958 = G__26972;
chunk__26861_26959 = G__26973;
count__26862_26960 = G__26974;
i__26863_26961 = G__26975;
continue;
} else {
var vec__26873_26976 = cljs.core.first(seq__26860_26970__$1);
var k_26977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873_26976,(0),null);
var v_26978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26873_26976,(1),null);
if(cljs.core.coll_QMARK_(v_26978)){
form_data.append(cljs.core.name(k_26977),cljs.core.first(v_26978),cljs.core.second(v_26978));
} else {
form_data.append(cljs.core.name(k_26977),v_26978);
}


var G__26979 = cljs.core.next(seq__26860_26970__$1);
var G__26980 = null;
var G__26981 = (0);
var G__26982 = (0);
seq__26860_26958 = G__26979;
chunk__26861_26959 = G__26980;
count__26862_26960 = G__26981;
i__26863_26961 = G__26982;
continue;
}
} else {
}
}
break;
}

return form_data;
});
rowing_client.cljs_http_client.wrap_multipart_params = (function rowing_client$cljs_http_client$wrap_multipart_params(client){
return (function (p__26876){
var map__26877 = p__26876;
var map__26877__$1 = cljs.core.__destructure_map(map__26877);
var request = map__26877__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26877__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26877__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4251__auto__ = multipart_params;
if(cljs.core.truth_(and__4251__auto__)){
var fexpr__26878 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null);
return (fexpr__26878.cljs$core$IFn$_invoke$arity$1 ? fexpr__26878.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__26878.call(null,request_method));
} else {
return and__4251__auto__;
}
})())){
var G__26879 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),rowing_client.cljs_http_client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26879) : client.call(null,G__26879));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
rowing_client.cljs_http_client.wrap_method = (function rowing_client$cljs_http_client$wrap_method(client){
return (function (req){
var temp__5751__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
var G__26880 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26880) : client.call(null,G__26880));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
rowing_client.cljs_http_client.wrap_server_name = (function rowing_client$cljs_http_client$wrap_server_name(client,server_name){
return (function (p1__26881_SHARP_){
var G__26882 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26881_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26882) : client.call(null,G__26882));
});
});
rowing_client.cljs_http_client.wrap_url = (function rowing_client$cljs_http_client$wrap_url(client){
return (function (p__26884){
var map__26885 = p__26884;
var map__26885__$1 = cljs.core.__destructure_map(map__26885);
var req = map__26885__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26885__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5751__auto__ = rowing_client.cljs_http_client.parse_url(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5751__auto__)){
var spec = temp__5751__auto__;
var G__26886 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,spec], 0)),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),(function (p1__26883_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__26883_SHARP_,query_params], 0));
}));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26886) : client.call(null,G__26886));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
rowing_client.cljs_http_client.wrap_basic_auth = (function rowing_client$cljs_http_client$wrap_basic_auth(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26983 = arguments.length;
var i__4865__auto___26984 = (0);
while(true){
if((i__4865__auto___26984 < len__4864__auto___26983)){
args__4870__auto__.push((arguments[i__4865__auto___26984]));

var G__26985 = (i__4865__auto___26984 + (1));
i__4865__auto___26984 = G__26985;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__26889){
var vec__26890 = p__26889;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26890,(0),null);
return (function (req){
var credentials__$1 = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return credentials;
}
})();
if((!(cljs.core.empty_QMARK_(credentials__$1)))){
var G__26893 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),rowing_client.cljs_http_util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26893) : client.call(null,G__26893));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
}));

(rowing_client.cljs_http_client.wrap_basic_auth.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.wrap_basic_auth.cljs$lang$applyTo = (function (seq26887){
var G__26888 = cljs.core.first(seq26887);
var seq26887__$1 = cljs.core.next(seq26887);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26888,seq26887__$1);
}));

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
rowing_client.cljs_http_client.wrap_oauth = (function rowing_client$cljs_http_client$wrap_oauth(client){
return (function (req){
var temp__5751__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5751__auto__)){
var oauth_token = temp__5751__auto__;
var G__26894 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__26894) : client.call(null,G__26894));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
rowing_client.cljs_http_client.wrap_channel_from_request_map = (function rowing_client$cljs_http_client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var custom_channel = temp__5751__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
rowing_client.cljs_http_client.wrap_request = (function rowing_client$cljs_http_client$wrap_request(request){
return rowing_client.cljs_http_client.wrap_default_headers(rowing_client.cljs_http_client.wrap_channel_from_request_map(rowing_client.cljs_http_client.wrap_url(rowing_client.cljs_http_client.wrap_method(rowing_client.cljs_http_client.wrap_oauth(rowing_client.cljs_http_client.wrap_basic_auth(rowing_client.cljs_http_client.wrap_query_params(rowing_client.cljs_http_client.wrap_content_type(rowing_client.cljs_http_client.wrap_json_response(rowing_client.cljs_http_client.wrap_json_params(rowing_client.cljs_http_client.wrap_transit_response(rowing_client.cljs_http_client.wrap_transit_params(rowing_client.cljs_http_client.wrap_edn_response(rowing_client.cljs_http_client.wrap_edn_params(rowing_client.cljs_http_client.wrap_multipart_params(rowing_client.cljs_http_client.wrap_form_params(rowing_client.cljs_http_client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
rowing_client.cljs_http_client.request = rowing_client.cljs_http_client.wrap_request(rowing_client.cljs_http_core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.delete$ = (function rowing_client$cljs_http_client$delete(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26986 = arguments.length;
var i__4865__auto___26987 = (0);
while(true){
if((i__4865__auto___26987 < len__4864__auto___26986)){
args__4870__auto__.push((arguments[i__4865__auto___26987]));

var G__26988 = (i__4865__auto___26987 + (1));
i__4865__auto___26987 = G__26988;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26897){
var vec__26898 = p__26897;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26898,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.delete$.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.delete$.cljs$lang$applyTo = (function (seq26895){
var G__26896 = cljs.core.first(seq26895);
var seq26895__$1 = cljs.core.next(seq26895);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26896,seq26895__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.get = (function rowing_client$cljs_http_client$get(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26989 = arguments.length;
var i__4865__auto___26990 = (0);
while(true){
if((i__4865__auto___26990 < len__4864__auto___26989)){
args__4870__auto__.push((arguments[i__4865__auto___26990]));

var G__26991 = (i__4865__auto___26990 + (1));
i__4865__auto___26990 = G__26991;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26903){
var vec__26904 = p__26903;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26904,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.get.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.get.cljs$lang$applyTo = (function (seq26901){
var G__26902 = cljs.core.first(seq26901);
var seq26901__$1 = cljs.core.next(seq26901);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26902,seq26901__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.head = (function rowing_client$cljs_http_client$head(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26992 = arguments.length;
var i__4865__auto___26993 = (0);
while(true){
if((i__4865__auto___26993 < len__4864__auto___26992)){
args__4870__auto__.push((arguments[i__4865__auto___26993]));

var G__26994 = (i__4865__auto___26993 + (1));
i__4865__auto___26993 = G__26994;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26909){
var vec__26910 = p__26909;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26910,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.head.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.head.cljs$lang$applyTo = (function (seq26907){
var G__26908 = cljs.core.first(seq26907);
var seq26907__$1 = cljs.core.next(seq26907);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26908,seq26907__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.jsonp = (function rowing_client$cljs_http_client$jsonp(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26995 = arguments.length;
var i__4865__auto___26996 = (0);
while(true){
if((i__4865__auto___26996 < len__4864__auto___26995)){
args__4870__auto__.push((arguments[i__4865__auto___26996]));

var G__26997 = (i__4865__auto___26996 + (1));
i__4865__auto___26996 = G__26997;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26915){
var vec__26916 = p__26915;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26916,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.jsonp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.jsonp.cljs$lang$applyTo = (function (seq26913){
var G__26914 = cljs.core.first(seq26913);
var seq26913__$1 = cljs.core.next(seq26913);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26914,seq26913__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.move = (function rowing_client$cljs_http_client$move(var_args){
var args__4870__auto__ = [];
var len__4864__auto___26998 = arguments.length;
var i__4865__auto___26999 = (0);
while(true){
if((i__4865__auto___26999 < len__4864__auto___26998)){
args__4870__auto__.push((arguments[i__4865__auto___26999]));

var G__27000 = (i__4865__auto___26999 + (1));
i__4865__auto___26999 = G__27000;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26921){
var vec__26922 = p__26921;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.move.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.move.cljs$lang$applyTo = (function (seq26919){
var G__26920 = cljs.core.first(seq26919);
var seq26919__$1 = cljs.core.next(seq26919);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26920,seq26919__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.options = (function rowing_client$cljs_http_client$options(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27001 = arguments.length;
var i__4865__auto___27002 = (0);
while(true){
if((i__4865__auto___27002 < len__4864__auto___27001)){
args__4870__auto__.push((arguments[i__4865__auto___27002]));

var G__27003 = (i__4865__auto___27002 + (1));
i__4865__auto___27002 = G__27003;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26927){
var vec__26928 = p__26927;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26928,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.options.cljs$lang$applyTo = (function (seq26925){
var G__26926 = cljs.core.first(seq26925);
var seq26925__$1 = cljs.core.next(seq26925);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26926,seq26925__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.patch = (function rowing_client$cljs_http_client$patch(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27004 = arguments.length;
var i__4865__auto___27005 = (0);
while(true){
if((i__4865__auto___27005 < len__4864__auto___27004)){
args__4870__auto__.push((arguments[i__4865__auto___27005]));

var G__27006 = (i__4865__auto___27005 + (1));
i__4865__auto___27005 = G__27006;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26933){
var vec__26934 = p__26933;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26934,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.patch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.patch.cljs$lang$applyTo = (function (seq26931){
var G__26932 = cljs.core.first(seq26931);
var seq26931__$1 = cljs.core.next(seq26931);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26932,seq26931__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.post = (function rowing_client$cljs_http_client$post(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27007 = arguments.length;
var i__4865__auto___27008 = (0);
while(true){
if((i__4865__auto___27008 < len__4864__auto___27007)){
args__4870__auto__.push((arguments[i__4865__auto___27008]));

var G__27009 = (i__4865__auto___27008 + (1));
i__4865__auto___27008 = G__27009;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26939){
var vec__26940 = p__26939;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26940,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.post.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.post.cljs$lang$applyTo = (function (seq26937){
var G__26938 = cljs.core.first(seq26937);
var seq26937__$1 = cljs.core.next(seq26937);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26938,seq26937__$1);
}));

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
rowing_client.cljs_http_client.put = (function rowing_client$cljs_http_client$put(var_args){
var args__4870__auto__ = [];
var len__4864__auto___27010 = arguments.length;
var i__4865__auto___27011 = (0);
while(true){
if((i__4865__auto___27011 < len__4864__auto___27010)){
args__4870__auto__.push((arguments[i__4865__auto___27011]));

var G__27012 = (i__4865__auto___27011 + (1));
i__4865__auto___27011 = G__27012;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return rowing_client.cljs_http_client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(rowing_client.cljs_http_client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__26945){
var vec__26946 = p__26945;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946,(0),null);
return rowing_client.cljs_http_client.request(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)], 0)));
}));

(rowing_client.cljs_http_client.put.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rowing_client.cljs_http_client.put.cljs$lang$applyTo = (function (seq26943){
var G__26944 = cljs.core.first(seq26943);
var seq26943__$1 = cljs.core.next(seq26943);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26944,seq26943__$1);
}));


//# sourceMappingURL=rowing_client.cljs_http_client.js.map
