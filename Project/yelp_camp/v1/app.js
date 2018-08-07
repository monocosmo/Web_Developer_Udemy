var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "apple", image: "https://images.pexels.com/photos/1292830/pexels-photo-1292830.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "banana", image: "https://images.pexels.com/photos/1292837/pexels-photo-1292837.jpeg?auto=compress&cs=tinysrgb&h=350"},
    {name: "pear", image: "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&h=350"}
];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});