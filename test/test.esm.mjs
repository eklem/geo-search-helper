import test from 'ava'
import { getDistanceFromLatLonInKm, mapBoundariesSWNE } from '../dist/gsh.esm.mjs'

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

// test('point 30 km west of Oslo ', (t) => {
//   t.plan(1)
//   const fromPoint = { lat: 59.922667730131145, lon: 10.753622077475681 } // Oslo
//   const toPoint = { lat: 59.922667730131145, lon: 10.215287117743966 }
//   const distance = 30
//   const bearing = 270
//   const toPointCalculated = rhumbDestinationToPoint(fromPoint, distance, bearing)
//   t.deepEqual(toPointCalculated, toPoint)
// })

// test('point 320 km west of Oslo ', (t) => {
//   t.plan(1)
//   const fromPoint = { lat: 59.922667730131145, lon: 10.753622077475681 } // Oslo
//   const toPoint = { lat: 59.922667730131145, lon: 5.011382507004056 }
//   const distance = 320
//   const bearing = 270
//   const toPointCalculated = rhumbDestinationToPoint(fromPoint, distance, bearing)
//   t.deepEqual(toPointCalculated, toPoint)
// })

// test('point 1000 km south of Hammerfest ', (t) => {
//   t.plan(1)
//   const fromPoint = { lat: 70.66612334709887, lon: 23.683028577531065 } // Hammerfest
//   const toPoint = { lat: 61.67290728791157, lon: 23.68302857753107 }
//   const distance = 1000
//   const bearing = 180
//   const toPointCalculated = rhumbDestinationToPoint(fromPoint, distance, bearing)
//   t.deepEqual(toPointCalculated, toPoint)
// })

test('SW and NE map boundaries from a radius 30 km from Oslo as centerpoint ', (t) => {
  t.plan(1)
  const mapBoundaries = { sw: { lat: 59.65184232196879, lon: 10.210489544887386 }, ne: { lat: 60.191435285520036, lon: 11.287126080494007 } }
  const mapBoundariesCalculated = mapBoundariesSWNE({ lat: 59.92163880374441, lon: 10.748807812690696 }, 30)
  t.deepEqual(mapBoundariesCalculated, mapBoundaries)
})
