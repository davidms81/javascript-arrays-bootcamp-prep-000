var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(element, array) {
  return [element, ...array]
}

function destructivelyAddElementToEndOfArray(element, array) {
  array.unshift(element)
  return [element, ...array]
}