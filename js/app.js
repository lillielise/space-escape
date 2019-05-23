'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// DATA ////

// Global Varriables //

var playersArray = [];
var points = 0;
var userGuesses = 0;

retrieveLocalStorage();

// DOM


// DOM - Shapes

var shapeClick = document.getElementById('shape-click');
var gamePage = document.getElementById('game-page');

var alien1 = document.getElementById('alien1');
var alien2 = document.getElementById('alien2');
var alien3 = document.getElementById('alien3');

// Footer Shapes
var star = document.getElementById('star');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');

var glow1 = document.getElementById('glow1');
var glow2 = document.getElementById('glow2');
var glow3 = document.getElementById('glow3');

var avatar = document.getElementById('avatar');
var spaceship = document.getElementById('spaceship');

var riddle1 = document.getElementById('riddle1');
var riddleOneAnswer = document.getElementById('riddleOneQuestion');

var riddle2 = document.getElementById('riddle2');
var riddleTwoAnswer = document.getElementById('riddleTwoQuestion');

var riddle3 = document.getElementById('riddle3');
var riddleThreeAnswer = document.getElementById('riddleThreeQuestion');

// Win/Lose MSG

var youWin = document.getElementById('you-win');
var gameOver = document.getElementById('game-over');

// Scoreboard Table

// var scoresTable = document.getElementById('high-scores');

// Local Storage //

// Connects to index.html for user input
// Connects to scoreboard.html to assign the data

// check if there is anything in the LS = if/else
// If there's data in LS
// *retrieve* data from LS
// *parse* the LS data
// *assign* that data to the place it will be used - scoreboard.html
// else - create instances to paint the page

// Constructors //

// Instances //

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// FUNCTION DECLARATIONS ////

// Helper Functions //

// function getScore() {

//   scores.push(points);
//   saveToLocalStorage();
//   console.log(scores);
// }

// function saveToLocalStorage(){
//   var stringifyScore = JSON.stringify(scores);
//   console.log('this is my stringify score', stringifyScore);
//   localStorage.setItem('scores', stringifyScore);
  
  
// }




// TABLE HEADER FUNCTION



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

  var riddleOneAnswerCheck = event.target.riddleOneAnswer.value;
  if (riddleOneAnswerCheck === 'stars'){
    points += 5;
    star.style.display = 'inline';
    riddle1.style.display = 'none';
    glow1.style.display = 'none';
    glow2.style.display = 'block';
    alien1.style.display = 'none';

    console.log(points);

  } else if(userGuesses < 5){
    userGuesses++;
    console.log(`number of userGuesses is ${userGuesses}`);

  } else if(userGuesses === 5){
    // remove event handler
    riddleOneAnswer.removeEventListener('submit', submitRiddleOneHandler);
    // game over msg

    // save to LS

    gameOverDisplay();
  }

}

function submitRiddleTwoHandler(event){
  event.preventDefault();
  var riddleTwoAnswerCheck = event.target.riddleTwoAnswer.value;
  if (riddleTwoAnswerCheck === 'mercury'){
    points += 5;
    star2.style.display = 'inline';
    riddle2.style.display = 'none';
    glow2.style.display = 'none';
    glow3.style.display = 'block';
    alien2.style.display = 'none';

    console.log(points);

  } else if(userGuesses < 5){
    userGuesses++;
    console.log(`number of userGuesses is ${userGuesses}`);

  } else if(userGuesses === 5){
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
  var riddleThreeAnswerCheck = event.target.riddleThreeAnswer.value;
  if (riddleThreeAnswerCheck === 'footsteps'){
    points += 5;
    star3.style.display = 'inline';
    riddle3.style.display = 'none';
    glow3.style.display = 'none';
    alien3.style.display = 'none';
    console.log(points);


    avatar.style.transform = 'translate(-700px, -50px)';
    avatar.style.transition = '2s';
    // YOU WIN Function call
    // function that moves space ship with delay and screen with delay 
    setTimeout(spaceShipMove,2000);
    setTimeout(youWinDisplay, 3000);

  } if(userGuesses < 5){
    userGuesses++;
    console.log(`number of userGuesses is ${userGuesses}`);

  } if(userGuesses === 5){
    // remove event handler
    riddleOneAnswer.removeEventListener('submit', submitRiddleOneHandler);

    // game over msg
    gameOverDisplay();
    // save to LS

  }

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



// function Player(userName, points){
//   this.userName = userName;
//   this.points = points;
//   playersArray.push(this);
// }

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

// Anything that runs on page load //

// Function Calls //

// saveToLocalStorage();



// Event listeners //

// 'Start Game' button event listener


// Alien events listeners: //


shapeClick.addEventListener('click',clickHandler);

riddleOneAnswer.addEventListener('submit', submitRiddleOneHandler);

riddleTwoAnswer.addEventListener('submit', submitRiddleTwoHandler);

riddleThreeAnswer.addEventListener('submit', submitRiddleThreeHandler);




