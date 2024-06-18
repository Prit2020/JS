// let randomNumber = parseInt(Math.random()*100 +1)
// const submit = document.querySelector('#subt')
// const userInput = document.querySelector('#guessField')
// const guessSlot = document.querySelector('.guesses')
// const remaining = document.querySelector('.lastResult')
// const lowOrHi = document.querySelector('.lowOrHi')
// const satrtOver = document.querySelector('.resultParas')

// // let p = document.querySelector('p')
// const p = document.createElement('p');

// let prevGuess = []
// let numGuess = 1

// let playGame = true

// if(playGame){
//     submit.addEventListener('click', function(e){
//         e.preventDefault()
//         const guess = parseInt(userInput.value)
//         console.log(guess);
//         validateGuess(guess)
//     })
// }

// function validateGuess(guess){
//     if(isNaN(guess)){
//         alert(`Please enter a valid number`)
//     } else if (guess > 100){
//         alert(`Number is greater than 100`)
//     } else if (guess < 1) {
//         alert(`Number is less than 1`)
//     } else {
//         prevGuess.push()
//         if (numGuess === 11) {
//             displayGuess(guess)
//             displayMessage(`Game Over. Random number is ${randomNumber}`)
//             endGame()
//         } else {
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }

// function checkGuess(guess){
//     if (guess === randomNumber) {
//         displayMessage(`You guessed it right.`)
//     } else if (guess > randomNumber) {
//         displayMessage(`Entered number is TOO high`)
//     } else if (guess < randomNumber) {
//         displayMessage(`Entered number is TOO low`)
//     }
// }

// function displayGuess(guess) {
//     userInput = ''
//     guessSlot.innerHTML += `${guess}, `
//     numGuess++
//     remaining.innerHTML = `${10 - numGuess}`
// }

// function displayMessage(message){
//     lowOrHi.innerHTML = `<h3>${message}</h3>` 
// }

// function endGame(){
//     userInput.value = ''
//     userInput.setAttribute('disabled', '')
//     p.classList.add('button')
//     p.innerHTML = `<h3 id="newGame">Start New Game</h3>`
//     satrtOver.appendChild(p)
//     playGame = false
//     endGame()
// }

// function startGame(){
//     const newGameButton = document.querySelector('#newGame') 
//     newGameButton.addEventListener('click', function(e){
//         randomNumber = parseInt(Math.random()*100 +1)
//         prevGuess = []
//         numGuess = 1
//         guessSlot.innerHTML = ''
//         remaining.innerHTML = ''
//         userInput.removeAttribute('disabled')
//         satrtOver.appendChild(p)
//         playGame = true
//     })
// }




// copied code new one

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

