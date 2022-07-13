import fs from 'fs';
import path from 'path';

//get the path of the file
const __dirname = path.resolve();
const dataPath = path.join(__dirname,'./src/Data/movies.json');

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

class movieClass{
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
}

export {movieClass};
