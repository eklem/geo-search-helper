const { rhumbDestinationToPoint } = require('./dist/gsh.cjs.js')

function mapBoundariesSWNE (fromPoint, radius) {
  const distance = radius
  const north = rhumbDestinationToPoint(fromPoint, distance, 0)
  const east = rhumbDestinationToPoint(fromPoint, distance, 90)
  const south = rhumbDestinationToPoint(fromPoint, distance, 180)
  const west = rhumbDestinationToPoint(fromPoint, distance, 270)
  
  const boundaries = { sw: { lat: south.lat, lon: west.lon }, ne: { lat: north.lat, lon: east.lon } }
  return boundaries
}

const mapBoundaries = mapBoundariesSWNE ({ lat: 59.92163880374441, lon: 10.748807812690696 }, 30)
console.log(mapBoundaries)