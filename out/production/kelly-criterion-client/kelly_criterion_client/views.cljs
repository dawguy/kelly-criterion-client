(ns kelly-criterion-client.views
  (:require [reagent.dom :as rdom]
            [d3 :as d3]
            [kelly-criterion-client.graphs :as graphs]
            [kelly-criterion-client.splits :as splits]))

(defn render [comp]
  (rdom/render comp (js/document.getElementById "app")))

(defn navbar []
  [:nav.bg-gray-800
   [:div.flex-1.flex.items-center.justify-center {:class "sm:items-stretch sm:justify-start"}
    [:div.flex.space-x-4
     [:a.text-gray-300.rounded-md.px-3.py-2 {:href "/home"} "Home"]
     [:a.text-gray-300.rounded-md.px-3.py-2 {:href "/workouts"} "Workouts"]
     [:a.text-gray-300.rounded-md.px-3.py-2 {:href "/calendar"} "Calendar"]]]])

(defn workoutListContainer [workout]
  [:tr {:key (random-uuid)}
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b.hidden (get-in workout [:boat :name])]
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b.hidden (get-in workout [:athlete :name])]
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:date workout)]
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:power workout)]
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:duration workout)]
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b [:a {:href (str "/workout/" (:id workout))} (graphs/workout (:splits workout))]]
   ])

(defn workoutsContainer [w]
  [:div.sm:px-7.w-full
   [:div.bg-white.py-4.md:py-7.px-4.md:px-8.xl:px-10
    [:div.relative.w-full.px-4.max-w-full.flex-grow.flex-1 [:h3.text-lg "Workouts"]]
    [:div.mt-7.block.w-full.overflow-x-auto
     [:table.w-full.whitespace-nowrap
      [:thead [:tr
               [:th.p-3.font-bold.uppercase.border.lg:table-cell.hidden "Boat"]
               [:th.p-3.font-bold.uppercase.border.lg:table-cell.hidden "Athlete"]
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Date"]
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Power"]
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Duration"]
               [:th.p-3.font-bold.uppercase.border.lg:table-cell "Splits"]]]
      [:tbody
       (map workoutListContainer w)
       ]]]]])

(defn split-over-distance [] true)

(defn splitListContainer [split]
  [:tr {:key (random-uuid)}
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:seq split)]
   (cond (split-over-distance)
         [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (splits/powerToSplit (:power split))]
         :else [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:distance split)])
   [:td.w-full.p-3.text-center.border.lg:table-cell.border-b (:duration split)]])

(defn workoutContainer [w splits a b]
   (prn w splits)
  [:div.sm:px-7.w-full
   [:h1.text-2xl "Workout"]
   ;; Summation Stats
   [:div.flex.flex-col.justify-left
    [:div.flex.flex-row
     [:div.flex.justify-left.text-lg {:class "w-1/3"} (:name b)]
     [:div.flex.justify-left.text-lg {:class "w-1/3"} (.toDateString (js/Date. (:date w)))]]
    [:div.flex.flex-row
     [:div.flex.justify-left.text-lg {:class "w-1/3"} (:name a)]
     [:div.flex.justify-left.text-lg {:class "w-1/3"}
      "Average power: " (.toFixed (/ (apply + (map :power splits)) (count splits)) 2)
      ]]
    [:div.flex.flex-row
     [:div.flex.justify-left.text-lg {:class "w-1/3"} "Intervals: " (count splits)]
     [:div.flex.justify-left.text-lg {:class "w-1/3"} "Duration: " (splits/toTime (apply + (map :duration splits)))]]]
   ;; Graph
   [:div.max-w-md. (graphs/workout splits)]
   ;; Table
   [:div.bg-white.py-4.md:py-7.px-4.md:px-8.xl:px-10
    [:div.mt-7.block.w-full.overflow-x-auto
     [:table.w-full.whitespace-nowrap
      [:thead [:tr
               [:th.p-1.font-bold.uppercase.border.table-cell "Sequence"]
               ;; TODO This should use distance for water and split for erg
               (cond (split-over-distance)
                     [:th.p-3.font-bold.uppercase.border.table-cell "Split"]
                     :else [:th.p-3.font-bold.uppercase.border.table-cell "Distance"])
               [:th.p-3.font-bold.uppercase.border.table-cell "Duration"]]]
      [:tbody
       (map splitListContainer splits)
       ]]]]
   ])

(defn home []
  [:div "Welcome home!"])


(defn page [data]
  (fn []
    (prn @data)
    (let [target-id (:targetId @data)
          target (:target @data)
          target-data (get-in @data [(:target @data) (:targetId @data)])]
      (case (:target @data)
        :ergWorkout (workoutContainer
                      target-data
                      (map #(get-in @data [:ergSplit %]) (:splits target-data))
                      (get-in @data [:athlete (:athlete (get-in @data [target target-id]))])
                      (get-in @data [:boat (:boat (get-in @data [target target-id]))]))
        :waterWorkout (workoutContainer
                      target-data
                      (map #(get-in @data [:waterSplit %]) (:splits target-data))
                      (get-in @data [:athlete (:athlete (get-in @data [target target-id]))])
                      (get-in @data [:boat (:boat (get-in @data [target target-id]))]))
        (home)))))

(defn mainPage [data]
  [:div.min-h-screen.bg-gray-100
   [navbar]
   [page data]
   ])

(comment [] "Collection of helpful REPL snippets"
         (def power-profile-sample-data [{:duration 1 :power 500} {:duration 2 :power 444} {:duration 3 :power 400} {:duration 4 :power 350} {:duration 5 :power 340} {:duration 6 :power 330} {:duration 7 :power 320} {:duration 8 :power 310} {:duration 9 :power 300} {:duration 10 :power 300} {:duration 11 :power 290} {:duration 12 :power 290} {:duration 13 :power 290} {:duration 14 :power 285} {:duration 15 :power 285} {:duration 16 :power 285} {:duration 17 :power 280} {:duration 18 :power 280}])
         (def splits-sample-data [{:duration 90 :power 250 :seq 0} {:duration 30 :power 0 :seq 1} {:duration 90 :power 250 :seq 2} {:duration 30 :power 0 :seq 3} {:duration 90 :power 250 :seq 4} {:duration 30 :power 0 :seq 5} {:duration 90 :power 250 :seq 6} {:duration 30 :power 0 :seq 7} {:duration 90 :power 250 :seq 8} {:duration 240 :power 0 :seq 9} {:duration 90 :power 250 :seq 10} {:duration 30 :power 0 :seq 11} {:duration 90 :power 250 :seq 12} {:duration 30 :power 0 :seq 13} {:duration 90 :power 250 :seq 14} {:duration 30 :power 0 :seq 15} {:duration 90 :power 250 :seq 16} {:duration 30 :power 0 :seq 17} {:duration 90 :power 250 :seq 18}])
         (def splits-sample-data-2 [{:duration 600 :power 200 :seq 0} {:duration 600 :power 225 :seq 1} {:duration 600 :power 200 :seq 2} {:duration 600 :power 190 :seq 3} {:duration 600 :power 225 :seq 4} {:duration 600 :power 200 :seq 5}])
         (def sample-workouts [{:id 1 :duration 40 :power 200 :athlete {:id 1 :name "David Wright"} :boat {:id 0 :name "Erg"} :date "2022-10-05" :splits splits-sample-data} {:id 2 :duration 500 :power 220 :athlete {:id 1 :name "David Wright"} :boat {:id 0 :name "Erg"} :date "2022-10-05" :splits splits-sample-data-2} {:id 3 :duration 240 :power 200 :athlete {:id 1 :name "David Wright"} :boat {:id 1 :name "Beaver"} :date "2022-10-05" :splits power-profile-sample-data}])
         (def sample-workout-1 {:id 1 :duration 40 :power 200 :athlete {:id 1 :name "David Wright"} :boat {:id 0 :name "Erg"} :date "2022-10-05" :splits splits-sample-data})
         (def sample-workout-2 {:id 2 :duration 500 :power 220 :athlete {:id 1 :name "David Wright"} :boat {:id 0 :name "Erg"} :date "2022-10-05" :splits splits-sample-data-2})
         (def target-data {:ergWorkout 7,
                                          :date 1645678800000,
                                          :athlete 1,
                                          :assignedWorkout 2,
                                          :workout 7,
                                          :splits [{:ergSplit 4, :seq 0, :duration 100, :distance 1000, :heartRate nil, :power nil}
                                                   {:ergSplit 5, :seq 1, :duration 100, :distance 500, :heartRate nil, :power nil}
                                                   {:ergSplit 6, :seq 2, :duration 100, :distance 1000, :heartRate nil, :power nil}
                                                   {:ergSplit 7, :seq 3, :duration 100, :distance 250, :heartRate nil, :power nil}
                                                   {:ergSplit 8, :seq 4, :duration 100, :distance 250, :heartRate nil, :power nil}
                                                   {:ergSplit 9, :seq 6, :duration 100, :distance 1000, :heartRate nil, :power nil}
                                                   {:ergSplit 10, :seq 7, :duration 100, :distance 1000, :heartRate nil, :power nil}
                                                   {:ergSplit 11, :seq 8, :duration 100, :distance 1000, :heartRate nil, :power nil}],
                                          :name ""})
         )