const Sequelize = require('sequelize');

//if there is a password, make it the third parameter after the username; otherwise, make it null and include a comma after it
const sequelize = new Sequelize('ctmwayln', 'ctmwayln', '4iQqD0Ei34KjksE1b-wlbBTyKbdw22wZ', {
  host: 'elmer-01.db.elephantsql.com',
  dialect: 'postgres'
});

var User = sequelize.define('users', {
	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
	id: Sequelize.INTEGER,
	username: Sequelize.STRING,
	profilepic: Sequelize.STRING,
  createdAt: Sequelize.literal('NOW()'),
  updatedAt: Sequelize.literal('NOW()')
}, {
  timestamp: false
});

var Activities = sequelize.define('activities', {
	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
	id: Sequelize.INTEGER,
	actname: Sequelize.STRING,
	actdesc: Sequelize.STRING,
});

var Match = sequelize.define('match', {
	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
	userid: Sequelize.INTEGER,
	actid: Sequelize.INTEGER,
});


module.exports = {sequelize: sequelize, User: User, Activities: Activities, Match: Match};