'use strict';
let number = Math.floor(Math.random() * 20) + 1;


var highScore = 0;
var score = 20

document.querySelector('.check').addEventListener('click',
    function () {
        let num = Number.parseInt(document.querySelector('.guess').value);

        if (num === number) {
            document.querySelector('.message').textContent = "Correct guess !!!";
            document.querySelector('.number').textContent = `${num}`;
            document.querySelector('body').style.backgroundColor = '#60b347';
            score--;
            document.querySelector('.score').textContent = score;
            if (score > highScore) {
                highScore = score;
            }
            document.querySelector('.highscore').textContent = highScore;
            return null;
        }
        else if (num > number) {
            document.querySelector('.message').textContent = "Too high!!";
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "You Lose!!!";
                document.querySelector('.score').textContent = 0;
            }
        }
        else if (num < number) {
            document.querySelector('.message').textContent = "Too low!!";
            if (score > 1) {
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = "You Lose!!!";
                document.querySelector('.score').textContent = 0;
            }
        }
    }
)

document.querySelector('.again').addEventListener('click', function () {
    number = Math.floor(Math.random() * 20) + 1;
    var newScore = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = newScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});
