<template>
    <main>
      <WorkoutDetail
          :workout="this.workout"
          :movements="movements"
          :muscles="muscles"
          :muscleMovements="muscleMovements"
          :exercises="workout.exercises"
          :handleAddLog="handleAddLog"
          :handleUpdateLog="handleUpdateLog"
          :handleRemoveExercise="handleRemoveExercise"
      />        
    </main>
</template>

<script>
import WorkoutDetail from "./WorkoutDetail.vue";
import AddWorkout from "./AddWorkout.vue";

export default {
  props: {
    workoutSet: Array,
    programSet: Array,
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    handleAddLog: Function,
    handleRemoveLog: Function,
    handleUpdateLog: Function,
    handleRemoveExercise: Function,
    updateCoreData: Function
  },
  data() {
    return {
      // workout: this.updateCoreDate.then(this.getWorkout(this.$route.params.id))
      workout: this.getWorkout(this.$route.params.id)
    };
  },
  created() {
    // this.updateCoreData()
    //   .then(() => {
    //     this.workout = this.getWorkout(this.$route.params.id);
    //   });
  },
  components: {
    WorkoutDetail,
    AddWorkout
  },
  methods: {
    getWorkout(id) {
      //make this run after getting workoutset via app routes
      // console.log(this.wrkout)
      // console.log(
      //   this.workoutSet.find(item => {
      //     return item.id === id;
      //   })
      // );
      // return this.workoutSet.find(item => item.id === id);
      return this.workoutSet[id];
    }
  }
};
</script>

<style>
@font-face {
  font-family: BOMBARD;
  src: url("../assets/fonts/BOMBARD.ttf") format("opentype");
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

main {
  background: url(../assets/background.jpg);
  background-size: cover;
}
</style>
