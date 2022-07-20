// const fs = require('fs')
// const {stays} = require('../jsons/user.json')
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
    console.log(stays);
    // return await httpService.get(ENDPOINT, filterBy)
    // // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)
   return stays || storageService.query(KEY)
}
