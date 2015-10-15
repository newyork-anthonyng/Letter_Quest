var speed = 500;
var timerId;

$(function() {
  // create initial random string
  console.log('app.js loaded');
  GameController.startGame();
  LetterScroller.createStringArray(GameObject.getStringArray());

  // set up interval for scrolling letters
  timerId = window.setInterval(function() {
    LetterScroller.scrollNewLetter();
  }, speed);

  // set up key listener
  KeyListener.setUp();


});
