var database;
var gameState = 0;
var playerCount;
var form, game, player;   //objects of the class

function setup(){
  createCanvas(400,400);

  //create the database inside the variable 'database'--> firebase.database()
  database = firebase.database();

  game = new Game();
  game.getState();
  game.wait();
}

function draw(){
  
}