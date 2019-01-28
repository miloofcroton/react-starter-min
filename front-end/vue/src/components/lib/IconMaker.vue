<template>
  <div>
    <img
      :src="url"
      :alt="tag"
    >
  </div>
</template>

<script>

export default {

  props: {
    tag: String
  },
  computed: {
    url() {
      //eslint-disable-next-line no-undef
      return require('../../assets/tech/' + this.tag.toLowerCase() + '.png');
    }
  }
};

</script>

<style scoped lang="postcss">

img {
  width: 36px;
  margin: 5px;
}



</style>
