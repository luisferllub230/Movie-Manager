const express = require("express");
const adminController = require("../Controllers/adminController");

//initialize router
const adminRout = express.Router();

//middleware
adminRout.post("/addMovie", adminController.PostAddMovie);
adminRout.get("/addMovie", adminController.GetAddMovie);
adminRout.post("/edit", adminController.PosEdit);
adminRout.get("/edit", adminController.GetEdit);
adminRout.get("/:id", adminController.GetDelete);
adminRout.get("/", adminController.GetHome);

module.exports = adminRout;