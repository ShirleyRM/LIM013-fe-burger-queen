import Vue from 'vue';
import VueRouter from 'vue-router';
import Waiter from '../views/Waiter.vue';
import KitchenBoss from '../views/KitchenBoss.vue';
import Drinks from '../components/Drinks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Drinks,
  },
  {
    path: '/Waiter',
    name: 'Waiter',
    component: Waiter,
  },
  {
    path: '/',
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
