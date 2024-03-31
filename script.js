'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

const btn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');

    //Display the number
    document.querySelector('.number').textContent = secretNumber;

    //Update the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //Changing background color
    document.querySelector('body').style.backgroundColor = '#60b347';

    //Changing number style
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess < secretNumber ? '📈 Too Low..' : '📉 Too High.';

    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You loose the game!');
    }
  }
});

againBtn.addEventListener('click', function () {
  console.log('You reset the game');

  //Reseting score
  document.querySelector('.score').textContent = '20';
  score = 20;

  //Reseting secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //Reseting message, number, score and guess input field
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //Reseting background color
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
