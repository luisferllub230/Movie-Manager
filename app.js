import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import expressHbs from 'express-handlebars';
import bodyParser from 'body-parser';
import movieRout from './src/Routes/routes.js';
import sql from './src/util/db.js';
import {MoviesTable} from './src/Models/MoviesDB.js';

// Initialize express app
const app = express();

//initialize body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//make the static folder public
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
app.use(movieRout);

//synchronize the database and start the server
sql.sync().then(() => app.listen(process.env.port || 5500)).catch(err => console.log(err));

