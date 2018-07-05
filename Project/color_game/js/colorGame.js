// js file of colorGame.html
var colors = randomColorsArray(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var restButton = document.querySelector("#reset");

restButton.addEventListener("click", function(){
  colors = randomColorsArray(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // get clicked color
    var clickedColor = this.style.backgroundColor;
    // compare with pickedColor
    if(clickedColor === pickedColor){
      message.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      restButton.textContent = "Play Again?";
    } else {
      message.textContent = "Try again";
      this.style.backgroundColor = "#232323";
    }
  });
}

// change all squares to the correct color
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function randomColorsArray(n){
  var colors = [];
  for(var i = 0; i < n; i++){
    colors.push(randomColor());
  }
  return colors;
}

function pickColor(){
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}