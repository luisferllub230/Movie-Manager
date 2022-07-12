import express from "express";
import * as errorController from "../Controllers/errorController.js";

//Initialize router
const rout = express.Router();

//middleware
rout.use("/", errorController.GetError404);

export default rout;