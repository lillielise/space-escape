'use strict';

// Global Variables
var namesArray = [];
var scores = [];

// DOM element

var scoresTable = document.getElementById('high-scores');

// FUNCTIONS
 
function getNamesFromLS (){
  var retrievedPlayers = localStorage.getItem('players');
  var parsedPlayers = JSON.parse(retrievedPlayers);

  console.log(parsedPlayers);

}


function getScoresFromLS (){
  var retrievedScores = localStorage.getItem('scores');
  var parsedScores = JSON.parse(retrievedScores);
  scores = parsedScores;
}
// TABLE HEADER FUNCTION

function makeHeaderRow(){
  // create the row
  var trEl = document.createElement('tr');

  // create, content, append Name cell
  var thEl = document.createElement('td');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  // create, content, append Score cell
  thEl = document.createElement('td');
  thEl.textContent = 'Score';
  trEl.appendChild(thEl);

  // append the row to the table
  scoresTable.appendChild(trEl);
}

function makeDataRow(){
  // create the row
  var trEl = document.createElement('tr');

  for (var i = 0; i < scores.length; i++){
  // create, content, append first cell
    var tdEL = document.createElement('td');
    tdEL.textContent = namesArray[i];
    trEl.appendChild(tdEL);


    // create, content, append first cell
    var tdTwoEL = document.createElement('td');
    tdTwoEL.textContent = scores[i];
    trEl.appendChild(tdTwoEL);

    // append the row to the table
    // scoresTable.appendChild(trEl);
  }
  scoresTable.appendChild(trEl);
}

getScoresFromLS();
getNamesFromLS();
makeHeaderRow();
makeDataRow();

