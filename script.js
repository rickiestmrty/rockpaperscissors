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

function showImage(imgID,chosen){
    const img = document.getElementById(imgID);
    img.src = "pictures/"+chosen+".png";
}

function playRound(playerSelection,computerSelection){
    let result = "";
    if(playerSelection==computerSelection){
        result = 0;
    }
    else if(((playerSelection=="rock")&&(computerSelection=="scissors"))||
    ((playerSelection=="scissors")&&(computerSelection=="paper"))||
    ((playerSelection=="paper")&&(computerSelection=="rock"))){
        result = 1;
    }
    else{
        result = 2;
    }
    return result;
}

function round(buttonId){
    const playerSelection = buttonId;
    showImage("player-img",playerSelection);

    const computerSelection = getComputerChoice();
    showImage("computer-img",computerSelection);

    let currentWinner = playRound(playerSelection,computerSelection);

    return currentWinner;
    
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    let buttonId = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click',()=>{
            buttonId = button.id;
            if((playerScore<=5)&&(computerScore<=5)){
                currentWinner = round(buttonId);
                if(currentWinner==1){
                    playerScore++;
                    document.getElementById("player-score").innerText = playerScore.toString()
                }
                else if(currentWinner==2){
                    computerScore++;
                    document.getElementById("computer-score").innerText = playerScore.toString()
                }
            }
            if(playerScore==5){
                alert("You won! You proved that machines can't beat humans!!");
            }
            else if(computerScore==5){
                alert("You lost! Machines will take over the world!!");
            }
            
        });
    });

}


game();