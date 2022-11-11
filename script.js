//make computer choose from rock, paper or scissors
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const random = choice[Math.floor(Math.random() * choice.length)];
 return random;
}

//make player selection
function playerSelection(){}

//take selections and determine outcome

const computerChoice = getComputerChoice()
const playerChoice = playerSelection()

function playRound(computerChoice, playerChoice){
    if (computerChoice === playerChoice){
        return 'tie'
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'scissors' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'rock')){
        return 'You win';
    }
    else{
        return 'Computer wins'
    }
}
//



