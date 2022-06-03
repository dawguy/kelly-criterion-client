(ns kelly-criterion-client.browser
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [kelly-criterion-client.views :as views]))

(defonce app-db (r/atom {
                         ; Temporary start
                         :target :home
                         :chances [{:prob 0.15 :payout 300} {:prob 0.35 :payout 200} {:prob 0.5 :payout 0}]
                         :unnormalized-chances [{:prob 0.15 :payout 300} {:prob 0.35 :payout 200} {:prob 0.5 :payout 0}]
                         ; Temporary end
                         }))

(defn ^:dev/after-load start []
  (rdom/render (views/mainPage app-db) (js/document.getElementById "app"))
  )

(defn update-chances [chances]
  (swap! app-db assoc :unnormalized-chances chances)
  (swap! app-db assoc :chances (kelly-criterion-client.kelly-criterion/normalize-probs chances))
)

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

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

(comment
  "Helpful data sets for the REPL"
  []
  (update-chances standard-and-poors-odds)
  (update-chances standard-and-poors-fearful-market-odds)
  (update-chances [{:prob 0.53 :payout 200} {:prob 0.47 :payout 0}])
  (update-chances [{:prob 0.6 :payout 200} {:prob 0.4 :payout 0}])
  (update-chances [{:prob 0.6 :payout 200} {:prob 0.4 :payout 0.25}])
  (update-chances [{:prob 0.15 :payout 300} {:prob 0.35 :payout 200} {:prob 0.5 :payout 0}])
  (update-chances [{:prob 0.3 :payout 300} {:prob 0.7 :payout 200} {:prob 1.0 :payout 0}])
  (update-chances [{:prob 0.1 :payout 1250} {:prob 0.9 :payout 0}])
  (update-chances [{:prob 0.025 :payout 1500} {:prob 0.1 :payout 500} {:prob 0.2 :payout 300} {:prob 0.15 :payout 150} {:prob 0.35 :payout 50} {:prob 0.175 :payout 20}])
  (update-chances [{:prob 0.02 :payout 2000} {:prob 0.03 :payout 1500} {:prob 0.05 :payout 1000} {:prob 0.05 :payout 500} {:prob 0.25 :payout 250} {:prob 0.15 :payout 150} {:prob 0.45 :payout 25}])
  )
