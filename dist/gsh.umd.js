(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.gsh = {}));
})(this, (function (exports) { 'use strict';

  // Haversine formula
  // Calculating Harviestine distance between two lat/lon-points
  function getDistanceFromLatLonInKm (lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d
  }

  function deg2rad (deg) {
    return deg * (Math.PI / 180)
  }

  exports.getDistanceFromLatLonInKm = getDistanceFromLatLonInKm;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
