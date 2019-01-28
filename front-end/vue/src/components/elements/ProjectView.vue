<template>
  <div class="project-view">
    <div class="project-content" v-if="project">
      <h2>{{ project.title }}</h2>
      <p class="description">{{ project.description }}</p>
      
      <h3>Links</h3>
      <ul>
        <li>
          <a :href="project.github" target="_blank">Github</a>
        </li>
        <li>
          <a :href="project.live" target="_blank">Live site</a>
        </li>
      </ul>

      <br>

      <div
        v-for="tag in project.tags"
        :key="tag"
        class="tag-box"
      >
        <IconMaker :tag="tag"/>
        <p class="tag">{{ tag }}</p>
      </div>
    </div>
    <div class="call-to-action" v-else>
      <h2>
        Select a project on the left!
      </h2>
    </div>
  </div>
</template>

<script>
import IconMaker from '../lib/IconMaker';


export default {
  components: {
    IconMaker
  },
  props: {
    project: Object
  }

};

</script>

<style scoped lang="postcss">

.project-view {
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  .project-content {

    .description {
      margin: 10px 100px;
      text-align: left;
    }

    .tag-box {
      display: inline-block;
      margin: 10px;

      .tag {
        display: inline;
      }
    }

    ul {
      margin: 0 auto;
      list-style: none;
      padding-inline-start: 0;

      li {
        a {
          text-decoration: none;
          color: var(--darkgreen);
        }
      }
    }

    h3 {
      margin: 10px auto;
    }
  }
}

h2 {
  margin: 40px;
}

</style>
