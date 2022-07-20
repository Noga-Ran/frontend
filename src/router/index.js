import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
  ],
})

export default router
