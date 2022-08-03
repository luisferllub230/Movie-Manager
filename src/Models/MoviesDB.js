import Sequelize from 'sequelize';
import sql from '../util/db.js';

const MoviesTable = sql.define('movies',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false 
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


export {MoviesTable}