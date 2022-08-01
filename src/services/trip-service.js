
import { storageService } from './async-storage-service'
import { httpService } from './http.service.js'
const KEY = 'trips'
const ENDPOINT = 'order'

export const tripService = {
    query,
    getById,
    remove,
    save,
}

async function query() {
    return await httpService.get(ENDPOINT)
}

async function remove(tripId){
    return await httpService.delete(ENDPOINT+'/'+tripId)
}

async function save(trip){
    var trip = JSON.parse(JSON.stringify(trip));
  if (trip._id) {
    return await httpService.put(`${ENDPOINT}/${trip._id}`, trip);
  } else {
    return await httpService.post(ENDPOINT, trip);
  } 
}

async function getById(tripId){
    return await httpService.get(ENDPOINT+'/'+tripId)
  }
