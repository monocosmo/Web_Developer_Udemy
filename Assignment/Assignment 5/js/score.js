// js file of score.html
var winningScore = 5; // default setting

// set the winning score
var inputScore = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

inputScore.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
})


// score keeper
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winningScore){
      p1Display.classList.add("winner");
      p2Display.classList.add("looser");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
})

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winningScore){
      p2Display.classList.add("winner");
      p1Display.classList.add("looser");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
})

// reset
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner")
  p1Display.classList.remove("looser")
  p2Display.classList.remove("winner")
  p2Display.classList.remove("looser")
  gameOver = false;
})



