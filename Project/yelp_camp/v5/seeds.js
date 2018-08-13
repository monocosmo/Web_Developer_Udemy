var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Fox1",
        image: "https://images.freeimages.com/images/small-previews/72c/fox-1522156.jpg",
        description: "This is a red fox1."
    },
    {
        name: "Fox2",
        image: "https://images.freeimages.com/images/small-previews/72c/fox-1522156.jpg",
        description: "This is a red fox2."
    },
    {
        name: "Fox3",
        image: "https://images.freeimages.com/images/small-previews/72c/fox-1522156.jpg",
        description: "This is a red fox3."
    }
];

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    // create a comment
                    Comment.create({
                        text: "This fox is red.",
                        author: "Fox Red"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created a new comment");
                        }
                    });
                }
            });
        });
    });
};

module.exports = seedDB;