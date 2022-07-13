const express = require("express");
const adminController = require("../Controllers/adminController");

//initialize router
const adminRout = express.Router();

//middleware
adminRout.post("/addMovie", adminController.PostAddMovie);
adminRout.get("/addMovie", adminController.GetAddMovie);
adminRout.get("/edit/:edit", adminController.PosEdit);

module.exports = adminRout;