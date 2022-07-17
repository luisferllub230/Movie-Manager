const Sequelize = require('sequelize');

const sql = new Sequelize("moviemanager","rout","",{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});