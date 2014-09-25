
//This gives sum of quantities of distinct articles

var _ = require('lodash')

/*
var comments = 
[ 
 { "username": "tim",
  "comment": "when you have new workshoppers?" },
 { "username": "cat_lover",
  "comment": "wtf? where are all the cats gone?" },
 { "username": "max",
  "comment": "where have you been on friday? we missed you!" },
 { "username": "max",
  "comment": "Do dont anwer anymore - why?" },
 { "username": "cat_lover",
  "comment": "MORE cats!!!" },
 { "username": "max",
  "comment": "i really love your site" }
]
*/


var orders = process.argv[2]


var orderSort = function(orders) {

  var distinctOrders = _.reduce(orders, function(result, value, key) {   
      
      //result[value.article] = result[value.article] + value.quantity;
      //var commentCount = _.size(value);

      console.log('value.article', value.article);
      console.log('value.quantity', value.quantity);
      console.log('key', key);
      //console.log('value', value);
      //console.log(result[value.article]);

      if(result[value.article]) //if lCase is a key
          result[value.article] = result[value.article] +  value.quantity; //Add name to its list
      else
          result[value.article] = value.quantity; // Else add a key
               
      
      return result
      
      //result.push( { 'username': key, 'comment_count': commentCount });
      
    }, 
    {}                          
  );

};


module.exports = distinctOrders




/* official solution:

  the same
*/



