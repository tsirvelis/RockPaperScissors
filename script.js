function getPlayerChoice() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors");
    return playerSelection;
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    // console.log("player :", playerSelection, ". Computer :", computerSelection);

    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

function playGame() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = getPlayerChoice().toLowerCase();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result == "You Win!") {
            playerScore++;
            console.log(playerSelection + " beats " + computerSelection);
        } else if (result == "You Lose!") {
            computerScore++;
            console.log(computerSelection + " beats " + playerSelection);
        } else {
            console.log("You both choose " + playerSelection);
        }
    }

    if (playerScore > computerScore) {
        console.log("You win! You: " + playerScore + " Computer : " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You Lose! You: " + playerScore + " Computer : " + computerScore);
    } else {
        console.log(" It's a tie");
    }

}

playGame();