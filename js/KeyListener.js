var KeyListener = (function() {
<<<<<<< HEAD

  return {
    // set up eventListener
    setUp: function() {
      $(document).keypress(function(e) {
        KeyListener.processKeyPress(String.fromCharCode(e.keyCode));
      });
=======
  // 'first' ensures we only create eventListener once
  var first = false;
  return {
    // set up eventListener
    setUp: function() {

      if(!first) {
        $(document).keypress(function(e) {
          KeyListener.processKeyPress(String.fromCharCode(e.keyCode));
        });
        first = true;
      }
>>>>>>> master
    },

    processKeyPress: function(keyPress) {
      var myKeyPress = keyPress.toLowerCase();
      GameController.checkForMatch(myKeyPress);
    }

  }
})();
