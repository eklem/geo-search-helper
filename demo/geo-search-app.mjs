// How to get search-index initialised:
// https://stackoverflow.com/questions/42237388/syntaxerror-import-declarations-may-only-appear-at-top-level-of-a-module/48583456#48583456

import { cities } from  './cities.mjs'
console.dir(cities[25].name)

import { reactive, html } from 'https://esm.sh/@arrow-js/core';

// import { PUT, DOCUMENT_COUNT, ALL_DOCUMENTS, DICTIONARY } from 'https://cdn.jsdelivr.net/npm/search-index@3.4.0/dist/search-index.js'
import { si } from './search-index-esm-4.0.0.js'
const idx = await si()
// console.log(JSON.stringify(searchIndex))