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

; https://stackoverflow.com/questions/16126871/checking-for-nan-in-clojure
(defn NaN? [x] (false? (== x x)))

(def standard-and-poors-odds "S&P 500 index from 1972-2021 (1972 is first year when USD was not tied to gold standard)"
  (->>
    [{:year "2021", :payout-original 128.71, :payout 129} {:year "2020", :payout-original 118.4, :payout 118} {:year "2019", :payout-original 131.49, :payout 131} {:year "2018", :payout-original 95.62, :payout 96} {:year "2017", :payout-original 121.83, :payout 122} {:year "2016", :payout-original 111.96000000000001, :payout 112} {:year "2015", :payout-original 101.38, :payout 101} {:year "2014", :payout-original 113.69, :payout 114} {:year "2013", :payout-original 132.39, :payout 132} {:year "2012", :payout-original 116.0, :payout 116} {:year "2011", :payout-original 102.11, :payout 102} {:year "2010", :payout-original 115.06, :payout 115} {:year "2009", :payout-original 126.46000000000001, :payout 126} {:year "2008", :payout-original 63.0, :payout 63} {:year "2007", :payout-original 105.49, :payout 105} {:year "2006", :payout-original 115.78999999999999, :payout 116} {:year "2005", :payout-original 104.91, :payout 105} {:year "2004", :payout-original 110.88, :payout 111} {:year "2003", :payout-original 128.68, :payout 129} {:year "2002", :payout-original 77.9, :payout 78} {:year "2001", :payout-original 88.11, :payout 88} {:year "2000", :payout-original 90.9, :payout 91} {:year "1999", :payout-original 121.03999999999999, :payout 121} {:year "1998", :payout-original 128.57999999999998, :payout 129} {:year "1997", :payout-original 133.36, :payout 133} {:year "1996", :payout-original 122.96000000000001, :payout 123} {:year "1995", :payout-original 137.57999999999998, :payout 138} {:year "1994", :payout-original 101.32, :payout 101} {:year "1993", :payout-original 110.08, :payout 110} {:year "1992", :payout-original 107.62, :payout 108} {:year "1991", :payout-original 130.47, :payout 130} {:year "1990", :payout-original 96.9, :payout 97} {:year "1989", :payout-original 131.69, :payout 132} {:year "1988", :payout-original 116.61, :payout 117} {:year "1987", :payout-original 105.25, :payout 105} {:year "1986", :payout-original 118.67, :payout 119} {:year "1985", :payout-original 131.73, :payout 132} {:year "1984", :payout-original 106.27, :payout 106} {:year "1983", :payout-original 122.56, :payout 123} {:year "1982", :payout-original 121.55, :payout 122} {:year "1981", :payout-original 95.09, :payout 95} {:year "1980", :payout-original 132.42000000000002, :payout 132} {:year "1979", :payout-original 118.44, :payout 118} {:year "1978", :payout-original 106.56, :payout 107} {:year "1977", :payout-original 92.82, :payout 93} {:year "1976", :payout-original 123.84, :payout 124} {:year "1975", :payout-original 137.2, :payout 137} {:year "1974", :payout-original 73.53, :payout 74} {:year "1973", :payout-original 85.34, :payout 85} {:year "1972", :payout-original 118.98, :payout 119} {:year "1971", :payout-original 114.31, :payout 114} {:year "1970", :payout-original 104.01, :payout 104} {:year "1969", :payout-original 91.5, :payout 92} {:year "1968", :payout-original 111.06, :payout 111} {:year "1967", :payout-original 123.98, :payout 124} {:year "1966", :payout-original 89.94, :payout 90} {:year "1965", :payout-original 112.45, :payout 112} {:year "1964", :payout-original 116.48, :payout 116} {:year "1963", :payout-original 122.8, :payout 123} {:year "1962", :payout-original 91.27, :payout 91} {:year "1961", :payout-original 126.89, :payout 127} {:year "1960", :payout-original 100.47, :payout 100} {:year "1959", :payout-original 111.96000000000001, :payout 112} {:year "1958", :payout-original 143.36, :payout 143} {:year "1957", :payout-original 89.22, :payout 89} {:year "1956", :payout-original 106.56, :payout 107} {:year "1955", :payout-original 131.56, :payout 132} {:year "1954", :payout-original 152.62, :payout 153} {:year "1953", :payout-original 99.01, :payout 99} {:year "1952", :payout-original 118.37, :payout 118} {:year "1951", :payout-original 124.02, :payout 124} {:year "1950", :payout-original 131.71, :payout 132} {:year "1949", :payout-original 118.78999999999999, :payout 119} {:year "1948", :payout-original 105.5, :payout 106} {:year "1947", :payout-original 105.71, :payout 106} {:year "1946", :payout-original 91.93, :payout 92} {:year "1945", :payout-original 136.44, :payout 136} {:year "1944", :payout-original 119.75, :payout 120} {:year "1943", :payout-original 125.9, :payout 126} {:year "1942", :payout-original 120.34, :payout 120} {:year "1941", :payout-original 88.41, :payout 88} {:year "1940", :payout-original 90.22, :payout 90} {:year "1939", :payout-original 99.59, :payout 100} {:year "1938", :payout-original 131.12, :payout 131} {:year "1937", :payout-original 64.97, :payout 65} {:year "1936", :payout-original 133.92000000000002, :payout 134} {:year "1935", :payout-original 147.67000000000002, :payout 148} {:year "1934", :payout-original 98.56, :payout 99} {:year "1933", :payout-original 153.99, :payout 154} {:year "1932", :payout-original 91.81, :payout 92} {:year "1931", :payout-original 56.66, :payout 57} {:year "1930", :payout-original 75.1, :payout 75} {:year "1929", :payout-original 91.58, :payout 92} {:year "1928", :payout-original 143.61, :payout 144} {:year "1927", :payout-original 137.49, :payout 137} {:year "1926", :payout-original 111.62, :payout 112}]
    (filter #(< 1971 (js/parseInt (:year %))))
    (map #(assoc % :prob 0.02))))                           ; Gets normalized later on, and this is close enough to 1/49 for me.

(def standard-and-poors-fearful-market-odds "S&P 500 index from 2006-2011 to encompass a shaky environment like what we're experiencing in 2022"
  (->>
    standard-and-poors-odds
    (filter #(< 2005 (js/parseInt (:year %))))
    (filter #(> 2011 (js/parseInt (:year %))))
    (map #(assoc % :prob 0.2))))

(defn str-to-number-chances [chances]
  (map (fn [c] {
                :prob   (if (NaN? (js/parseFloat (:prob c))) 0 (js/parseFloat (:prob c)))
                :payout (if (NaN? (js/parseInt (:payout c))) 100 (js/parseInt (:payout c)))}) chances)
  )

(defn renormalize-chances! [app-db]
  (swap! app-db assoc :chances (kelly-criterion-client.kelly-criterion/normalize-probs (str-to-number-chances (:unnormalized-chances @app-db))))
  )

(defn update-chances! [chances]
  (swap! app-db assoc :unnormalized-chances (mapv identity chances))
  (renormalize-chances! app-db)
  )

(defn render [comp]
  (rdom/render comp (js/document.getElementById "app")))

(defn navbar []
  [:nav.bg-gray-800
   [:div.flex-1.flex.items-center.justify-center {:class "sm:items-stretch sm:justify-start"}
    [:div.flex.space-x-4.content-center
     [:a.text-gray-300.rounded-md.px-3.py-2.no-underline {:href "/"} "Home"]
     [:button.text-gray-300.rounded-md.px-3.py-2 {:on-click #(update-chances! standard-and-poors-odds)} "Load S&P 500"]
     [:button.text-gray-300.rounded-md.px-3.py-2 {:on-click #(update-chances! standard-and-poors-fearful-market-odds)} "Load S&P 500 (2006-2011)"]
     [:a.text-gray-300.rounded-md.px-3.py-2.no-underline {:href "https://www.github.com/dawguy/kelly-criterion-client"} "Github"]]]])

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
        (Insight "Expected To Beat 10% Annually?" (cond
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

(defn aboutKellyCriterionContainer []
  [:div.relative.px-4.py-4.flex-1.mx-1.my-4.bg-gray-100.border-2.border-gray-300.border-solid.rounded
   [:h3.text-lg {:class "text-4x1 font-large"} "About Kelly Criterion"]
   [:p "To learn more about the Kelly Criterion used in the above graphs and insights should check out this fantastic guide: "
    [:a.hyperlink.break-all {:href "https://www.caichinger.com/blog/2018/04/16/kelly_criterion1/"} "https://www.caichinger.com/blog/2018/04/16/kelly_criterion1/"]]
   ])

(defn disclaimerContainer []
  [:div.relative.px-4.py-4.flex-1.mx-1.my-4.bg-gray-100.border-2.border-gray-300.border-solid.rounded
   [:h3.text-lg.font-bold {:class "text-4x1 font-large"} "Disclaimer"]
   [:p "This tool was a for fun project to learn a new programming language. Anything seen on this website does not constitute financial advice. All investors or gamblers exploring games of chance should do their own independent research before making any financial decisions."]
   ])

(defn custom-chances [data]
  [:div.sm:px-7.w-full
   [:div.bg-white.py-2.px-4.md:px-8.xl:px-10
    (if (not-empty (:name @data)) [:h1.text-2xl (:name @data)])
    [:div (chancesListContainer data)]
    [:div.flex.flex-wrap.flex-1.shrink-0.justify-center.align-center
     [:div.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (chancesGraphContainer (:chances @data))]
     [:div.sm:max-w-96.sm:max-h-96 {:class "w-full sm:w-1/2"} (growthRateContainer (kelly/find-growth-rates (:chances @data)))]]
    (if (< 0 (count (:chances @data))) [:div (insightsListContainer data)])
    (aboutKellyCriterionContainer)
    (disclaimerContainer)
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