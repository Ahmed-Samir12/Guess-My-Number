'use strict';
// let message = document.querySelector('.message');
let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === number) {
    displayMessage('🎉 Correct Number');

    document.querySelector('.number').textContent = number;

    document.querySelector('.number').style.width = '25rem';

    document.body.style.backgroundColor = '#3eac3e';

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high!' : 'Too low!');
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost the game!');

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;

  document.querySelector('.score').textContent = score;

  number = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.body.style.backgroundColor = '#222';
});
