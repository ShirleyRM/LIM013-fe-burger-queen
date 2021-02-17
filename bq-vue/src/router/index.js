import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import HomeButton from '../components/HomeButton.vue';
import Waiter from '../views/Waiter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    HomeButton,
  },
  {
    path: '/waiter',
    name: 'Waiter',
    component: Waiter,
  },
  {
    path: '/boss',
    name: 'Boss',
  },
  {
    path: '/logout',
    name: 'Logout',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
