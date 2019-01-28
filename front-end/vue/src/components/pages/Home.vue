<template>
  <main>
    <div id="work" class="tile">
      <RouterLink to="/work">
        <img src="../../assets/categories/code.jpg" alt="code">
        <span class="summary">Work</span>
      </RouterLink>
    </div>
    <div id="play" class="tile">
      <RouterLink to="/play">
        <img src="../../assets/categories/nature.jpg" alt="nature">
        <span class="summary">Play</span>
      </RouterLink>
    </div>
    <div id="thoughts" class="tile">
      <RouterLink to="/thoughts">
        <img src="../../assets/categories/thinker.jpg" alt="thinker">
        <span class="summary">Thoughts</span>
      </RouterLink>
    </div>
  </main>
</template>

<script>

export default {

};

</script>

<style scoped lang="postcss">

main {
  /* 
  display: grid;
  margin: 18px;
  grid-template-columns: 1fr 1fr 1fr; 
  */

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-grow: 1;
  padding: 50px;
  height: 100%;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 0;
    
    span {
      display: inline-block;
    }
  }

  .tile {
    margin: 10px;
    border: 1px solid black;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    height: 100%;

    a {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      font-size: 50px;

      img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left;
        z-index: -1;
      }

      span {
        display: none;
        color: black;
      }

      &:hover img {
        opacity: 0.5;
      }

      &:hover span {
        display: inline-block;
      }

    }
    
  }

}

</style>
