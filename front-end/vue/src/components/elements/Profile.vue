<template>
  <div class="about">
    <div class="topper">
      <div class="image"></div>
      <div class="contact-info">
        <a href="https://github.com/miloofcroton">
          <font-awesome-icon :icon="['fab', 'github']" />
          miloofcroton
        </a>
        <a href="https://www.linkedin.com/in/jacktoumey/">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
          JackToumey
        </a>
        <a href="https://twitter.com/JackToumey">
          <font-awesome-icon :icon="['fab', 'twitter']" />    
          JackToumey
        </a>
      </div>
    </div>

    <div class="bio">
      <p>
        I strive to work in no-ego, productive environments on projects that push the needle. I am capable in a number of technologies, thanks to a curious mind, and have a solid foundation in math and science. Outside of technical expertise, I have a background in working on teams in high stress situations and communication in the public sector.
      </p>

      
      <IconMaker
        v-for="tech in this.listedTech"
        :key="tech"
        :tag="tech"
        class="tech"
      />

      <p>
        A science and technology enthusiast, math inquisitor, competitive powerlifter, &amp; BJJ white belt, who loves camping and barbecuing, travels at random, does puzzles competitively, and follows football ardently.
      </p>

      <font-awesome-icon 
        v-for="activity in this.listedActivities"
        :key="activity"
        :icon="activity"
      />

    </div>
  </div>
</template>

<script>


import IconMaker from '../lib/IconMaker';

export default {
  components: {
    IconMaker
  },
  data() {
    return {
      listedTech: [
        'aws', 'google', 'react', 'vue', 'javascript', 'python', 
        'ruby', 'postgressql', 'mongodb'
      ],
      listedActivities: [
        'laptop-code', 'atom', 'calculator', 'dumbbell', 'user-ninja', 
        'mountain', 'fire', 'city', 'puzzle-piece', 'football-ball'
      ]

    };
  }

};

</script>

<style scoped lang="postcss">

$max-width: 230px;
$margin-bottom: 40px;



.about {
  background-color: var(--black);
  color: var(--white);
  max-height: 1000px;

  .topper {

    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    
    .image {
      width: 180px;
      max-width: $max-width;
      height: 180px;
      background-size: cover;
      background-image: url(../../assets/work/me-v1.png);
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 50%;
      overflow: hidden;
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%); /* For Webkit browsers */
      filter: gray; /* For IE 6 - 9 */
      transition: all .6s ease;
      -webkit-transition: all .6s ease; /* Fade to color for Chrome and Safari */
      margin-bottom: $margin-bottom;

      &:hover {
        filter: grayscale(0%);
        -webkit-filter: grayscale(0%);
      }
    }

    .contact-info {

      margin-left: 10px;

      a {
        text-align: left;
        color: var(--darkgreen);
        text-decoration: none;
        display: block;
      }
    }
  }

  .bio {
    margin: 20px;
    line-height: 2rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;

    .tech {
      width: 36px;
      height: 36px;
      margin: 5px;
      display: inline-block;
    }

    svg {
      margin: 5px;
      font-size: 26px;
      color: var(--darkgreen);
    }
  }
}

</style>
