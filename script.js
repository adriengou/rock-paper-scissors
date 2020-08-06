

let choices = ["rock", "paper", "scissors"];


const buttons = document.querySelectorAll('.button');

console.log(buttons)

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const round = document.querySelector('#round');
const result = document.querySelector('#result');
const description = document.querySelector('#description');
const playerChoiceNode = document.querySelector('#player-choice');
const computerChoiceNode = document.querySelector('#computer-choice');

//Initialisation of the scores
playerScore.textContent = 0;
computerScore.textContent = 0;
let roundNb = 0;
round.textContent = `Round ${roundNb}`
result.textContent = '';
description.textContent = '';
playerChoiceNode.textContent = '';
computerChoiceNode.textContent = '';


function computerSelection(){
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerChoice, computerChoice){
    let winner = false;

    computerChoiceNode.textContent = computerChoice;
    playerChoiceNode.textContent = playerChoice;

    if (computerChoice === "paper" && playerChoice === "rock"){
        winner = "computer";
    }else if (computerChoice === "paper" && playerChoice === "scissors"){
        winner = "player";
    }else if (computerChoice === "rock" && playerChoice === "paper"){
        winner = "player";
    }else if (computerChoice === "rock" && playerChoice === "scissors"){
        winner = "computer";
    }else if (computerChoice === "scissors" && playerChoice === "paper"){
        winner = "computer";
    }else if (computerChoice === "scissors" && playerChoice === "rock"){
        winner = "player";
    }else if (computerChoice === playerChoice){
        winner = "tie";
    }

    if(winner === "player"){
        result.textContent = "You won !";
        description.textContent = `${playerChoice} beats ${computerChoice} !`
        playerScore.textContent = Number(playerScore.textContent) + 1

    }else if(winner === "computer"){
        result.textContent = "You lost !";
        description.textContent = `${computerChoice} beats ${playerChoice} !`;
        computerScore.textContent = Number(computerScore.textContent) + 1;

    }else{
        result.textContent = "It's a tie !";
        description.textContent = '    ';
    }

    roundNb++;
    round.textContent = `Round ${roundNb}`
}



// we use the .forEach method to iterate through each button
buttons.forEach(
    function(button){

// and for each one we add a 'click' listener
        button.addEventListener('click', 
            function(){
                
                playRound(button.textContent.toLowerCase(), computerSelection())
            }
        );
    }
);

            