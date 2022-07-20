import { stayService } from '../../services/stay-service.js'

export default {
  state: {
    stays: [],
    filterBy: {
      where:'',
      label:''
    }
  },
  getters: {
    stays({ stays }) {
      return stays
    },
    filterBy({filterBy}){
      return filterBy
    },
    stayById: stayId => state => state.stays.find(stay => stay._id === stayId)
  },
  // this.$store.getters.stayById(stayId)
  mutations: {
    setStays(state, { stays }) {
      state.stays = stays
      console.log(state.stays.length);
    },
    setFilter(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadStays({ commit, state }) {
      stayService.query(state.filterBy).then((stays) => {
        commit({ type: 'setStays', stays })
      })
    },
    setFilter({ dispatch, commit }, { filterBy }) {
      commit({ type: 'setFilter', filterBy })
      dispatch({ type: 'loadStays' })
    },
  },
}
