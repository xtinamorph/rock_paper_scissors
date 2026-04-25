console.log("Hello World!")
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3); 
    if (num === 0) {
        return 'rock'; 
    } else if (num === 1) {
        return 'paper'; 
    } else {
        return 'scissors'
    }
 }

console.log(getComputerChoice()) 
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    if (choice == "rock") {
        return 'rock' 
    } 
    else if (choice == 'paper') {
        return 'paper'
    }
    else {
        return 'scissors'
    }
} 
console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0 

function playRound(humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase(); 
if (
    (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper') 
) {return console.log(`You Win! ${humanChoice} beats ${computerChoice}.`); 
}else if (humanChoice === computerChoice) {
    return console.log("It's a tie!"); 
 } else {
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`); 
    } 
}


const humanSelection = getHumanChoice() 
const computerSelection = getComputerChoice() 

playRound(humanSelection, computerSelection)
