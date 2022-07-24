
import { storageService } from './async-storage-service'
const KEY = 'trips'

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
    return storageService.query(KEY)
}

async function remove(tripId){
    return storageService.remove(KEY,tripId)
}

async function update(trip){
    trip._id = Date.now()
    storageService.post(KEY,trip)
}

async function getById(tripId){
    return storageService.getById(KEY,tripId)
}