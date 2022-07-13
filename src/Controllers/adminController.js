import * as movieModel from "../Models/testData.js";

//add movie to the database
const GetAddMovie = (req, res, next) => {
    res.render("./admin/addMovie",{
        title: "Genre",
        message: "Welcome to genre page",
        activeAddMovie: true,
    });
}

const PostAddMovie = (req, res, next) => {

    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;

    const movie = new movieModel.movieClass(null,title, genre, urlImage, description);
    movie.saveMovie();  

    res.status(200).redirect("/user/");//error in the redirect went the json file is not created 
}

//edit movie
const PosEdit = (req, res, next) => {
    res.render("./admin/edit",{
        title: "Edit Movie",
        activeEdit: true,
    });
}


export {GetAddMovie, PostAddMovie, PosEdit};