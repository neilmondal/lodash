
//This gets all users in a js object who are active

var _ = require('lodash')

/*var users =  [
        { id: 22, username: "martin", active: true},
        { id: 23, username: "max",    active: false},
        { id: 29, username: "hal", active: true},
        { id: 24, username: "linda",  active: false}
    ]
*/

var users = process.argv[2]

var filterwhere = function(users) {
  // do work; return stuff
  return _.where(users, {'active':true})
  //console.log(_.where(users, {'active':true}))
};


module.exports = filterwhere



