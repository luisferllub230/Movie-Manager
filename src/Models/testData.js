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
    constructor(title,genre,urlImage,description){
        this.title = title;
        this.genre = genre;
        this.urlImage = urlImage;
        this.description = description;
    }

    //save the movie in the file
    saveMovie(){
        getAllMovie(movies=>{
            movies.push(this);
            fs.writeFile(dataPath, JSON.stringify(movies), err => {
                if(err){
                    console.log(err);
                }
            });
        });
    }

    //get the movie from the file
    static getMovie(callback){
        getAllMovie(movies=>{
            callback(movies)
})};
}

export {movieClass};
