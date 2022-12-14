module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    return User;
};