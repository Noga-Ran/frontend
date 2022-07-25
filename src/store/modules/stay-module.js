import { stayService } from '../../services/stay-service.js'

export default {
  state: {
    stays: [],
    filterBy: {
      where: '',
      label: '',
      checkIn:'',
      checkOut:'',
      adults:0,
      children:0,
      infants:0,
      pets:0,
    },
  },
  getters: {
    stays({ stays }) {
      return stays
    },
    stayById: (state) => (stayId) => {
      var stay = state.stays.filter((stay) => stay._id === stayId)
      return stay[0]
    },
    filterBy({ filterBy }) {
      console.log(filterBy,'gettes');
      return filterBy
    },
    amountOfStays({ stays }){
      return stays.length
    }
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
        commit({ type: 'setStays', stays })
      })
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadStays' })
    },
  },
}
