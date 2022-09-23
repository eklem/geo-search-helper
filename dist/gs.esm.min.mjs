/**
 * Short version for minified scripts:
 *
 * The MIT License (MIT)
 * Copyright (c) 2022 Espen Klem
 *
 * Full license text + Third party licenses found in ./LICENSES.txt
 */

function t(t,n){const o=s(t,n,0),a=s(t,n,90),r=s(t,n,180),l=s(t,n,270);return{sw:{lat:r.lat,lon:l.lon},ne:{lat:o.lat,lon:a.lon}}}function n(t,n,r){if(t.length<=1)throw new Error("mapBoundsPoints: Array to short to find boundaries. Needs two or more points.");const s=o(t,n);a(s);const l=o(t,r);return a(l),{sw:{lat:s[0],lon:l[0]},ne:{lat:s[1],lon:l[1]}}}function o(t,n){return t.map((t=>n.reduce(((t,n)=>t[n]),t)))}function a(t){return t.sort(((t,n)=>t-n)),t.splice(1,t.length-2),t}function r(t,n){const o=l(n.lat-t.lat),a=l(n.lon-t.lon),r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(l(t.lat))*Math.cos(l(n.lat))*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))}function s(t,n,o,a=6371){const r=Math.PI,s=l(t.lat),h=l(t.lon),c=l(Number(o)),u=n/a,M=u*Math.cos(c);let i=s+M;Math.abs(i)>r/2&&(i=i>0?r-i:-r-i);const f=Math.log(Math.tan(i/2+r/4)/Math.tan(s/2+r/4)),d=Math.abs(f)>1e-11?M/f:Math.cos(s),p=h+u*Math.sin(c)/d;return{lat:e(i),lon:e(p)}}function l(t){return t*(Math.PI/180)}function e(t){return 180*t/Math.PI}export{r as getDistanceFromLatLonInKm,n as mapBoundsPoints,t as mapBoundsPosKm};
