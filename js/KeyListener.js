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
