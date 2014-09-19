
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
  
  // do work; return stuff
  /*var x= _.groupBy(comments, function (username) {
  	return username
  })*/

  var groupedComments = _.groupBy(comments, 'username')
  
  return _.forEach(groupedComments, function(item) {   
  	var commentCount = _.size(item)

  	console.log(item)
  	console.log(commentCount )

  })

  //})

  //var result = { 'hot': hot, 'warm': warm } 
  //return commentCount;
   
};


module.exports = commentSort




/* official solution:


*/



