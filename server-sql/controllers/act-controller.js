const database = require('../models/database');
const UserActivity = require('./ua-controller.js');

const sequelize = database.sequelize;
const Activity = database.Activity;

function index(req, res) { // retruns a list of all activities
  Activity.findAll({}).then((acts) => {
    res.json(acts);
  });
}

function add(req, res, next) { // adds a new activity to the database
  console.log("inside act", req.body)
  Activity.create(req.body.data.event)
    .then((resp) => {
      console.log(resp);
      req.actKey = resp.dataValues._id;
    })
    .catch((err) => {
      if (err) console.error(err);
    });
  next();
}

function show(req, res, next) { // finds a single activity
  Activity.find(req.body[0], err => {
    if (err) console.error(err);
  });
  next();
}

module.exports = { index, add, show };
