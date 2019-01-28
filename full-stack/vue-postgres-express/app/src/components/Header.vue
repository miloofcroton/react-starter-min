<template>
  <header class="header">
    <RouterLink to="/" class="branding"></RouterLink>
    <div class="center">
      <h1>Maximum Intensity</h1>
      <nav>
        <RouterLink class="nav main-nav" to="/">Home</RouterLink>
        <RouterLink class="nav main-nav" v-if="user" to="/workouts">Workouts</RouterLink>
        <RouterLink class="nav main-nav" to="/philosophy">Our Philosophy</RouterLink>
        <RouterLink class="nav main-nav" to="/team">Meet the Team</RouterLink>
      </nav>
    </div>
    <div class="user-nav">
      <RouterLink class="nav" v-if="user" to="/profile">User: {{ user.email }}</RouterLink>
      <a class="nav" v-if="user" href="/logout" @click.prevent="onSignOut">Sign Out</a>
      <RouterLink class="nav" v-if="!user" to="/auth">Sign In</RouterLink>
    </div>

  </header>
</template>

<script>

export default {
  props: {
    user: Object,
    onSignOut: Function
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');

@font-face {
    font-family: BOMBARD;
    src: url("../assets/fonts/BOMBARD.ttf") format("opentype");
}

.center {
  display: flex;
  flex-direction: column;
  margin: 0 auto;

}

.branding {
  display: inline-block;
  align-items: center;
  text-decoration: none;
  background: url(../assets/icon.png);
  background-size: contain;
  background-repeat:  no-repeat;
}

.branding a {
  text-decoration: none;

}

/* #current-user {
  width: 140px;
  font-size: 22px;
  padding: 5px;
  margin: 10px;
  border: 1px solid black;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 0.5px black;
  background-color: rgba(65,214,195,0);
  border: 4px solid #ffd90000;
} */

.user-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
  

a, p {
  display: inline-block;
  font-family: BOMBARD, "Avenir Next", sans-serif;
  font-weight: bolder;
}

.nav {
  width: 140px;
  font-size: 22px;
  padding: 5px;
  margin: 10px;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  box-shadow: 0.5px 0.5px 0.5px black;
  background-color: rgba(65,214,195,0);
  border: 4px solid #ffd90000;
}


nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 20px;
}

a.nav:hover {
  background-color: var(--gymred);
  box-shadow: 0.9px 0.9px 0.9px black;
  border: 2px solid #CCDDD3
}

h1 {
  /* font-family: 'Bowlby One SC', cursive; */
  font-family: BOMBARD, "Avenir Next", sans-serif;

  font-size: 64px;
  font-weight: 900;
  display: inline-block;
  margin: auto;
  text-transform: uppercase;
  color: black;
  letter-spacing: 5px;
  text-shadow: 4px black;
}

header {
  display: grid;

 
  grid-template-columns: 25% 50% 25%;

  justify-content: flex-start;
  box-shadow: 3px 2px 2px black;
  background: var(--gymred);
}

@media screen and (max-width: 1200px) {
    header {
    display: flex;
    flex-direction:column;
    width: 100%;
    }
    nav {
      display: none;
    }
    .nav {
      margin: 3px auto;
    }
}

@media screen and (max-width: 600px) {
    header {
    display: flex;
    flex-direction:column;
    width: 100%;
    }
    .main-nav, nav {
      display: none;
    }
}

</style>
