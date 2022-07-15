const testData = require("../Models/testData");

const genreMovie = ["Action", "Comedy", "Drama", "Horror", "Documentaries", "Suspense"];

const movieDataContainer = testData.readJSONFile();

//add movie to the database
exports.GetAddMovie = (req, res, next) => {
    res.render("./admin/administration",{
        title: "Genre",
        activeAddMovie: true,
        editMode: false,
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
        id:id,
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
    res.render("./admin/administration",{
        title: "Edit Movie",
        activeEdit: true,
        editMode: edit,
    });
}
exports.PosEdit = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;
    const check = req.body.checked;

    res.status(200).redirect("/admin/");
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
