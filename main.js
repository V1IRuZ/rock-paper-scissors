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

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0; 

    for (let i = 1; i <= 5; i++) {  

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === 'rock' && computerChoice === 'scissors') {
                console.log("You win! Rock beats scissors!");
                humanScore++;
            } else if (humanChoice === 'paper' && computerChoice === 'rock') {
                console.log("You win! Paper beats Rock!");
                humanScore++;
            } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                console.log("You win! Scissors beats Paper!");
                humanScore++;
            } else if (humanChoice === 'rock' && computerChoice === 'paper') {
                console.log("You lose! Paper beats Rock!");
                computerScore++;
            } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
            } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
                console.log("You lose! Rock beats Scissors!")
                computerScore++;
            } else {
                console.log(`It's a draw! Both pick ${humanChoice}`)
            }
        }
        playRound(humanSelection, computerSelection);
        console.log( `Your score ${humanScore}, Opponent score ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You won! Final score ${humanScore} - ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! Final score ${humanScore} - ${computerScore}!`);
    } else {
        console.log(`It's a tie! Final score ${humanScore} - ${computerScore}!`);
    }
}
   
playGame();



