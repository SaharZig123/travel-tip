export const locService = {
    getLocs,
    saveLocation
}

// {id, name, lat, lng, weather, createdAt, updatedAt}
const locs = []

function getLocs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(locs);
        }, 2000)
    });
}

function saveLocation(position){
    locs.push({
        id:0,
        name:prompt("location name"),
        lat:position.lat,
        lng:position.lng,
        weather:'',
        createdAt:Date.now(),
        updatedAt:''

    })
    console.log(locs);
}



