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
    save,
    login,
    signup,
    logout,
    // getGuestUser,
    addWish,
    removeWish,
    getLoggedinUser,
}
async function query(filterBy = {}) {
    return httpService.get(USERENDPOINT,filterBy)
}

async function remove(stayId){
    return storageService.remove(KEY,stayId)
}

async function save(user){
    saveLocalUser(user)
    if (user._id) {
        return await httpService.put(`${USERENDPOINT}/${user._id}`, user)
      } else {
        return await httpService.post(USERENDPOINT, user)
      }
}

async function login(cred) {
    try{
        const user =  await httpService.post(ENDPOINT + '/login', cred)
        if (user) {
            return saveLocalUser(user)
        }
        else{
            console.log('not a user');
        }
    }catch(error){
        console.log(error);
        throw error
    }
}
async function signup(cred) {
    try{
        const user = await httpService.post(ENDPOINT + '/signup', cred)
        userService.login(user._id)
        return saveLocalUser(user)
    }catch(err){
        throw err
        // return err
    }
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
    return user
}

async function addWish(stayId,user){
    var copyUser= JSON.parse(JSON.stringify(user))

    if(copyUser.wishlist){
        copyUser.wishlist.push(stayId)
    }else{
        copyUser.wishlist = [stayId]
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(copyUser))
    return await httpService.put(`${USERENDPOINT}/${copyUser._id}`,copyUser)
}

async function removeWish(stayId,user){
    var copyUser= JSON.parse(JSON.stringify(user))
    copyUser.wishlist = copyUser.wishlist.filter(wish => wish!==stayId)
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(copyUser))
    return await httpService.put(`${USERENDPOINT}/${copyUser._id}`,copyUser)
}