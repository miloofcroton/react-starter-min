<template>
  <div id="app">
    <Header />
    <transition 
      name="fade"
      mode="out-in"
    >
      <RouterView />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/layouts/Header.vue';
import Footer from './components/layouts/Footer.vue';

export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header, Footer
  }
};

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono');

:root {
  --darkgreen: rgb(0,230,118);
  --lightgreen: rgb(180,241,87);
  --black: rgb(33,33,33);
  --grey: rgb(196,196,196);
  --white: rgb(255,255,255);
}

* {
  font-family: 'Roboto Mono', monospace;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

#app {
  /* display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100vw; */
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  text-align: center;
}

body, html {
  min-height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
