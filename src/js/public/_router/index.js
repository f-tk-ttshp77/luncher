import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@Public/Pages/Home';
import Swipe from '@Public/Pages/Swipe';
import Bookmarks from '@Public/Pages/Bookmarks';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '',
      component: Home,
    },
    {
      name: 'swipe',
      path: '/swipe',
      component: Swipe,
    },
    {
      name: 'bookmarks',
      path: '/bookmarks',
      component: Bookmarks,
    },
  ],
});
