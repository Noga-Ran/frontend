import { stayService } from '../../services/stay-service.js'

export default {
  state: {
    stays: [],
    filterBy: {
      where: '',
      label: '',
      checkIn:'',
      checkOut:'',
      guests:0,
    },
  },
  getters: {
    stays({ stays }) {
      return stays
    },
    stayById: (state) => (stayId) => {
      return state.stays.find((stay) => stay._id === stayId)
    },
    filterBy({ filterBy }) {
      return filterBy
    },
  },

  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadStays({ commit, state }) {
      stayService.query(state.filterBy).then((stays) => {
        // לזכור להחליף
        stays = stays.slice(0,10)
        commit({ type: 'setStays', stays })
      })
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadStays' })
    },
  },
}
