<template>
  <main>
    <h2>
      more coming soon!
    </h2>
    <MarkdownMaker>{{ (this.src) }}</MarkdownMaker>

  </main>
</template>

<script>

import MarkdownMaker from '../lib/MarkdownMaker.vue';

export default {

  components: {
    MarkdownMaker
  },
  data() {
    return {
      src: `
            ### What should I talk about?\n
            - everything\n
            - nothing\n
            - to be determined
          `
    };
  }

};

</script>

<style scoped lang="postcss">

</style>
  