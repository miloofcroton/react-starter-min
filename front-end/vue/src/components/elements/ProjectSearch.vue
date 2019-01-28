<template>
  <form id="search-input">
    <label for="query">search all projects</label>
    <input
      v-model="query"
      @keyup="handleFilterChange"
      name="query" 
      id="query" 
      type="text" 
    >
    <label for="sort">sort by</label>
    <select 
      v-model="sort" 
      v-on:change="handleSortChange"
    >
      <option value="{ 'key':'date', 'direction': -1 }">Date: New to Old</option>
      <option value="{ 'key':'date', 'direction': 1 }">Date: Old to New</option>
      <option value="{ 'key':'title', 'direction': 1 }">Title: A to Z</option>
      <option value="{ 'key':'title', 'direction': -1 }">Title: Z to A</option>
    </select>
  </form>
</template>

<script>


export default {
  props: {
    onSort: Function,
    onFilter: Function
  },
  data() {
    return {
      sort: ['date', 1],
      query: ''
    };
  },
  methods: {
    handleSortChange() {
      const { key, direction } = JSON.parse(this.sort.replace(/'/g, '"'));
      this.onSort({ key, direction });
    },
    handleFilterChange() {
      const filter = {
        query: this.query,
      };
      this.onFilter(filter);
    }
  }

};

</script>

<style scoped lang="postcss">

label {
  display: block;
}

select {
  background-color: var(--white);
}


</style>
