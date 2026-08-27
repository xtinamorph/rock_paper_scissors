console.log("Hello World!")
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
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

function playGame() {
   
   
    for (let i = 1; i <=5; i++) {
        const playerInput = prompt("Rock, paper or scissors?").toLowerCase();
        const computerInput = getComputerChoice();
        playRound(playerInput, computerInput);
    }
    if (humanScore > computerScore) {
        console.log("Congrats! You won!");
    }else if (humanScore < computerScore) {
        console.log("Bummer, Computer wins!");
    } else {
        console.log("Its a tie!");
    }
}
playGame();
console.log(humanScore);
console.log(computerScore);

const rock = document.getElementById("rock"); 
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors"); 
rock.addEventListener("click" , playRound("rock", computerChoice));
paper.addEventListener("click", playRound("paper", computerChoice));
scissors.addEventListener("click", playRound("scissors", computerChoice));