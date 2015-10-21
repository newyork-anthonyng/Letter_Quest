/*
  GameObject
    -create new random strings
    -match up typed letters against current letter
*/

var GameObject = (function() {

  var currentStringArray = [];
<<<<<<< HEAD
  var letterSet = 'abcdefghijklmnopqrstuvwxyz';
  var numberSet = '1234567890';
  var charSet = letterSet + numberSet;
  var arrayLength = 12;
=======
  // charSet represents all the possible characters that will be shown in the game
  var letterSet = 'abcdefghijklmnopqrstuvwxyz';
  var numberSet = '1234567890';
  var symbolSet = '#${}/\\.?<>;:[]+=-';
  var charSet = letterSet + numberSet + symbolSet;
  // arrayLength represents how long each block of characters will be in the game
  var arrayLength = 10;
>>>>>>> master

  return {
    // create new string array
    createStringArray: function() {
      // check if we still have an array
      if(currentStringArray.length === 0) {
        for(var i = 0; i < arrayLength; i++) {
          var randomNumber = Math.floor(Math.random() * charSet.length);
          currentStringArray.push(charSet[randomNumber]);
          // play audio
          var explosion = document.getElementById('Explosion');
          explosion.play();
        };
        console.log(currentStringArray);

        // Game speed will increase everytime we create a new string array
        GameController.changeScrollSpeed();
<<<<<<< HEAD
      };
=======
        return true;
      };

      return false;
>>>>>>> master
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
<<<<<<< HEAD
    }
=======
    },

    // restart game array
    restart: function() {
      currentStringArray = [];
    }

>>>>>>> master
  }
})();
