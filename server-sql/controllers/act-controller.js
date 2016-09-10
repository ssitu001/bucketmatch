"use strict";

const database = require('../models/database');
const sequelize = database.sequelize;
const Activity = database.Activity;
const UserActivity = require('./ua-controller.js');

function index(req, res) {
	// var options = {};
	// options.where = req.query;
	Activity.findAll({}).then(function(acts) {
  	var indexArr = acts.map(function(e){return e.dataValues})
  	console.log(acts);
  	res.json(acts);
	});
}

function add(req, res, next) {
	console.log(req.body);
	Activity.create(req.body[0], err => {
    if (err) console.error(err);
  });
  next();
}

function show(req, res, next) {
	console.log(req.body);
	Activity.find(req.body[0], err => {
    if (err) console.error(err);
  });
	
  next();
}

module.exports = { index, add, show};
