import { stayService } from '../../services/stay-service.js'

export default {
  state: {
    stays: [],
  },
  getters: {
    stays({ stays }) {
      return stays
    },
    stayById: (state) => (stayId) => {
      return state.stays.find((stay) => stay._id === stayId)
    },
  },

  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
    },
  },
  actions: {
    loadStays({ commit, state }) {
      stayService.query().then((stays) => {
        commit({ type: 'setStays', stays })
      })
    },
  },
}
