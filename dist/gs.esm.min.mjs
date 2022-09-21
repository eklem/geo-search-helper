/**
 * Short version for minified scripts:
 *
 * The MIT License (MIT)
 * Copyright (c) 2022 Espen Klem
 *
 * Full license text + Third party licenses found in ./LICENSES.txt
 */

function t(t,n,h,M){const s=a(h-t),r=a(M-n),i=Math.sin(s/2)*Math.sin(s/2)+Math.cos(a(t))*Math.cos(a(h))*Math.sin(r/2)*Math.sin(r/2);return 6371*(2*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))}function a(t){return t*(Math.PI/180)}export{t as getDistanceFromLatLonInKm};
