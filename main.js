const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button");

const content = document.createElement("div");
content.classList.add("content");
content.style.cssText="font-size: 32px; font-weight: 900;"

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    getScoreBoard();
});
});  
    
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

function getScoreBoard () {
    const scoreBoard = document.createElement("div");
    content.appendChild(scoreBoard);
    container.appendChild(content);
    if (humanScore === 5) {
        scoreBoard.textContent = `You won! Final score: ${humanScore} - ${computerScore}.`
        humanScore = 0;
        computerScore = 0;
    }  else if (computerScore === 5) {
        scoreBoard.textContent = `You lose! Final score: ${humanScore} - ${computerScore}.`
        humanScore = 0;
        computerScore = 0;
    } else {
        scoreBoard.textContent = `Score: ${humanScore} - ${computerScore}`;
    }
}







