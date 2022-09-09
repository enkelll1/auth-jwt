module.exports = (sequelize, Sequelize) => {
    const UserExpense = sequelize.define("user_expense", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        expense_id:{
            type: Sequelize.INTEGER,
            references: {
                model: 'expenses',
                key: 'id'
            }
        }
    });
    return UserExpense;
};