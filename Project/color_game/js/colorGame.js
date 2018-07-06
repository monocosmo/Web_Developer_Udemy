// js file of colorGame.html
var numSquares = 6;
var colors = randomColorsArray(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var restButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  colors = randomColorsArray(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  colors = randomColorsArray(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
    }
});

restButton.addEventListener("click", function(){
  colors = randomColorsArray(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
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