import * as movieModel from "../Models/testData.js";



const GetGenre = (req, res, next) => {
    res.render("./user/genre",{
        title: "Genre",
        message: "Welcome to genre page",
        activeGenre: true,
    });
}

const GetHome = (req, res, next) => {
    
    movieModel.movieClass.getMovie(movie =>{
        res.render("./user/index",{
            title: "Home",
            movies: movie,
            message: "Welcome to the home page",
        });
    });
}

const PostHome = (req, res, next) => {
    res.redirect("/user/");
}

export {GetHome, GetGenre, PostHome};
