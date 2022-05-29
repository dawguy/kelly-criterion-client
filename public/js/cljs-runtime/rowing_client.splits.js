goog.provide('rowing_client.splits');
rowing_client.splits.power = (200);
rowing_client.splits.s = "135.25";
rowing_client.splits.left_pad = (function rowing_client$splits$left_pad(qty,s){
if((qty > cljs.core.count(cljs.core.first(cljs.core.split_with((function (p1__37124_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",p1__37124_SHARP_);
}),s))))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37130 = (qty - (1));
var G__37131 = s;
return (rowing_client.splits.left_pad.cljs$core$IFn$_invoke$arity$2 ? rowing_client.splits.left_pad.cljs$core$IFn$_invoke$arity$2(G__37130,G__37131) : rowing_client.splits.left_pad.call(null,G__37130,G__37131));
})())].join('');
} else {
return s;

}
});
rowing_client.splits.toTime = (function rowing_client$splits$toTime(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor((s / (60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rowing_client.splits.left_pad((2),Number(cljs.core.rem(s,(60))).toFixed((1))))].join('');
});
rowing_client.splits.powerToSplit = (function rowing_client$splits$powerToSplit(power){
var s = ((500) * Math.cbrt((2.8 / power)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),power)){
return rowing_client.splits.toTime(s);
} else {
return "0:00.0";

}
});
rowing_client.splits.splitSecondsToPower = (function rowing_client$splits$splitSecondsToPower(var_args){
var G__37133 = arguments.length;
switch (G__37133) {
case 1:
return rowing_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rowing_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rowing_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (2.8 / Math.pow((s / (500)),(3)));
}));

(rowing_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$2 = (function (duration,distance){
return (duration / (distance / (500)));
}));

(rowing_client.splits.splitSecondsToPower.cljs$lang$maxFixedArity = 2);

rowing_client.splits.add_power = (function rowing_client$splits$add_power(split){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["add-power :: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(split)].join('')], 0));

if((((new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(split) == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(split))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(split,new cljs.core.Keyword(null,"power","power",-937852079),rowing_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(split),new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(split)));
} else {
return split;
}
});

//# sourceMappingURL=rowing_client.splits.js.map
