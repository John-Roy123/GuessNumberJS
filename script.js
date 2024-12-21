'use strict'

function generateRandomInt(){
    return Math.ceil(Math.random() * 20)
}

function updateMessage(newMessage){
    document.querySelector('.message').textContent = newMessage;
}

let correctVal = generateRandomInt();
let highscore = 0;
let score = 20;
console.log(correctVal);

document.querySelector('.check').addEventListener('click', function(){
    if(score == 0) return;
    let guessVal = document.querySelector('.guess').value;
    if(guessVal == correctVal) correctGuess();
    else if(guessVal > correctVal) {
        updateMessage("Too high!");
        updateScore(score-1);
    }
    else if(guessVal < correctVal) {
        updateMessage("Too low!");
        updateScore(score-1);
    }
    if(score == 0) lose();
});

document.querySelector('.again').addEventListener('click', function(){
    correctVal = generateRandomInt();
    console.log(correctVal);
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = "?";
    updateMessage("Start guessing...");
    document.querySelector(".guess").value = 0;
    score = 20;
    document.querySelector('.score').textContent = 20;
});

function correctGuess(){
    document.querySelector('.number').textContent = correctVal;
    document.body.style.backgroundColor = 'green';
    updateMessage("Correct!!");
    if(score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}

function lose(){
    document.querySelector('.number').textContent = correctVal;
    document.body.style.backgroundColor = 'red';
    updateMessage("You lost!");
    
}

function updateScore(newScore){
    score = newScore;
    document.querySelector('.score').textContent = score;
}
