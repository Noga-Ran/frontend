import { tripService } from '../../services/trip-service.js'

export default {
  state: {
    trips: [],
  },
  getters: {
    trips({ trips }) {
      return trips
    },
    tripById: (state) => (tripId) => {
      if (!state.trips.length) return false
      var trip = state.trips.filter((trip) => trip._id === tripId)
      if (!trip.length) return false
      return true
    },
  },
  mutations: {
    loadTrips(state, { trips }) {
      state.trips = trips
    },
    addToTrips(state, { trip }) {
      console.log('trip', trip)
      state.trips.push(trip)
    },
    removeTrip(state, { tripId }) {
      state.trips = state.trips.filter((trip) => trip._id !== tripId)
    },
  },
  actions: {
    async loadTrips({ commit, state }) {
      var trips = await tripService.query()
      commit({ type: 'loadTrips', trips })
    },
    async addTrip({ commit }, { trip }) {
      await tripService.save(trip)
      commit({ type: 'addToTrips', trip })
    },
    async removeTrip({ commit }, { tripId }) {
      await tripService.remove(tripId)
      commit({ type: 'removeTrip', tripId })
    },
  },
}
