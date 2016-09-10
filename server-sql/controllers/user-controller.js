const database = require('../models/database');

const sequelize = database.sequelize;
const User = database.User;

function index(req, res) {
  // var options = {};
  // options.where = req.query;
  User.findAll({}).then(function (users) {
    var indexArr = users.map(function (e) { return e.dataValues; });
    res.json(users);
  });
}

function add(req, res, next) {
  User.create(req.body[0], err => {
    if (err) console.error(err);
  });
  next();
}
//to get a single user's profile'
function show(req, res, next) {
	console.log(req.params);
	User.findOne({where:{_id: Number(req.params.id)}}, err => {
    if (err) console.error(err);
  }).then(function(user){
    res.json(user);
  })
  
  // next();
}

module.exports = { index, add, show };
