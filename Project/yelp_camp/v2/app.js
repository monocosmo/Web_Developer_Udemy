var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// var campgrounds = [
//     {name: "apple", image: "https://images.pexels.com/photos/1292830/pexels-photo-1292830.jpeg?auto=compress&cs=tinysrgb&h=350"},
//     {name: "banana", image: "https://images.pexels.com/photos/1292837/pexels-photo-1292837.jpeg?auto=compress&cs=tinysrgb&h=350"},
//     {name: "pear", image: "https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&h=350"}
// ];

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name: "banana",
//     image: "https://images.pexels.com/photos/1292837/pexels-photo-1292837.jpeg?auto=compress&cs=tinysrgb&h=350",
//     description: "Color yellow, tase sweet."
// }, function(err, res){
//     if(err){
//         console.log("ERROR!!");
//     }else{
//         console.log("SAVED!!");
//         console.log(res);
//     }
// })

//HOME
app.get("/",function(req,res){
    res.render("landing");
});

// INDEX
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE
app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description
    var newCampground = {name: name, image: image, description: desc};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }else{
            // redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - show info about one camp
app.get("/campgrounds/:id", function(req, res){
    // find the campground with the id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});