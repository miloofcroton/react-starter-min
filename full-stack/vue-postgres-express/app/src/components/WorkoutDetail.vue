<template>
  <section>
    <div class="workout-detail">
      <div class="card-header">
        <p class="date">{{ workoutDate.toLocaleString() }}</p>
      </div>
      <Timer/>
      <!-- <AddExercise 
        :movements="movements"
        :muscles="muscles"
        :workout="workout"
        :muscleMovements="muscleMovements"
        :handleAddLog="handleAddLog"
      /> -->
      <ExerciseCounter
        v-for="(exercise, index) in exercises"
        :key="index"
        :exercise="exercise"
        :workout="workout"
        :workoutIndex="index"
        :handleRemoveExercise="handleRemoveExercise"
        :handleUpdateLog="handleUpdateLog"
        :hideRemove="false"
      /> 
    </div>
    <router-link class="nav-link" to="/workouts">See All Workouts</router-link>
  </section>
</template>

<script>
import AddExercise from './AddExercise.vue';
import ExerciseCounter from './ExerciseCounter.vue';
import Timer from './Timer.vue';

export default {
  props: {
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    exercises: Array,
    workout: Object,
    handleAddLog: Function,
    handleRemoveExercise: Function,
    handleUpdateLog: Function,
  },
  components: {
    AddExercise,
    ExerciseCounter,
    Timer
  },
  computed: {
    workoutDate() {
      return new Date(this.workout.date);
    }
  },
  methods: {
    // onWorkoutRemove() {
    //   this.handleRemoveWorkout(this.workout);
    // }
  }



};
</script>

<style scoped>

.workout-detail {
  border-radius: 1em;
  border: 2px solid #C97560;
  padding: 1em;
  background-color: rgba(202, 160, 150, 0.7);
  width: 500px;
  margin: 50px auto;
  list-style: none;
}

.card-header {
  display: flex;
  justify-content: space-between;
}
.remove-workout {
  background-color: black;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.nav-link {
  display: block;
  width: 30%;
  margin: 40px auto;
  background-color: black;
  color: var(--gymred);
  text-decoration: none;
  height: 25px;
  padding: 10px;
  margin-top: 40px;
  border-radius: 5px;
  border: 2px solid var(--gymred);
}

.nav-link:hover {
  cursor: pointer;
  background-color: darkgray;
}

@media screen and (max-width: 550px) {
  .workout-detail {
    width: 90%
  }
}

</style>
