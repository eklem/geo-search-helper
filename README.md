# geo-search-helper
Helper functions for geographical search, displaying, filtering and sorting.

With this you'll be able to sort search results on shortest to longest distance from your position or some other chosen position. And show i.e. the 10 closest search results or all the search results within a given distance from your position or some other chosen position. Will be possible to do sorting on numbers in version 3 of `search-index`.

## API

* `getDistanceFromLatLonInKm(f{romPointObj}, {toPointObj})` Returns shortest distance over the earth’s surface – using the ‘Haversine’ formula. Result in kilometers. To i.e. sort a search result from a point on the map.
* `mapBoundsPosKm({fromPointObj}, radius)` Returns object with coordinates of map boundary based on given position and radius from that position.
* wip - `mapBoundsPoints([array of PointObjects])` Returns object with coordinates of map boundary based on area covered by an array of geographical points.

## What's implemented

Browser focus with ESM and UMD, three functions:

* [x] Get distance from one point on a map to another point (either currentPosition or something else). Points described with lat/lon
* [x] Get point2 from point1, distance and bearing. Only needed for map boundaries function, but keeping it exposed for now.
* [x] Get map boundaries (lat/lon for SW and NE) based on a location + a radius in km from that point (either through getCurrentPosition or something else).
* [ ] Get map boundaries (lat/lon for SW and NE) based on a lot of locations in a map, sorting them to find the most northern, eastern, southern and western point. This way you can have a map boundary for displaying i.e. 10 search results.

### getCurrentPosition

The `fromPointObj` can be your current position or something else, like one of the search results.

#### Example

```javaScript
// Position options
const getPositionOpt = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0
}

// Position promise
function getPosition() {
   return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej, getPositionOpt)
   })
}

// Tying all the position stuff together
function getPositionCallback() {
   getPosition()
   // format position object
   .then((pos) => {
      const crd = pos.coords;
      const position = { lat: crd.latitude, lon: crd.longitude, acc: crd.accuracy }          
      return position
   })
   // Do your stuff here
   .then((position) => {
      populateHTML(position)
      console.log(position)
   })
   // Handle errors
   .catch((err) => {
      console.log(err)
      const error = { errortype: err.code, errormessage: err.message }
      populateHTML(error)
      return error
   })
}

function showMap(position) {
   const map = L.map('map',
   {
      center: [position.lat, position.lon],
      zoom: 10
   }
   );
   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
}

// Dummy HTML populate
function populateHTML(msg) {
   const node = document.createElement('span').innerText = JSON.stringify(msg, 2, ' ')
   document.getElementById('pos').replaceChildren(node)
}

// Fire up the position magic
getPositionCallback()
```