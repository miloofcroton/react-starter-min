<template>
  <header class="header">
    <h1>Jack Toumey</h1>
    <nav>
      <RouterLink class='nav-button' to="/">Home</RouterLink>
      <RouterLink class='nav-button' to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>

export default {

};

</script>

<style scoped lang="postcss">

span {
  display: inline;
}

.nav-button {
  color: black;
  background-color: var(--darkgreen);
  margin: 8px;
  text-decoration: none;
  padding: 6px;
  border: 1px solid var(--black);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 18px;

  &:hover {
    background-color: var(--lightgreen);
  }
}


</style>
