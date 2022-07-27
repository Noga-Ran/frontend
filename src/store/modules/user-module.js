import { userService } from '../../services/user-service.js'

export default {
  state: {
    wishList: [],
    loggedinUser: null
  },
  getters: {
    wishList({ wishList }) {
      return wishList
    },
    wishListById: (state) => (stayId) => {
        if(!state.wishList.length) return false
        var stay = state.wishList.filter((stay) => stay._id === stayId)
        if(!(stay.length)) return false
        return true
    },
  },
  mutations: {
    setWishList(state, {wishList}){
        state.wishList = wishList
    },
    addWishStay(state, {stay}){
        state.wishList.push(stay)
    },
    removeStay(state,{stayId}){
        state.wishList = state.wishList.filter(stay => stay._id !==stayId)
    },
    setUser(state, { user }) {
      state.loggedinUser = user;
    }
  },
  actions: {
    async loadWishList({ commit, state }) {
        var wishList = await userService.query()
        commit({ type: 'setWishList', wishList })
      },
      async addWishStay({commit,state}, { stay }) {
        await userService.updateUser(stay,state.loggedinUser)
        commit({ type: 'addWishStay', stay})
      },
      async removeWishStay({commit,state},{stayId}){
        await userService.updateUser(stayId,state.loggedinUser)
        commit({ type: 'removeStay', stayId})
      },
      async login({ commit }, { cred }) {
        try {
          const user = await userService.login(cred);
          commit({ type: 'setUser', user });
        } catch (err) {
          console.log(err);
        }
      },
      async signup({ commit }, { cred }) {
        try {
          const user = await userService.signup(cred);
          commit({ type: 'setUser', user });
        } catch (err) {
          console.log(err);
        }
        
      },
      async logout({ commit }) {
        try {
          await userService.logout();
          commit({ type: 'setUser', user: null });
        } catch (err) {
          console.log(err);
        }
      },
    },
}
