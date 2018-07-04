// js file of color.html
document.body.style.background = "purple";
var isPurple = true;
// reset the background color

var button = document.querySelector("button");
button.addEventListener("click", colorChanger);

function colorChanger() {
  if(isPurple) {
    document.body.style.background = "white";
    isPurple = false;
  } else {
    document.body.style.background = "purple";
    isPurple = true;
  }
}