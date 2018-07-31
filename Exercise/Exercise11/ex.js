// Express routing exercise

var express = require("express");
var app = express();

// "/" routing
app.get("/", function(req, res){
    res.send("Hi there, welcom to my assignment!");
});

// "/pig" "/cow" "/dog"
app.get("/:string", function(req, res){
    var animal = req.params.string;
    if(animal === "pig"){
        res.send("The pig says 'Oink'.");
    } else if(animal === "cow"){
        res.send("The cow says 'Moo'.");
    } else if(animal === "dog"){
        res.send("The dog says 'Woof Woof'.");
    } else{
        res.send("Sorry, page not found...What are you doing in your life?");
    }
});

// "/string/num", print the string num times
app.get("/:string/:num", function(req, res){
    var string = req.params.string;
    var num = parseInt(req.params.num);
    var output = "";
    for(var i = 0; i < num; i++){
        output = output + string + " ";
    };
    res.send(output);
});

// "*"
app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing in your life?");
});

// Listen to request
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started!");
});