const express = require("express");
const path = require("path");
const expressHbs = require("express-handlebars");
const usersRout = require("./Routes/users");
const adminRout = require("./Routes/admin");
const bodyParser = require("body-parser");

// Initialize express app
const app = express();

//initialize body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//make the static folder public
app.use(express.static(path.join(__dirname, "public")));

// Configure handlebars
app.engine("hbs", expressHbs({
    layoutDir: "/src/Views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "Views"));

//call the middleware
app.use('/user/',usersRout);
app.use('/admin/',adminRout);
app.use("/", (req, res, next) => {
    res.status(404).render("./error/404",{
      title: "404",
      message: "Page not found - 404",
    });
}
);

// Configure routes
app.listen(process.env.port || 5500);