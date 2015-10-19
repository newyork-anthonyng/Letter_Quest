var KeyListener = (function() {
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
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
=======

  return {
    // set up eventListener
    setUp: function() {
      $(document).keypress(function(e) {
        KeyListener.processKeyPress(String.fromCharCode(e.keyCode));
      });
>>>>>>> Added gh-pages
    },

    processKeyPress: function(keyPress) {
      var myKeyPress = keyPress.toLowerCase();
      GameController.checkForMatch(myKeyPress);
    }

  }
})();
