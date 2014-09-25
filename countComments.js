
//This categorises towns by temperature

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


var comments = process.argv[2]

var commentSort = function(comments) {
  
  var result = [];
  var groupedComments = _.groupBy(comments, 'username')
  
  _.forEach(groupedComments, function(value, key) {   
    result.push( { 'username': key, 'comment_count': _.size(value) }) 
  })
  
  result = _.sortBy(result, 'comment_count').reverse();
  return result;
   
};


module.exports = commentSort




/* official solution:

  the same
*/



