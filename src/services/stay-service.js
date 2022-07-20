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
    // return await httpService.get(ENDPOINT, filterBy)
    // // return axios.get(BASE_URL, { params: { filterBy } }).then((res) => res.data)
    return storageService.query(KEY)
}

// <!-- function loadCSV(filePath){
//     return new Promise((resolve, reject) => {
//         var results = []
//         fs.createReadStream(filePath)
//         .pipe(csv())
//         .on('data', (data) => results.push(data))
//         .on('end', () => {
//             return resolve(results)
//         })
//     })
// } -->