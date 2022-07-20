import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home-page.cmp.vue'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
  ]
})

export default router
