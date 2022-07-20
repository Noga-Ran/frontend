
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

async function query() {
    storageService._save(KEY,stays)
    // return await httpService.get(ENDPOINT, filterBy)
    // // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)
   return await storageService.query(KEY)
}
