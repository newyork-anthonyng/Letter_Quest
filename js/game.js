/*
  GameObject
    -create new random strings
    -match up typed letters against current letter
*/

var GameObject = (function() {
  // private
  var currentStringArray = [];
  var letterSet = 'abcdefghijklmnopqrstuvwxyz';
  var numberSet = '1234567890';
  var charSet = letterSet + numberSet;
  var arrayLength = 10;

  // public
  return {
    // create new string array
    createStringArray: function() {
      // only create when currentStringArray is empty
      if(currentStringArray.length === 0) {
        for(var i = 0; i < arrayLength; i++) {
          var randomNumber = Math.floor(Math.random() * charSet.length);
          currentStringArray.push(charSet[randomNumber]);
        };
      };
    },

    // getter for currentStringArray
    getStringArray: function() {
      return currentStringArray;
    },

    // check for match with first letter of currentStringArray
    checkForMatch: function(letter) {
      return letter === currentStringArray[0] ? true : false;
    },

    // remove first value of array
    removeFirstValue: function() {
      currentStringArray = currentStringArray.slice(1);
    }

  }
})();

/* GameController
*/
var GameController = (function() {
  // private

  return {
    // start a new game
    startGame: function() {
      GameObject.createStringArray();
      console.log(GameObject.getStringArray());
    },

    // check typed value and see if it matches
    checkForMatch: function(letter) {
      if(GameObject.checkForMatch(letter)) {
        GameObject.removeFirstValue();
        LetterScroller.deleteLetter();
      } else {
        console.log('Incorrect key was pressed');
      };
    }
  };

})();

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
  var animationSpeed = 6000;

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

      newLetter.animate({left: leftPosition}, {duration: animationSpeed});
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
        myScrollingLetters.eq(i).animate({left: leftPosition}, {duration: animationSpeed / 2});
      };
    }

  }
})();

var KeyListener = (function() {
  var lastKeyPress;

  return {
    // set up eventListener
    setUp: function() {
      $(document).keypress(function(e) {
        KeyListener.processKeyPress(String.fromCharCode(e.keyCode));
      });
    },

    // update lastKeyPress
    processKeyPress: function(keyPress) {
      var myKeyPress = keyPress.toLowerCase();
      console.log(myKeyPress + ' was pressed.');
      lastKeyPress = myKeyPress;
      GameController.checkForMatch(lastKeyPress);
    },

    getLastKeyPress: function() {
      return lastKeyPress;
    }

  }
})();
