const database = require('../models/database');
const sequelize = database.sequelize;
const UserActivity = database.UserActivity;

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

module.exports = { index, add, show};
