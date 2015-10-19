/*
  GameObject
    -create new random strings
    -match up typed letters against current letter
*/

var GameObject = (function() {

  var currentStringArray = [];
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
  // charSet represents all the possible characters that will be shown in the game
  var letterSet = 'abcdefghijklmnopqrstuvwxyz';
  var numberSet = '1234567890';
  var symbolSet = '#${}/\\.?<>;:[]+=-';
  var charSet = letterSet + numberSet + symbolSet;
  // arrayLength represents how long each block of characters will be in the game
  var arrayLength = 10;
=======
  var letterSet = 'abcdefghijklmnopqrstuvwxyz';
  var numberSet = '1234567890';
  var charSet = letterSet + numberSet;
  var arrayLength = 12;
>>>>>>> Added gh-pages

  return {
    // create new string array
    createStringArray: function() {
      // check if we still have an array
      if(currentStringArray.length === 0) {
        for(var i = 0; i < arrayLength; i++) {
          var randomNumber = Math.floor(Math.random() * charSet.length);
          currentStringArray.push(charSet[randomNumber]);
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
          // play audio
          var explosion = document.getElementById('Explosion');
          explosion.play();
=======
>>>>>>> Added gh-pages
        };
        console.log(currentStringArray);

        // Game speed will increase everytime we create a new string array
        GameController.changeScrollSpeed();
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
        return true;
      };

      return false;
=======
      };
>>>>>>> Added gh-pages
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
<<<<<<< 23080f41b22d4ee00e6efa133888924ca7d87dd5
    },

    // restart game array
    restart: function() {
      currentStringArray = [];
    }

=======
    }
>>>>>>> Added gh-pages
  }
})();
