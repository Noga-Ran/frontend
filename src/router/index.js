import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import stayDetails from '../views/stay-details.vue'
import wishList from '../views/wish-list.vue'
import explore from '../views/explore.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
    {
      path: '/stay/:id/',
      name: 'stay-details',
      component: stayDetails,
    },
    {
      path: '/wishList',
      name: 'wishList',
      component: wishList,
    },
    {
      path: '/explore/:where',
      name: 'explore',
      component: explore,
    },
  ],
})

export default router
