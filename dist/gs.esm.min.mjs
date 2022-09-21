/**
 * Short version for minified scripts:
 *
 * The MIT License (MIT)
 * Copyright (c) 2022 Espen Klem
 *
 * Full license text + Third party licenses found in ./LICENSES.txt
 */

function t(t,a){const o=n(t,a,0),h=n(t,a,90),l=n(t,a,180),M=n(t,a,270);return{sw:{lat:l.lat,lon:M.lon},ne:{lat:o.lat,lon:h.lon}}}function a(t,a){const n=o(a.lat-t.lat),h=o(a.lon-t.lon),l=Math.sin(n/2)*Math.sin(n/2)+Math.cos(o(t.lat))*Math.cos(o(a.lat))*Math.sin(h/2)*Math.sin(h/2);return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}function n(t,a,n,l=6371){const M=Math.PI,s=o(t.lat),r=o(t.lon),c=o(Number(n)),u=a/l,e=u*Math.cos(c);let i=s+e;Math.abs(i)>M/2&&(i=i>0?M-i:-M-i);const f=Math.log(Math.tan(i/2+M/4)/Math.tan(s/2+M/4)),b=Math.abs(f)>1e-11?e/f:Math.cos(s),I=r+u*Math.sin(c)/b;return{lat:h(i),lon:h(I)}}function o(t){return t*(Math.PI/180)}function h(t){return 180*t/Math.PI}export{a as getDistanceFromLatLonInKm,t as mapBoundariesSWNE,n as rhumbDestinationToPoint};
