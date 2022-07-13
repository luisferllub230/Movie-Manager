const movieModel = require("../Models/testData");

//add movie to the database
exports.GetAddMovie = (req, res, next) => {
    res.render("./admin/addMovie",{
        title: "Genre",
        message: "Welcome to genre page",
        activeAddMovie: true,
    });
}

exports.PostAddMovie = (req, res, next) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;

    const movie = new movieModel(null,title, genre, urlImage, description);
    movie.saveMovie();  

    res.status(200).redirect("/user/");//error in the redirect went the json file is not created 
}

//edit movie
exports.PosEdit = (req, res, next) => {

    console.log(req.query);
    const edit = req.query.edit;
    if(!edit){
        res.redirect("/user/")
    }

    res.render("./admin/addMovie",{
        title: "Edit Movie",
        activeEdit: true,
    });
}
