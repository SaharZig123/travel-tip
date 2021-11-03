export const locService = {
    getLocs,
    saveLocation
}

import { storageService } from './storage-service.js'

const KEY='My Locations'


// {id, name, lat, lng, weather, createdAt, updatedAt}
const locs = storageService.loadFromStorage(KEY) || []

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

// function saveLocation(position){
  
//     let location={
//         id:0,
//         name:prompt("location name"),
//         lat:position.lat,
//         lng:position.lng,
//         weather:'',
//         createdAt:Date.now(),
//         updatedAt:''

//     }
//     console.log(locs)
//     storageService.saveToStorage(KEY,location)
// }



