const database = require('../models/database');
const sequelize = database.sequelize;
const UserActivity = database.UserActivity;
const Activity = database.Activity;

function index(req, res) {
	// var options = {};
	// options.where = req.query;
	//displays all activities associated with users?
	UserActivity.findAll({}).then(function(uas) {
  	var indexArr = uas.map(function(e){return e.dataValues})
  	console.log(uas);
  	res.json(uas);
	});
}

function add(req, res, next) {
	console.log(req.body);
	UserActivity.create(req.body[0], err => {
    if (err) console.error(err);
  });
  next();
}

function show(req, res, next) {
	// console.log(req.body);
	// Activity.create(req.body[0], err => {
  //   if (err) console.error(err);
  // });
	
  next();
}

function findbyact (req, res, next){
	Activity.sequelize.query('SELECT "username" from "users" join "useractivities" on ("useractivities"."userId" = "users"."_id") join "activities" on ("activities"."_id" = "useractivities"."activityId") where "actname" =\'' + req.params.actname + '\'').then(function(data){
      let output = {users: data[0]};
			console.log(output);
		
      res.json(output);
			next();			
			
    })

}


module.exports = { index, add, show, findbyact};
