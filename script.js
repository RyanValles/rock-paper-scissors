//make computer choose from rock, paper or scissors
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
 
}
let playerWins = 0
let computerWins = 0
//make player selection
//take selections and determine outcome
function playRound(){
    const playerChoice = prompt('rock, paper or scissors').toLowerCase();
    const computerChoice = getComputerChoice()
    if (computerChoice === playerChoice){
        computerWins += 0, playerWins += 0
    }
    else if ((playerChoice === 'rock' && computerChoice === 'scissors') || 
    (playerChoice === 'scissors' && computerChoice === 'paper') || 
    (playerChoice === 'paper' && computerChoice === 'rock')){
        playerWins += 1
    }
    else if (playerChoice == 'rock' || 'scissors' || 'paper'){
        return 'Please enter rock, paper or scissors.'
    }
    else{
        computerWins += 1
    }
}
//create function called game which makes the round loop 5 times then the most wins is declared winner
//make the game loop 5 times
// 3 out of 5 wines equals game won
function game(){
    
    for (let i = 0; i < 5; i++){
        playRound();      
}
  if (playerWins === computerWins){
    return "It's a draw!"
  }
  if (playerWins < computerWins){
    return "Computer wins!"
  }
  if (playerWins > computerWins){
    return "You win!"
  }
}


