var gameSpeed = 500;
var scrollingSpeed = 1000;
var gameTimerId;
var scrollingTimerId;

$(function() {
  // create initial random string
  console.log('app.js loaded');
  GameController.startGame();
  LetterScroller.createStringArray(GameObject.getStringArray());

  // set up interval for Game Controller
  gameTimerId = window.setInterval(function() {
    GameController.deleteOldLetters();
  }, gameSpeed);
  
  // set up interval for scrolling letters
  scrollingTimerId = window.setInterval(function() {
    LetterScroller.scrollNewLetter();
  }, scrollingSpeed);



  // set up key listener
  KeyListener.setUp();


});
