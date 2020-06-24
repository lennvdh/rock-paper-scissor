// main variables
const mainDiv = document.getElementById('maindiv');
const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissor = document.getElementById('scissor');
const whoWon = document.getElementById('whoWon');
const start = document.getElementById('startbutton');

function startgame(){
    mainDiv.style.display = 'contents'
    start.style.display = 'none';
}
function computerChoice(){
    const schaarSteenPapier = [0, 1, 2];
    let randomNumberGen = Math.floor(Math.random() *3);
    return schaarSteenPapier[randomNumberGen];
}
function game(userchoice){
    const computer = computerChoice();
    if (computer === 1){
        console.log('draw');
        whoWon.style.color = "blue";
        whoWon.innerHTML = 'draw';
    }else if(computer === 2){
        console.log('you win');
        whoWon.style.color = "green";
        whoWon.innerHTML = 'You Won';
    }else{
        console.log('you lose');
        whoWon.style.color = "red"
        whoWon.innerHTML = 'You Lose';
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










