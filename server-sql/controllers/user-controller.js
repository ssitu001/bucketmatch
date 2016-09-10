"use strict"
const database = require('../models/database');
const pg = require('pg');

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
	User.findOne({where:{username: req.params.username, password: req.params.password}}, err => {
    if (err) console.error(err);
  })
  .then(function(user){
    if (user === null){
      res.status(500).send(null);
    }
    else { req.user = user;
    }    next();
  });
  
}

function conn(req, res, next){
    User.sequelize.query('SELECT "actname" from "activities" join "useractivities" on ("useractivities"."activityId" = "activities"."_id") join "users" on ("users"."_id" = "useractivities"."userId") where "username" =\'' + req.params.username + '\'').then(function(data){
      var output = {activities: data[0], user: req.user};
      res.json(output);
    })
  }

  function profile(req, res, next){
	  console.log(req.params);
	  User.findOne({where:{username: req.params.username }}, err => {
    if (err) console.error(err);
    })
    .then(function(user){
    
      let userprofile = {"username": user.username, "profilepic": user.profilepic, "bio": user.bio};
      console.log(userprofile);      
      if (user === null){
        res.status(500).send(null);
      }
      else { 
        res.json(userprofile);
      }
      next();
    });
  }
  
  // next();


module.exports = { index, add, show, conn , profile};
