import express from "express";
import * as userController from "../Controllers/userController.js";

//initialize router
const rout = express.Router();

//middleware
rout.get("/genre", userController.GetGenre);
rout.get("/", userController.GetHome);

export default rout;