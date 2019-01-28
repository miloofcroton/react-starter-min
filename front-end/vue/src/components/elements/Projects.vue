
<template>
  <div class="projects">
      <ProjectPanel
        :projects="projects"
        :selected="selectedProject"
        :onSelect="handleSelect"
      />
      <ProjectView
        :project="selectedProject"
      /> 
  </div>
</template>

<script>

import ProjectPanel from './ProjectPanel.vue';
import ProjectView from './ProjectView.vue';

import projects from '../../content/projects.js';

export default {
  components: {
    ProjectPanel, ProjectView
  },
  data() {
    return {
      projects,
      selectedProject: null
    };
  },
  methods: {
    handleSelect(project) {
      this.selectedProject = project;
    },
  }
};

</script>

<style scoped lang="postcss">

.projects {
  display: grid;
  grid-template-columns: 25% 75%;
}

</style>
