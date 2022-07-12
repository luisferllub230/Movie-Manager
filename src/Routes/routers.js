import express from "express";

//initialize router
const rout = express.Router();

//middleware
rout.use("/genre",(req, res, next) => {
    res.render("genre",{
        title: "Home",
        message: "Welcome to genre page",
        activeGenre: true,
    });
});

rout.use("/",(req, res, next) => {
    res.render("index",{
        title: "Home",
        message: "Welcome to the home page",
        activeHome: true,
    });
});

export default rout;