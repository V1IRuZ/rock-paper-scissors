function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return 'rock';
    } else if (randomInt === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    while (true) {
        const answer = prompt("Choose rock papers or scissors").toLowerCase();
        if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
            return answer;
        } else {
            console.log("Wrong value, please pick rock paper or scissors.");
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You win! Rock beats scissors!");
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You win! Paper beats Rock!");
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win! Scissors beats Paper!");
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! Paper beats Rock!");
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! Scissors beats Paper!");
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! Rock beats Scissors!")
    } else {
        console.log("It's a draw!")
    }
}
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  

let humanScore = 0;
let computerScore = 0;
