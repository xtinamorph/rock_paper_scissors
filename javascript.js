console.log("Hello World!")
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); 
    if (computerChoice === 0) {
        return 'rock'; 
    } else if (computerChoice === 1) {
        return 'paper'; 
    } else {
        return 'scissors'
    }
 }

console.log(getComputerChoice()) 
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        return 'rock' 
    } 
    else if (humanChoice == 'paper') {
        return 'paper'
    }
    else {
        return 'scissors'
    }
} 


let humanScore = 0
let computerScore = 0 
function playRound(humanChoice, computerChoice) {
if (
    (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper') 
) { ++humanScore
    return console.log(`You Win! ${humanChoice} beats ${computerChoice}.`); 
}else if (humanChoice === computerChoice) {
    return console.log("It's a tie!"); 
 } else { 
        ++computerScore
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`); 
    } 
}

const humanSelection = getHumanChoice() 
const computerSelection = getComputerChoice() 
function playGame() {
playRound(humanSelection, computerSelection) 
}

playGame();

console.log(humanScore);
console.log(computerScore);
