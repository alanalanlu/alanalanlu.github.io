let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result >p ");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

main();

function main() {
  rock_div.addEventListener("click", function() {
    game("Rock");
  });

  paper_div.addEventListener("click", function() {
    game("Paper");
  });

  scissors_div.addEventListener("click", function() {
    game("Scissors");
  });
}

function game(userChoice) {
  console.log(userChoice);
  const value = Math.floor(Math.random() * 3);
  console.log(value);
  if (value === 1) {
    console.log("win");
    win();
  }
  if (value === 0) {
    console.log("loss");
    lose();
  }
  if (value === 2) {
    console.log("Draw");
    draw();
  }
}
function lose() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = "You lose";
}
function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = "You win";
}
function draw() {
  result_div.innerHTML = "draw";
}
