<template>
  <main>
    <h2 class="greeting" ref="greeting" >Hello</h2>

    <p>
      This site is designed to be a single website that can house pretty much everything I want to publically publish on the internet
    </p>
    <p>
      The <strong>Work</strong> section is for my professional connections. I list the projects that I've worked on (searchable by keyword) and give a brief overview of myself.
    </p>
    <p>
      The <strong>Play</strong> section is for me to upload cool pics from my travels, cooking failures, and other odds and ends. Basically, my own personal Instagram.
    </p>
    <p>
      The <strong>Thoughts</strong> section is for me to publish my ideas on a wide range of things, technical mostly but perhaps some non-technical things too. It shows a most recent section for my posts on load, but you can also drill into a hierarchy that I created for these posts because I love hierarchies.
    </p>

  </main>
</template>

<script>
import scifi from 'scifi';

const GREETINGS = [
  'Hello',
  'Hola',
  'Bonjour',
  'Ciao',
  'Namaste',
  'Salaam',
  'Guten tag',
  'Bună ziua'
];

export default {
  data() {
    return {
      currentGreetingIndex: null
    };
  },
  mounted() {
    this.loop = setInterval(() => {
      scifi(this.$refs.greeting, {
        content: this.getGreeting()
      });
    }, 3000);
  },
  methods: {
    getRandomIndex(currentIndex) {
      const nextIndex = Math.floor(Math.random() * GREETINGS.length);
      if(currentIndex === null) {
        return nextIndex;
      }
      return currentIndex === nextIndex ? this.getRandomIndex(currentIndex) : nextIndex;
    },
    getGreeting() {
      this.currentGreetingIndex = this.getRandomIndex(this.currentGreetingIndex);
      const greeting = GREETINGS[this.currentGreetingIndex];
      return greeting;
    }
  },
  beforeDestroy() {
    if(this.loop) {
      clearInterval(this.loop);
    }
  }
};

</script>

<style scoped lang="postcss">

h2 {
  margin: 50px auto;
  font-size: 60px;
}

p {
  width: 60%;
  text-align: left;
  margin: 25px auto;
}

</style>
