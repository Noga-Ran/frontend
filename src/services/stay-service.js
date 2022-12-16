
import {httpService} from './http.service.js';
import { storageService } from './async-storage-service'
const KEY = 'stays'
const FILTER = 'filterby'

const ENDPOINT = 'stay'

export const stayService = {
    query,
    saveFilterBy,
    getFilterBy,
    getStayById,
    save,
    // remove,
    // save,
    // getEmptyToy,
    // getlabels,
}

async function query(filterBy = {}) {
    // storageService._save(KEY,stays)
    // var filteredStays =  await storageService.query(KEY)
    return await httpService.get(ENDPOINT,filterBy)
    // return filtering(filteredStays, filterBy)
}

async function save(stay){
    var stay = JSON.parse(JSON.stringify(stay))
  if (stay._id) {
    return await httpService.put(`${ENDPOINT}/${stay._id}`, stay);
  } else {
    return await httpService.post(ENDPOINT, stay);
  } 
}

async function getStayById(stayId){
    var stay =  await httpService.get(`${ENDPOINT}/${stayId}`)
    return stay
}

async function saveFilterBy(filterBy){
    storageService._save(FILTER,filterBy)
}

async function getFilterBy(){
    return await storageService.query(FILTER)
}