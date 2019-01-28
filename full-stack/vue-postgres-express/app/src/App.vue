<template>
  <div id="app">
    <Header 
      :user="user"
      :onSignOut="handleSignOut"
    />

    <RouterView
      :updateCoreData="updateCoreData" 
      :workoutSet="workoutSet"
      :programSet="programSet"
      :movements="movements"
      :muscles="muscles"
      :muscleMovements="muscleMovements"
      :user="user"
      :onUser="handleUser"
      :handleAddLog="handleAddLog"
      :handleAddWorkout="handleAddWorkout"
      :handleRemoveWorkout="handleRemoveWorkout"
      :handleRemoveExercise="handleRemoveExercise"
      :handleUpdateLog="handleUpdateLog"
    />

    <Footer/> 
  </div>
</template>


<script>
import { checkForToken, signOut, 
  getWorkouts, getPrograms, getMovements, getMuscles, 
  addWorkout, removeWorkout,
  addLog, removeLog, updateLog
}       
  from './services/api';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: null,
      workoutSet: [],
      programSet: [],
      movements: [],
      muscles: [],
      muscleMovements: {},
    };
  },
  created() {

    this.user = checkForToken();
    this.updateCoreData();
  },
  computed: {

    selectedMuscleMovements() {
      return null;
    }
  },

  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push('/');
    },

    getMuscleMovements() {

      this.muscles.forEach((item) => {
        this.muscleMovements[item.name] = [];
      });
      this.movements.forEach((item) => {
        this.muscleMovements[item.muscle].push(item);
      });
      console.log('MUSCLE MOVEMENTS', this.muscleMovements);
    },

    updateCoreData() {
      this.loading = true;
      this.error = null;

      getWorkouts()
        .then(response => {
          this.workoutSet = response;
          console.log('WORKOUT SET', this.workoutSet);
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
      getPrograms()
        .then(response => {
          this.programSet = response;
          console.log('PROGRAM SET', this.programSet);
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
      getMovements()
        .then(response => {
          this.movements = response;
          console.log('MOVEMENTS', this.movements);
          this.loading = false;
        }).then(() => {
          getMuscles()
            .then(response => {
              this.muscles = response;
              console.log('MUSCLES', this.muscles);
              this.loading = false;
            })
            .then(() => {
              this.getMuscleMovements();
            });
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    },
    handleAddWorkout(programId) {
      addWorkout(programId)
        .then((response) => {
          console.log('getback', response);
        })
        .then(() => {
          getWorkouts()
            .then(response => {
              this.workoutSet = response;
              console.log('WORKOUT SET', this.workoutSet);
              this.loading = false;
            })
            .catch(err => {
              this.error = err.message;
              this.loading = false;
            });
        });
      console.log('workout added');
    },
    handleRemoveWorkout(workout) {
      if(!confirm(`Are you sure you want to remove the workout on ${workout.date}?`)) {
        return;
      }

      removeWorkout({ id: workout.id })
        .then(() => {
          getWorkouts()
            .then(response => {
              this.workoutSet = response;
              console.log('WORKOUT SET', this.workoutSet);
              this.loading = false;
            })
            .catch(err => {
              this.error = err.message;
              this.loading = false;
            });
        });
    },
    handleRemoveExercise(idArray) {
      if(!confirm('Are you sure you want to remove this exercise?')) {
        return;
      }

      const promiseArray = [];
      idArray.forEach((item) => {
        promiseArray.push(removeLog({ id: item }));
      });

      Promise.all(promiseArray)
        .then(() => {
          getWorkouts()
            .then(response => {
              this.workoutSet = response;
              console.log('WORKOUT SET', this.workoutSet);
              this.loading = false;
            })
            .catch(err => {
              this.error = err.message;
              this.loading = false;
            });
        });
    },

    handleAddLog(log) {
      addLog(log)
        .then(() => {
          getWorkouts()
            .then(response => {
              this.workoutSet = response;
              console.log('WORKOUT SET', this.workoutSet);
              this.loading = false;
            })
            .catch(err => {
              this.error = err.message;
              this.loading = false;
            });
        });
    },
    handleRemoveLog(id) {
      if(!confirm('Are you sure you want to remove this log?')) {
        return;
      }

      console.log('removing log with id', id);

      return removeLog(id);
      // .then(() => {
      //   this.$router.push('/neighborhoods');
      // });
    },
    handleUpdateLog(log) {
      return updateLog(log)
        .then(() => {
          getWorkouts()
            .then(response => {
              this.workoutSet = response;
              console.log('WORKOUT SET', this.workoutSet);
              this.loading = false;
            })
            .catch(err => {
              this.error = err.message;
              this.loading = false;
            });
        });
      // .then(updated => {
      //   this.log = updated;
      //   this.editing = false;
      // });
    },
    // handleUpdateLog(toUpdate) {
    //   return updateLog(toUpdate)
    //     .then(updated => {
    //       this.log = updated;
    //       this.editing = false;
    //     });
    // },
    
    
    // handleMuscleSelect() {
      
    // }

  }
};
</script>

<style>

</style>
