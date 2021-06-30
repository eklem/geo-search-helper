# geo-search-helper
Helper functions for geographical search, filtering and sorting.

Will be possible to do sorting on numbers in version 3 of `search-index`. The way I'm thinking this could work:
* Find an interesting search result with a lon/lat point (or just pick a lon/lat point on the map)
* Figure out appropriate zoom level (numbers of characters to grab from the GeoHash)
* Expand to eight surrounding squares for that GeoHash
* Do an or-mathcing on all these GeoHash'es (starts with) to get search results
* Plot these on map
* Sort search results according to Euclidean distance from starting/base point
