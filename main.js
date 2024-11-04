const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button");

const content = document.createElement("div");
content.classList.add("content");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    
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

const humanSelection = button.id;
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        content.textContent = "You win! Rock beats scissors!";
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        content.textContent = "You win! Paper beats Rock!";
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        content.textContent = "You win! Scissors beats Paper!";
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        content.textContent = "You lose! Paper beats Rock!";
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        content.textContent = "You lose! Scissors beats Paper!";
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        content.textContent = "You lose! Rock beats Scissors!";
        computerScore++;
    } else {
        content.textContent = `It's a draw! Both chose ${humanChoice}`;
    }
}



playRound(humanSelection, computerSelection);
getScoreBoard();

function getScoreBoard () {
    const scoreBoard = document.createElement("div");
    content.appendChild(scoreBoard);
    container.appendChild(content);
    if (humanScore === 5) {
        scoreBoard.textContent = `You won! final score ${humanScore} - ${computerScore}.`
        humanScore = 0;
        computerScore = 0;
    }  else if (computerScore === 5) {
        scoreBoard.textContent = `You lose! final score ${humanScore} - ${computerScore}.`
        humanScore = 0;
        computerScore = 0;
    } else {
        scoreBoard.textContent = `Score ${humanScore} - ${computerScore}`;
    }
}

});
});  


   




