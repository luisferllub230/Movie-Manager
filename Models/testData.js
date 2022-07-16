const fs = require('fs');
const path = require('path');

//get the path of the file
const dataPath = path.join(path.dirname(require.main.filename), 'Data', 'movies.json');

//read the file
const data = fs.readFileSync(dataPath, 'utf-8');
module.exports.readJSONFile = () => {
    const container = JSON.parse(data);
    return container;
}

//edit the movie in the file
//----------------------------take data by id and replace it with the new data
module.exports.editTakeDataById = (id) =>{
    const container = JSON.parse(data);
    const newContainer = container.filter(movie => movie.id === id);
    return newContainer;
} 
module.exports.editJSONFile = (id, newData) => {
    const container = module.exports.readJSONFile();
    const newContainer = container.filter(movie => movie.id === id);
    newContainer[0] = newData;
    module.exports.saveJSONFile(newContainer);
}

//save the movie to the file
module.exports.saveJSONFile = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data), 'utf-8');
}


//delete the movie from the file
module.exports.deleteJSONFile = (id) => {
    const container = JSON.parse(data);
    const newContainer = container.filter(movie => movie.id !== id);
    module.exports.saveJSONFile(newContainer);
}