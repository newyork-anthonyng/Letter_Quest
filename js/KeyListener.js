var KeyListener = (function() {

  return {
    // set up eventListener
    setUp: function() {
      $(document).keypress(function(e) {
        KeyListener.processKeyPress(String.fromCharCode(e.keyCode));
      });
    },

    processKeyPress: function(keyPress) {
      var myKeyPress = keyPress.toLowerCase();
      GameController.checkForMatch(myKeyPress);
    }

  }
})();
