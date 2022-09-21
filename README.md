# geo-search-helper
Helper functions for geographical search, filtering and sorting.

Based on `latlon-geohash` and Haversine formula ([ripped from this Stackoverflow answer](https://stackoverflow.com/a/27943/4210445)).

## API

* `getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2)`: Returns shortest distance over the earth’s surface – using the ‘Haversine’ formula. Result in kilometers. To i.e. sort a search result from a point on the map.
* `Geohash.encode(lat, lon, [precision])`: Encode latitude/longitude point to geohash of given precision
   (number of characters in resulting geohash); if precision is not specified, it is inferred from
   precision of latitude/longitude values.
* `Geohash.decode(geohash)`: Return { lat, lon } of centre of given geohash, to appropriate precision.
* `Geohash.bounds(geohash)`: Return { sw, ne } bounds of given geohash.
* `Geohash.adjacent(geohash, direction)`: Return adjacent cell to given geohash in specified direction (N/S/E/W).
* `Geohash.neighbours(geohash)`: Return all 8 adjacent cells (n/ne/e/se/s/sw/w/nw) to given geohash.

### Note to obtain neighbours as an array, you can use

```javaScript
const neighboursObj = Geohash.neighbours(geohash);
const neighboursArr = Object.keys(neighboursObj).map(n => neighboursObj[n]);
```

### The parent of a geocode

Simply do `geocode.slice(0, -1)`.

### Base32 to Base4

If you want the geohash converted from Base32 to Base4, you can e.g.:

```javaScript
parseInt(Geohash.encode(52.20, 0.12, 6), 32).toString(4);
```

## What will be implemented

Browser focus with ESM and UMD, but still CJS files for now. Tree functions:

* [ ] getCurrentPosition
* [x] Get distance from one point on a map to another point (either currentPosition or something else). Points described with lat/lon
* [ ] Get map boundaries (lat/lon for SW and NE) based on a location + a radius in km from that point (either currentPosition or something else) 

Then you'll be able to sort search results on sortest to longest distance from your position or some other chosen position. And show i.e. the 10 closest search results or all the search results within a given distance from your position or some other chosen position.

## Initial thoughts on project

Will be possible to do sorting on numbers in version 3 of `search-index`. The way I'm thinking this could work:
* Find an interesting search result with a lon/lat point (or just pick a lon/lat point on the map)
* Figure out appropriate zoom level (numbers of characters to grab from the GeoHash)
* Expand to eight surrounding squares for that GeoHash
* Do an or-mathcing on all these GeoHash'es (starts with) to get search results
* Plot these on map
* Sort search results according to Euclidean distance from starting/base point
