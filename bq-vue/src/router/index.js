import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Waiter from '../views/Waiter.vue';
import BossKitchen from '../views/BossKitchen.vue';

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    name: 'BossKitchen',
    component: BossKitchen,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
