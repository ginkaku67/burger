var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller");
var PORT = process.env.PORT || 8001;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on http://localhost:%s", PORT);
});