import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import hostPage from '../views/host-page.vue'
import stayDetails from '../views/stay-details.vue'
import wishList from '../views/wish-list.vue'
import explore from '../views/explore.vue'
import appChat from '../cmps/app-chat.vue'
import login from '../views/login.vue'
import signUp from '../views/sign-up.vue'


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
      path: '/host',
      name: 'host',
      component: hostPage,
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
    {
    path: '/chat',
    name: 'appChat',
    component: appChat
    },
    {
    path: '/login',
    name: 'login',
    component: login
    },
    {
      path: '/signup',
    name: 'sign-up',
    component: signUp
    },
  ],
})

export default router
