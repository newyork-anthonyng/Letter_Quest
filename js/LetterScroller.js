/*
  LetterScroller
    -scroll all of the letters through the game window
    -check to see when letter has scrolled past the typing zone
*/

var LetterScroller = (function() {

  var currentStringArray = [];
  var currentIndex = 0;
  var heightOffset = 50;
  var leftOffset = 200;
  var letterSize = 100;
  var animationSpeed = 5000;

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
      // check if we still have letters to scroll through
      if(currentIndex > currentStringArray.length - 1) {
        return false;
      };

      // create a new letter
      var newLetter = $('<div>', {id:currentStringArray[currentIndex], class:'scrollingLetter'});
      newLetter.html(currentStringArray[currentIndex]);
      newLetter.css({top:heightOffset, left:$(window).width() + leftOffset});

      // add a scroll event to the letter
      // create left position based on the position of the letter in the array
      newLetter.animate({left: '-200px'}, {duration: animationSpeed, easing: 'swing'});
      $('.scrollingLetterContainer').append(newLetter);

      // scroll the next letter
      currentIndex++;
    },

    // remove the first letter, and scroll all the other letters to the left
    deleteLetter: function() {
      // find the first letter div and delete it
      var myScrollingLetters = $('.scrollingLetter');
      myScrollingLetters.eq(0).remove();
      myScrollingLetters = $('.scrollingLetter'); // update scrolling letters to have the first element removed

      // delete the first letter from the currentStringArray
      currentStringArray.shift();
    }

  }
})();
