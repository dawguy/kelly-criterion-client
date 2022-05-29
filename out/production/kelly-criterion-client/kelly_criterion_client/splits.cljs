(ns kelly-criterion-client.splits)

(def power 200)
(def s "135.25")

(defn left-pad [qty s]
  (cond (> qty (count (first (split-with #(not= "." %) s))))
        (str "0" (left-pad (dec qty) s))
        :else s
        ))

(defn toTime [s]
  (str (Math/floor (/ s 60)) ":" (left-pad 2 (.toFixed (js/Number (rem s 60)) 1))))

(defn powerToSplit [power]
  (let [s (* 500 (Math/cbrt (/ 2.80 power)))]
               (cond (not= 0 power)
                   (toTime s)
                   :else "0:00.0")))

(defn splitSecondsToPower
  ([s]
  (/ 2.80 (Math/pow (/ s 500) 3)))
  ([duration distance]
  (/ duration (/ distance 500))))

(defn add-power [split]
  (prn (str "add-power :: " split))
  (if (or (nil? (:power split)) (= 0 (:power split)))
    (assoc split :power (splitSecondsToPower (:duration split) (:distance split)))
    split))