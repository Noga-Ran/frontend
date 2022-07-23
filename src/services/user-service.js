
import { storageService } from './async-storage-service'
const KEY = 'wishList'

export const userService = {
    query,
    getById,
    remove,
    // save,
    // getEmptyToy,
    // getlabels,
    update,
}

async function query(filterBy = {}) {
    return storageService.query(KEY)
}

async function remove(stayId){
    return storageService.remove(KEY,stayId)
}

async function update(stayId){
    storageService.post(KEY,stayId)
}

async function getById(stayId){
    return storageService.getById(KEY,stayId)
}