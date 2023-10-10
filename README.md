# geo-search-helper
Helper functions for geographical search, displaying, filtering and sorting.

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![jsDelivr downloads](https://data.jsdelivr.com/v1/package/npm/geo-search-helper/badge?style=rounded)](https://www.jsdelivr.com/package/npm/geo-search-helper)
[![Build Status][CI-image]][CI-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]
[![MIT License][license-image]][license-url]

With this you'll be able to sort search results on shortest to longest distance from your position or some other chosen position. And show i.e. the 10 closest search results or all the search results within a given distance from your position or some other chosen position. Calculation of distance and sorting is done after you get the search result.

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

## Ways of using the library

First you get a search result, calculate distance from point of interest and sort it on smallest to highest distance.

Then there is two ways of using the library. Either your use case is to show search results within a given distance, or show [n] search results.

For search results within a given distance, you cut of the results biggere than that given distance and find map bounds with `mapBoundsPosKm()` to be able to show the search results on a map.

![Cutting of search results after a given distance.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/preparing-for-max-distance.png)


For showing the first [n] search results, you use `mapBoundsPoints()` to be able to show the search results on a map.

![Cutting of search results after a given number of results.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/preparing-for-max-results.png)


## API

### `getDistanceFromLatLonInKm({fromPointObj}, {toPointObj})`

![Calculating distances from point of interest to other geographical points.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/getDistanceFromLatLonInKm.png)

Returns shortest distance over the earth’s surface – using the ‘Haversine’ formula. Result in kilometers. To i.e. sort a search result from a point on the map.

### `mapBoundsPosKm({fromPointObj}, radius)`

Returns object with coordinates of map boundaries based on given position and radius from that position.

#### Input
![Input to the function: Point of interest and radius.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/mapBoundsPosKm-input.png)

#### Output
![Output from the function: Upper, left coordinate and bottom right coordinate for a map view.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/mapBoundsPosKm-output.png)


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

#### Input
![Input to the function: Map coordinates from search result in addition to your point of interest, if you choose.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/mapBoundsPoints-input.png)

#### Output
![Output from the function: Upper, left coordinate and bottom right coordinate for a map view.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/mapBoundsPoints-output.png)

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

## Issues

### When the map shown is not square

When map shown is not square, the square mapview will be within the boundaries of the horisontal or vertical map. Not a big problem, but okay to know about.

![When map shown is not square, the square mapview will be within the boundaries of the horisontal or vertical map.](https://github.com/eklem/geo-search-helper/blob/trunk/mockups/map-shown-not-square.png)

### Proximity- and content quality tradeoff
You will get the top [n] search results sorted and then show the ones closest to you. Either by distance (radius) or closest [n-x]. If you choose to get 1000 search results, sort them geographically and cut the list of after 10 closest to you, the proximity-quality will be higher, but the content-quality will be lower. Especially if you do an OR-search.

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE
[npm-url]: https://npmjs.org/package/geo-search-helper
[npm-version-image]: https://img.shields.io/npm/v/geo-search-helper.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/geo-search-helper.svg?style=flat
[CI-url]: https://github.com/eklem/geo-search-helper/actions/workflows/tests.yml
[CI-image]: https://github.com/eklem/geo-search-helper/actions/workflows/tests.yml/badge.svg
[standardjs-url]: https://standardjs.com
[standardjs-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=rounded

## Development setup

### Install VSCode plugins:

* Live Server by Ritwick Dey
* ngrok for VS Code by philnash

### Set up ngrok account
* Go to [ngrok](https://ngrok.com/) and set up account with i.e. GitHub user
* Log in and go to [endpoint overview](https://dashboard.ngrok.com/cloud-edge/endpoints)

### First time:

* CMD + SHIFT + p
* ngrok config add-authtoken

### Start:

* Start Live server by clicking `Go Live` in bottom right corner.
* CMD + SHIFT + p
* ngrok start
* Port number: 80
* Press `Go Live` in bottom right corner

### Stop:

* CMD + SHIFT + p
* ngrok stop
* Stop Live server by clicking `Port: 80` in bottom right corner.
