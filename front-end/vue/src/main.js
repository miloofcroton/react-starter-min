import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faAtom, faCalculator, faDumbbell, 
  faUserNinja, faMountain, faFire, faCity, faPuzzlePiece, 
  faFootballBall, faAddressBook, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faLaptopCode, faAtom, faCalculator, 
  faDumbbell, faUserNinja, faMountain, faFire, faCity, 
  faPuzzlePiece, faFootballBall, faAddressBook, faEnvelope, 
  faKey, faGithub, faLinkedin, faTwitter);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.component('RouterLink', Vue.component('router-link'));
Vue.component('RouterView', Vue.component('router-view'));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
