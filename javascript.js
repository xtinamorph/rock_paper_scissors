console.log("Hello World!")
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3); 
    if (num === 0) {
        return 'Rock'; 
    } else if (num === 1) {
        return 'Paper'; 
    } else {
        return 'Scissors'
    }
 }

console.log(getComputerChoice()) 
function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    if (choice === "Rock") {
        return 'Rock' 
    } 
    else if (choice === 'Paper') {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
} 
console.log(getHumanChoice())

const humanScore = 0
const computerScore = 0