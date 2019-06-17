const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//when we receive data from a post request, it's received as a stream which is unusable to us without converting
//allow application to convert the data stream form data to json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// telling app to use routes we exported
app.use(require("./routes"));

//turn app on
app.listen(3000, () => {
    console.log(`The server is running on port 3000`);
});