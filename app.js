const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const expressSession = require("express-session");
const MongoStore = require('connect-mongo');
const mongoose = require("mongoose");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("combined"));

const passport = require("./config/passport");
app.use(passport.initialize());
app.use(passport.session()); //allows passport to have access to our session

app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;