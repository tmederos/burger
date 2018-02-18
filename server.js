var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3000;

//serve static content from the public directory
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require burgers-controller,js for the routes
const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/:id", routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
