'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const btnCheck = document.querySelector('.check');
const buttonCheck = function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number!';
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        highscore = document.querySelector('.highscore').textContent;
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 To high!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '❌ You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📉 To low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '❌ You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
}
btnCheck.addEventListener('click', buttonCheck);


const btnAgain = document.querySelector('.again');
const again = function () {

    score = 20;

    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.guess').value = " ";

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
}

btnAgain.addEventListener('click', again);