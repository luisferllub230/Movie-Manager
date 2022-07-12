import express from "express";

//initialize router
const rout = express.Router();

//middleware
rout.use("/",(req, res, next) => {
    res.render("index",{
        title: "Home",
        message: "Welcome to the home page",
    });
});

export default rout;