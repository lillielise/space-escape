'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// DATA ////

// Global Varriables //

// DOM


// DOM - Shapes

var shapeClick = document.getElementById('shape-click');

var shape1 = document.getElementById('shape1');
var shape2 = document.getElementById('shape2');
var shape3 = document.getElementById('shape3');

var riddle1 = document.getElementById('riddle1');
var riddle2 = document.getElementById('riddle2');
var riddle3 = document.getElementById('riddle3');



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

// Shape events //

function clickHandler(event){
  if(event.target.id === 'shape1'){
    riddle1.style.display = 'block';
    riddle2.style.display = 'none';
    riddle3.style.display = 'none';
  } else if(event.target.id === 'shape2'){
    riddle1.style.display = 'none';
    riddle2.style.display = 'block';
    riddle3.style.display = 'none';
  } else if(event.target.id === 'shape3'){
    riddle1.style.display = 'none';
    riddle2.style.display = 'none';
    riddle3.style.display = 'block';
  }
}



// Handle spaceship click
// Last game event if/else
// If user got the correct answers - You Win
// Save score to LS
// Assign score to scoreboard
// else - Game Over


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//// EXECUTABLE CODE ////

// Anything that runs on page load //

// Function Calls //

// Event listeners //

// 'Start Game' button event listener


// Shape events: //

// Click on left stone event listener

shapeClick.addEventListener('click',clickHandler);

// Click on middle stone event listener

// Click on right stone event listener

// Click on spaceship event listener
