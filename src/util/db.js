import Sequelize from "sequelize";

const sql = new Sequelize("moviemanager","rout", "1234",{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

export default sql;