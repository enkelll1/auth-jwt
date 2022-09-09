const Sequelize = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.USER,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: "postgres",
        // operatorsAliases: false,

        pool: {
            max: Number(process.env.pool_max),
            min: Number(process.env.pool_min),
            acquire: process.env.pool_acquire,
            idle: process.env.pool_idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user")(sequelize, Sequelize);

module.exports = db;