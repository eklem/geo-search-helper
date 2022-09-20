import test from 'ava'
import { getDistanceFromLatLonInKm } from '../dist/gsh.esm.mjs'

test('distance between Oslo and Trondheim in km', (t) => {
  t.plan(1)
  const osloTrondheim = 391.1506651059311
  const osloTrondheimCalculated = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 63.43533499958433, 10.394401877202329)
  t.deepEqual(osloTrondheimCalculated, osloTrondheim)
})

test('distance between Oslo and Drammen in km', (t) => {
  t.plan(1)
  const osloDrammen = 35.99041520108006
  const osloDrammenCalculated = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 59.74868088039004, 10.204349443896618)
  t.deepEqual(osloDrammenCalculated, osloDrammen)
})

test('distance between Oslo and Bergen in km', (t) => {
  t.plan(1)
  const osloBergen = 304.75143002827195
  const osloBergenCalculated = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 60.405517171897536, 5.325002075776659)
  t.deepEqual(osloBergenCalculated, osloBergen)
})

test('distance between Oslo and North Cape in km', (t) => {
  t.plan(1)
  const osloNorthcape = 1420.4342433086122
  const osloNorthcapeCalculated = getDistanceFromLatLonInKm(59.92163880374441, 10.748807812690696, 71.17150234604291, 25.783662073920766)
  t.deepEqual(osloNorthcapeCalculated, osloNorthcape)
})
