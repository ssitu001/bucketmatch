const database = require('../models/database');
const sequelize = database.sequelize;
const User = database.User;

function index(req, res) {
	// var options = {
  //   where: {
  //     id: 2
  //   }
  // }
	//options.where = req.query;
	User.findAll({}).then(function(users) {
  	//var indexArr = users.map(function(e){return e.dataValues})
  	console.log(users);
  	res.json(users);
	});
}

module.exports = { index };
