goog.provide('kelly_criterion_client.browser');
if((typeof kelly_criterion_client !== 'undefined') && (typeof kelly_criterion_client.browser !== 'undefined') && (typeof kelly_criterion_client.browser.app_db !== 'undefined')){
} else {
kelly_criterion_client.browser.app_db = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"chances","chances",-463895539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prob","prob",-507301258),0.15,new cljs.core.Keyword(null,"payout","payout",1661925430),(300)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prob","prob",-507301258),0.35,new cljs.core.Keyword(null,"payout","payout",1661925430),(200)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prob","prob",-507301258),0.5,new cljs.core.Keyword(null,"payout","payout",1661925430),(0)], null)], null)], null));
}
kelly_criterion_client.browser.start = (function kelly_criterion_client$browser$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(kelly_criterion_client.views.mainPage(kelly_criterion_client.browser.app_db),document.getElementById("app"));
});
kelly_criterion_client.browser.update_chances = (function kelly_criterion_client$browser$update_chances(chances){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kelly_criterion_client.browser.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"chances","chances",-463895539),kelly_criterion_client.kelly_criterion.normalize_probs(chances));
});
kelly_criterion_client.browser.init = (function kelly_criterion_client$browser$init(){
return kelly_criterion_client.browser.start();
});
kelly_criterion_client.browser.stop = (function kelly_criterion_client$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=kelly_criterion_client.browser.js.map
