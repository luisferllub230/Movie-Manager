const moviesDB = require("../Models/MoviesDB");

const genreMovie = ["Action", "Comedy", "Drama", "Horror", "Documentaries", "Suspense"];

//show all movies
exports.GetHome = (req, res, next) => {

    moviesDB.findAll().then(movies => {

        const movieData = movies.map(movie => movie.dataValues);

        res.render("index",{
            title: "Home",
            message: "Welcome to the home page",
            activeHome: true,
            movies: movieData, 
        });

    }).catch(err => console.log(err));
}


//add movie to the database
exports.GetAddMovie = (req, res, next) => {
    res.render("./admin/administration",{
        title: "Genre",
        activeAddMovie: true,
        genreMovie: genreMovie,
    });
}
exports.PostAddMovie = (req, res, next) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;
    const check = req.body.radio === "active" ? true : false;

    moviesDB.create({
        title: title,
        genre: genre,
        urlImage: urlImage,
        description: description,
        check: check,
    }).then(() => res.redirect("/admin/")).catch(err => console.log(err));
}

//edit movie
exports.GetEdit = (req, res, next) => {

    let id = req.params.id;
    let edit = req.params.edit;
    id = id.replace(/:/g, "");
    edit = edit.replace(/:/g, "");
    edit === "true" ? edit = true : edit = false;

    moviesDB.findOne({where: {id: id}}).then(movie => {
        const movieData = movie.dataValues;

        if(!movie){res.redirect("/admin/")}
        else{
            res.render("./admin/administration",{
                title: "Edit Movie",
                editMode: edit,
                movies: movieData,
                genreMovie: genreMovie,
            });
        }

    }).catch(err => console.log(err));
}
exports.PostEditMovie = (req, res, next) => {
    let id = req.body.id;
    let title = req.body.title;
    let genre = req.body.genre;
    let urlImage = req.body.urlImage;
    let description = req.body.description;
    let check = req.body.radio;
    check === "active" ? check = true : check = false;

    moviesDB.update({id: id, title: title, genre: genre, urlImage: urlImage, description: description, check: check}, {where: {id: id}})
    .then(() => res.redirect("/admin/"))
    .catch(err => console.log(err));
}

//delete movie
exports.GetDelete = (req, res, next) => { 

    let id = req.params.id;

    moviesDB.destroy({where: {id: id}})
    .then(() => res.status(200).redirect("/admin/"))
    .catch(err => console.log(err));

}