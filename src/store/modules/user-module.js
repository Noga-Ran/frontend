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
      if(!state.wishList) return false
      if(!state.wishList.length) return false
      var stay = state.wishList.filter((stay) => stay === stayId)
        if(!(stay.length)) return false
        return true
    },
  },
  mutations: {
    setWishList(state, {user}){
      state.wishList = user?.wishlist || []
    },
    // addWishStay(state, {stayId}){
    //     state.wishList.push(stayId)
    // },
    // removeStay(state,{stayId}){
    //     state.wishList = state.wishList.filter(stay => stay._id !==stayId)
    // },
    setUser(state, { user }) {
      state.loggedinUser = user
    }
  },
  actions: {
      async addWishStay({commit,state}, { stayId }) {
        var user = await userService.addWish(stayId,state.loggedinUser)
        commit({ type: 'setWishList', user })
        commit({ type: 'setUser', user })
      },
      async removeWishStay({commit,state},{stayId}){
        var user = await userService.removeWish(stayId,state.loggedinUser)
        commit({ type: 'setWishList', user })
        commit({ type: 'setUser', user })
      },
      async login({ commit}, { cred }) {
        try {
          const user = await userService.login(cred);
          commit({ type: 'setUser', user });
        } catch (err) {
          console.log(err);
        }
      },
      async signup({ commit}, { cred }) {
        try {
          const user = await userService.signup(cred);
          commit({ type: 'setUser', user });
          return false
        } catch (err) {
          console.log(err);
          return true
        }       
      },
      async logout({ commit,state }) {
        try {
          if(state.loggedinUser._id==='6326c6c8d90b804724d30e4d'){
            let user = JSON.parse(JSON.stringify(state.loggedinUser))
            user.msgs = []
            user.wishlist = []
            user.stays = []
            user.trips = []
            await userService.save(user)
          }
          await userService.logout();
          commit({ type: 'setUser', user: null });
        } catch (err) {
          console.log(err);
        }
      },
      async saveUser({commit},{user}){
        try{
          await userService.save(user)
          commit({ type: 'setUser', user });
        }catch(err){
          console.log(err);
        }
      },
      setUser({commit},{user}){
        commit({ type: 'setUser', user })
      }
    },
}
