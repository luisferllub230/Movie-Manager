const movieModel = require("../Models/testData");

exports.GetGenre = (req, res, next) => {
    res.render("./user/genre",{
        title: "Genre",
        message: "Welcome to genre page",
        activeGenre: true,
    });
}

exports.GetHome = (req, res, next) => {
    movieModel.getMovie(movie =>{
        res.render("./user/index",{
            title: "Home",
            movies: movie,
            message: "Welcome to the home page",
            activeHome: true,
        });
    });
}
