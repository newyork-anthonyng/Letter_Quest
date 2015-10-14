// Create a random array of letters
var letterString = '';
var letterSet = 'abcdefghijklmnopqrstuvwxyz1234567890'

var numberSet = '1234567890';
var speed = 2000;
var timerId;

$(function() {
  // create initial random string
  console.log('app.js loaded');
  GameObject.createStringArray();
  LetterScroller.createStringArray(GameObject.getStringArray());

  // set up interval for scrolling letters
  timerId = window.setInterval(function() {
    LetterScroller.scrollNewLetter();
  }, speed);

  // set up key listener
  KeyListener.setUp();

});
