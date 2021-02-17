import Vue from 'vue';
import Firestore from 'vue-firestore';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

Vue.use(Firestore);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
