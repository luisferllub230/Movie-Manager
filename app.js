import express from "express";
import path from "path";
import expressHbs from "express-handlebars";
import routers from "./src/Routes/routers.js";

// Initialize express app
const app = express();

//make the static folder public
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, './src/Public')));

// Configure handlebars
app.engine("hbs", expressHbs());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/Views"));

//call the middleware
app.use(routers);

app.use("/", (req, res, next) => { //no found page
    res.status(404).render("404",{
      title: "404",
      message: "Page not found",
      layout: false
    });
});

// Configure routes
app.listen(process.env.port || 5500);