var gameSpeed = 500;
var scrollingSpeed = 1000;
// interval ID's
var gameTimerId;
var scrollingTimerId;

$(function() {
  console.log('app.js loaded');
  GameController.startGame();
});
