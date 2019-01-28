<template>
  <form>
    <label for="min">Minutes<br />
      <input type="number" v-model="minutes" name="time_m" id="min" min="0" max="59">
		</label>
		<label for="sec">Seconds<br />
      <input type="number" v-model="seconds" name="time_s" id="sec" max="59" min="0">
    </label>
    <button type="button" @click="sendTime">Set time</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      minutes: 3,
      seconds: 0
    };
  },
  methods: {
    sendTime() {
      this.$emit('set-time', {
        minutes: this.minutes,
        seconds: this.seconds
      });
    }
  }
};
</script>

<style scoped>

  input[type=number] {
		padding: 10px;
		font-size: inherit;
    width: 50px;
    border-radius: 10px;
  }
  label {
		width:20%;
		padding:10px 0;
		display:inline-block;
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

</style>

