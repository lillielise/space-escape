'use strict';

// var username = document.getElementById('name').value;
var allPlayer = [];
var startButton = document.getElementById('start');
// var highScores = document.getElementById('highscores');
// Player constructor


function retrieveLocalStorage (){
  if (localStorage.players){
    var unparsedPlayers = localStorage.getItem('players');
    var parsedPlayers = JSON.parse(unparsedPlayers);
    allPlayer = parsedPlayers;
    console.log(parsedPlayers);
  // console.log(allPlayer);
  }
}

retrieveLocalStorage();

function Player(userName){
  this.userName = userName;
  this.score = 0;
  allPlayer.push(this);
}

function getUserName(e) {
  e.preventDefault();
  var nameField = e.target.playername.value;
  new Player(nameField);

  // save to LS
  var stringifyNames = JSON.stringify(allPlayer);
  console.log('this is my stringify names', stringifyNames);
  localStorage.setItem('players', stringifyNames);





  // var playerName = document.getElementById('start');
  console.log(nameField);
  console.log(namesArray);
}

startButton.addEventListener('submit', getUserName);



// function saveToLocalStorage(){
//   var stringifyNames = JSON.stringify(namesArray);
//   console.log("this is my stringify names", stringifyNames);
//   localStorage.setItem('players', stringifyNames);

//   // if (localStorage.getItem('players')){
//   //   var retrievedPlayers = localStorage.getItem('players');
//   //   var parsedPlayers = JSON.parse(retrievedPlayers);
//   //   namesArray = parsedPlayers;
//   // }
// }


// function tableHeader(){
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'Name';
//   trEl.appendChild(thEl);

//   var thEl = document.createElement('th');
//   thEl.textContent = 'Score';
//   trEl.appendChild(thEl);
//   highScores.appendChild(trEl);
// }
// tableHeader();
