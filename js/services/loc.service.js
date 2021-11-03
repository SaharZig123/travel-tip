export const locService = {
    getLocs,
    getLocation,
    addToLocs
}

import { storageService } from './storage.service.js'

// {id, name, lat, lng, weather, createdAt, updatedAt}

const KEY = 'locations-list';
var locs = storageService.load(KEY) || [];


function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function addToLocs(res) {
    locs.push({ id: res.place_id, name: res.formatted_address, lat: res.geometry.location.lat, lng: res.geometry.location.lng, weather: 0, createdAt: Date.now(), updatedAt: 0 });
    console.log(locs);
    storageService.save(KEY, locs);
}


function getLocation(val) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${val}&key=AIzaSyAdNLoWWrE93TKnrDqU3IKEXctlJH-0aCI`)
        .then(res => res.data.results[0]);
}