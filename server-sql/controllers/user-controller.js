"use strict";
const database = require('../models/database');

const sequelize = database.sequelize;
const User = database.User;

function index(req, res) {
  User.findAll({}).then((users) => {
    res.json(users);
  });
}

function add(req, res, next) { // create a new user record
  User.create(req.body[0], err => {
    if (err) console.error(err);
  });
  next();
}

function show(req, res, next) { // to get the logged in user's profile'
  User.findOne({ where: { username: req.params.username, password: req.params.password } }, err => {
    if (err) console.error(err);
  })
  .then((user) => {
    if (user === null) {
      res.status(500).send(null);
    } else {
      req.user = user;
    }
    next();
  });
}

function conn(req, res) {
  User.sequelize.query('SELECT "actname" from "activities" join "useractivities" on ' +
    '("useractivities"."activityId" = "activities"."_id") join "users" on ' +
    '("users"."_id" = "useractivities"."userId") where "username" =\'' + req.params.username + '\'')
    .then((data) => {
      const output = { activities: data[0], user: req.user };
      res.json(output);
    });
}

function profile(req, res, next) {
  User.findOne({ where: { username: req.params.username } }, err => {
    if (err) console.error(err);
  })
  .then((user) => {
    const userprofile = { "username": user.username, "profilepic": user.profilepic, "bio": user.bio };
    if (user === null) {
      res.status(500).send(null);
    } else {
      res.json(userprofile);
    }
    next();
  });
}

module.exports = { index, add, show, conn, profile };
