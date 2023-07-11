# geo-search-helper
Helper functions for geographical search, displaying, filtering and sorting.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![jsDelivr downloads](https://data.jsdelivr.com/v1/package/npm/geo-search-helper/badge?style=rounded)](https://www.jsdelivr.com/package/npm/geo-search-helper)
[![Build Status][CI-image]][CI-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]
[![MIT License][license-image]][license-url]

With this you'll be able to sort search results on shortest to longest distance from your position or some other chosen position. And show i.e. the 10 closest search results or all the search results within a given distance from your position or some other chosen position. Will be possible to do sorting on numbers in version 3 of `search-index`.

## Getting started

### UMD script tag

```HTML
<script src="geo-search-helper-umd.js"></script>
<!-- gsh.mapBoundsPosKm, gsh.mapBoundsPoints, gsh.getDistanceFromLatLonInKm available -->
```

#### Through JsDelivr

```HTML
<script src="https://cdn.jsdelivr.net/npm/geo-search-helper@0.2.1/dist/geo-search-helper.umd.min.js"></script>
<!-- gsh.mapBoundsPosKm, gsh.mapBoundsPoints, gsh.getDistanceFromLatLonInKm available -->
```

### ESM script tag

```HTML
<script type="module">
   import { mapBoundsPosKm, mapBoundsPoints, getDistanceFromLatLonInKm } from 'geo-search-helper.esm.mjs'
</script>
```

#### Through JsDelivr

```HTML
<script type="module">
   import { mapBoundsPosKm, mapBoundsPoints, getDistanceFromLatLonInKm } from 'https://cdn.jsdelivr.net/npm/geo-search-helper/dist/geo-search-helper.esm.min.mjs'
</script>
```

### CJS

```JavaScript
const { getDistanceFromLatLonInKm, mapBoundsPoints, mapBoundsPosKm } = require('geo-search-helper')
```

## API

### `getDistanceFromLatLonInKm({fromPointObj}, {toPointObj})`

Returns shortest distance over the earth’s surface – using the ‘Haversine’ formula. Result in kilometers. To i.e. sort a search result from a point on the map.

### `mapBoundsPosKm({fromPointObj}, radius)`

Returns object with coordinates of map boundaries based on given position and radius from that position.

### `mapBoundsPoints([poinstArray], ['keyLatValue'], ['keyLonValue'])`

Returns object with coordinates of map boundaries based on area covered by an array of geographical points. Needs two or more points to work.

For `latitude` and `longitude` in nested objects like:

```javaScript
const data = [
  {
    id: '14272199162',
    geo: {
      latitude: 59.907427,
      longitude: 10.785616
    },
    url: 'https://live.staticflickr.com/5513/14272199162_e7547e4394_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/14272199162'
  }
]
```

You can access the latitude by calling `['geo', 'latitude']` fro latitude and `['geo', 'longitude']` for longitude.

## What's implemented

Browser focus with ESM and UMD, three functions:

* [x] Get distance from one point on a map to another point (either currentPosition or something else). Points described with lat/lon
* [x] Get map boundaries (lat/lon for SW and NE) based on a location + a radius in km from that point (either through getCurrentPosition or something else).
* [x] Get map boundaries (lat/lon for SW and NE) based on a lot of locations in a map, sorting them to find the most northern, eastern, southern and western point. This way you can have a map boundary for displaying i.e. 10 search results.

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

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/geo-search-helper
[npm-version-image]: https://img.shields.io/npm/v/geo-search-helper.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/geo-search-helper.svg?style=flat
[CI-url]: https://github.com/eklem/geo-search-helper/actions/workflows/tests.yml
[CI-image]: https://github.com/eklem/geo-search-helper/actions/workflows/tests.yml/badge.svg
[standardjs-url]: https://standardjs.com
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=rounded