let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
let attempts = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('#guessField');
let resetButton = document.querySelector('.resetButton');

function checkGuess() {
    let userGuess = Number(guessField.value);
    guesses.push(userGuess);
    attempts.textContent = `Guesses: ${guesses.join(', ')}`;
    
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guesses.length === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'block';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guesses = [];
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    
    attempts.textContent = '';
    lastResult.textContent = '';
    lowOrHi.textContent = '';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    resetButton.style.display = 'none';
    guessField.value = '';
    guessField.focus();
}

