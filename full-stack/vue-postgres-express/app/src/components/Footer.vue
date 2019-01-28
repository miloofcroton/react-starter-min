<template>
  <footer>
    <img alt="logo" src="../assets/icon.png">
    <p>© Team BigCat - 2018</p>
    <nav>
      <RouterLink class="nav" to="/">Home</RouterLink>
      <RouterLink class="nav" to="/workouts">Workouts</RouterLink>
      <RouterLink class="nav" to="/philosophy">Our Philosophy</RouterLink>
      <RouterLink class="nav" to="/team">Meet the Team</RouterLink>
    </nav>
  </footer>
</template>

<script>
export default {

};
</script>

<style scoped>

img {
  width: 50px;
  padding-top: 10px;
}
footer {
  background-color: var(--gymred);
  color: black;
}
a, p {
  font-family: BOMBARD, "Avenir Next", sans-serif;
  font-weight: bolder;
}
p {
  margin: 5px auto;
}
a {
  display: inline-block;
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

@media screen and (max-width: 600px) {
  footer {   
    padding-bottom: 2em;
  } 
}
@media screen and (min-width: 1200px) {
  .nav, nav {
    display: none;
  }

}


@media screen and (max-width: 1200px) {
    nav {
      background-color: #333;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      width: 100%;
      padding-top: .5em;
      padding-bottom: .5em;
    }
    .nav {
      /* border: 0px;
      border-radius: 0; */
      margin: auto;
    }
    footer p {
      display: none;
    }
    footer {
      height: 115px;
    }
}

@media screen and (max-width: 600px) {
    nav {
      background-color: #333;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      width: 100%;
      z-index: 100;
      padding-top: .5em;
      padding-bottom: .5em;
    }
    .nav {
      border: 0px;
      border-radius: 0;
      margin: auto;
    }

}


</style>
