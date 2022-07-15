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

//save the movie to the file
module.exports.saveJSONFile = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data), 'utf-8');
}