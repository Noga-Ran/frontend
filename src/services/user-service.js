import {httpService} from './http.service.js';
import { storageService } from './async-storage-service'
import { socketService } from './socket.service.js'

const KEY = 'wishList'
const ENDPOINT = 'auth'
const USERENDPOINT = 'user'
const STORAGE_KEY_LOGGEDIN_USER= "loggedinUser"

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
    getLoggedinUser,
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
    const user =  await httpService.post(ENDPOINT + '/login', cred)
    if (user) {
        socketService.login(user._id)
        return saveLocalUser(user)
    }
}
async function signup(cred) {
    const user = await httpService.post(ENDPOINT + '/signup', cred)
    socketService.login(user._id)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post(ENDPOINT + '/logout')   
}


function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
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