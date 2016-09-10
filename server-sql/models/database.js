const Sequelize = require('sequelize');

//if there is a password, make it the third parameter after the username; otherwise, make it null and include a comma after it
const sequelize = new Sequelize('horegyuy', 'horegyuy', 'YDEWOzNuQL9R8hViSAvrZD9KIRxmMOYC', {
  host: 'elmer-01.db.elephantsql.com',
  dialect: 'postgres'
});

var User = sequelize.define('users', {
	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
	username: Sequelize.STRING,
	profilepic: Sequelize.STRING,
  bio: Sequelize.STRING,
  password:Sequelize.STRING,
}, {
  timestamp: false
});

var Activity = sequelize.define('activities', {
	_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true},
	actname: Sequelize.STRING,
	actdesc: Sequelize.STRING,
});

var UserActivity = sequelize.define('useractivities', {
  _id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement:true },
  status: Sequelize.BOOLEAN, // if open, true, if completed false
});

Activity.belongsToMany(User, { through: 'useractivities'});
User.belongsToMany(Activity, { through: 'useractivities'});

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

	module.exports = {sequelize: sequelize, User: User, Activity:Activity, UserActivity:UserActivity}

