<template>
  <li
    :class="{ selected: project === selected }"
    @click="handleClick"
  >
    <span>{{ project.title }}</span>
    <p>{{ project.summary }}</p>
  </li>
</template>

<script>


export default {

  props: {
    project: Object,
    selected: Object,
    onSelect: Function
  },
  methods: {
    handleClick() {
      this.onSelect(this.project);
    }
  }

};

</script>

<style scoped lang="postcss">

.selected {
  background-color: var(--darkgreen);
}


</style>
