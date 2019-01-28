<template>
  <div class="project-panel">
    <ProjectSearch
      :onFilter="handleFilter"
      :onSort="handleSort"
    />
    <ul class="scroll">    
        <ProjectCard
          v-for="project in sortedProjects"
          :key="project.title"
          :project="project"
          :selected="selected"
          :onSelect="onSelect" 
        />
    </ul>
  </div>
</template>

<script>

import ProjectCard from './ProjectCard';
import ProjectSearch from './ProjectSearch';


export default {

  components: {
    ProjectCard, ProjectSearch
  },
  props: {
    projects: Array,
    selected: Object,
    onSelect: Function
  },
  data() {
    return {
      filter: {
        query: ''
      },
      sort: {
        key: 'date',
        direction: 1,
      }
    };
  },
  methods: {
    handleFilter(filter) {
      this.filter = filter;
    },
    handleSort(sort) {
      this.sort = sort;
    }
  },
  computed: {
    filteredProjects() {
      const { query } = this.filter;
      if(!query) return this.projects;

      return this.projects.filter(project => {
        return (project.tags.some(tag => tag === query));
      });
    },
    sortedProjects() {
      const { key, direction } = this.sort;
      return this.filteredProjects
        .slice()
        .sort((a, b) => {
          if(a[key] > b[key]) return 1 * direction;
          if(a[key] < b[key]) return -1 * direction;
          if(a[key] === b[key]) return 0;
        });
    }
  },

  

};

</script>

<style scoped lang="postcss">

.project-panel {
  display: grid;
  grid-template-rows: 15% auto;
  border: 1px solid black;
  max-height: 1000px;

  form {
    border-bottom: 1px solid black;
    margin-top: 10px;
  }


  ul {
    margin: 0px;
    padding: 0px;
    width: 100%;
    li {
      list-style: none;
      border-bottom: 1px solid black;

      span {
        font-weight: bolder;
      }

      &:hover {
        background-color: var(--lightgreen);
        cursor: pointer;
      }

    }
  }
}

.selected {
  background-color: var(--darkgreen);
}

.scroll {
  overflow: auto;
}


</style>
