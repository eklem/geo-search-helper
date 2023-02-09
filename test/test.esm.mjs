import test from 'ava'
import { mapBoundsPosKm, mapBoundsPoints, getDistanceFromLatLonInKm } from '../dist/geo-search-helper.esm.mjs'

const data = [
  {
    id: '14272199162',
    title: '4',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.907427,
    longitude: 10.785616,
    url: 'https://live.staticflickr.com/5513/14272199162_e7547e4394_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/14272199162'
  },
  {
    id: '33806089613',
    title: '7',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      '7',
      'seven',
      'sju',
      'syv',
      'tall',
      'number',
      'signage'
    ],
    latitude: 59.924661,
    longitude: 10.787963,
    url: 'https://live.staticflickr.com/4160/33806089613_9a9e244313_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/33806089613'
  },
  {
    id: '14087619307',
    title: '8',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      'signs',
      'sign',
      'number',
      'tall'
    ],
    latitude: 60.51183,
    longitude: 7.864522,
    url: 'https://live.staticflickr.com/3830/14087619307_289a500344_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/14087619307'
  },
  {
    id: '42936268160',
    title: '8',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 57.689935,
    longitude: 18.355091,
    url: 'https://live.staticflickr.com/1848/42936268160_955fc8168b_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/42936268160'
  },
  {
    id: '32728799315',
    title: '14',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.923287,
    longitude: 10.783403,
    url: 'https://live.staticflickr.com/698/32728799315_be75112dbc_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/32728799315'
  },
  {
    id: '51630837269',
    title: '15',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      '15',
      'nummer',
      'skilt',
      'sign',
      'number',
      'tall'
    ],
    latitude: 59.923002,
    longitude: 10.781936,
    url: 'https://live.staticflickr.com/65535/51630837269_f6de0668ac_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/51630837269'
  },
  {
    id: '36563676966',
    title: '16',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.911813,
    longitude: 10.743593,
    url: 'https://live.staticflickr.com/4409/36563676966_5e891bd96c_b.jpg',
    height: 768,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/36563676966'
  },
  {
    id: '52222129945',
    title: '18',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      '18',
      'number',
      'tall',
      'atten',
      'eighteen'
    ],
    latitude: 55.474836,
    longitude: 9.29998,
    url: 'https://live.staticflickr.com/65535/52222129945_9b8c7cf7d6_b.jpg',
    height: 872,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/52222129945'
  },
  {
    id: '28802981991',
    title: '20',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      'oslonorway',
      '20',
      'tyve',
      'tjue',
      'twenty',
      'tall',
      'number',
      'sign',
      'skilt',
      'gate',
      'port'
    ],
    latitude: 59.902857,
    longitude: 10.744145,
    url: 'https://live.staticflickr.com/8732/28802981991_18b39ec6bc_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/28802981991'
  },
  {
    id: '31552446121',
    title: '20',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      '20',
      'tjue',
      'tyve',
      'twenty',
      'number',
      'nummer'
    ],
    latitude: 69.692955,
    longitude: 18.615516,
    url: 'https://live.staticflickr.com/347/31552446121_3b04570427_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/31552446121'
  },
  {
    id: '32746178503',
    title: '22',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      'tall',
      'number',
      'numbers',
      'sign',
      '22'
    ],
    latitude: 59.912627,
    longitude: 10.8003,
    url: 'https://live.staticflickr.com/2824/32746178503_41541f8137_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/32746178503'
  },
  {
    id: '28773687202',
    title: '30',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      'tredve',
      'tretti',
      'thirty',
      'sign',
      'nummer',
      'number',
      '30'
    ],
    latitude: 37.965448,
    longitude: 23.720769,
    url: 'https://live.staticflickr.com/8450/28773687202_2bc479d45b_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/28773687202'
  },
  {
    id: '43837056445',
    title: '36',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.519317,
    longitude: 15.036993,
    url: 'https://live.staticflickr.com/1881/43837056445_94b269f564_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/43837056445'
  },
  {
    id: '35682277870',
    title: '37',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 58.868847,
    longitude: 9.413256,
    url: 'https://live.staticflickr.com/4324/35682277870_f9f84c319f_b.jpg',
    height: 1024,
    width: 945,
    urlphotopage: 'https://flickr.com/photos/breial/35682277870'
  },
  {
    id: '32758117502',
    title: '41',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      '41',
      'tall',
      'number'
    ],
    latitude: 59.912136,
    longitude: 10.83213,
    url: 'https://live.staticflickr.com/2917/32758117502_529d4c019b_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/32758117502'
  },
  {
    id: '43959567345',
    title: '42',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.923197,
    longitude: 10.79419,
    url: 'https://live.staticflickr.com/1903/43959567345_c231398384_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/43959567345'
  },
  {
    id: '44149997284',
    title: '43',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.92166,
    longitude: 10.794811,
    url: 'https://live.staticflickr.com/1954/44149997284_29a1282b9d_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/44149997284'
  },
  {
    id: '36072200515',
    title: '44',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 58.868847,
    longitude: 9.413256,
    url: 'https://live.staticflickr.com/4303/36072200515_794fd43b9c_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/36072200515'
  },
  {
    id: '52221677723',
    title: '46',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      '46',
      'førtiseks',
      'number',
      'tall',
      'sign'
    ],
    latitude: 59.518688,
    longitude: 15.041241,
    url: 'https://live.staticflickr.com/65535/52221677723_55c23082b1_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/52221677723'
  },
  {
    id: '52221677823',
    title: '46',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      '46',
      'førtiseks',
      'number',
      'tall',
      'sign'
    ],
    latitude: 59.919833,
    longitude: 10.774477,
    url: 'https://live.staticflickr.com/65535/52221677823_8dab6b07a9_b.jpg',
    height: 768,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/52221677823'
  },
  {
    id: '27862042313',
    title: '55',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      'kardamyliκαρδαμύλη'
    ],
    latitude: 36.888122,
    longitude: 22.232204,
    url: 'https://live.staticflickr.com/8746/27862042313_d7f4a3fefc_b.jpg',
    height: 1024,
    width: 765,
    urlphotopage: 'https://flickr.com/photos/breial/27862042313'
  },
  {
    id: '32839387225',
    title: '75',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 60.023541,
    longitude: 10.810061,
    url: 'https://live.staticflickr.com/2852/32839387225_96076843af_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/32839387225'
  },
  {
    id: '14793258208',
    title: '76',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      'sign',
      'number',
      'tall',
      'skilt',
      '76'
    ],
    latitude: 64.145133,
    longitude: -21.922706,
    url: 'https://live.staticflickr.com/3912/14793258208_8b636121c4_b.jpg',
    height: 765,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/14793258208'
  },
  {
    id: '32467497026',
    title: '77',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.912541,
    longitude: 10.800188,
    url: 'https://live.staticflickr.com/366/32467497026_cb98076a57_b.jpg',
    height: 768,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/32467497026'
  },
  {
    id: '31885431044',
    title: '83',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: null,
    latitude: 59.92205,
    longitude: 10.785269,
    url: 'https://live.staticflickr.com/694/31885431044_175b074117_b.jpg',
    height: 768,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/31885431044'
  },
  {
    id: '32746178473',
    title: '90',
    licenseid: '0',
    license: '© All rights reserved',
    ownername: '// Maria A //',
    tags: [
      'tall',
      'number',
      'numbers',
      '90',
      'nitti'
    ],
    latitude: 59.92198,
    longitude: 10.784688,
    url: 'https://live.staticflickr.com/3735/32746178473_ef77e9f062_b.jpg',
    height: 1024,
    width: 1024,
    urlphotopage: 'https://flickr.com/photos/breial/32746178473'
  }
]

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

test('SW and NE map boundaries from a dataset of points', (t) => {
  t.plan(1)
  const mapBoundaries = { sw: { lat: 36.888122, lon: -21.922706 }, ne: { lat: 69.692955, lon: 23.720769 } }
  const mapBoundariesCalculated = mapBoundsPoints(data, ['latitude'], ['longitude'])
  t.deepEqual(mapBoundariesCalculated, mapBoundaries)
})
