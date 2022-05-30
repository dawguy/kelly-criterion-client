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
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:prob chance)]
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:payout chance)]
   ])

(defn chancesContainer [c]
  [:div.sm:px-7.w-full
   [:div.bg-white.py-4.md:py-7.px-4.md:px-8.xl:px-10
    [:div.relative.w-full.px-4.max-w-full.flex-grow.flex-1 [:h3.text-lg "Probabilities"]]
    [:div.mt-7.block.w-full.overflow-x-auto
     [:table.w-full.whitespace-nowrap
      [:thead [:tr
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Probability"]
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Payoff"]]]
      [:tbody
       (map chanceListContainer c)
       ]]]]])

(defn growthRateContainer [growth-rates]
  ;; Graph
  [:div.max-w-md. (graphs/growth-rate growth-rates)])

(defn chancesGraphContainer [chances]
  (prn (sort-by > :payout chances))
  ;; Graph
  [:div.max-w-md. (graphs/chances (sort-by :payout chances))])

(defn home [chances]
  [:div
   [:div (chancesContainer chances)]
   [:div (chancesGraphContainer chances)]
   [:div (growthRateContainer (kelly/find-growth-rates chances))]
   ])

(defn page [data]
  (fn []
    (let [target (:target @data)]
      (case target
        (home (:chances @data))))))

(defn mainPage [data]
  [:div.min-h-screen.bg-gray-100
   [navbar]
   [page data]
   ])

(comment [] "Collection of helpful REPL snippets"
  (def chances (:chances @app-db))
)