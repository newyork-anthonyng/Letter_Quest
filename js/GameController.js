/*
GameController
  -start the game
  -check to see if the user entered key correctly
  -delete the letters when they scroll off the screen
*/
var GameController = (function() {
  var deleteScrollOffset = 100;

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
    },

    // check for letters out of screen
    deleteOldLetters: function() {
      // check to see which letters are off the screen
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position().left < deleteScrollOffset) {
        GameObject.removeFirstValue();
        LetterScroller.deleteLetter();
      };
    }
  };

})();
