<template>
    <main>
        <h2 class="dashboard-title">Add A New Workout</h2>
        <AddWorkout
        :programSet="programSet"
        :handleAddWorkout="handleAddWorkout"
        />
        <div class="workout-cards">
          <h2 class="dashboard-title">Workout History</h2>
          <ul>
            <WorkoutCard class="workout-card"
              v-for="(workout, index) in workoutSet"
              :key="index"
              :workout="workout"
              :movements="movements"
              :muscles="muscles"
              :muscleMovements="muscleMovements"
              :exercises="workout.exercises"
              :handleAddLog="handleAddLog"
              :handleAddWorkout="handleAddWorkout"
              :handleRemoveWorkout="handleRemoveWorkout"
              :handleRemoveExercise="handleRemoveExercise"
              :handleUpdateLog="handleUpdateLog"
            />        
          </ul>
        </div>
    </main>
</template>

<script>
import WorkoutCard from './WorkoutCard.vue';
import AddWorkout from './AddWorkout.vue';

export default {
  props: {
    workoutSet: Array,
    programSet: Array,
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    handleAddLog: Function,
    handleAddWorkout: Function,
    handleRemoveExercise: Function,
    handleRemoveLog: Function,
    handleUpdateLog: Function,
    handleRemoveWorkout: Function
  },
  created() {

  },
  components: {
    WorkoutCard,
    AddWorkout
  }

};
</script>

<style>

@font-face {
    font-family: BOMBARD;
    src: url("../assets/fonts/BOMBARD.ttf") format("opentype");
}
h2.dashboard-title {
  font-size: 36px;
  color: var(--gymred);
  text-shadow: 2px 2px black;
  background: rgba(0, 0, 0, 0);

}
.call-to-action {
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  color: var(--gymred);
  text-shadow: 2px 2px black;
  font-size: 72px;
  border: 5px solid var(--gymred);
  border-radius: 20px 20px;
  padding: 8px;
}
ul {
  list-style-type: none;
  display: grid;
  padding: 1em;
  grid-gap: 1.5em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;  
}


</style>
