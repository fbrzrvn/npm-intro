const util = require('../src/util');


test('creates an array of 6 elements lol', () => {
  expect(util.createArray(6).length).toBe(6);
});

test('moves a string to camel case', () => {
  const  string = 'User name';
  expect(util.toCamelCase('user name')).toBe('User Name');
});

test('gets the index of a given values', () => {
  const arrayColors = ['red', 'blue', 'green'];
  expect(util.getIndexOf(arrayColors, 2)).toBe('green');
});
