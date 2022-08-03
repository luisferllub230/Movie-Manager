const get404 = (req, res, next) => {
    res.status(404).render("./error/404",{
      title: "404",
      message: "Page not found - 404",
    });
}

export default get404;