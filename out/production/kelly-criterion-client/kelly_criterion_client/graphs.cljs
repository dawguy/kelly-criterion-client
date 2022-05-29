(ns kelly-criterion-client.graphs
  (:require [d3 :as d3]))

(defn power-profile [splits]
  (let
    [size 300
     durations (map :duration splits)
     values (map :power splits)
     x (->
         (d3/scaleLinear)
         (.domain (into-array [1 (apply max durations)]))
         (.range (into-array [0 size])))
     y (->
         (d3/scaleLinear)
         (.domain (into-array [0 (apply max values)]))
         (.range (into-array [size 0])))
     line (->
            (d3/line)
            (.x (fn [d] (x (:duration d))))
            (.y (fn [d] (y (:power d)))))]
    [:svg
     {:viewBox (str 0 " " 0 " " size " " size)}
     [:path
      {:d (line splits),
       :fill "transparent",
       :stroke (first d3/schemeCategory10)}]]))

(defn appendDurations [splits]
  ((fn helper[arr rem sum]
     (cond (< 1 (count rem))
           (helper (conj arr (assoc (first rem) :pos sum)) (rest rem) (+ sum (:duration (first rem))))
           :else (conj arr (assoc (first rem) :pos sum)))
     ) [] splits 0))

(defn workout [s]
  (let
    [splits (appendDurations s)
     size 400
     durations (map :duration splits)
     powers (map :power splits)
     endPos (map #(+ (:pos %) (:duration %)) splits)
     y (->
         (d3/scaleLinear)
         (.domain (into-array [0 (apply max powers)]))
         (.range (into-array [size 0])))
     x (->
         (d3/scaleLinear)
         (.domain (into-array [0 (apply max endPos)]))    ;; Essentially the goal here is to maximize
         (.range (int-array [0 size])))]
    [:svg
     {:viewBox (str "0 0 " size " " size)}
     (map
       (fn
         [{:keys [duration power seq pos]}]
         [:g
          {:key (random-uuid)
           :transform (str "translate(" (x pos) "," (y power) ")")}
          [:rect
           {
            :key (random-uuid)
            :height (- size (y power)),
            :width (x duration)}]]) splits)]))
