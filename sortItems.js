
//This gets all users in a js object who are active

var _ = require('lodash')


/*
 var items =   
	{ article: 41,   quantity: 24,
    article: 2323, quantity: 2 ,
   article: 655,  quantity: 23 ,
   article: 63,  quantity: 275 };
*/


//var items = process.argv[2]

var sortItems = function(items) {
  // do work; return stuff
  return _.sortBy(items, 'quantity').reverse();
};


module.exports = sortItems



