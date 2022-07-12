const GetGenre = (req, res, next) => {
    res.render("genre",{
        title: "Genre",
        message: "Welcome to genre page",
        activeGenre: true,
    });
}

const GetHome = (req, res, next) => {
    res.render("index",{
        title: "Home",
        message: "Welcome to the home page",
        activeHome: true,
    });
}

export {GetHome, GetGenre};