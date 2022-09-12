
import stays from '../jsons/stay.json';
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