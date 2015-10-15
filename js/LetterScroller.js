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
  var heightOffset = -100;
  var leftOffset = 200;
  var letterSize = 100;

  // Animation variables
  var animationSpeed = 6000;

  return {
    createStringArray: function(array) {
      if(currentStringArray.length === 0) {
        currentStringArray = array;
        currentIndex = 0;
      };
    },

    getStringArray: function() {
      return currentStringArray;
    },

    scrollNewLetter: function() {
      // check if there are more letters to scroll through
      if(currentIndex >= currentStringArray.length) {
        return false;
      }

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

    // remove the first letter
    deleteLetter: function() {
      // find the first scrolling letter and delete it
      var myScrollingLetters = $('.scrollingLetter');
      myScrollingLetters.eq(0).remove();

      // update currentStringArray
      currentStringArray.shift();

      // update the current index. Without this, letters will be skipped
      // because we are deleting elements from the beginning of array
      currentIndex--;
    }

  }
})();
