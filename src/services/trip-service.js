
import { storageService } from './async-storage-service'
import { httpService } from './http.service.js'
const KEY = 'trips'
const ENDPOINT = 'order'

export const tripService = {
    query,
    getById,
    remove,
    // save,
    // getEmptyToy,
    // getlabels,
    update,
}

async function query() {
    // return storageService.query(KEY)
    return await httpService.get(ENDPOINT)
}

async function remove(tripId){
    return await httpService.delete(ENDPOINT+'/'+tripId)
    // return storageService.remove(KEY,tripId)
}

async function update(trip){
    var trip = JSON.parse(JSON.stringify(trip));
  if (trip._id) {
    return await httpService.put(`${ENDPOINT}/${trip._id}`, trip);
  } else {
    return await httpService.post(ENDPOINT, trip);
  }    // trip._id = Date.now()
    // storageService.post(KEY,trip)
}

async function getById(tripId){
    return await httpService.get(ENDPOINT+'/'+tripId)
    // return storageService.getById(KEY,tripId)
}
