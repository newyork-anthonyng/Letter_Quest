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
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
  var heightOffset = 0;
  var leftOffset = 20;
=======
  var heightOffset = -100;
  var leftOffset = 200;
>>>>>>> Added gh-pages
  var letterSize = 100;

  // Animation variables
  var animationSpeed = 6000;

  return {
    createStringArray: function(array) {
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
        currentStringArray = array;
        currentIndex = 0;
=======
      if(currentStringArray.length === 0) {
        currentStringArray = array;
        currentIndex = 0;
      };
>>>>>>> Added gh-pages
    },

    getStringArray: function() {
      return currentStringArray;
    },

    scrollNewLetter: function() {
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
=======
      console.log('Scroll Letter');
>>>>>>> Added gh-pages
      // check if there are more letters to scroll through
      if(currentIndex >= currentStringArray.length) {
        return false;
      }
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5

=======
      console.log('Inside scroll letter');
>>>>>>> Added gh-pages
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

<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
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

=======
    // remove the first letter
    deleteLetter: function() {
      // find the first scrolling letter and delete it
      var myScrollingLetters = $('.scrollingLetter');
>>>>>>> Added gh-pages
      myScrollingLetters.eq(0).remove();

      // update currentStringArray
      currentStringArray.shift();

      // update the current index. Without this, letters will be skipped
      // because we are deleting elements from the beginning of array
      currentIndex--;
    },

<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
=======
    // restart LetterScroller
    restartCurrentIndex: function() {
      currentIndex = 0;
    }

>>>>>>> Added gh-pages
  }
})();
