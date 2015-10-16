/*
GameController
  -start the game
  -check to see if the user entered key correctly
  -delete the letters when they scroll off the screen
*/

var GameController = (function() {
  // offset for position where letters will get deleted ('deleteZone');
  var deleteScrollOffset = 100;

  // scrolling speed. 'i' is counter for the 'speed' array
  var speed = [900, 900, 750, 650, 550, 450, 400, 350, 300, 250, 200, 200, 200];
  var speedCounter = 0;

  // images
  var flavorImageArray = ['images/flavorText1.jpg'];
  var healthImage = 'url(images/health.gif)';
  var heroImage = 'images/superhero.jpg';

  // typeZone is the area on screen where you type for matches
  var typeZoneLeft = deleteScrollOffset + 10;
  var typeZoneRight = deleteScrollOffset + 200;

  return {

    startGame: function() {
      // set up intervals and listeners
      gameTimerId = window.setInterval(function() {
        GameController.updateGame();
      }, gameSpeed);

      scrollingTimerId = window.setInterval(function() {
        LetterScroller.scrollNewLetter();
      }, scrollingSpeed);

      KeyListener.setUp();

      // create initial random strings
      GameObject.restart();
      GameObject.createStringArray();
      LetterScroller.createStringArray(GameObject.getStringArray());

      // Create typingZone
      var typingZone = $('<div>', {class:'typingContainer'});
      typingZone.css({'width': '' + (typeZoneRight - typeZoneLeft) + 'px', 'height': '100px', 'left': '' + typeZoneLeft + 'px'});
      $('body').append(typingZone);

      // Reset player elements
      Player.resetPlayer();
      // player image
      var playerImage = $('<img></img>');
      playerImage.attr('src', heroImage);
      $('.hero').empty();
      $('.hero').append(playerImage);
    },

    // check typed value for a match
    checkForMatch: function(letter) {
      // check for match when letter is inside the 'typeZone'
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position() === undefined) {
        return false;
      }

      // checking position of the scrolling letter
      if(firstLetter.position().left < typeZoneRight && firstLetter.position().left > typeZoneLeft) {
        if(GameObject.checkForMatch(letter)) {
          GameController.showFlavor();
          GameObject.removeFirstValue();
          LetterScroller.deleteLetter(true);
        } else {
          GameController.damagePlayer();
        }
      }

    },

    // delete letters past the deleteZone
    deleteOldLetters: function() {
      // check to see if we need to create new array if our current one is blank
      GameObject.createStringArray();

      // check to see which letters are off the screen
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position() === undefined) {
        return false;
      }

      // delete letters that the user missed
      if(firstLetter.position().left < deleteScrollOffset) {
        console.log('deleting old letters');
        GameObject.removeFirstValue();
        LetterScroller.deleteLetter(false);
        GameController.damagePlayer(1);
      }

    },

    // change scroll speed to update difficulty
    changeScrollSpeed: function() {
      // clear old interval
      clearInterval(scrollingTimerId);

      // set new interval
      scrollingTimerId = window.setInterval(function() {
        LetterScroller.scrollNewLetter();
      }, speed[speedCounter++]);
      console.log('changing scroll speed: ' + speed[speedCounter]);
    },

    damagePlayer: function() {
      Player.damagePlayer(1);
    },

    // update game will be called every 'game tick'
    updateGame: function() {
      GameController.deleteOldLetters();
      GameController.updateDisplay();

      // check for death
      if(Player.getHealth() <= 0) {
        GameController.endGame();
      }
    },

    updateDisplay: function() {
      // draw health
      var healthContainer = $('.health');

      // reset health containers
      $('.health').empty();

      for(var i = 0; i < Player.getHealth(); i++) {
        var newHealth = $('<div>');
        newHealth.css({'background-image': healthImage, 'width':'50px', 'height':'50px', 'float':'left', 'border':'1px solid black'});
        healthContainer.append(newHealth);
      };
    },

    endGame: function() {
      console.log('game is over');

      // stop all timers and clear out existing scrolling letters
      clearInterval(gameTimerId)
      clearInterval(scrollingTimerId);
      $('.scrollingLetterContainer').empty();

      // create a restart button
      var restartButton = $('.hero');
      restartButton.empty();
      restartButton.html('Click me to restart');
      restartButton.click(function() {
        GameController.startGame();
      });
    },

    showFlavor: function() {
      // get the flavor image container
      var flavorContainer = $('.flavor');

      // grab a random image
      var randomNumber = Math.floor(Math.random() * flavorImageArray.length);
      var imagePath = 'url(' + flavorImageArray[randomNumber] + ')'

      flavorContainer.css('background-image', imagePath);

      // set timeOut to remove the background image
      window.setTimeout(function(){
        flavorContainer.css('background-image', '');
      }, 500);
    }

  };
})();
