<template>
  <div id="timer" v-cloak>
    <h1>Rest Timer</h1>
    <TimerSetup v-if="!time" @set-time="setTime"></TimerSetup>
    <div v-else>
      <TimerDisplay :time="prettyTime"></TimerDisplay>
      <div>
          <button v-if="!isRunning" @click="start">Start</button>
          <button v-if="isRunning" @click="stop">Stop</button>
          <button @click="reset">Reset</button>
      </div>
    </div>       
  </div>
</template>

<script>
import TimerSetup from './TimerSetup.vue';
import TimerDisplay from './TimerDisplay.vue';

export default {
  components: {
    TimerSetup,
    TimerDisplay
  },
  data() {
    return {
      isRunning: false,
      minutes: 0,
      seconds: 0,
      time: 0,
      timer: null,
      sound: new Audio('http://s1download-universal-soundbank.com/wav/nudge.wav')
    };
  },
  computed: {
    prettyTime() {
      let time = this.time / 60;
      let minutes = parseInt(time);
      let seconds = Math.round((time - minutes) * 60);
      return minutes + ':' + seconds;
    }
  },
  methods: {
    start() {
      this.isRunning = true;
      if(!this.timer) {
        this.timer = setInterval(() => {
          if(this.time > 0) {
            this.time--;
          } else {
            clearInterval(this.timer);
            this.sound.play();
            this.reset();
          }
        }, 1000);
      }
    },
    stop() {
      this.isRunning = false;
      clearInterval(this.timer);
      this.timer = null;
    },
    reset() {
      this.stop();
      this.time = 0;
      this.seconds = 0;
      this.minutes = 0;
    },
    setTime(payload) {
      this.time = payload.minutes * 60 + payload.seconds;
    }
  }
};
</script>

<style scoped>

  h1 {
    color: black;
    /* text-shadow: 3px 3px 3px black; */
    margin: 0 auto;
  }

  #timer {
		text-align: center;
		padding: 10px;
		margin: 0 auto;
		max-width: 1000px;
  }
  button {
    padding:10px;
    background: var(--gymred);
    color: white;
    border: 1px solid white;
    border-radius: 3px 3px;
    margin: 0px 5px;
    cursor: pointer;
  }
  [v-cloak] {
		opacity:0;
  }


</style>

