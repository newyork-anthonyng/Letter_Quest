/*
  GameObject
    -create new random strings
    -match up typed letters against current letter
*/

var GameObject = (function() {

  var currentStringArray = [];
  var letterSet = 'abcdefghijklmnopqrstuvwxyz';
  var numberSet = '1234567890';
  var charSet = '#${}/\\.?<>;:[]+=-';
  var charSet = letterSet + numberSet + charSet;
  var arrayLength = 10;

  return {
    // create new string array
    createStringArray: function() {
      // check if we still have an array
      if(currentStringArray.length === 0) {
        for(var i = 0; i < arrayLength; i++) {
          var randomNumber = Math.floor(Math.random() * charSet.length);
          currentStringArray.push(charSet[randomNumber]);
        };
        console.log(currentStringArray);

        // Game speed will increase everytime we create a new string array
        GameController.changeScrollSpeed();
      };
    },

    getStringArray: function() {
      return currentStringArray;
    },

    // check for match with first letter of currentStringArray
    checkForMatch: function(letter) {
      return letter === currentStringArray[0] ? true : false;
    },

    // remove first value of array
    removeFirstValue: function() {
      currentStringArray.slice(1);
    },

    // restart game array
    restart: function() {
      currentStringArray = [];
    }

  }
})();
