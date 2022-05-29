(ns kelly-criterion-client.router
  (:require [clojure.string :as str])
  )

(def routes {
             "home"                :home
             "workouts/erg/{id}"   :ergWorkout
             "workouts/water/{id}" :waterWorkout
             "workouts"            :workoutList
             "splits/erg/{id}"     :ergSplit
             "splits/water/{id}"   :waterSplit
             "splits/water/{id}/test/{abc}/otherTest/{efg}"   :multipleVars
             ""                    :home
             })

(defn matches [url-pieces]
  (prn url-pieces)
  (fn [route]
    (prn route)
    (loop [[first-piece & remaining-pieces] url-pieces
           [first-remaining & remaining-route-pieces] (str/split (first route) #"/")]
      (if (and (nil? first-piece) (= 0 (count remaining-route-pieces)))
        [(vec url-pieces) route]
        (if (or (= (first first-remaining) "{") (= first-piece first-remaining))
          (recur remaining-pieces remaining-route-pieces)
          nil))
      )))

(defn first-match [url-pieces]
  (some (matches url-pieces) (vec routes))
)

(defn matched-url-to-map [route-pieces url-pieces]
  (reduce #(assoc %1 (apply str (drop-last (rest (first %2)))) (second %2)) {}
          (filter #(= (ffirst %) "{") (map conj (repeat []) route-pieces url-pieces))))

(defn decode-url [url]
  (let [pieces (first-match (rest (str/split (if (= (str/join (take 7 url)) "http://") (str/join (drop 7 url)) url) #"/")))]
    (let [url-pieces (first pieces)
          route-pieces (str/split (first (second pieces)) #"/")
          target (second (second pieces))]
      (assoc (matched-url-to-map route-pieces url-pieces)
        :target target
        :url url))))

(comment
  "A helpful set of REPL snippets"
  []
  (def url "http://localhost:8020/workouts/erg/2")
  (def url "localhost:8020/workouts/erg/2")
  (def url-pieces ["workouts" "erg" "2"])
  (def route-pieces ["workouts" "erg" "{id}"])
  (def url "localhost:8020/splits/water/2/test/ABCDEF/otherTest/9001")
  (def first-remaining "workouts")
  (def first-remaining "splits")
  (def first-remaining "{id}")
  (def first-piece "workouts")
  (def first-piece "splits")
  (def url "localhost:8020/workouts/erg/2")
)