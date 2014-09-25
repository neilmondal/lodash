
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

  var distinctOrders = _.reduce(orders, function(result, value) { 

      var article = value.article;

      if(result[article]) //if it is already a key
          result[article] += value.quantity; //Add the quantity to it
      else
          result[article] = value.quantity; // Else add a key    


     // result[article] = result[article] ? result[article] + value.quantity : value.quantity // Else add a key           
      
      return result      
    }, 
    {}                          
  );

  var finalOrder = []; 

  _.forEach(distinctOrders, function(value, key) { 
      finalOrder.push( { 'article': parseInt(key), 'total_orders': value } );
  })

  finalOrder = _.sortBy(finalOrder, 'total_orders').reverse();
  

  return finalOrder

};


module.exports = orderSort




/* official solution:

  
   var _ = require("lodash");

   var overview = function (orders) {

       var overviewarray = [],
           total = 0;

       // Group by article
       orders = _.groupBy(orders, 'article');

       _.forEach(orders, function (item, key) {

           key = parseInt(key);
           total = 0;

           // If only one article
           if (item.length === 1) {
               total = item[0].quantity;

           // Else make sum of all orders
           } else {
               total = _.reduce(item, function(sum, item) {
                   return sum + item.quantity;
               }, 0);
           }

           overviewarray.push({
               article: key,
               total_orders: total
           });

       });

       // Order
       overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

       return overviewarray;
   };

   module.exports = overview;

*/



