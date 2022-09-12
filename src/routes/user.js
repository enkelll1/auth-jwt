const authGuard = require("../middleware/authGuard");
const userController = require("../controllers/user");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.route("/api/user")
        .all(authGuard)
        .get(userController.getAll)

    app.route("/api/user/:id")
        .all(authGuard)
        .get(userController.getOne)
};