import { createStore } from 'vuex'
import stayStore from './modules/stay-module.js'
import userModule from './modules/user-module.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayStore,
    userModule
  },
})

export default store
