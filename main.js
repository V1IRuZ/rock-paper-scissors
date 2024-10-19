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
        let answer = prompt("Choose rock paper or scissors");
        if (answer != null) {
            answer = answer.toLowerCase();
            if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
                return answer;
            } else {
                alert("Wrong value, please pick rock paper or scissors.");
            }
        } else {
            alert("Choose rock paper or scissors. The game lasts five rounds.")
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
                alert("You win! Rock beats scissors!");
                humanScore++;
            } else if (humanChoice === 'paper' && computerChoice === 'rock') {
                alert("You win! Paper beats Rock!");
                humanScore++;
            } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
                alert("You win! Scissors beats Paper!");
                humanScore++;
            } else if (humanChoice === 'rock' && computerChoice === 'paper') {
                alert("You lose! Paper beats Rock!");
                computerScore++;
            } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
                alert("You lose! Scissors beats Paper!");
                computerScore++;
            } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
                alert("You lose! Rock beats Scissors!")
                computerScore++;
            } else {
                alert(`It's a draw! Both chose ${humanChoice}`)
            }
        }
        playRound(humanSelection, computerSelection);
        alert( `Your score: ${humanScore}, opponent's score: ${computerScore}`);
    }

    finalScore();

    function finalScore() {
        if (humanScore > computerScore) {
            alert(`You won! Final score ${humanScore} - ${computerScore}!`);
        } else if (humanScore < computerScore) {
            alert(`You lose! Final score ${humanScore} - ${computerScore}!`);
        } else {
            alert(`It's a tie! Final score ${humanScore} - ${computerScore}!`);
        }
    }
}
   
playGame();



