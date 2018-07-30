//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;
var app = express();


//middleware

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



//routes
var routes = require("./controllers/burgers_controller.js");

app.get('/', function (req, res) {
res.render("index")
})

app.listen(PORT, function(){
  console.log("APP LISTENING ON PORT " + PORT)
})

module.exports = app