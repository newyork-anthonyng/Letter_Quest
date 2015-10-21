/*
  LetterScroller
    -scroll all of the letters through the game window
    -check to see when letter has scrolled past the typing zone
*/

var LetterScroller = (function() {

  // Scrolling Letters are stored inside arrays
  var currentStringArray = [];
  var currentIndex = 0;

  // Position variables for the scrolling letters
<<<<<<< HEAD
  var heightOffset = -100;
  var leftOffset = 200;
=======
  var heightOffset = 0;
  var leftOffset = 20;
>>>>>>> master
  var letterSize = 100;

  // Animation variables
  var animationSpeed = 6000;

  return {
    createStringArray: function(array) {
<<<<<<< HEAD
      if(currentStringArray.length === 0) {
        currentStringArray = array;
        currentIndex = 0;
      };
=======
        currentStringArray = array;
        currentIndex = 0;
>>>>>>> master
    },

    getStringArray: function() {
      return currentStringArray;
    },

    scrollNewLetter: function() {
<<<<<<< HEAD
      console.log('Scroll Letter');
=======
>>>>>>> master
      // check if there are more letters to scroll through
      if(currentIndex >= currentStringArray.length) {
        return false;
      }
<<<<<<< HEAD
      console.log('Inside scroll letter');
=======

>>>>>>> master
      // create a new scrolling letter
      var newLetter = $('<div>', {id:currentStringArray[currentIndex], class:'scrollingLetter'});
      newLetter.html(currentStringArray[currentIndex]);
      newLetter.css({top:heightOffset, left:$(window).width() + leftOffset});

      // add scroll animation to the scrolling letter
      newLetter.animate({left: '-200px'}, {duration: animationSpeed});
      $('.scrollingLetterContainer').append(newLetter);

      // go to next scrolling letter
      currentIndex++;
    },

<<<<<<< HEAD
    // remove the first letter
    deleteLetter: function() {
      // find the first scrolling letter and delete it
      var myScrollingLetters = $('.scrollingLetter');
=======
    // remove the first letter of the string array
    // 'shake' variable will be true if letter was typed correctly, false otherwise
    deleteLetter: function(shake) {
      // find the first scrolling letter and delete it
      var myScrollingLetters = $('.scrollingLetter');

      if(shake) {
        // scrolling letter was typed correctly. Animate the enemy
        $('.enemy').effect('shake', {distance:15});
        $('.scrollingLetterContainer').effect('bounce', {distance:50});
      } else {
        // scrolling letter was missed
        $('.hero').effect('shake', {distance:15});
      }

>>>>>>> master
      myScrollingLetters.eq(0).remove();

      // update currentStringArray
      currentStringArray.shift();

      // update the current index. Without this, letters will be skipped
      // because we are deleting elements from the beginning of array
      currentIndex--;
    },

<<<<<<< HEAD
    // restart LetterScroller
    restartCurrentIndex: function() {
      currentIndex = 0;
    }

=======
>>>>>>> master
  }
})();
