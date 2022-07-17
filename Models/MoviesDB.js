const db  = require('../util/db');
const Sequelize = require('sequelize');


const MoviesTable = db.sql.define('movies',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false   //not null
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    genre:{
        type: Sequelize.STRING,
        allowNull: false
    },
    check:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    urlImage:{
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = MoviesTable;