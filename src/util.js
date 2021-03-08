const lodash = require('lodash');

const createArray = arraySize => {
  return lodash.times(arraySize, lodash.uniqueId.bind(null, 'ball_'));
}

const toCamelCase = string => {
  return lodash.camelCase(string);
}

const getIndexOf = (array, value) => {
  return lodash.indexOf(array, value);
}

module.exports = { createArray, toCamelCase, getIndexOf };