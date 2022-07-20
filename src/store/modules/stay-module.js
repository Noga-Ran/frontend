import { stayService } from '../../services/stay-service.js'

export default {
    state: {
      stays: [],
    },
    getters: {
      stays({ stays }) {
        return stays
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
  