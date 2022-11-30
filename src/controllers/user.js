const db = require("../models");
const userDb = db.user;
const Op = db.Sequelize.Op;

exports.getAll = async (req, res) => {
    try {
        const users = await userDb.findAll();
        res.status(200).send({
            users: users
        });
    } catch (err) {
        res.status(500).send({message: err.message});
    }
};

exports.getOne = async (req, res) => {
    try {
        const user = await userDb.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send({
            user: user
        });

    } catch (err) {
        res.status(500).send({message: err.message});
    }
};
