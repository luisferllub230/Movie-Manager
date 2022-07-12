import express from "express";
import path from "path";
import expressHbs from "express-handlebars";
import usersRout from "./src/Routes/users.js";
import adminRout from "./src/Routes/admin.js";
import errorRout from "./src/Routes/error.js";

// Initialize express app
const app = express();

//make the static folder public
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, './src/Public')));

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
app.use("/", errorRout);  //bug, it's not working good

// Configure routes
app.listen(process.env.port || 5500);