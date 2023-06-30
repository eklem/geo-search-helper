// How to get search-index initialised:
// https://stackoverflow.com/questions/42237388/syntaxerror-import-declarations-may-only-appear-at-top-level-of-a-module/48583456#48583456

import { cities } from  './cities.js'
console.dir(cities)

// import { PUT, DOCUMENT_COUNT, ALL_DOCUMENTS, DICTIONARY } from 'https://cdn.jsdelivr.net/npm/search-index@3.4.0/dist/search-index.js'
// import { si } from './search-index-esm-3.4.0.js'
// console.log(JSON.stringify(si))



// document.getElementById('index').onclick = function () {
//   // popHTML(JSON.stringify(countries), { tagToPop: 'populateElement', tagToPopWith: 'div', append: true })
//   // search-index PUT
// }


// stuff that worked
document.getElementById('index').onclick = function () {
  popHTML(JSON.stringify(countries), { tagToPop: 'populateElement', tagToPopWith: 'div', append: true })
}