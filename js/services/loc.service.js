export const locService = {
    getLocs,
    getLocation
}


// {id, name, lat, lng, weather, createdAt, updatedAt}
const locs = [
    { name: 'Greatplace', lat: 32.047104, lng: 34.832384 }, 
    { name: 'Neveragain', lat: 32.047201, lng: 34.832581 }
]

function getLocation(searchInput) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchInput}&key=AIzaSyAdNLoWWrE93TKnrDqU3IKEXctlJH-0aCI`)
    .then(res => res.data.results[0])
}

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}


