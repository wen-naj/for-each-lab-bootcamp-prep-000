function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log(`${index}: ${element}`)
  })
}

function forEach() {
  array.forEach()
}

function iterate(callback) {
  array = ['1', '2', '3']
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
