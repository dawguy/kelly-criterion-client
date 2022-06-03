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
  [:div.relative.px-4.py-4.flex-1.mx-1.my-1.bg-gray-100.border-2.border-gray-300.border-solid.rounded
   [:h3.text-lg.-mb-4.mr-4 "Probabilities"]
    [:div.mt-7.block.w-full.overflow-x-auto
     [:table.w-full.whitespace-nowrap
      [:thead [:tr
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Probability"]
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Payoff"]]]
      [:tbody
       (map chanceListContainer c)
       ]]]])

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

(defn custom-chances [chances unnormalized-chances]
  [:div.sm:px-7.w-full
   [:div.bg-white.py-2.px-4.md:px-8.xl:px-10
    [:div (chancesContainer unnormalized-chances)]
    [:div.flex.flex-wrap.justify-center.align-center
     [:div.flex-initial.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (chancesGraphContainer chances)]
     [:div.flex-initial.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (growthRateContainer (kelly/find-growth-rates chances))]
     ]
    ]])

(defn page [data]
  (fn []
    (let [target (:target @data)]
      (case target
        (custom-chances (:chances @data) (:unnormalized-chances @data))))))

(defn mainPage [data]
  [:div.min-h-screen.bg-gray-100
   [navbar]
   [page data]
   ])

(comment [] "Collection of helpful REPL snippets"
  (def chances (:chances @app-db))
)