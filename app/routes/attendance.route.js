const AttendanceController = require("../controllers/attendance.controller");
var express = require("express");
var bodyParser = require("body-parser");
var jobs = express.Router();
jobs.use(bodyParser.json());

jobs.route("/").post(function (req, res, next) {
  AttendanceController.createAttendance(req, res, next);
});

module.exports = jobs;
