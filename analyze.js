
//This sorts people by income

var _ = require('lodash')

/*
var freelancers = 
    [ { name: "mike",  income: 2563 },
      { name: "kim",   income: 1587 },
      { name: "liz",   income: 3541 },
      { name: "tom",   income: 2475 },
      { name: "bello", income: 987  },
      { name: "frank", income: 2975 } 
    ]
*/


var freelancers = process.argv[2]


var incomeSort = function(freelancers) {

  var result = {};

  var incomeSum = _.reduce(freelancers, function(sum, value) {       
      return sum + value.income 
    }, 
    0                          
  );

  var incomeAverage = incomeSum / _.size(freelancers);

  var underperform = _.filter(freelancers, function(value, key) { 
     return value.income <= incomeAverage;
  })

  var overperform = _.filter(freelancers, function(value, key) { 
     return value.income > incomeAverage;
  })

  result.average = incomeAverage
  result.underperform = _.sortBy(underperform, 'income') 
  result.overperform = _.sortBy(overperform, 'income')

  return result

};


module.exports = incomeSort




/* official solution:

  

*/



