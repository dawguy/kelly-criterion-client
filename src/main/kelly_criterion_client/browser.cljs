(ns kelly-criterion-client.browser
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [kelly-criterion-client.views :as views]))

(defn ^:dev/after-load start []
  (rdom/render (views/mainPage views/app-db) (js/document.getElementById "app"))
  )

(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(comment
  "Helpful data sets for the REPL"
  []
  (views/update-chances! views/standard-and-poors-odds)
  (views/update-chances! views/standard-and-poors-fearful-market-odds)
  (views/update-chances! [{:prob 0.35 :payout 150} {:prob 0.15 :payout 500} {:prob 0.6 :payout 0}])
  (views/update-chances! [{:prob 0.53 :payout 200} {:prob 0.47 :payout 0}])
  (views/update-chances! [{:prob 0.6 :payout 200} {:prob 0.4 :payout 0}])
  (views/update-chances! [{:prob 0.6 :payout 200} {:prob 0.4 :payout 0.25}])
  (views/update-chances! [{:prob 0.15 :payout 300} {:prob 0.35 :payout 200} {:prob 0.5 :payout 0}])
  (views/update-chances! [{:prob 0.3 :payout 300} {:prob 0.7 :payout 200} {:prob 1.0 :payout 0}])
  (views/update-chances! [{:prob 0.1 :payout 1250} {:prob 0.9 :payout 0}])
  (views/update-chances! [{:prob 0.025 :payout 1500} {:prob 0.1 :payout 500} {:prob 0.2 :payout 300} {:prob 0.15 :payout 150} {:prob 0.35 :payout 50} {:prob 0.175 :payout 20}])
  (views/update-chances! [{:prob 0.02 :payout 2000} {:prob 0.03 :payout 1500} {:prob 0.05 :payout 1000} {:prob 0.05 :payout 500} {:prob 0.25 :payout 250} {:prob 0.15 :payout 150} {:prob 0.45 :payout 25}])
  )
