const database = require('../models/database');
const sequelize = database.sequelize;
const User = database.User;

function index(req, res) {
	// var options = {};
	// options.where = req.query;
	User.findAll({}).then(function(users) {
  	var indexArr = users.map(function(e){return e.dataValues})
  	console.log(users);
  	res.json(users);
	});
}

function add(req, res, next) {
	console.log(req.body);
	User.create(req.body[0], err => {
    if (err) console.error(err);
  });
  next();
}

module.exports = { index, add };
