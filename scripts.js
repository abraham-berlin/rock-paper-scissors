let wins = 0;
let ties = 0;
let losses = 0;


function rock() {
    let playerSelection = "rock";
    let computerSelection = computerPlays();
    computePlayerWins(playerSelection, computerSelection);
}

function paper() {
    let playerSelection = "paper";
    let computerSelection = computerPlays();
    computePlayerWins(playerSelection, computerSelection);
}

function scissors() {
    let playerSelection = "scissors";
    let computerSelection = computerPlays();
    computePlayerWins(playerSelection, computerSelection);
}


function computePlayerWins(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("statement").innerHTML = "You Lost! You chose " + playerSelection + " and the computer chose " + computerSelection;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("statement").innerHTML = "You Won! You chose " + playerSelection + " and the computer chose " + computerSelection;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("statement").innerHTML = "You Won! You chose " + playerSelection + " and the computer chose " + computerSelection;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("statement").innerHTML = "You Lost! You chose " + playerSelection + " and the computer chose " + computerSelection;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("statement").innerHTML = "You Won! You chose " + playerSelection + " and the computer chose " + computerSelection;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("statement").innerHTML = "You Lost! You chose " + playerSelection + " and the computer chose " + computerSelection;
    } else {
        ties++;
        document.getElementById("ties").innerHTML = ties;
        document.getElementById("statement").innerHTML = "You Tied! You chose " + playerSelection + " and the computer chose " + computerSelection;
    }
}
function computerPlays() {
    let rand = Math.random();
    if (rand > .66) {
        return "scissors";
    } else if (rand > .33) {
        return "rock";
    } else {
        return "paper";
    }
}

