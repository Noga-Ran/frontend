import { stayService } from '../../services/stay-service.js'

export default {
  state: {
    stays: [],
  },
  getters: {
    stays({ stays }) {
      return stays
    },
    stayById: stayId => state => state.stays.find(stay => stay._id === stayId)
  },
  // this.$store.getters.stayById(stayId)
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
