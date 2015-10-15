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
