import Vue from 'vue';
import VueRouter from 'vue-router';
import Waiter from '../views/Waiter.vue';
import KitchenBoss from '../views/KitchenBoss.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/Waiter',
    name: 'Waiter',
    component: Waiter,

  },

  {
    path: '/KitchenBoss',
    name: 'KitchenBoss',
    component: KitchenBoss,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
