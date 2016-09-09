const Sequelize = require('sequelize');

//if there is a password, make it the third parameter after the username; otherwise, make it null and include a comma after it
const sequelize = new Sequelize('bucket', 'kate', 'null', {
  host: 'localhost',
  dialect: 'postgres'
});


var User = sequelize.define('users', {
	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
	id: Sequelize.INTEGER,
	username: Sequelize.STRING,
	profilepic: Sequelize.STRING,
  // createdAt: Sequelize.literal('NOW()'),
  // updatedAt: Sequelize.literal('NOW()')
}, {
  timestamp: false
});

// var Activities = sequelize.define('activities', {
// 	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
// 	id: Sequelize.INTEGER,
// 	actname: Sequelize.STRING,
// 	actdesc: Sequelize.STRING,
// });

// var Match = sequelize.define('match', {
// 	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
// 	userid: Sequelize.INTEGER,
// 	actid: Sequelize.INTEGER,
// });
// Activities: Activities, Match: Match

// Sync all models that aren't already in the database
sequelize.sync()
// // Force sync all models
// sequelize.sync({force: true})
// // Drop all tables -- ran once 9/9 2:48pm
// sequelize.drop()
// emit handling:
.then(function() {
  // woot woot
}).catch(function(error) {
  // whooops
})

	module.exports = {sequelize: sequelize, User: User}