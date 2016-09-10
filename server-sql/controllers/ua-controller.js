"use strict";
const database = require('../models/database');

const sequelize = database.sequelize;
const UserActivity = database.UserActivity;
const Activity = database.Activity;

function index(req, res) { // displays all activities associated with users? for devs not production
  UserActivity.findAll({}).then((uas) => {
    res.json(uas);
  });
}

function add(req, res, next) { // associates a user and a activity
  if (req.actKey) {
    const updateObj = { "activityid": req.actKey, "userid": req.body.data[0].userid }
    UserActivity.create(req.body.data[0], err => {
      if (err) console.error(err);
  });
  }
  UserActivity.create(req.body.data[0], err => {
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

function findbyact(req, res, next) { // finds all users by activity
  Activity.sequelize.query('SELECT "username" from "users" join "useractivities" on ' +
  '("useractivities"."userId" = "users"."_id") join "activities" on ("activities"."_id" = ' +
  '"useractivities"."activityId") where "actname" =\'' + req.params.actname + '\'')
  .then((data) => {
    const output = { users: data[0] };
    res.json(output);
    next();
  });
}


module.exports = { index, add, show, findbyact };
