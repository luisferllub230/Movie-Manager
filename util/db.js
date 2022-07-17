const Sequelize = require('sequelize');

module.exports.sql = new Sequelize("moviemanager","rout", "1234",{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});