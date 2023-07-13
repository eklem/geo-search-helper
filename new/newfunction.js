// const { getDistanceFromLatLonInKm, mapBoundsPoints, mapBoundsPosKm } = require('../src/index.js')


// Position promise
const getPosition = function() {
  const options = {
    enableHighAccuracy: false,
    timeout: 7000,
    maximumAge: 0
  }
  return new Promise((res, rej) => {
     navigator.geolocation.getCurrentPosition(res, rej, options)
  })
}

// Tying all the position stuff together
function getPositionCallback() {
  getPosition()
  // format position object
  .then((pos) => {
     const crd = pos.coords;
     const position = { lat: crd.latitude, lon: crd.longitude, acc: crd.accuracy }          
     console.dir(position.lat + ',' + position.lon)
     return position
  })
  .then ((position) => {
    
  })
  // Handle errors
  .catch((err) => {
     const error = { errortype: err.code, errormessage: err.message }
     console.log(error)
     return error
  })
}

getPositionCallback()


