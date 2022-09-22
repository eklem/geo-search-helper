const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'Fabulous', value: 1 },
  { name: 'Some', value: 111 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
]

// console.log(items)

function sortAndExtract (latLonArr) {
  // sort array
  sort(latLonArr)
  latLonArr.splice(1, latLonArr.length - 2)
  return latLonArr
}

function sort (latLonArr) {
  latLonArr.sort((a, b) => a - b)
  return latLonArr
}

const items2 = sortAndExtract(items.map(({ value }) => (value)))
console.log(JSON.stringify(items2))
