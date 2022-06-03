(ns kelly-criterion-client.views
  (:require [reagent.dom :as rdom]
            [d3 :as d3]
            [kelly-criterion-client.graphs :as graphs]
            [kelly-criterion-client.kelly-criterion :as kelly]))

(defn render [comp]
  (rdom/render comp (js/document.getElementById "app")))

(defn navbar []
  [:nav.bg-gray-800
   [:div.flex-1.flex.items-center.justify-center {:class "sm:items-stretch sm:justify-start"}
    [:div.flex.space-x-4
     [:a.text-gray-300.rounded-md.px-3.py-2 {:href "/home"} "Home"]
     [:a.text-gray-300.rounded-md.px-3.py-2 {:href "/examples"} "Examples"]]]])

(defn chanceListContainer [chance]
  [:tr {:key (random-uuid)}
   [:td.p-1.text-center.border.lg:table-cell.border-b {:class "w-1/3"} (:prob chance)]
   [:td.p-1.text-center.border.lg:table-cell.border-b {:class "w-1/3"} (:payout chance)]
   [:td.p-1.text-center.border.lg:table-cell.border-b {:class "w-1/3"} ] ; TODO: Add buttons here for editing
   ])

(defn chancesContainer [c]
  [:div.relative.px-4.py-4.flex-1.mx-1.my-1.bg-gray-100.border-2.border-gray-300.border-solid.rounded
   [:h3.text-lg.-mb-4.mr-4 "Probabilities"]
    [:div.mt-7.block.w-full.overflow-x-auto
     [:table.w-full.whitespace-nowrap
      [:thead [:tr
               [:th.p-3.font-bold.border.uppercase.lg:table-cell "Probability"]
               [:th.p-3.font-bold.border.uppercase.lg:table-cell "Payoff"]
               [:th.p-3.font-bold.border.uppercase.lg:table-cell "Actions"]]]
      [:tbody
       (map chanceListContainer c)
       ]]]])

(defn insightsListContainer [label value]
  [:tr {:key (random-uuid)}
   [:td.w-full.p-2.lg:table-cell {:class "w-1/2"} label]
   [:td.w-full.p-2.lg:table-cell {:class "w-1/2"} value]
   ])

(defn insightsContainer [chances unnormalized-chances]
  (let [expected-value (/ (reduce #(+ %1 (* (:payout %2) (:prob %2))) 0 chances) (* 100 (reduce #(+ %1 (:prob %2)) 0 chances)))
        optimal-growth-rate (kelly/optimal-growth-rate chances)]
    [:div.relative.px-4.py-4.flex-1.mx-1.my-1.bg-gray-100.border-2.border-gray-300.border-solid.rounded
     [:h3.text-lg.-mb-4.mr-4 "Insights"]
     [:div.mt-7.block.w-full.overflow-x-auto
      [:table.w-full.whitespace-nowrap.border-none.border-0
       [:thead]
       [:tbody.text-left.border-collapse
        (insightsListContainer "Expected Value" expected-value)
        (insightsListContainer "Optimal Growth Rate Percentage" (first optimal-growth-rate))
        (insightsListContainer "Optimal Growth Rate Value" (second optimal-growth-rate))
        (insightsListContainer "Expected To Beat Market?" (cond
                                                            (> 0 (second optimal-growth-rate)) "No"
                                                            (< expected-value 1.10) "No"
                                                            :else "Yes"))
        (if (< 1.0 (reduce + 0 (map #(:prob %) unnormalized-chances)))
          (insightsListContainer "WARNING: Probability Sum > 1.0" "Insights and graphs are using normalized probabilities"))
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

(defn custom-chances [data chances unnormalized-chances]
  [:div.sm:px-7.w-full
   [:div.bg-white.py-2.px-4.md:px-8.xl:px-10
    (if (not-empty (:name @data)) [:h1.text-2xl (:name @data)])
    [:div (chancesContainer (:unnormalized-chances @data))]
    [:div.flex.flex-wrap.flex-1.shrink-0.justify-center.align-center
     [:div.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (chancesGraphContainer (:chances @data))]
     [:div.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (growthRateContainer (kelly/find-growth-rates (:chances @data)))]]
    [:div (insightsContainer chances unnormalized-chances)]
    ]])

(defn page [data]
  (fn []
    (let [target (:target @data)]
      (case target
        (custom-chances data (:chances @data) (:unnormalized-chances @data))))))

(defn mainPage [data]
  [:div.min-h-screen.bg-gray-100
   [navbar]
   [page data]
   ])

(comment [] "Collection of helpful REPL snippets"
  (def chances (:chances @app-db))
)