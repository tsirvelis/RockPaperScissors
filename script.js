const buttons = document.querySelectorAll(".button");
const playerText = document.querySelector("#playerDisplay");
const computerText = document.querySelector("#computerDisplay");
const resultText = document.querySelector("#resultDisplay");
const playerScoreText = document.querySelector("#playerScoreDisplay");
const computerScoreText = document.querySelector("#computerScoreDisplay");

let playerSelection;
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = playRound();
    playerScoreText.textContent = `PlayerScore: ${playerScore}`;
    computerScoreText.textContent = `Computer Score ${computerScore}`;
  });
});

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    return "ROCK";
  } else if (computerChoice == 1) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function playRound() {
  if (playerSelection == computerSelection) {
  } else if (
    (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
    (playerSelection == "PAPER" && computerSelection == "ROCK") ||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")
  ) {
    playerScore++;
  } else {
    computerScore++;
  }

  if (playerScore == 5) {
    return "You win!";
  } else if (computerScore == 5) {
    return "You Lose!";
  }
}
