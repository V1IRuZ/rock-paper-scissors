function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 3);
    if (randomInt === 0) {
        return 'rock';
    } else if (randomInt === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    answer = prompt("Choose rock papers or scissors").toLowerCase();
    if (answer === 'rock' || answer === 'paper' || answer === 'scissors') {
        return answer
    } else {
        console.log("Wrong value, please pick rock paper or scissors.")
    }
}

console.log(getHumanChoice());
console.log(getComputerChoice());