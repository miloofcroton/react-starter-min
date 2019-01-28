import VueRouter from 'vue-router';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Work from './components/pages/Work.vue';
import Play from './components/pages/Play.vue';
import Thoughts from './components/pages/Thoughts.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/play', component: Play },
    { path: '/thoughts', component: Thoughts },
    { path: '*', redirect: '/' }
  ]
});
