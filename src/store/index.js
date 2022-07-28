import { createStore } from 'vuex'
import stayModule from './modules/stay-module.js'
import userModule from './modules/user-module.js'
import tripModule from './modules/trip-module.js'
import orderModule from './modules/order-module.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayModule,
    userModule,
    tripModule,
    orderModule
  },
})

export default store
