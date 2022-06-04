(ns kelly-criterion-client.views
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [d3 :as d3]
            [kelly-criterion-client.graphs :as graphs]
            [kelly-criterion-client.kelly-criterion :as kelly]))

(defonce app-db (r/atom {
                         ; Temporary start
                         :target :home
                         :chances [{:prob 0.15 :payout 300} {:prob 0.35 :payout 200} {:prob 0.5 :payout 0}]
                         :unnormalized-chances [{:prob "0.15" :payout "300"} {:prob "0.35" :payout "200"} {:prob "0.5" :payout "0"}]
                         :name ""
                         ; Temporary end
                         }))

(defn render [comp]
  (rdom/render comp (js/document.getElementById "app")))

(defn navbar []
  [:nav.bg-gray-800
   [:div.flex-1.flex.items-center.justify-center {:class "sm:items-stretch sm:justify-start"}
    [:div.flex.space-x-4
     [:a.text-gray-300.rounded-md.px-3.py-2 {:href "/home"} "Home"]
     [:a.text-gray-300.rounded-md.px-3.py-2 {:href "/examples"} "Examples"]]]])

; https://stackoverflow.com/questions/16126871/checking-for-nan-in-clojure
(defn NaN? [x] (false? (== x x)))

(defn str-to-number-chances [chances]
  (map (fn [c] {
                :prob   (if (NaN? (js/parseFloat (:prob c))) 0 (js/parseFloat (:prob c)))
                :payout (if (NaN? (js/parseInt (:payout c))) 100 (js/parseInt (:payout c)))}) chances)
  )

(defn renormalize-chances! [app-db]
  (swap! app-db assoc :chances (kelly-criterion-client.kelly-criterion/normalize-probs (str-to-number-chances (:unnormalized-chances @app-db))))
  )

(defn remove-at-index [arr idx] (mapv identity (concat (subvec arr 0 idx) (subvec arr (inc idx)))))

(defn remove-index! [app-db idx]
  (let [unnormalized-chances (:unnormalized-chances @app-db)]
   (swap! app-db assoc :unnormalized-chances (remove-at-index unnormalized-chances idx))
   (renormalize-chances! app-db)))

(defn add-probability! [app-db]
  (swap! app-db assoc :unnormalized-chances (conj (:unnormalized-chances @app-db) {:prob 0.50 :payout 100} ))
  (renormalize-chances! app-db))

(defn Chance [chance idx]
  [:tr
   [:td.p-1.text-center.border.lg:table-cell.border-b {:class "w-1/3"}
   (if (:editing @chance)
     [:input {:type "text" :value (:prob @chance) :on-change #(swap! chance assoc :prob (-> % .-target .-value))}]
     (:prob @chance))]
   [:td.p-1.text-center.border.lg:table-cell.border-b {:class "w-1/3"}
    (if (:editing @chance)
      [:input {:type "text" :value (:payout @chance) :on-change #(swap! chance assoc :payout (-> % .-target .-value))}]
      (:payout @chance))
    ]
   [:td.p-1.text-center.border.lg:table-cell.border-b {:class "w-1/3"}
    [:button.bg-transparent.bg-sky-500.hover:bg-sky-400.text-white.rounded.border.border-blue-200.px-1.mx-1 {:on-click #(swap! chance assoc :editing true)} "Edit"]
    [:button.bg-transparent.bg-sky-500.hover:bg-sky-400.text-white.rounded.border.border-blue-200.px-1.mx-1 {:on-click (fn [_] (swap! chance assoc :editing false) (renormalize-chances! app-db))} "Save"]
    [:button.bg-transparent.bg-sky-500.hover:bg-sky-400.text-white.rounded.border.border-blue-200.px-1.mx-1 {:on-click (fn [event] (remove-index! app-db idx))} "Delete"]
    ]])

(defn chancesListContainer [data]
  [:div.relative.px-4.py-4.flex-1.mx-1.my-1.bg-gray-100.border-2.border-gray-300.border-solid.rounded
   [:h3.text-lg.-mb-4.mr-4 "Probabilities"]
    [:div.mt-7.block.w-full.overflow-x-auto
     [:table.w-full.whitespace-nowrap
      [:thead [:tr
               [:th.p-2.font-bold.border.uppercase.lg:table-cell "Probability"]
               [:th.p-2.font-bold.border.uppercase.lg:table-cell "Payoff"]
               [:th.p-2.font-bold.border.uppercase.lg:table-cell "Actions"]]]
      [:tbody
       (for [idx (range (count (:unnormalized-chances @data)))]
         (let [chance-cur (r/cursor data [:unnormalized-chances idx])]
           ^{:key (str "chances-" idx)} [Chance chance-cur idx]
         ))
       ]]
     [:button.bg-transparent.bg-sky-500.hover:bg-sky-400.text-white.rounded.border.border-blue-200.px-1.mx-1.mt-1
      {:on-click #(add-probability! data)} "Add More"]]])

(defn Insight [label value]
  [:tr {:key (str label "-insight-" value)}
   [:td.w-full.p-2.lg:table-cell {:class "w-1/2"} label]
   [:td.w-full.p-2.lg:table-cell {:class "w-1/2"} value]
   ])

(defn insightsListContainer [data]
  (let [chances (:chances @data)
        unnormalized-chances (:unnormalized-chances @data)
        expected-value (/ (reduce #(+ %1 (* (:payout %2) (:prob %2))) 0 chances) (* 100 (reduce #(+ %1 (:prob %2)) 0 chances)))
        optimal-growth-rate (kelly/optimal-growth-rate chances)]
    [:div.relative.px-4.py-4.flex-1.mx-1.my-1.bg-gray-100.border-2.border-gray-300.border-solid.rounded
     [:h3.text-lg.-mb-4.mr-4 "Insights"]
     [:div.mt-7.block.w-full.overflow-x-auto
      [:table.w-full.whitespace-nowrap.border-none.border-0
       [:thead]
       [:tbody.text-left.border-collapse
        (Insight "Expected Value" expected-value)
        (Insight "Optimal Growth Rate Percentage" (first optimal-growth-rate))
        (Insight "Optimal Growth Rate Value" (second optimal-growth-rate))
        (Insight "Expected To Beat Market?" (cond
                                                            (> 0 (second optimal-growth-rate)) "No"
                                                            (< expected-value 1.10) "No"
                                                            :else "Yes"))
        (if (< 1.0 (reduce + 0 (map #(js/parseFloat (:prob %)) unnormalized-chances)))
          (Insight "WARNING: Probability Sum > 1.0" "Insights and graphs are using normalized probabilities"))
      ]]]]))

(defn growthRateContainer [growth-rates]
  ;; Graph
  [:div.relative.px-4.py-4.flex-1.mx-1.my-1.bg-gray-100.border-2.border-gray-300.border-solid.rounded
   [:h3.text-lg.-mb-6 {:class "text-4x1 font-large"} "Growth Rate"]
   (graphs/growth-rate growth-rates)
   ])

(defn chancesGraphContainer [chances]
  ;; Graph
  [:div.relative.px-4.py-4.flex-1.mx-1.my-1.bg-gray-100.border-2.border-gray-300.border-solid.rounded
   [:h3.text-lg.-mb-6 {:class "text-4x1 font-large"} "Payout Probabilities"]
   (graphs/chances (sort-by :payout chances))])

(defn custom-chances [data]
  [:div.sm:px-7.w-full
   [:div.bg-white.py-2.px-4.md:px-8.xl:px-10
    (if (not-empty (:name @data)) [:h1.text-2xl (:name @data)])
    [:div (chancesListContainer data)]
    [:div.flex.flex-wrap.flex-1.shrink-0.justify-center.align-center
     [:div.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (chancesGraphContainer (:chances @data))]
     [:div.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (growthRateContainer (kelly/find-growth-rates (:chances @data)))]]
    (if (< 0 (count (:chances @data))) [:div (insightsListContainer data)])
    ]])

(defn page [data]
  (fn []
    (let [target (:target @data)]
      (case target
        (custom-chances data)))))

(defn mainPage [data]
  [:div.min-h-screen.bg-gray-100
   [navbar]
   [page data]
   ])

(comment [] "Collection of helpful REPL snippets"
  (def chances (:chances @app-db))
)