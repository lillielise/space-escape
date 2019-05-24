'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// DATA ////

// Global Varriables //

var playersArray = [];
var points = 0;
var userGuesses = 4;
var randomNumArray = [];


retrieveLocalStorage();

// DOM




// DOM - Aliens

var shapeClick = document.getElementById('shape-click');
var gamePage = document.getElementById('game-page');

var header = document.getElementById('header');
var guessesLeft = document.getElementById('guesses-left');
var guesses = document.getElementById('guesses');

// Populate user guesses at beginning of game
guessesLeft.textContent = userGuesses + 1;

var alien1 = document.getElementById('alien1');
var alien2 = document.getElementById('alien2');
var alien3 = document.getElementById('alien3');

var glow1 = document.getElementById('glow1');
var glow2 = document.getElementById('glow2');
var glow3 = document.getElementById('glow3');

// DOM Shapes

var star = document.getElementById('star');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');

var avatar = document.getElementById('avatar');
var spaceship = document.getElementById('spaceship');

// DOM Riddles


var riddle1 = document.getElementById('riddle1');
var riddleOneAnswer = document.getElementById('riddleOneQuestion');

var riddle2 = document.getElementById('riddle2');
var riddleTwoAnswer = document.getElementById('riddleTwoQuestion');

var riddle3 = document.getElementById('riddle3');
var riddleThreeAnswer = document.getElementById('riddleThreeQuestion');

var randomNum = document.getElementById('random-num');

var fadeTarget = document.getElementById('target');


var riddle4 = document.getElementById('riddle4');
var riddleFourAnswer = document.getElementById('riddleFourQuestion');


// Win/Lose MSG

var youWin = document.getElementById('you-win');
var gameOver = document.getElementById('game-over');

// Constructors //

// Instances //

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// FUNCTION DECLARATIONS ////

// Helper Functions //

var min = 1;
var max = 9;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}
// console.log(getRandomIntInclusive());
console.log(randomNumArray);

randomNumArray.push(getRandomIntInclusive(min,max));
randomNumArray.push(getRandomIntInclusive(min,max));
randomNumArray.push(getRandomIntInclusive(min,max));

console.log(randomNumArray);


// credit: Naama Bar Ilan https://stackoverflow.com/questions/29017379/how-to-make-fadeout-effect-with-pure-javascript
function fadeOutEffect() {
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 50);
}



// Event Handlers //

// Handle 'Start Game' button click

// Shape events handlers //

function clickHandler(event){
  if(event.target.id === 'alien1'){

    riddle1.style.display = 'block';
    riddle2.style.display = 'none';
    riddle3.style.display = 'none';


    //  move avatar to alien
    avatar.style.transform = 'translate(-400px, -240px)';
    avatar.style.transition = '1s';

  } if(event.target.id === 'alien2' && glow2.style.display === 'block'){
    riddle1.style.display = 'none';
    riddle2.style.display = 'block';
    riddle3.style.display = 'none';

    //  move avatar to alien
    avatar.style.transform = 'translate(-90px, -280px)';
    avatar.style.transition = '1s';

  } if(event.target.id === 'alien3' && glow3.style.display === 'block'){
    riddle1.style.display = 'none';
    riddle2.style.display = 'none';
    riddle3.style.display = 'block';

    //  move avatar to alien
    avatar.style.transform = 'translate(190px, -230px)';
    avatar.style.transition = '2s';
  }
}


// Riddle answers validation handlers  //

function submitRiddleOneHandler(event){
  event.preventDefault();
  var riddleOneAnswerCheck = event.target.riddleOneAnswer.value.toLowerCase();
  event.target.riddleOneAnswer.value = null;
  if (riddleOneAnswerCheck === 'stars'){
    points += 500;
    star.style.display = 'inline';
    riddle1.style.display = 'none';
    glow1.style.display = 'none';
    glow2.style.display = 'block';
    alien1.style.display = 'none';

    console.log(points);

    // Random Number 1:
    fadeOutEffect();
    randomNum.textContent = randomNumArray[0];


  } else if(userGuesses > 0){
    userGuesses--;
    guessesLeft.textContent = userGuesses + 1;
  
    console.log(`number of userGuesses is ${userGuesses}`);

  } else if(userGuesses === 0){
    // remove event handler
    riddleOneAnswer.removeEventListener('submit', submitRiddleOneHandler);
    // game over msg

    // save to LS

    gameOverDisplay();
  }

}

function submitRiddleTwoHandler(event){
  event.preventDefault();
  var riddleTwoAnswerCheck = event.target.riddleTwoAnswer.value.toLowerCase();
  event.target.riddleTwoAnswer.value = null;
  if (riddleTwoAnswerCheck === 'mercury'){
    points += 500;
    star2.style.display = 'inline';
    riddle2.style.display = 'none';
    glow2.style.display = 'none';
    glow3.style.display = 'block';
    alien2.style.display = 'none';

    console.log(points);

    // Random Number 2:
    fadeTarget.style.opacity = 1;
    fadeOutEffect();
    randomNum.textContent = randomNumArray[1];
  
   

  } else if(userGuesses > 0){
    userGuesses--;
    guessesLeft.textContent = userGuesses + 1;
    console.log(`number of userGuesses is ${userGuesses}`);

  } else if(userGuesses === 0){
    // remove event handler
    riddleOneAnswer.removeEventListener('submit', submitRiddleOneHandler);
    // game over msg
    gameOverDisplay();

    // save to LS

  }
}

function spaceShipMove (){

  spaceship.style.transform = 'translate(0px, -500px)';
  spaceship.style.transition = '3s';

  avatar.style.transform = 'translate(-550px, -500px)';
  avatar.style.transition = '3s';

}

function submitRiddleThreeHandler(event){
  event.preventDefault();
  var riddleThreeAnswerCheck = event.target.riddleThreeAnswer.value.toLowerCase();

  event.target.riddleThreeAnswer.value = null;
  if (riddleThreeAnswerCheck === 'footsteps' || riddleThreeAnswerCheck === 'footprints'){
    points += 500;

    star3.style.display = 'inline';
    riddle3.style.display = 'none';
    glow3.style.display = 'none';
    alien3.style.display = 'none';
    console.log(points);

    // Random Number 3:

    fadeTarget.style.opacity = 1;
    fadeOutEffect();
    randomNum.textContent = randomNumArray[2];

    // Unhide riddle four:

    riddle4.style.display = 'block';
    guesses.style.display = 'none';
    

  } else if(userGuesses > 0){
    userGuesses--;
    guessesLeft.textContent = userGuesses + 1;
    console.log(`number of userGuesses is ${userGuesses}`);

  } else if(userGuesses === 0){
    // remove event handler
    riddleOneAnswer.removeEventListener('submit', submitRiddleOneHandler);

    // game over msg
    gameOverDisplay();
    // save to LS
  }
}

function submitRiddleFourHandler(event){
  event.preventDefault();
  var riddleFourAnswerCheck = event.target.riddleFourAnswer.value;
  if (riddleFourAnswerCheck === `${randomNumArray[0]}${randomNumArray[1]}${randomNumArray[2]}`){
    points += 1000;

    riddle4.style.display = 'none';
    header.innerHTML = '';
    avatar.style.transform = 'translate(-800px, -50px)';
    avatar.style.transition = '2s';

    

    // YOU WIN Function call

    // function that moves space ship with delay and screen with delay
    setTimeout(spaceShipMove,2000);
    setTimeout(youWinDisplay, 3000);

  } else{
    // remove event handler
    riddleOneAnswer.removeEventListener('submit', submitRiddleOneHandler);

    // game over msg
    gameOverDisplay();
    // save to LS
  }

//   console.log(`The randomNumArray is ${riddleFourAnswerCheck}`);
//   console.log(`The answer randomNumArray is ${randomNumArray[0]}${randomNumArray[1]}${randomNumArray[2]}`);
}

// Handle spaceship click

// LS Functions

// Retrieve Names data from LS:

function retrieveLocalStorage(){
  if (localStorage.players){
    var unparsedPlayers = localStorage.getItem('players');
    var parsedPlayers = JSON.parse(unparsedPlayers);
    playersArray = parsedPlayers;
    console.log('this is the parsedPlayers' + parsedPlayers);
  // console.log(playersArray);
  }
}

// Set game score data in the same LS contstructor:
function getUserScore() {

  // playersArray[i].name === playersArray[0].name

  playersArray[0].points = points;

  // save to LS
  var stringifyNames = JSON.stringify(playersArray);
  console.log('this is my stringify names', stringifyNames);
  localStorage.setItem('players', stringifyNames);

}


// Total Score Function //

function youWinDisplay(){
  getUserScore();
  // Save score to LS


  // Assign score to scoreboard

  gamePage.innerHTML = '';
  
  youWin.style.display = 'block';



  setTimeout(function() {
    location.href='game.html';
    window.location = 'https://lillielise.github.io/space-escape/scoreboard.html';
  }, 3000);
}


function gameOverDisplay(){
  getUserScore();
  // code block - display 'Game Over' msg
  gamePage.innerHTML = '';
 
  gameOver.style.display = 'block';

  setTimeout(function() {
    window.location = 'https://lillielise.github.io/space-escape/scoreboard.html';
  }, 3000);

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// EXECUTABLE CODE ////

// Function Calls //


// Event listeners //

// Alien events listeners: //


shapeClick.addEventListener('click',clickHandler);

riddleOneAnswer.addEventListener('submit', submitRiddleOneHandler);

riddleTwoAnswer.addEventListener('submit', submitRiddleTwoHandler);

riddleThreeAnswer.addEventListener('submit', submitRiddleThreeHandler);

riddleFourAnswer.addEventListener('submit', submitRiddleFourHandler);



