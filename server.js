const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config/config");
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//enable cors
app.use(cors());

//logger
app.use(morgan("dev"));

//routes
const appRouter = require("./app/routes/app.routes");
appRouter.initialize(app);
/* Request Middleware */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "token");
  res.header("Access-Control-Max-Age", "3600");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(config.dbUrl)
  .then(() => {
    console.log("Successfully connected to the database:", config.dbUrl);
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// listen for requests
app.listen(config.serverPort, () => {
  console.log("Server is listening on port ", config.serverPort);
});

module.exports = app;
