'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

// CHECK BUTTON
const btnCheck = document.querySelector('.check');
const buttonCheck = function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔ No number!');
    }
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 To high!' : '📉 To low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('❌ You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
}
btnCheck.addEventListener('click', buttonCheck);


// AGAIN BUTTON
const btnAgain = document.querySelector('.again');
const again = function () {

    score = 20;

    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.guess').value = " ";

    displayMessage('Start guessing...');

    document.querySelector('.number').textContent = '?';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
}

btnAgain.addEventListener('click', again);




// BEFORE CLEANING THE CODE
// else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '📈 To high!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else {
//         document.querySelector('.message').textContent = '❌ You lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }
// }
// else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = '📉 To low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
//     else {
//         document.querySelector('.message').textContent = '❌ You lost the game!';
//         document.querySelector('.score').textContent = 0;
//     }
// }