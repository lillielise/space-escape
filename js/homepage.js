'use strict';

// var username = document.getElementById('name').value;
var namesArray = [];
var startButton = document.getElementById('start');

function getUserName(e) {
  e.preventDefault();
  var nameField = e.target.playername.value;
  namesArray.push(nameField);
  saveToLocalStorage();
  console.log(saveToLocalStorage);



  // var playerName = document.getElementById('start');
  console.log(nameField);
  console.log(namesArray);
}

startButton.addEventListener('submit', getUserName);



function saveToLocalStorage(){
  var stringifyNames = JSON.stringify(namesArray);
  console.log("this is my stringify names", stringifyNames);
  localStorage.setItem('players', stringifyNames); 

}

var highScores = document.getElementById('highscores');
function tableHeader(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Score';
  trEl.appendChild(thEl);
  highScores.appendChild(trEl);
}