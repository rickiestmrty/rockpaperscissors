function getPlayerChoice(){
    const choices = ["rock","paper","scissors"];
    let userChoice = prompt("Please choose either Rock, Paper, or Scissors: ");
    userChoice = userChoice.toLowerCase();
    if((choices.includes(userChoice))){
        return userChoice;
    }
    else{
        return null;
    }
    
}

function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    let comChoice = "";
    if(randomNum==0){
        comChoice = "rock";
    }
    else if(randomNum==1){
        comChoice = "paper";
    }
    else{
        comChoice = "scissors";
    }
    return comChoice;
}

function playRound(playerSelection,computerSelection){
    let result = "";
    if(playerSelection==computerSelection){
        result = "Round ended in draw";
    }
    else if(((playerSelection=="rock")&&(computerSelection=="scissors"))||
    ((playerSelection=="scissors")&&(computerSelection=="paper"))||
    ((playerSelection=="paper")&&(computerSelection=="rock"))){
        result = "Player wins (Player: "+playerSelection+" vs Computer: "+computerSelection+")";
    }
    else{
        result = "Computer wins (Player: "+playerSelection+" vs Computer: "+computerSelection+")";
    }
    return result;
}

function game(){
    for(let i=1;i<=5;i++){
        console.log("Round "+String(i));
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();
