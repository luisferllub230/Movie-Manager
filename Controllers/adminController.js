const testData = require("../Models/testData");
const {v4: uuid} = require('uuid');

const genreMovie = ["Action", "Comedy", "Drama", "Horror", "Documentaries", "Suspense"];

const movieDataContainer = testData.readJSONFile();

//add movie to the database
exports.GetAddMovie = (req, res, next) => {
    res.render("./admin/administration",{
        title: "Genre",
        activeAddMovie: true,
        genreMovie: genreMovie,
    });
}
exports.PostAddMovie = (req, res, next) => {
    const id = Math.round(Math.random());
    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;
    const check = req.body.radio;

    let movie = {
        id:uuid(),
        title: title,
        genre: genre,
        urlImage: urlImage,
        description: description,
        check: check,
    }
    movieDataContainer.push(movie);
    testData.saveJSONFile(movieDataContainer);
    res.status(200).redirect("/admin/");
}

//edit movie
exports.GetEdit = (req, res, next) => {
    let id = req.params.id;
    let edit = req.params.edit;
    id = id.replace(/:/g, "");
    edit = edit.replace(/:/g, "");

    const movieData = testData.editTakeDataById(id);
    console.log(movieData);

    if(edit === true || edit === "true"){
        res.render("./admin/administration",{
            title: "Edit Movie",
            editMode: true,
            movies: movieData,
            genreMovie: genreMovie,
        });

    }else{res.status(200).redirect("/admin/####")}
}

//show all movies
exports.GetHome = (req, res, next) => {
    res.render("index",{
        title: "Home",
        message: "Welcome to the home page",
        activeHome: true,
        movieDataContainer, 
        check: movieDataContainer.check === "active" ? true : false,
    });
}

//delete movie
exports.GetDelete = (req, res, next) => { // bug in the redirect don't clean the page
    testData.deleteJSONFile(req.params.id);
    res.status(200).redirect("/admin/");
}
