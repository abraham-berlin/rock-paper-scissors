game();
function game() {
    let wins = 0;
    let = losses = 0;
    let ties = 0;
    while (true) {
        let playerSelection = humanPlays();
        let computerSelection = computerPlays();
        let playerWin = computePlayerWins(playerSelection, computerSelection);
        let outcome = "";
        if (playerWin == 0) {
            losses++
            outcome = "lost";
        } else if (playerWin == 1) {
            wins++;
            outcome = "won";
        } else if (playerWin == 2) {
            ties++;
            outcome = "tied";
        }
        console.log("You " + outcome + ". You chose " + playerSelection + " and the computer chose " + computerSelection + ". \nYour record is: " + wins + "-" + ties + "-" + losses );

    }
}
function computePlayerWins(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return 0;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return 1;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return 0;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return 1;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return 0;
    } else {
        return 2;
    }
}

function humanPlays() {
    while (true) {
        let play = prompt("Please enter selection (rock, paper, or scissors):").toLowerCase();
        if (play == "rock" || play == "paper" || play == "scissors") {
            return play;
        } else {
            alert("Invalid Selection");
        }
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

