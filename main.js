const container = document.querySelector(".container")
const buttons = document.querySelectorAll("button");

const content = document.createElement("div");
content.classList.add("content");
content.style.cssText="font-size: 32px; font-weight: 900; color: white; padding: 10px;"

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
        content.textContent = "Nice! Your rock destroyed Rick's scissors! You got a point.";
        humanScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        content.textContent = "Great! Your paper wrapped around Rick's rock. Score for you.";
        humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        content.textContent = "Wow! Your scissors cut through Rick's paper. You won a point!";
        humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        content.textContent = "Oh no! Rick's paper beats your rock. Rick takes the point.";
        computerScore++;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        content.textContent = "Rick cut your paper like it's nothing. Point goes to Rick.";
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        content.textContent = "Rick's rock is too much for your scissors. Score for Rick.";
        computerScore++;
    } else {
        content.textContent = `It's a draw! Both chose ${humanChoice}. Think about your next choice.`;
    }
}

function getScoreBoard () {
    const scoreBoard = document.createElement("div");
    content.appendChild(scoreBoard);
    container.appendChild(content);
    if (humanScore === 4 && computerScore === 4) {
        scoreBoard.textContent = `The score is tied at 4 - 4! The next point wins the game!`;
    } else if (humanScore === 5 && computerScore === 4) {
        scoreBoard.textContent = `This was the tightest game ever! Congratulations on the win!`;
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore === 4 && computerScore === 5) {
        scoreBoard.textContent = `Ouch... It was so close yet so far away. Rick wins 4 - 5.`;
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore === 5 && computerScore === 0) {
        scoreBoard.textContent = `You completely destroyed Rick. Perfect 5 - 0!`;
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore === 0 && computerScore === 5) {
        scoreBoard.textContent = `Rick wiped the floor with you... Humiliation 0 - 5.`;
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore === 5) {
        scoreBoard.textContent = `You beat Rick against all odds. Pat on the back! Result: ${humanScore} - ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    }  else if (computerScore === 5) {
        scoreBoard.textContent = `You lose the game to Rick. Better luck next time. Result: ${humanScore} - ${computerScore}.`;
        humanScore = 0;
        computerScore = 0;
    } else {
        scoreBoard.textContent = `Score: ${humanScore} - ${computerScore}`;
    }
}







