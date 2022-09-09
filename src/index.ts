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
// drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// require('./routes/user')(app);

// set port, listen for requests
const PORT =  8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    console.log('--------------------------');
    console.log(chalk.green("Host:")+ process.env.HOST);
    console.log(chalk.green("Username:") + process.env.USER);
});