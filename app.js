const express = require("express");
const path = require("path");
const expressHbs = require("express-handlebars");
const usersRout = require("./src/Routes/users");
const adminRout = require("./src/Routes/admin");
const errorRout = require("./src/Routes/error");
const bodyParser = require("body-parser");

// Initialize express app
const app = express();

//initialize body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//make the static folder public
app.use(express.static(path.join(__dirname, "./src/public")));

// Configure handlebars
app.engine("hbs", expressHbs({
    layoutDir: "/src/Views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/Views"));

//call the middleware
app.use('/user/',usersRout);
app.use('/admin/',adminRout);
app.use("/",errorRout);

// Configure routes
app.listen(process.env.port || 5500);