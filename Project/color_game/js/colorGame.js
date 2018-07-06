// js file of colorGame.html
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colors = randomColorsArray(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var restButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// refresh text in h1
colorDisplay.textContent = pickedColor;

// mode buttons
for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
  });
}

// reset button
restButton.addEventListener("click", reset);

// click response in squares
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

// reset() is used for all buttons
function reset(){
  colors = randomColorsArray(numSquares);  // random color array
  pickedColor = pickColor();  // pick a new random color
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  restButton.textContent = "New Colors"
  message.textContent = "";
  // reset certain content on page
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
}

// change all squares to the correct color
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

// generate random color array
function randomColorsArray(n){
  var colors = [];
  for(var i = 0; i < n; i++){
    colors.push(randomColor());
  }
  return colors;
}

// choose the key color from random color array
function pickColor(){
  var randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

// generate one random color
function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}