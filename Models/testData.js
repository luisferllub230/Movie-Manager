const fs = require('fs');
const path = require('path');

//get the path of the file
const dataPath = path.join(path.dirname(require.main.filename), 'Data', 'movies.json');

// Read the file and return the data
const getAllMovie = callback =>{
    fs.readFile(dataPath, (err, data) => {
        if(err){
            callback([]);
        }else{
            callback(JSON.parse(data));
        }
    });
} 

module.exports = class movieClass{
    constructor(id,title,genre,urlImage,description){
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.urlImage = urlImage;
        this.description = description;
    }

    //save the movie in the file
    saveMovie(){
        getAllMovie(movies=>{

            if(this.id){
                const idMovies = movies.map(movie=>movie.id === this.id);

                movies[idMovies] = this;//update the movie
                fs.writeFile(dataPath, JSON.stringify(movies), err => {
                    if(err){
                        console.log(err);
                    }
                });
            }else{
                this.id = Math.random().toString();
                movies.push(this);
                fs.writeFile(dataPath, JSON.stringify(movies), err => {
                    if(err){
                        console.log(err);
                    }
                });
            }
        });
    }

    //get the movie from the file
    static getMovie(callback){
        getAllMovie(movies=>{
            callback(movies)
    })};

    //get by id
    static getMovieById(id, callback){
        getAllMovie(movies=>{
            const movie = movies.find(m => m.id === id);
            callback(movie);
        }
        );    
    }
}