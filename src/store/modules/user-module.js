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
    getUser({ loggedinUser }) {
      return loggedinUser
    },
    wishListById: (state) => (stayId) => {
      console.log(state.wishList)
      if(!state.wishList) return false
      if(!state.wishList.length) return false
      var stay = state.wishList.filter((stay) => stay === stayId)
        if(!(stay.length)) return false
        return true
    },
  },
  mutations: {
    setWishList(state, {user}){
        state.wishList = user.wishlist
    },
    // addWishStay(state, {stayId}){
    //     state.wishList.push(stayId)
    // },
    // removeStay(state,{stayId}){
    //     state.wishList = state.wishList.filter(stay => stay._id !==stayId)
    // },
    setUser(state, { user }) {
      state.loggedinUser = user
      console.log('welcome',state.loggedinUser);
    }
  },
  actions: {
    async loadWishList({ commit, state }) {
        var wishList = await userService.query()
        commit({ type: 'setWishList', wishList })
      },
      // async getWishById(state,{stayId}){
      //   try {
      //     console.log(state.loggedinUser);
      //     var user = await userService.getById(state.loggedinUser._id)
      //     if (user.wishlist.some(wish===stayId)) return true
      //     else return false
      //   } catch (err) {
      //     console.log(err)
      //   }
      // },
      async addWishStay({commit,state}, { stayId }) {
        var user = await userService.addWish(stayId,state.loggedinUser)
        commit({ type: 'setWishList', user })
      },
      async removeWishStay({commit,state},{stayId}){
        var user = await userService.removeWish(stayId,state.loggedinUser)
        commit({ type: 'setWishList', user })
      },
      async login({ commit}, { cred }) {
        try {
          const user = await userService.login(cred);
          commit({ type: 'setUser', user });
          commit({ type: 'setWishList', user });
        } catch (err) {
          console.log(err);
        }
      },
      async signup({ commit}, { cred }) {
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
