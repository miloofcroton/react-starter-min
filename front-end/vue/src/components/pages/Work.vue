<template>
  <main>
    <Projects/>
    <Profile/>
  </main>
</template>

<script>

import Profile from '../elements/Profile.vue';
import Projects from '../elements/Projects.vue';

export default {
  components: {
    Profile, Projects
  }
};

</script>

<style scoped lang="postcss">

main {
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  max-height: 1000px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
}



</style>
