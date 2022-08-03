import {MoviesTable} from "../Models/MoviesDB.js";

const genreMovie = ["Action", "Comedy", "Drama", "Horror", "Documentaries", "Suspense"];

//show all movies
const GetHome = (req, res, next) => {
    MoviesTable.findAll().then(movies => {
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
const GetAddMovie = (req, res, next) => {
    res.render("./admin/administration",{
        title: "Genre",
        activeAddMovie: true,
        genreMovie: genreMovie,
    });
}
const PostAddMovie = (req, res, next) => {
    const title = req.body.title;
    const genre = req.body.genre;
    const urlImage = req.body.urlImage;
    const description = req.body.description;
    const check = req.body.radio === "active" ? true : false;

    MoviesTable.create({
        title: title,
        genre: genre,
        urlImage: urlImage,
        description: description,
        check: check,
    }).then(() => res.redirect("/")).catch(err => console.log(err));
}

//edit movie
const GetEdit = (req, res, next) => {
    let id = req.params.id;
    let edit = req.params.edit;
    edit === "true" ? edit = true : edit = false;

    MoviesTable.findOne({where: {id: id}}).then(movie => {
        const movieData = movie.dataValues;
        if(!movie){res.redirect("/")}
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
const PostEditMovie = (req, res, next) => {
    let id = req.body.id;
    let title = req.body.title;
    let genre = req.body.genre;
    let urlImage = req.body.urlImage;
    let description = req.body.description;
    let check = req.body.radio;
    check === "active" ? check = true : check = false;

    MoviesTable.update({id: id, title: title, genre: genre, urlImage: urlImage, description: description, check: check}, {where: {id: id}})
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
}

//delete movie
const GetDelete = (req, res, next) => { 
    let id = req.params.id;
    MoviesTable.destroy({where: {id: id}}).then(() => res.status(200).redirect("/")).catch(err => console.log(err));
}

export {GetHome, GetAddMovie, PostAddMovie, GetEdit, PostEditMovie, GetDelete};