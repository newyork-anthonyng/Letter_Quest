/*
Notes
Use css({top:100, left:200}) to set the position of the elements

*/

// Create a random array of letters
var letterString = '';
var letterSet = 'abcdefghijklmnopqrstuvwxyz1234567890'

var numberSet = '1234567890';
var speed = 2000;
var timerId;

$(function() {
  console.log('app.js loaded');

  // create random string
  for(var i = 0; i < 50; i++) {
    var randomNumber = Math.floor(Math.random() * letterSet.length);
    var randomLetter = letterSet[randomNumber];
    letterString += randomLetter;
  };
  console.log(letterString);

  // Have the letters scroll across the screen, from left to right
  timerId = window.setInterval(function() {
    var newLetter = $('<div>', {class:'scrollingLetter', id:letterString[0]});
    newLetter.html(letterString[0]);
    newLetter.css({top:100, left:$(window).width()});
    newLetter.animate({left:'-1000px', opacity:1.0}, {duration: 10000});
    $('.scrollingLetterContainer').append(newLetter);

    scrollLetter(letterString[0]);
  }, speed);

  // register a key listener
  $(document).keypress(function(e) {
    console.log(String.fromCharCode(e.keyCode) + ' was pressed.');
  });


});

// Take a letter off of the letter string and pass it along to the current letter.
var scrollLetter = function(letter) {
  console.log('scrolling: ' + letter);
  // remove the first letter

  letterString = letterString.slice(1);
};
