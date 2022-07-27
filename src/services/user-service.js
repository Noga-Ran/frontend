
import { storageService } from './async-storage-service'
const KEY = 'wishList'
const ENDPOINT = 'auth'

export const userService = {
    query,
    getById,
    remove,
    // save,
    // getEmptyToy,
    // getlabels,
    update,
    login,
    signup,
    logout,
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

async function login(cred) {
    return await httpService.post(ENDPOINT + '/login', cred)
}
async function signup(cred) {
    return await httpService.post(ENDPOINT + '/signup', cred)
}
async function logout() {
    return await httpService.post(ENDPOINT + '/logout')
}