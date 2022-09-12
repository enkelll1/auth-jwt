const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const chalk = require('chalk');

const app = express();
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

require('./routes/auth')(app);
require('./routes/user')(app);

// set port, listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
    console.log('--------------------------');
    console.log(chalk.green("Host : ")+ process.env.HOST);
    console.log(chalk.green("Username : ") + process.env.USER);
});