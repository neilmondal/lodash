
//This categorises towns

var _ = require('lodash')

/*var towns = 
[
   { Hamburg:    { population: 1.698 },
     Strasbourg: { population: 0.272 },
     Rom:        { population: 2.753 },
     Dublin:     { population: 0.528 } 
   }
]*/

var towns = process.argv[2]

var categorisedTowns = function(towns) {
  // do work; return stuff
  return _.forEach(towns, function(towns) { 
  	var size = '';
  	if(towns.population > 1){
  		size = 'big'
  	}
  	else if(towns.population > 0.5){
  		size = 'med'
  	}
  	else
  		size = 'small'
  	towns.size = size;
  	
  })

  
};


module.exports = categorisedTowns



