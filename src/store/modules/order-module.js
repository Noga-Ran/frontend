import { tripService } from '../../services/trip-service.js'

export default {
  state: {
    orders: [],
  },
  getters: {
    getOrders({ orders }) {
      return orders
    },
    amountOfOrders({ orders }) {
      return orders.length
    }
  },
  mutations: {
    setOrders(state, { orders }) {
      state.orders = orders
    },
  },
  actions: {
    async loadOrders({ commit, state }) {
      var orders = await tripService.query()
      commit({ type: 'setOrders', orders })
    },
    async addTrip({commit,state},{trip}){
      await tripService.save(trip)
    }
  },
}
