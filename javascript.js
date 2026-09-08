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
const score = document.createElement("p");
score.textContent = `human score: ${humanScore} computer score: ${computerScore}`;
//div.appendChild(p);
div.append(p);

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            console.log("you won");
        } else {
            console.log("you lost");
        }
    }
}
function playRound(humanChoice, computerChoice) {
if (
    (humanChoice === 'rock' && computerChoice === 'scissors') || 
    (humanChoice === 'paper' && computerChoice === 'rock') || 
    (humanChoice === 'scissors' && computerChoice === 'paper') 
) { ++humanScore; 
    score.textContent = `human score: ${humanScore} computer score: ${computerScore}`;
    return p.textContent = (`You Win! ${humanChoice} beats ${computerChoice}.`); 
}else if (humanChoice === computerChoice) {
    return p.textContent = ("It's a tie!"); 
 } else { 
        ++computerScore
        score.textContent = `human score: ${humanScore} computer score: ${computerScore}`;
        return p.textContent = (`You lose! ${computerChoice} beats ${humanChoice}.`); 
    }  
}
div.append(score);

const finalScore = document.createElement("p");
div.append(finalScore);
function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            finalScore.textContent = "Congrats! You Won!";
        } else {
            finalScore.textContent = "Bummer! You Lost!";
        }
    }
} 

//console.log(humanScore);

//console.log(humanScore);
//console.log(computerScore);
document.addEventListener('click', (event) => {
    let playerClick = event.target.id; 
   // console.log(playerClick);
    let computerClick = getComputerChoice();
    playRound(playerClick, computerClick); 
    checkWinner();
});
