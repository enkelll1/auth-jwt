// const {verifySignUp} = require("../middleware");
const authController = require("../controllers/auth");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.route("/api/auth/signup")
        .post(authController.signup)

    app.route("/api/auth/signin")
        .post(authController.signin)
};