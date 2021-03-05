const lodash = require('lodash');

const createArray = arraySize => {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

const toCamelCase = string => {
  return string.split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
}

const getIndexOf = (array, value) => {
  return array[value];
}

module.exports = { createArray, toCamelCase, getIndexOf };