'use strict';


// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;



// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

const btn = document.querySelector('.check');
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

btn.addEventListener('click', buttonCheck);