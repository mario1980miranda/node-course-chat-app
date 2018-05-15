var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

var date = moment();
// console.log(date.format('MMM YYYY'));
date.add(1000, 'year').subtract(4, 'months');
console.log(date.format('MMM Do, YYYY h:mm:ss a'));

var createdAt = 1234;
var date2 = moment(createdAt);
console.log(date2.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);