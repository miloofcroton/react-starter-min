<template>
  <main>
    <h2> {{ user.email }}</h2>
    <div>
      <h3>Max Lifts</h3>
      <table>

      </table>
    </div>
  </main>
</template>

<script>

export default {
  props: {
    user: Object,
  },
  data() {
    return { 
    };
  },
  created() {
    console.log(this.user);
  },
  components: { 
  },
};
</script>

<style scoped>

h2, h3 {
  font-weight: 900;
}
h2 {
  font-size: 48px;
}
h3 {
  font-size: 32px;
}
</style>