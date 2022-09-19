import fetch from 'node-fetch'
import Geohash from 'latlon-geohash'
import { writeFile } from 'node:fs'
import { extract, words, numbers } from 'words-n-numbers'

// Get photos
const response = await fetch('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=4c118b2a6828ec58ece162c08fce298c&format=json&nojsoncallback=1&id=breial&photoset_id=72157600841917142&extras=geo,license,owner_name,tags,views,url_l')
const data = await response.json()


// grab only the photos with geo location data
function findGeoPhotos (photos) {
  // set aray that is to be returned
  const geoPhotos = photos.filter(photo => photo.geo_is_public === 1)
  return geoPhotos
}

const documentProcess = function (photos) {
  // Exctractm calculate and enrich what's needed
  const photosProcessed = photos.map(function(photoObj) {
    return {
      id: photoObj.id,
      title: photoObj.title,
      licenseid: photoObj.license,
      license: '© All rights reserved',
      ownername: photoObj.ownername,
      tags: extract(photoObj.tags, { regex: [words, numbers], toLowercase: true }),
      latitude: photoObj.latitude,
      longitude: photoObj.longitude,
      geohash: Geohash.encode(photoObj.latitude, photoObj.longitude),
      url: photoObj.url_l,
      height: photoObj.height_l,
      width: photoObj.width_l,
      urlphotopage: 'https://flickr.com/photos/breial/' + photoObj.id
    }
  })
  return photosProcessed
}

// write JSON
function writeJson (fileName, json) {
  const string = JSON.stringify(json, null, '  ')
  writeFile('./dataset/geophotos.json', string, (err) => {
    if (err) throw err;
    console.log('successfully written test_data.json')
  })
}

// run the code!
const geoPhotos = findGeoPhotos(data.photoset.photo)
const geoPhotosProcessed = documentProcess(geoPhotos)
writeJson ('./geo_dataset.json', geoPhotosProcessed)
