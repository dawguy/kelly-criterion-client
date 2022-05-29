goog.provide('kelly_criterion_client.splits');
kelly_criterion_client.splits.power = (200);
kelly_criterion_client.splits.s = "135.25";
kelly_criterion_client.splits.left_pad = (function kelly_criterion_client$splits$left_pad(qty,s){
if((qty > cljs.core.count(cljs.core.first(cljs.core.split_with((function (p1__6145_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(".",p1__6145_SHARP_);
}),s))))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__6150 = (qty - (1));
var G__6151 = s;
return (kelly_criterion_client.splits.left_pad.cljs$core$IFn$_invoke$arity$2 ? kelly_criterion_client.splits.left_pad.cljs$core$IFn$_invoke$arity$2(G__6150,G__6151) : kelly_criterion_client.splits.left_pad.call(null,G__6150,G__6151));
})())].join('');
} else {
return s;

}
});
kelly_criterion_client.splits.toTime = (function kelly_criterion_client$splits$toTime(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor((s / (60)))),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kelly_criterion_client.splits.left_pad((2),Number(cljs.core.rem(s,(60))).toFixed((1))))].join('');
});
kelly_criterion_client.splits.powerToSplit = (function kelly_criterion_client$splits$powerToSplit(power){
var s = ((500) * Math.cbrt((2.8 / power)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),power)){
return kelly_criterion_client.splits.toTime(s);
} else {
return "0:00.0";

}
});
kelly_criterion_client.splits.splitSecondsToPower = (function kelly_criterion_client$splits$splitSecondsToPower(var_args){
var G__6163 = arguments.length;
switch (G__6163) {
case 1:
return kelly_criterion_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kelly_criterion_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kelly_criterion_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$1 = (function (s){
return (2.8 / Math.pow((s / (500)),(3)));
}));

(kelly_criterion_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$2 = (function (duration,distance){
return (duration / (distance / (500)));
}));

(kelly_criterion_client.splits.splitSecondsToPower.cljs$lang$maxFixedArity = 2);

kelly_criterion_client.splits.add_power = (function kelly_criterion_client$splits$add_power(split){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["add-power :: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(split)].join('')], 0));

if((((new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(split) == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(split))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(split,new cljs.core.Keyword(null,"power","power",-937852079),kelly_criterion_client.splits.splitSecondsToPower.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(split),new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(split)));
} else {
return split;
}
});

//# sourceMappingURL=kelly_criterion_client.splits.js.map
