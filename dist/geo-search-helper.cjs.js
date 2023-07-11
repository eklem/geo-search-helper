'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Finding map boundaries from a point and a radius
function mapBoundsPosKm (fromPoint, radius) {
  const north = rhumbDestinationToPoint(fromPoint, radius, 0);
  const east = rhumbDestinationToPoint(fromPoint, radius, 90);
  const south = rhumbDestinationToPoint(fromPoint, radius, 180);
  const west = rhumbDestinationToPoint(fromPoint, radius, 270);

  return { sw: { lat: south.lat, lon: west.lon }, ne: { lat: north.lat, lon: east.lon } }
}

// Finding map boundaries from a set of points
function mapBoundsPoints (resultsArr, keyPathLat, keyPathLon) {
  if (resultsArr.length <= 1) {
    throw new Error('mapBoundsPoints: Array to short to find boundaries. Needs two or more points.')
  }
  const latArr = extractLatLon(resultsArr, keyPathLat);
  sortSlice(latArr);
  const lonArr = extractLatLon(resultsArr, keyPathLon);
  sortSlice(lonArr);
  return { sw: { lat: latArr[0], lon: lonArr[0] }, ne: { lat: latArr[1], lon: lonArr[1] } }
}

// Helper-function for mapBoundsPoints
//   purpose: extracting latitude or longitude numbers to an array
function extractLatLon (resultsArr, keyPath) {
  // traverse through object(s) to get the correct key/value for latitude/longitude
  const latLon = resultsArr.map((obj) => {
    const latLonArr = keyPath.reduce((acc, key) => acc[key], obj);
    return latLonArr
  });
  return latLon
}

// Helper-function for mapBoundsPoints
//   purpose: Sorting from lowest to highest value and keeping lowest and highest
function sortSlice (latLonArr) {
  latLonArr.sort((a, b) => a - b);
  latLonArr.splice(1, latLonArr.length - 2);
  return latLonArr
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/*  Found on Stackoverflow - https://stackoverflow.com/a/27943/4210445                            */
/*  Guessing it's from an early version of geodesy, so:                                            */
/*                                                                                                */
/* Latitude/longitude spherical geodesy tools                         (c) Chris Veness 2002-2021  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/latlong.html                                                    */
/* www.movable-type.co.uk/scripts/geodesy-library.html#latlon-spherical                           */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

// Haversine formula
// Calculating Harviestine distance between two lat/lon-points
function getDistanceFromLatLonInKm (point1, point2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(point2.lat - point1.lat); // deg2rad below
  const dLon = deg2rad(point2.lon - point1.lon);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(point1.lat)) * Math.cos(deg2rad(point2.lat)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Latitude/longitude spherical geodesy tools                         (c) Chris Veness 2002-2021  */
/*                                                                                   MIT Licence  */
/* www.movable-type.co.uk/scripts/latlong.html                                                    */
/* www.movable-type.co.uk/scripts/geodesy-library.html#latlon-spherical                           */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

// Returns the destination point having travelled along a rhumb line from ‘this’ point the given distance on the given bearing.
function rhumbDestinationToPoint (fromPoint, distance, bearing, radius = 6371) {
  const π = Math.PI;
  const φ1 = deg2rad(fromPoint.lat); const λ1 = deg2rad(fromPoint.lon);
  const θ = deg2rad(Number(bearing));
  const δ = distance / radius; // angular distance in radians

  const Δφ = δ * Math.cos(θ);
  let φ2 = φ1 + Δφ;

  // check for some daft bugger going past the pole, normalise latitude if so
  if (Math.abs(φ2) > π / 2) φ2 = φ2 > 0 ? π - φ2 : -π - φ2;

  const Δψ = Math.log(Math.tan(φ2 / 2 + π / 4) / Math.tan(φ1 / 2 + π / 4));
  const q = Math.abs(Δψ) > 10e-12 ? Δφ / Δψ : Math.cos(φ1); // E-W course becomes ill-conditioned with 0/0

  const Δλ = δ * Math.sin(θ) / q;
  const λ2 = λ1 + Δλ;

  const lat = rad2deg(φ2);
  const lon = rad2deg(λ2);

  return { lat, lon }
}

function deg2rad (deg) {
  return deg * (Math.PI / 180)
}

function rad2deg (rad) {
  return rad * 180 / Math.PI
}

exports.getDistanceFromLatLonInKm = getDistanceFromLatLonInKm;
exports.mapBoundsPoints = mapBoundsPoints;
exports.mapBoundsPosKm = mapBoundsPosKm;
