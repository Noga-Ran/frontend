import {httpService} from './http.service.js';
import { storageService } from './async-storage-service'
const KEY = 'wishList'
const ENDPOINT = 'auth'
const USERENDPOINT = 'user'

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
    // getGuestUser,
    addWish,
    removeWish,
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

async function login(cred) {
    return await httpService.post(ENDPOINT + '/login', cred)
}
async function signup(cred) {
    return await httpService.post(ENDPOINT + '/signup', cred)
}
async function logout() {
    return await httpService.post(ENDPOINT + '/logout')
}

async function getById(stayId){
    var user = httpService.get(USERENDPOINT+'/'+stayId)
    console.log(user)
    return user
}

async function addWish(stayId,user){
    var copyUser= JSON.parse(JSON.stringify(user))
    if(copyUser.wishlist){
        copyUser.wishlist.push(stayId)
    }else{
        copyUser.wishlist = [stayId]
    }
    return await httpService.put(USERENDPOINT+'/'+copyUser._id,copyUser)
}

async function removeWish(stayId,user){
    var copyUser= JSON.parse(JSON.stringify(user))
    copyUser.wishlist = copyUser.wishlist.filter(wish => wish!==stayId)

    return await httpService.put(`${USERENDPOINT}/${copyUser._id}`,copyUser)
}