import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Philosophy from './components/Philosophy.vue';
import Team from './components/Team.vue';
import Auth from './components/Auth.vue';
import UserProfile from './components/UserProfile.vue';
import Logout from './components/Logout.vue';
import WorkoutList from './components/WorkoutList.vue';
import WorkoutPage from './components/WorkoutPage.vue';


export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/philosophy', component: Philosophy },
    { path: '/team', component: Team },
    { path: '/workouts', component: WorkoutList },
    { path: '/workout/:id', component: WorkoutPage },
    { path: '/auth', component: Auth },
    { path: '/profile', component: UserProfile },
    { path: '/logout', component: Logout },
    { path: '*', redirect: '/' }
  ]
});