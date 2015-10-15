/*
  LetterScroller
    -scroll all of the letters through the game window
*/

var LetterScroller = (function() {

  var currentStringArray = [];
  var currentIndex = 0;   // keeps the current index of the letter you're scrolling
  var heightOffset = 50;
  var leftOffset = 50;
  var letterSize = 100;
  var animationSpeed = 5000;

  return {
    createStringArray: function(array) {
      if(currentStringArray.length === 0) {
        LetterScroller.setStringArray(array);
        currentIndex = 0;
      };
    },

    getStringArray: function() {
      return currentStringArray;
    },

    setStringArray: function(array) {
      currentStringArray = array;
    },

    scrollNewLetter: function() {
      // check if we still have letters to scroll through
      if(currentIndex > currentStringArray.length - 1) {
        return false;
      };

      // create a new letter
      var newLetter = $('<div>', {id:currentStringArray[currentIndex], class:'scrollingLetter'});
      newLetter.html(currentStringArray[currentIndex]);
      newLetter.css({top:heightOffset, left:$(window).width() + 2000});

      // add a scroll event to the letter
      // create left position based on the position of the letter in the array
      var leftPosition = '' + (currentIndex * letterSize + leftOffset) + 'px';

      newLetter.animate({left: leftPosition}, {duration: animationSpeed, easing: 'swing'});
      $('.scrollingLetterContainer').append(newLetter);

      // scroll the next letter
      currentIndex++;
    },

    // remove the first letter, and scroll all the other letters to the left
    deleteLetter: function() {
      // find the first letter div and delete it
      var myScrollingLetters = $('.scrollingLetter');
      console.log('delete letter');
      myScrollingLetters.eq(0).remove();
      myScrollingLetters = $('.scrollingLetter'); // update scrolling letters to have the first element removed

      // delete the first letter from the currentStringArray
      currentStringArray.shift();

      // move all of the other div's to the left
      for(var i = 0; i < myScrollingLetters.length; i++) {
        var leftPosition = '' + (i * letterSize + 50) + 'px';
        myScrollingLetters.eq(i).stop();  // exit out of previous animations
        myScrollingLetters.eq(i).animate({left: leftPosition}, {duration: animationSpeed / 2, easing:'linear'});
      };
    }

  }
})();