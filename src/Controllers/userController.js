import * as movieModel from "../Models/testData.js";



const GetGenre = (req, res, next) => {
    res.render("genre",{
        title: "Genre",
        message: "Welcome to genre page",
        activeGenre: true,
    });
}

const GetHome = (req, res, next) => {
    movieModel.movieClass.getMovie(movie =>{
        res.render("index",{
            title: "Home",
            movies: movie,
            message: "Welcome to the home page",
            activeHome: true,
        });
    });
}

export {GetHome, GetGenre};