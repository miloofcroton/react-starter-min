<template>
  <main>
    <h2 class="center" v-if="!user">
      <router-link class="call-to-action" to="/auth">Get Started</router-link>
    </h2>
    <h2 class="center" v-if="user">
      <router-link class="call-to-action" to="/workouts">Get After It</router-link>
    </h2>

  </main>
</template>

<script>



export default {

  props: {
    user: Object,
  },

  data() {
    return {
      proof: `
        
      `
    };
  }


};
</script>

<style scoped>


@font-face {
    font-family: BOMBARD;
    src: url("../assets/fonts/BOMBARD.ttf") format("opentype");
}


main {
  background: url(../assets/background.jpg);
  background-size: cover;
}

h2 {
  margin-top: 300px;
  font-size: 36px;
  

}

.call-to-action {
  text-decoration: none;
  background: rgba(255, 255, 255, .3);
  color: var(--gymred);
  text-shadow: 2px 2px black;
  font-size: 72px;
  border: 5px solid var(--gymred);
  border-radius: 20px 20px;
  padding: 15px;
  font-family: BOMBARD, "Avenir Next", sans-serif;
  letter-spacing: 5px;
}

.call-to-action:hover {
  background-color: rgba(0, 0, 0, 0.4);
}


p.center {
  text-align: center;
}

p {
  font-size: 18px;
  text-align: left;
  width: 30%;
  padding: 10px;
  margin: 10px auto;
}

img {
  width: 100%;
}

@media screen and (max-width: 600px) {
  
  .call-to-action {
    font-size: 48px;
   
  }
}


@media screen and (max-width: 480px) {
    p {
      width: 50%;
    }
    h2 {
      margin: 25% 10%;
      padding: 0px;
    }
}
@media screen and (max-width: 380px) {
    p {
    width: 75%;
    }
    h2 {
      /* margin: 3em auto; */
      margin: 25% 5%;
    }
    .call-to-action {
      font-size: 32px;
      letter-spacing: 1px;
    }
}

</style>
