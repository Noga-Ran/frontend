import { createStore } from 'vuex'
import stayStore from './modules/stay-module.js'

const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    stayStore
  },
})

export default store
