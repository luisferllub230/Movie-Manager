const movieModel = require("../Models/testData");

//add movie to the database
exports.GetAddMovie = (req, res, next) => {
    res.render("./admin/addMovie",{
        title: "Genre",
        message: "Welcome to genre page",
        activeAddMovie: true,
        editMode: false,
    });
}
exports.PostAddMovie = (req, res, next) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;

    const movie = new movieModel(null,title, genre, urlImage, description);
    movie.saveMovie();  

    res.status(200).redirect("/user/");
}

//edit movie
exports.GetEdit = (req, res, next) => {
    const takeId = req.params.id;
    const edit = req.query.edit;
    if(!edit){
        res.redirect("/user/")
    }

    movieModel.getMovieById(1, movies=>{
        res.render("./admin/addMovie",{
            title: "Edit Movie",
            activeEdit: true,
            editMode: edit,
            movie: movies,
        });
    });
}
exports.PosEdit = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;

    const movie = new movieModel(id,title, genre, urlImage, description);
    movie.saveMovie();

    res.status(200).redirect("/user/");
}