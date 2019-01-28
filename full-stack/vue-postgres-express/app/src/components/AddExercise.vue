<template>

  <form class="add-exercise">
    <FormControl class="inputs" label="" >

        <FormControl label="Muscles" class="exercise-selector">
          <select 
            v-if="muscleMovements"
            v-model="selectedMuscle"
            class="pulldown"
          >
            <option 
              v-for="muscle in muscles"
              :key="muscle.id"
            >
              {{ muscle.name }}
            </option>
          </select>
        </FormControl>
        
        <FormControl label="Movements" class="exercise-selector">
          <select
            class="pulldown"
            v-model="selectedMovement"
          >
            <option 
              v-for="movement in muscleMovements[this.selectedMuscle]"
              :movement="movement"
              :key="movement.id"
              :name="movement.name"
            >
              {{ movement.name }}
            </option>
          </select>
        </FormControl>

        <FormControl label="Sets" class="exercise-selector">
          <select 
            class="pulldown"
            v-model="sets"
          >
            <option
              v-for="element in [1,2,3,4,5,6,7,8,9,10]"
              :key="element"
            >
              {{ element }}
            </option>
          </select>          
        </FormControl>

        <FormControl label="Reps" class="exercise-selector">
          <select 
            class="pulldown"
            v-model="reps"
          >
            <option
              v-for="element in [1,2,3,4,5,6,7,8,9,10]"
              :key="element"
            >
              {{ element }}
            </option>
          </select>          
        </FormControl>

        <FormControl label="Weight" class="exercise-selector">
          <input id="weight" v-model="weight" required/> lb
        </FormControl>


      </FormControl>
      <button class="add-button" @click.prevent="onExerciseAdd">Add</button>
  </form>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  
  props: {
    movements: Array,
    muscles: Array,
    muscleMovements: Object,
    workout: Object,
    handleAddLog: Function
  },
  components: {
    FormControl
  },
  data() {
    return {
      selectedMuscle: 'abdominals',
      selectedMovement: null,
      sets: null,
      reps: null,
      weight: null
    };
  },


  methods: {

    onExerciseAdd() {
      const log = {
        workout_id: this.workout.id,
        movement_id: this.movements.find(item => item.name === this.selectedMovement).id,
        attempted: this.reps,
        completed: null,
        weight: this.weight
      };
      console.log('adding log...', log, 'for', this.sets, 'number of times');
      for(let i = 0; i < this.sets; i++){
        this.handleAddLog(log);
      }
      
    }


  }

};
</script>

<style>

.add-button {
  width: 75px;
  border-radius: 10%;
  background-color: var(--gymred);
  color: white;
  text-shadow: 2px 2px black;
  font-size: 22px;
  padding: 4px;
  cursor: pointer;
}
.add-button:hover {
  background-color: darkgray;
}

.inputs {
  display: flex;
  justify-content: space-around;
}

.add-exercise {
  border: 2px solid #C97560;
  background-color: #F7EDEA;
  border-radius: .5em;
  padding: 1em;
  width: minmax(90%, 600px);
  margin: 5px auto;
}

.exercise-selector {
  display: inline-block;
  margin:  .2em;
  padding: 0 .2em;
  border-radius: .3em;
  border: 1px solid #C97560;
}
.pulldown {
  border-radius: .2em;
  width: 8em;
  cursor: pointer;
}
.pulldown:hover {
  background-color: darkgray;
}
#weight {
  width: 4em;
}

@media screen and (max-width: 850px) {
  .add-exercise {
    width: 90%
  }
}

</style>
