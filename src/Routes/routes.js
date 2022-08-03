import express from 'express';
import {GetAddMovie,GetDelete,GetEdit,GetHome,PostAddMovie,PostEditMovie} from '../Controllers/movieController.js';
import get404 from '../Controllers/errorController.js';

//initialize router
const movieRout = express.Router();

//middleware
movieRout.get("/", GetHome);

movieRout.post("/addMovie", PostAddMovie);
movieRout.get("/addMovie", GetAddMovie);

movieRout.post("/editMovie", PostEditMovie);
movieRout.get("/edit/:id/:edit", GetEdit);

movieRout.get("/delete/:id", GetDelete);

movieRout.use("/",get404);

export default movieRout;