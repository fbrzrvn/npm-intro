const date = require('../src/date');


test('gets current day', () => {
  expect(date.getWeekDay()).toBe((new Date()).getDay());
});

test('gets current month', () => {
  expect(date.getCurrentMonth()).toBe((new Date()).getMonth());
});

test('gets current year', () => {
  expect(date.getCurrentYear()).toBe((new Date()).getFullYear());
});