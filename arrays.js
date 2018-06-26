var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(element, array) {
  addElementToBeginningOfArray.unshift (element);
  return array;
}

function destructivelyAddElementToEndOfArray(element, array) {
  array.unshift(element);
  return array;
}