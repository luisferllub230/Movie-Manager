const express = require("express");
const errorController = require("../Controllers/errorController");


//Initialize router
const errorRout = express.Router();

//middleware
// errorRout.use("/", errorController.GetError);

module.exports = errorRout;