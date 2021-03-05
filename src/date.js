const moment = require('moment');

const getFullDate = () => {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
}

const getWeekDay = () => {
  return moment().day();
}

const getCurrentMonth = () => {
  return moment().month();
}

const getCurrentYear = () => {
  return moment().get('year');
}

module.exports = { getWeekDay, getCurrentMonth, getCurrentYear };