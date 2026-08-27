console.log("Hello World!")
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

let humanScore = 0
let computerScore = 0 
const div = document.querySelector('div');
const p = document.createElement("p");
div.appendChild(p);
function playRound(humanChoice, computerChoice) {
if (
    (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper') 
) { ++humanScore
    return p.textContent = (`You Win! ${humanChoice} beats ${computerChoice}.`); 
}else if (humanChoice === computerChoice) {
    return p.textContent = ("It's a tie!"); 
 } else { 
        ++computerScore
        return p.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`); 
    } 
}

function playGame() {
   // for (let i = 1; i <=5; i++) {
        const playerInput = prompt("Rock, paper or scissors?").toLowerCase();

      // const computerInput = getComputerChoice();
        playRound(playerInput, computerInput);
    //}
    if (humanScore > computerScore) {
        console.log("Congrats! You won!");
    }else if (humanScore < computerScore) {
        console.log("Bummer, Computer wins!");
    } else {
        console.log("Its a tie!");
    }
}
//playGame();
console.log(humanScore);
console.log(computerScore);
document.addEventListener('click', (event) => {
    let playerClick = event.target.id; 
    console.log(playerClick);
    let computerClick = getComputerChoice();
    playRound(playerClick, computerClick); 
    console.log(humanScore);
    console.log(computerScore);
});
