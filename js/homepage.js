'use strict';


var playersArray = [];
var startButton = document.getElementById('start');



function retrieveLocalStorage (){
  if (localStorage.players){
    var unparsedPlayers = localStorage.getItem('players');
    var parsedPlayers = JSON.parse(unparsedPlayers);
    playersArray = parsedPlayers;
    console.log(parsedPlayers);
    console.log(playersArray);
  }
}

retrieveLocalStorage();

function Player(userName){
  this.userName = userName;
  this.points = 0;
  playersArray.unshift(this);
}

function getUserName(e) {
  e.preventDefault();
  var nameField = e.target.playername.value;
  new Player(nameField);

  // save to LS
  var stringifyNames = JSON.stringify(playersArray);
  console.log('this is my stringify names', stringifyNames);
  localStorage.setItem('players', stringifyNames);


  console.log(nameField);
}

startButton.addEventListener('submit', getUserName);



