export const locService = {
    getLocs
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



