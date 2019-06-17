const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/tracking_app", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// telling app to use routes we exported
app.use(require("./routes"));

//turn app on
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});