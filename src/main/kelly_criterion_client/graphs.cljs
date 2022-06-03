(ns kelly-criterion-client.graphs
  (:require [d3 :as d3]))

(defn growth-rate [growth-rates]
  (let [size 300
        size-offset 30
        bet-sizes (map first growth-rates)
         bet-growth-rates (map second growth-rates)
         x (->
             (d3/scaleLinear)
             (.domain (into-array [0 (apply max bet-sizes)]))
             (.range (into-array [size-offset (- size size-offset)])))
         y (->
             (d3/scaleLinear)
             (.domain (into-array [(max -0.25 (apply min bet-growth-rates)) (apply max bet-growth-rates)]))
             (.range (into-array [(- size size-offset) size-offset])))
        xAxis (fn [vals] (map #(array-map :value %1 :offset (x %1)) vals))
        yAxis (fn [vals] (map #(array-map :value %1 :offset (y %1)) vals))
        line (->
             (d3/area)
             (.x (fn [g] (x (first g))))
             (.y (fn [g] (y (second g)))))
        ; https://stackoverflow.com/questions/58835925/d3-area-fill-with-different-color-based-on-conditions
        positive-area (->
             (d3/area)
             (.x (fn [g] (x (first g))))
             (.y0 (y 0))
             (.y1 (fn [g] (if (< 0 (second g)) (y (second g)) (y 0)))))
        negative-area (->
            (d3/area)
            (.x (fn [g] (x (first g))))
            (.y0 (y 0))
            (.y1 (fn [g] (if (> 0 (second g)) (y (max -0.25 (second g))) (y 0)))))]
    [:svg
     {:viewBox (str 0 " " 0 " " size " " size)}
     ; Positive payoff color
     [:path
      {:d (positive-area growth-rates)
       :fill "#BFB"
       :stroke "none"
       :stroke-width 1
       }]
     ; Negative payoff color
     [:path
      {:d (negative-area growth-rates)
       :fill "#FBB"
       :stroke "none"
       :stroke-width 1
       }]
     ; https://wattenberger.com/blog/react-and-d3
     [:g
      [:path {:d (str "M " size-offset " " (- size size-offset) " H " (- size size-offset)) :stroke " currentColor "}]
      [:path {:d (str "M " size-offset " " size-offset " V " (- size size-offset)) :stroke " currentColor "}]
      [:g (map (fn [ax] [:g
                         {:key (:value ax) :transform (str "translate(" (:offset ax) ", " (- size size-offset) ")")}
                         [:line {:y2 6 :stroke "currentColor"}]
                         [:text {:key (:value ax) :style {:font-size "10px" :text-anchor "middle" :transform "translateY(16px)"}} (:value ax)]
                         ]) (xAxis (.ticks x)))]
      [:g (map (fn [ax] [:g
                         {:key (:value ax) :transform (str "translate(" size-offset ", " (:offset ax) ")")}
                         [:line {:x2 -6 :stroke "currentColor"}]
                         [:text {:key (:value ax) :style {:font-size "10px" :text-anchor "middle" :transform "translate(-20px, 2px)"}} (:value ax)]
                         ]) (yAxis (.ticks y)))]
      ]
     ; Line
     [:path
      {:d
       (do (prn growth-rates)
           (line (filter #(< -0.25 (second %1)) growth-rates)))
       :fill   "transparent"
       :stroke (first d3/schemeCategory10)}]
     ]))

(defn add-starting-points [chances]
  (loop [l chances
         r (vector)
         s 0]
    (if (< 0 (count l))
      (recur (rest l) (cons (assoc (first l) :p (+ s (:prob (first l)))) (cons (assoc (first l) :p s) r))  (+ s (:prob (first l))))

      (do (prn r) r))))

(defn chances [chances]
  (let [size 300
        size-offset 35
        probs (map :prob chances)
        payoffs (map :payout chances)
        x (->
            (d3/scaleLinear)
            (.domain (into-array [0 1]))
            (.range (into-array [size-offset (- size size-offset)])))
        y (->
            (d3/scaleLinear)
            (.domain (into-array [0 (apply max payoffs)]))
            (.range (into-array [(- size size-offset) size-offset])))
        xAxis (fn [vals] (map #(array-map :value %1 :offset (x %1)) vals))
        yAxis (fn [vals] (map #(array-map :value %1 :offset (y %1)) vals))
        line (->
               (d3/line)
               (.x (fn [c] (x (:p c))))
               (.y (fn [c] (y (:payout c)))))
        ; https://stackoverflow.com/questions/58835925/d3-area-fill-with-different-color-based-on-conditions
        positive-area (->
                        (d3/area)
                        (.x (fn [c] (x (:p c))))
                        (.y0 (y 100))
                        (.y1 (fn [c] (if (< 100 (:payout c)) (y (:payout c)) (y 100)))))
        negative-area (->
                        (d3/area)
                        (.x (fn [c] (x (:p c))))
                        (.y0 (y 100))
                        (.y1 (fn [c] (if (> 100 (:payout c)) (y (:payout c)) (y 100)))))]
    [:svg
     {:viewBox (str 0 " " 0 " " size " " size)}
     ; Positive payoff color
     [:path
      {:d (positive-area (add-starting-points chances))
       :fill " #BFB"
       :stroke " none "
       :stroke-width 1
       }]
     ; Negative payoff color
     [:path
      {:d (negative-area (add-starting-points chances))
       :fill " #FBB"
       :stroke " none "
       :stroke-width 1
       }]
     ; https://wattenberger.com/blog/react-and-d3
     [:g
      [:path {:d (str "M " size-offset " " (- size size-offset) " H " (- size size-offset)) :stroke " currentColor "}]
      [:path {:d (str "M " size-offset " " size-offset " V " (- size size-offset)) :stroke " currentColor "}]
      [:g (map (fn [ax] [:g
                         {:key (:value ax) :transform (str "translate(" (:offset ax) ", " (- size size-offset) ")")}
                         [:line {:y2 6 :stroke "currentColor"}]
                         [:text {:key (:value ax) :style {:font-size "10px" :text-anchor "middle" :transform "translateY(16px)"}} (:value ax)]
                         ]) (xAxis (.ticks x)))]
      [:g (map (fn [ax] [:g
                         {:key (:value ax) :transform (str "translate(" size-offset ", " (:offset ax) ")")}
                         [:line {:x2 -6 :stroke "currentColor"}]
                         [:text {:key (:value ax) :style {:font-size "10px" :text-anchor "middle" :transform "translate(-20px, 2px)"}} (:value ax)]
                         ]) (yAxis (.ticks y)))]
      ]
     [:path
      {:d (line (add-starting-points chances))
       :fill " transparent "
       :stroke (first d3/schemeCategory10)}]
     ]))

(comment [] " "
       (def growth-rates (vector [0 0] [1 0.0014278419662850659] [2 0.002712672867895371] [3 0.003856313260782635] [4 0.0048604085139401405] [5 0.005726437236174664] [6 0.006455718780398259] [7 0.007049419909378081] [8 0.007508560695860415] [9 0.007834019720383688] [10 0.008026538621693766] [11 0.00808672604728402] [12 0.008015061045050523] [13 0.007811895931241347] [14 0.007477458664678513] [15 0.0070118547525416935] [16 0.006415068708748653] [17 0.0056869650820589035] [18 0.004827289067425661] [19 0.0038356667107440207] [20 0.0027116047139611743] [21 0.0014544898444678739] [22 0.0000635879497443842] [23 -0.0014619574246528544] [24 -0.0031231268185456795] [25 -0.004921027049692384] [26 -0.006856893826047733] [27 -0.008932094791344464] [28 -0.011148133020767143] [29 -0.013506650986803426] [30 -0.016009435018884022] [31 -0.01865842028420106] [32 -0.02145569632117844] [33 -0.02440351316151307] [34 -0.02750428808157082] [35 -0.030760613029283207] [36 -0.03417526277861929] [37 -0.03775120387030195] [38 -0.04149160440480121] [39 -0.04539984476188083] [40 -0.049479529330253014] [41 -0.05373449934135341] [42 -0.0581688469130926] [43 -0.06278693042286851] [44 -0.06759339134442416] [45 -0.07259317270058196] [46 -0.07779153930386917] [47 -0.08319409997997357] [48 -0.08880683199535983] [49 -0.09463610794083754] [50 -0.10068872535812334] [51 -0.10697193943737388] [52 -0.11349349916131674] [53 -0.12026168732727255] [54 -0.12728536494357595] [55 -0.13457402057357493] [56 -0.14213782529082097] [57 -0.14998769401612466] [58 -0.158135354134344] [59 -0.16659342244049313] [60 -0.17537549164642952] [61 -0.18449622789786418] [62 -0.19397148101530803] [63 -0.20381840949276953] [64 -0.21405562267840084] [65 -0.22470334303970213] [66 -0.23578359200527405] [67 -0.2473204036053318] [68 -0.259340071043246] [69 -0.2718714324717212] [70 -0.2849462036881234] [71 -0.2985993672954204] [72 -0.3128696302218006] [73 -0.3277999645218498] [74 -0.34343825032751785] [75 -0.35983804500142413] [76 -0.377059509424052] [77 -0.39517053156989584] [78 -0.4142481000347694] [79 -0.4343799973438731] [80 -0.4556669067471931] [81 -0.4782250598976677] [82 -0.5021896010911832] [83 -0.5277189141482311] [84 -0.5550002626284273] [85 -0.5842572528098163] [86 -0.6157598754364421] [87 -0.6498382754000072] [88 -0.6869020442460365] [89 -0.7274679272644359] [90 -0.7722007737595111] [91 -0.8219761368629444] [92 -0.8779798992142693] [93 -0.9418747737207472] [94 -1.0160960236815066] [95 -1.1044192458266513] [96 -1.2131698043572223] [97 -1.354205771494938] [98 -1.554149216816422] [99 -1.8979494743587078] [100 ##-Inf]))
         (def x (-> (d3/scaleLinear) (.domain (into-array [0 1])) (.range (into-array [0 300]))))
       )