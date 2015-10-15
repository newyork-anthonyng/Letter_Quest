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
  var arrayLength = 40;

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
      currentStringArray = currentStringArray.splice(1);
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
        console.log('Correct!');
        GameObject.removeFirstValue();
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

  return {
    createStringArray: function(array) {
      if(currentStringArray.length === 0) {
        currentStringArray = array;
      };
    },

    getStringArray: function() {
      return currentStringArray;
    },

    scrollNewLetter: function() {
      // create a new letter
      var newLetter = $('<div>', {id:currentStringArray[0], class:'scrollingLetter'});
      newLetter.html(currentStringArray[0]);
      newLetter.css({top:$(window).height() - 200, left:$(window).width()});

      // add a scroll event to the letter
      newLetter.animate({left:'-1000px'}, {duration:6000});
      $('.scrollingLetterContainer').append(newLetter);

      // remove the old letter
      currentStringArray = currentStringArray.splice(1);
    },

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
      console.log(keyPress + ' was pressed.');
      lastKeyPress = keyPress;
      GameController.checkForMatch(lastKeyPress);
    },

    getLastKeyPress: function() {
      return lastKeyPress;
    }

  }
})();
