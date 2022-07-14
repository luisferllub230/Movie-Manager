const fs = require('fs');
const path = require('path');

//get the path of the file
const dataPath = path.join(path.dirname(require.main.filename), 'Data', 'movies.json');

// avoid unsubscribing file
const listMovies = [];
// const listMovies_JSON = fs.readFileSync(dataPath, 'utf8');
// const listMoviesExport = JSON.parse(listMovies_JSON);

//save the movie in the json file
// module.exports.Data = (m) => {

//     const getData = (lm) => {
//         listMovies.push(lm);
//         fs.writeFile(dataPath, JSON.stringify(listMovies), (err) => {
//             if (err) throw err;!
//             console.log('The file has been saved');
//         });
//     }
//     getData(m);
// }

// //show the movies int the user page
// module.exports.showMovies = (list) => {
//     const showData = (l) => {
//         l.push(listMoviesExport); 
//     }
//     showData(list);
// }