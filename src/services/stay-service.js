
import stays from '../jsons/stay.json';

import { storageService } from './async-storage-service'
const KEY = 'stays'

export const stayService = {
    query,
    // getById,
    // remove,
    // save,
    // getEmptyToy,
    // getlabels,
}

async function query(filterBy = {}) {
    storageService._save(KEY,stays)
    // return await httpService.get(ENDPOINT, filterBy)
    // // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)
    var filteredStays =  await storageService.query(KEY)
    return filteredStays = filtering(filteredStays, filterBy)
}

function filtering(filteredStays, filterBy){
    var stayToFilter = filteredStays
    if(filterBy.where) {
        stayToFilter = stayToFilter.filter(function(stay)
        {
            var stayAdressValues = (JSON.stringify(Object.values(stay.address))).toLowerCase()
            let filter = stayAdressValues.includes((filterBy.where).toLowerCase())
            return filter
        })
    }
    if(filterBy.label) {
        stayToFilter = stayToFilter.filter((stay)=> stay.label === filterBy.label)
    }
    
    return stayToFilter
}
