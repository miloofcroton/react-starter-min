<template>
  <div class="add-workout">
    <form>
      <FormControl>
        <select class="pulldown new-template" v-model="selectedProgram">
          <option value=''>No Template</option>
          <option v-for="program in programSet"
                :program="program"
                :key="program.id + program.name"
                :name="program.name"
                :value="program.id"
                >
                {{ program.name }}
          </option>
        </select>
      </FormControl>
      <button type="submit" class="begin-button" @click.prevent="onWorkoutAdd">Begin Workout</button>
    </form>
  </div>
</template>

<script>
import FormControl from './FormControl.vue';
export default {
  props: {
    handleAddWorkout: Function,
    programSet: Array,
  },
  components: {
    FormControl
  },
  data() {
    return {
      selectedProgram: ''
    };
  },
  methods: {
    onWorkoutAdd() {
      const selectedId = this.selectedProgram 
        ? this.programFinder(this.selectedProgram).id 
        : null;
      console.log('Id is ', selectedId);
      console.log('going to api', JSON.stringify({ id: selectedId }));
      this.handleAddWorkout({ id: selectedId });
    },
    programFinder(programId) {
      return this.programSet.find((item) => { return item.id = programId; });
    }
  }

};
</script>

<style scoped>

select, button {
  cursor: pointer;
  background-color: white;
  font-weight: bold;
  border: 1px 1px var(--gymred);
  margin: 5px;
  font-size: 20px;
  border-radius: 5px 5px;
}

.form-control {
  text-align: center;
  margin: 0 auto;
  height: 60px;
}

.add-workout {
  border: 1px solid black;
  border-radius: 1em;
  border: 2px solid #C97560;
  padding: 1em;
  background-color: rgba(202, 160, 150, 0.7);
  width: 300px;
  margin: 0 auto;
}

.begin-button {
  background-color: black;
  color: white;  
  margin-top: .5em;
  height: 40%;
  width: 40%
}

.new-template {
  width: 40%;
}



</style>
