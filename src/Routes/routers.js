import express from "express";
import * as userController from "../Controllers/userController.js";

//initialize router
const rout = express.Router();

//middleware
rout.use("/genre", userController.GetGenre);

rout.use("/", userController.GetHome);

export default rout;