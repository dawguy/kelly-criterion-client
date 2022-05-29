(ns kelly-criterion-client.browser
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [kelly-criterion-client.views :as views]
            [kelly-criterion-client.router :as router]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defonce app-db (r/atom {
                         ; Temporary start
                         :target :home
                         ; Temporary end
                         }))
(defonce saved-response (r/atom {}))


(defn ^:dev/after-load start []
  (rdom/render (views/mainPage app-db) (js/document.getElementById "app"))
  )

; Seperated because splits are from workouts, not from the request :body
(defn save-data [vals table-name pk]
  ;(prn (str "Saving to app-db " table-name " pk " pk " value " vals))
  (swap! app-db assoc table-name (assoc (table-name @app-db) pk vals))
  )

(defn data-to-pk-list [data list-target-id target-id]
  (assoc data list-target-id (map target-id (list-target-id data)))
  )

(defn save-list
  ([data list-target-id target-id]
   (save-list data list-target-id target-id identity))
  ([data list-target-id target-id transform-func]
   (prn data)
  (doseq [target-data (list-target-id data)]
    (save-data (transform-func target-data) target-id (target-id target-data)))))

(defn retrieve-erg-workout [response]
  (let [erg-workout (:body response)]
    (reset! saved-response erg-workout)
    (save-list erg-workout :splits :ergSplit kelly-criterion-client.splits/add-power)
    (save-data (data-to-pk-list erg-workout :splits :ergSplit) :ergWorkout (:ergWorkout erg-workout))
    (swap! app-db assoc :target :ergWorkout)
    (swap! app-db assoc :targetId (:ergWorkout erg-workout))
  ))

(defn retrieve-water-workout [response]
  (let [vals (:body response)]
    (prn vals)
    (reset! saved-response vals)
    (doseq [water-split (:splits vals)]
      (save-list water-split :waterWorkoutAthleteSplits :waterWorkoutAthleteSplit)
      (save-data (data-to-pk-list water-split :waterWorkoutAthleteSplits :waterWorkoutAthleteSplit) :waterSplit (:waterSplit water-split)))
    (save-data (data-to-pk-list vals :splits :waterSplit) :waterWorkout (:waterWorkout vals))
    (swap! app-db assoc :target :waterWorkout)
    (swap! app-db assoc :targetId (:waterWorkout vals))
    ))

(defn get-request [callback url] (go (callback
                                       (<! (http/get url {
                                                          :headers           {"Access-Control-Request-Method" "GET"}
                                                          :with-credentials? false})))))

(defn send-request [target data]
  (case target
    :ergWorkout (get-request retrieve-erg-workout (str "http://localhost:8080/workouts/erg/" (get data "id")))
    :waterWorkout (get-request retrieve-water-workout (str "http://localhost:8080/workouts/water/" (get data "id")))
    :workoutList (get-request retrieve-workout-list (str "http://localhost:8080/workouts"))
      "default"
    ))

(defn match-url []
  (let [data (router/decode-url (.. js/window -location -href))]
    (swap! app-db assoc :target (:target data))
    (swap! app-db assoc :targetId nil)
    (send-request (:target data) data))
  )

(defonce initial-load (match-url))

(comment []
         (go (retrieve-erg-workout
               (<! (http/get "http://localhost:8080/workouts/erg/1" {
                                                                     :headers           {"Access-Control-Request-Method" "GET"}
                                                                     :with-credentials? false}))))
         (go (retrieve-erg-workout
               (<! (http/get "http://localhost:8080/workouts/erg/7" {
                                                                     :headers           {"Access-Control-Request-Method" "GET"}
                                                                     :with-credentials? false}))))

         (go (retrieve-water-workout
               (<! (http/get "http://localhost:8080/workouts/water/11" {
                                                                     :headers           {"Access-Control-Request-Method" "GET"}
                                                                     :with-credentials? false}))))
         )



(defn init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (start))                                                  ;; TODO. Figure out why this isn't working

;; this is called before any code is reloaded
(defn ^:dev/before-load stop []
  (js/console.log "stop"))

(comment
  "Helpful data sets for the REPL"
  []
  (def sample-response-workout {:waterWorkout 1, :date 1645506000000, :athlete 1, :assignedWorkout nil, :workout 1, :splits [{:ergSplit 2, :seq 0, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 3, :seq 1, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 51, :seq 2, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 52, :seq 3, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 53, :seq 4, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 54, :seq 5, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 55, :seq 6, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 56, :seq 7, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 68, :seq 8, :duration 100, :distance 1000, :heartRate 135, :power 200}], :name ""})
  (def sample-response-splits [{:ergSplit 2, :seq 0, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 3, :seq 1, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 51, :seq 2, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 52, :seq 3, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 53, :seq 4, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 54, :seq 5, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 55, :seq 6, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 56, :seq 7, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 68, :seq 8, :duration 100, :distance 1000, :heartRate 135, :power 200}])
  (def sample-response {:status 200, :success true, :body {:waterWorkout 1, :date 1645506000000, :athlete 1, :assignedWorkout nil, :workout 1, :splits [{:ergSplit 2, :seq 0, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 3, :seq 1, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 51, :seq 2, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 52, :seq 3, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 53, :seq 4, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 54, :seq 5, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 55, :seq 6, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 56, :seq 7, :duration 100, :distance 1000, :heartRate 135, :power 200} {:ergSplit 68, :seq 8, :duration 100, :distance 1000, :heartRate 135, :power 200}], :name ""}, :headers {"content-type" "application/json"}, :trace-redirects ["http://localhost:8080/workouts/erg/1" "http://localhost:8080/workouts/erg/1"], :error-code :no-error, :error-text ""})
  (swap! app-db assoc :targetId 1)
  (def split {:ergSplit 10, :seq 7, :duration 100, :distance 1000, :heartRate nil, :power nil})
  (def k :splits)
  (def k :waterWorkout)
  (def sample-response-water-workout {:waterWorkout 11, :date 1646974800000, :boat 2, :assignedWorkout 2, :workout 11, :splits [{:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 111, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 80, :seq 0, :distance 1000} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 112, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 81, :seq 1, :distance 500} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 113, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 82, :seq 2, :distance 1000} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 114, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 83, :seq 3, :distance 250} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 115, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 84, :seq 4, :distance 250} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 116, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 85, :seq 6, :distance 1000} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 117, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 86, :seq 7, :distance 1000} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 118, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 87, :seq 8, :distance 1000} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 119, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 88, :seq 9, :distance 1000} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 120, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 89, :seq 10, :distance 1000} {:waterWorkoutAthleteSplits [{:waterWorkoutAthleteSplit 121, :athlete 1, :heartRate nil, :power nil}], :withFlow nil, :duration 100, :heartRate 0, :power 0, :flowRate nil, :waterSplit 90, :seq 11, :distance 1000}], :name ""})
  )
