import { getDistanceFromLatLonInKm } from '../src/index.mjs'

const osloTrondheim = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 63.43533499958433, 10.394401877202329)
const osloDrammen = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 59.74868088039004, 10.204349443896618)
const osloBergen = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 60.405517171897536, 5.325002075776659)
const osloNordkapp = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 71.17150234604291, 25.783662073920766)
console.log('Distance between Oslo and Trondheim is: ' + osloTrondheim + ' km.')
console.log('Distance between Oslo and Drammen is: ' + osloDrammen + ' km.')
console.log('Distance between Oslo and Bergen is: ' + osloBergen + ' km.')
console.log('Distance between Oslo and North Cape is: ' + osloNordkapp + ' km.')
