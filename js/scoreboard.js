'use strict';

// Global Variables
var playersArray = [];
var namesArray = [];
var scores = [];

retrieveLocalStorage();

// DOM element

var scoresTable = document.getElementById('high-scores');

// FUNCTIONS

// Retrieve Names and Scores from LS:

function retrieveLocalStorage(){
  if (localStorage.players){
    var unparsedPlayers = localStorage.getItem('players');
    var parsedPlayers = JSON.parse(unparsedPlayers);
    playersArray = parsedPlayers;
    // console.log('this is the parsedPlayers' + parsedPlayers);
  }
}

// function getNamesFromLS (){
//   var retrievedPlayers = localStorage.getItem('players');
//   var parsedPlayers = JSON.parse(retrievedPlayers);

//   console.log(parsedPlayers);

// }


// function getScoresFromLS (){
//   var retrievedScores = localStorage.getItem('scores');
//   var parsedScores = JSON.parse(retrievedScores);
//   scores = parsedScores;
// }

// TABLE HEADER FUNCTION

function makeHeaderRow(){
  // create the row
  var trEl = document.createElement('tr');

  // create, content, append Name cell
  var thEl = document.createElement('th');
  thEl.textContent = 'NAME';
  trEl.appendChild(thEl);

  // create, content, append Score cell
  thEl = document.createElement('th');
  thEl.textContent = 'SCORE';
  trEl.appendChild(thEl);

  // append the row to the table
  scoresTable.appendChild(trEl);
}

function makeDataRow(){
  // create the row
  // var trEl = document.createElement('tr');

  // create, content, append first cell
  for (var i = 0; i < playersArray.length; i++){
    var trEl = document.createElement('tr');

    var tdEL = document.createElement('td');
    tdEL.textContent = playersArray[i].userName;
    trEl.appendChild(tdEL);

    tdEL = document.createElement('td');
    tdEL.textContent = playersArray[i].points;
    trEl.appendChild(tdEL);

    scoresTable.appendChild(trEl);
  }
}



function playerSort(){
  playersArray.sort(function(a,b){
    return b.points - a.points;
  });
  playersArray.length = 10;
}


console.log('unsorted', playersArray);
playerSort();
console.log('sorted', playersArray);

makeHeaderRow();
makeDataRow();
