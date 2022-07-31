import { stayService } from '../../services/stay-service.js'

export default {
  state: {
    stays: [],
    filterBy: {
      where: '',
      label: '',
      checkIn: '',
      checkOut: '',
      adults: 0,
      children: 0,
      infants: 0,
      pets: 0,
    },
  },
  getters: {
    stays({ stays }) {
      return stays
    },
    // stayById: (state) => async(stayId) => {
    //   // var stay = state.stays.filter((stay) => stay._id === stayId)
    //   var stay = await stayService.getById(stayId)
    //   return stay
    // },
    filterBy({ filterBy }) {
      return filterBy
    },
    amountOfStays({ stays }) {
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
    async loadStays({ commit, state }, { filter = true }) {
    if (filter) var stays = await stayService.query(state.filterBy)
    else var stays = await stayService.query()
    commit({ type: 'setStays', stays })
  },
    async setFilter({ dispatch, commit }, { filterBy }) {
    await stayService.saveFilterBy(filterBy)
    commit({ type: 'setFilter', filterBy })
    dispatch({ type: 'loadStays' })
  },
    async loadFilter({ dispatch, commit }){
    var filterBy = await stayService.getFilterBy()
    if (filterBy.length) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadStays' })
    }
  },
    async getStayById(state, { stayId }){
    try {
      return await stayService.getStayById(stayId)
    } catch (err) {
      console.log(err)
    }
  },
  clearFilter({commit}){
    const filterBy = {
    where: '',
    label: '',
    checkIn: '',
    checkOut: '',
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  }
  commit({ type: 'setFilter', filterBy })
  }
},
}
