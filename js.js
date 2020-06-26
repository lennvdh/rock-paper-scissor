// main variables
const mainDiv = document.getElementById('maindiv');
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const whoWon = document.getElementById('whoWon');
const start = document.getElementById('startbutton');
const scoreBoard = document.getElementsByClassName('scoreboard');
const userScore = document.getElementById('userscore');
const computerScore = document.getElementById('computerscore');
let userPoints = 0;
let computerPoints = 0;

function startgame(){
    mainDiv.style.display = 'contents';
    start.style.display = 'none';
}
function computerChoice(){
    const schaarSteenPapier = [0, 1, 2];
    let randomNumberGen = Math.floor(Math.random() *3);
    return schaarSteenPapier[randomNumberGen];
}
function game(userchoice){
    const computer = computerChoice();
    if (computer === userchoice){
        console.log('draw');
        whoWon.style.color = "blue";
        userScore.style.color = "blue";
        computerScore.style.color = "blue";
        whoWon.innerHTML = 'draw';
        return;
    }
    if(computer === 2){
        if(userchoice === 1){
            console.log('you win');
            whoWon.style.color = "green";
            userScore.style.color = "green";
            computerScore.style.color = "green";
            userPoints++;
            whoWon.innerHTML = 'You Won';
            userScore.innerHTML = userPoints;
        }
    }else{
        console.log('you lose');
        whoWon.style.color = "red"
        userScore.style.color = "red";
        computerScore.style.color = "red";
        computerPoints++;
        whoWon.innerHTML = 'You Lose';
        computerScore.innerHTML = computerPoints;
        return;
    }
    if(computer === 1){
        if(userchoice === 0){
            console.log('you win');
            whoWon.style.color = "green";
            userScore.style.color = "green";
            computerScore.style.color = "green";
            userPoints++;
            whoWon.innerHTML = 'You Won';
            userScore.innerHTML = userPoints;
        }
    }else{
        console.log('you lose');
        whoWon.style.color = "red"
        userScore.style.color = "red";
        computerScore.style.color = "red";
        computerPoints++;
        whoWon.innerHTML = 'You Lose';
        computerScore.innerHTML = computerPoints;
        return;
    }
    if(computer === 0){
        if(userchoice === 2){
            console.log('you win');
            whoWon.style.color = "green";
            userScore.style.color = "green";
            computerScore.style.color = "green";
            userPoints++;
            whoWon.innerHTML = 'You Won';
            userScore.innerHTML = userPoints;
        }
    }else{
        console.log('you lose');
        whoWon.style.color = "red"
        userScore.style.color = "red";
        computerScore.style.color = "red";
        computerPoints++;
        whoWon.innerHTML = 'You Lose';
        computerScore.innerHTML = computerPoints;
        return;
    }

    
}
function main(){
    paper.addEventListener('click', ()=>{
        game(2);
    })
    rock.addEventListener('click', ()=>{
        game(1);
    })
    scissor.addEventListener('click', ()=>{
        game(0);
    })
}

main();