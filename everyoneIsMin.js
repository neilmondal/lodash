
//This categorises towns by temperature

var _ = require('lodash')

/*
var towns = 
{
    Hamburg:   [14,15,16,14,18,17,20,22,21,18,19,23],
    Munich:    [16,17,19,20,21,23,22,21,20,19,24,23],
    Madrid:    [24,23,20,24,24,23,21,22,24,20,24,22],
    Stockholm: [16,14,12,15,13,14,14,12,11,14,15,14],
    Warsaw:    [17,15,16,18,20,20,21,18,19,18,17,20]    
}
*/


var towns = process.argv[2]

var categorisedTowns = function(towns) {
  
  var hot = [];
  var warm = [];
  // do work; return stuff
  _.forEach(towns, function(value, key) { 

  	if (_.every(towns[key], function(temp) { return temp > 19 })){
  		hot.push(key)
  	}
  	else if (_.some(towns[key], function(temp) { return temp > 19 })){
  		warm.push(key)
  	}
  })

  var result = { 'hot': hot, 'warm': warm } 
  return result;
   
};


module.exports = categorisedTowns





/* official solution:

var categorisedTowns = function(item) {
  
  var result = { hot = [], warm = [] } 


	function check_temp (item) {
	    return item > 19;
	}

	_.forEach(item, function (town, townname) {

	    if (_.every(town, check_temp)) {
	        result.hot.push(townname);
	    } else if (_.some(town, check_temp)) {
	        result.warm.push(townname);
	    }

	});

  return result;
   
};

*/



