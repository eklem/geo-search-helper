const test = require('ava')
const { getDistanceFromLatLonInKm, mapBoundsPosition } = require('../dist/gsh.cjs.js')

test('distance between Oslo and Trondheim in km', (t) => {
  t.plan(1)
  const osloTrondheim = 391.1506651059311
  const osloTrondheimCalculated = getDistanceFromLatLonInKm({ lat: 59.92163880374441, lon: 10.748807812690696 }, { lat: 63.43533499958433, lon: 10.394401877202329 })
  t.deepEqual(osloTrondheimCalculated, osloTrondheim)
})

test('distance between Oslo and Drammen in km', (t) => {
  t.plan(1)
  const osloDrammen = 35.99041520108006
  const osloDrammenCalculated = getDistanceFromLatLonInKm({ lat: 59.92163880374441, lon: 10.748807812690696 }, { lat: 59.74868088039004, lon: 10.204349443896618 })
  t.deepEqual(osloDrammenCalculated, osloDrammen)
})

test('distance between Oslo and Bergen in km', (t) => {
  t.plan(1)
  const osloBergen = 304.75143002827195
  const osloBergenCalculated = getDistanceFromLatLonInKm({ lat: 59.92163880374441, lon: 10.748807812690696 }, { lat: 60.405517171897536, lon: 5.325002075776659 })
  t.deepEqual(osloBergenCalculated, osloBergen)
})

test('distance between Oslo and North Cape in km', (t) => {
  t.plan(1)
  const osloNorthcape = 1420.4342433086122
  const osloNorthcapeCalculated = getDistanceFromLatLonInKm({ lat: 59.92163880374441, lon: 10.748807812690696 }, { lat: 71.17150234604291, lon: 25.783662073920766 })
  t.deepEqual(osloNorthcapeCalculated, osloNorthcape)
})

test('SW and NE map boundaries from a radius 30 km from Oslo as centerpoint ', (t) => {
  t.plan(1)
  const mapBoundaries = { sw: { lat: 59.65184232196879, lon: 10.210489544887386 }, ne: { lat: 60.191435285520036, lon: 11.287126080494007 } }
  const mapBoundariesCalculated = mapBoundsPosKm({ lat: 59.92163880374441, lon: 10.748807812690696 }, 30)
  t.deepEqual(mapBoundariesCalculated, mapBoundaries)
})
