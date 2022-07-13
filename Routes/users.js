const express = require("express");
const userController = require("../Controllers/userController");

//initialize router
const UserRout = express.Router();

//middleware
UserRout.get("/genre", userController.GetGenre);
UserRout.get("/", userController.GetHome);

module.exports = UserRout;