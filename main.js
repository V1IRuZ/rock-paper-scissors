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
const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        alert("rock");
    })
const paper = document.querySelector("#paper")
    paper.addEventListener("click", () => {
        alert("paper");
    })

const scissors = document.querySelector("#scissors")
    scissors.addEventListener("click", () => {
        alert("scissors");
    })


function getHumanChoice() {

}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0; 

    

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

   
playGame();



