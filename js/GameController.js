/*
GameController
  -start the game
  -check to see if the user entered key correctly
  -delete the letters when they scroll off the screen
*/
var GameController = (function() {
  var deleteScrollOffset = 100;
  // type zone is the area on screen where it'll check for a type match
  var typeZoneLeft = deleteScrollOffset + 10;
  var typeZoneRight = deleteScrollOffset + 200;

  return {
    // start a new game
    startGame: function() {
      GameObject.createStringArray();
      console.log(GameObject.getStringArray());

      // Create the typing zone
      var typingZone = $('<div>', {class:'typingContainer'});
      typingZone.css({'width': '' + (typeZoneRight - typeZoneLeft) + 'px', 'height': '100px', 'left': '' + typeZoneLeft + 'px'});
      $('body').append(typingZone);
    },

    // check typed value and see if it matches
    checkForMatch: function(letter) {
      // only check for match when letter is inside the typezone
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position() === undefined) {
        return false;
      }

      if(firstLetter.position().left < typeZoneRight && firstLetter.position().left > typeZoneLeft) {
        if(GameObject.checkForMatch(letter)) {
          console.log('Yay! Removed letter');
          GameObject.removeFirstValue();
          LetterScroller.deleteLetter();
        } else {
          console.log('Incorrect key was pressed');
        }
      }

    },

    // check for letters out of screen
    deleteOldLetters: function() {
      // check to see which letters are off the screen
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position() === undefined) {
        return false;
      }

      if(firstLetter.position().left < deleteScrollOffset) {
        console.log('Letter was missed');
        GameObject.removeFirstValue();
        LetterScroller.deleteLetter();
      }
    }
  };

})();
