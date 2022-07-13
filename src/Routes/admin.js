import express from "express";
import * as adminController from "../Controllers/adminController.js";

//initialize router
const rout = express.Router();

//middleware
rout.post("/addMovie", adminController.PostAddMovie);
rout.get("/addMovie", adminController.GetAddMovie);

export default rout;