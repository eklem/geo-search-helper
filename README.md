# geo-search-helper
Helper functions for geographical search, displaying, filtering and sorting.

Based on Haversine formula ([ripped from this Stackoverflow answer](https://stackoverflow.com/a/27943/4210445)).

## API

* `getDistanceFromLatLonInKm(point1Obj, point2Obj)`: Returns shortest distance over the earth’s surface – using the ‘Haversine’ formula. Result in kilometers. To i.e. sort a search result from a point on the map.
* ``

```

## What will be implemented

Browser focus with ESM and UMD, but still CJS files for now. Four functions:

* [ ] getCurrentPosition
* [x] Get distance from one point on a map to another point (either currentPosition or something else). Points described with lat/lon
* [x] Get point2 from point1, distance and bearing. Only needed for map boundaries function, but keeping it exposed for now.
* [x] Get map boundaries (lat/lon for SW and NE) based on a location + a radius in km from that point (either through getCurrentPosition or something else).

Then you'll be able to sort search results on sortest to longest distance from your position or some other chosen position. And show i.e. the 10 closest search results or all the search results within a given distance from your position or some other chosen position.

## Initial thoughts on project

Will be possible to do sorting on numbers in version 3 of `search-index`. The way I'm thinking this could work:
* Find an interesting search result with a lon/lat point (or just pick a lon/lat point on the map)
* Figure out appropriate zoom level (numbers of characters to grab from the GeoHash)
* Expand to eight surrounding squares for that GeoHash
* Do an or-mathcing on all these GeoHash'es (starts with) to get search results
* Plot these on map
* Sort search results according to Euclidean distance from starting/base point
