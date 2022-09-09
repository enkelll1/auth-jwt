module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("expense", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Type: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.DOUBLE
        }
    });
    return User;
};