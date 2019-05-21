'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// DATA ////

// Global Varriables //

var points = 0;

// DOM


// DOM - Shapes

var shapeClick = document.getElementById('shape-click');

var shape1 = document.getElementById('shape1');
var shape2 = document.getElementById('shape2');
var shape3 = document.getElementById('shape3');

// Footer Shapes
var star = document.getElementById('star');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');

var glow1 = document.getElementById('glow1');
var glow2 = document.getElementById('glow2');
var glow3 = document.getElementById('glow3');

var avatar = document.getElementById('avatar');

var riddle1 = document.getElementById('riddle1');
var riddleOneAnswer = document.getElementById('riddleOneQuestion');

var riddle2 = document.getElementById('riddle2');
var riddleTwoAnswer = document.getElementById('riddleTwoQuestion');

var riddle3 = document.getElementById('riddle3');
var riddleThreeAnswer = document.getElementById('riddleThreeQuestion');

// Win/Lose MSG

var youWin = document.getElementById('you-win');
var gameOver = document.getElementById('game-over');


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

// Event Handlers //

// Handle 'Start Game' button click

// Shape events handlers //

function clickHandler(event){
  if(event.target.id === 'shape1'){

    riddle1.style.display = 'block';
    riddle2.style.display = 'none';
    riddle3.style.display = 'none';


    //  move avatar to shape
    avatar.style.transform = 'translate(-400px, -240px)';
    avatar.style.transition = '1s';

  } if(event.target.id === 'shape2' && glow2.style.display === 'block'){
    riddle1.style.display = 'none';
    riddle2.style.display = 'block';
    riddle3.style.display = 'none';

    //  move avatar to shape
    avatar.style.transform = 'translate(-90px, -280px)';
    avatar.style.transition = '1s';

  } if(event.target.id === 'shape3' && glow3.style.display === 'block'){
    riddle1.style.display = 'none';
    riddle2.style.display = 'none';
    riddle3.style.display = 'block';

    //  move avatar to shape
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
    shape1.style.display = 'none';

    console.log(points);

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
    shape2.style.display = 'none';

    console.log(points);
  }
}

function submitRiddleThreeHandler(event){
  event.preventDefault();
  var riddleThreeAnswerCheck = event.target.riddleThreeAnswer.value;
  if (riddleThreeAnswerCheck === 'footsteps'){
    points += 5;
    star3.style.display = 'inline';
    riddle3.style.display = 'none';
    glow3.style.display = 'none';
    shape3.style.display = 'none';
    console.log(points);

    totalGameScore();
  }
}

// Handle spaceship click

// Total Score Function //

// Last game event if/else
function totalGameScore(){
  // Save score to LS
  // Assign score to scoreboard
  if(points === 15){
    // code block - display 'you win' msg
    youWin.style.display = 'block';

    // link to scoreboard.html

  } else {
    // code block - display 'Game Over' msg
    gameOver.style.display = 'block';
    // link to scoreboard
  }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// EXECUTABLE CODE ////

// Anything that runs on page load //

// Function Calls //

// Event listeners //

// 'Start Game' button event listener


// Shape events listeners: //

shapeClick.addEventListener('click',clickHandler);

riddleOneAnswer.addEventListener('submit', submitRiddleOneHandler);

riddleTwoAnswer.addEventListener('submit', submitRiddleTwoHandler);

riddleThreeAnswer.addEventListener('submit', submitRiddleThreeHandler);

// Spaceship event listener


