import { locService } from './services/loc.service.js'
import { mapService } from './services/map.service.js'

window.onload = onInit;
window.onAddMarker = onAddMarker;
window.onPanTo = onPanTo;
window.onGetLocs = onGetLocs;
window.onGetUserPos = onGetUserPos;
window.onSearchLocation = onSearchLocation;
window.onDeleteLocation = onDeleteLocation;

function onInit() {
  mapService
    .initMap()
    .then(() => {
      console.log('Map is ready')
    })
    .catch(() => console.log('Error: cannot init map'))
}

// This function provides a Promise API to the callback-based-api of getCurrentPosition
function getPosition() {
  console.log('Getting Pos')
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

function onAddMarker() {
  console.log('Adding a marker')
  mapService.addMarker({ lat: 32.0749831, lng: 34.9120554 })
}

function onGetLocs() {
  let strHtml = `<tr><td>Place Name</td><td>Place Id</td><td>lat</td><td>lng</td><td colspan="2">Actions</td></tr>`;
  locService.getLocs().then((locs) => {
    locs.forEach(loc => {
      strHtml += `<tr><td>${loc.name}</td><td>${loc.id}</td><td>${loc.lat}</td><td>${loc.lng}</td>
      <td><button onclick="onPanTo(${loc.lat},${loc.lng})">Go!</button></td>
      <td><button onclick="onDeleteLocation('${loc.id}')">Delete</button></td>
      </tr>`;
    })
    document.querySelector('.locs').innerHTML = strHtml;
  })
}

function onGetUserPos() {
  getPosition()
    .then((pos) => {
      console.log('User position is:', pos.coords)
      document.querySelector(
        '.user-pos'
      ).innerText = `Latitude: ${pos.coords.latitude} - Longitude: ${pos.coords.longitude}`
    })
    .catch((err) => {
      console.log('err!!!', err)
    })
}
function onPanTo(lat, lng) {
  console.log('Panning the Map');
  mapService.panTo(lat, lng);
}

function onSearchLocation() {
  let searchWords = document.querySelector('.search-input').value;
  console.log(locService.getLocation(searchWords).then(res => res));
  let searchRes = locService.getLocation(searchWords);
  searchRes.then(res => res.geometry.location)
    .then(res => mapService.panTo(res));
  document.querySelector('.search-input').value = '';
  searchRes.then(res => locService.addToLocs(res));
}

function onDeleteLocation(id) {
  locService.deleteLocation(id);
  onGetLocs();
}


