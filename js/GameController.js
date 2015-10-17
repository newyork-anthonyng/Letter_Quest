/*
GameController
  -start game
  -check to see if user entered key correctly
  -delete letters when they scroll off the screen
*/

var GameController = (function() {
  // position where letters will get deleted ('deleteZone');
  var deleteScrollOffset = 100;

  // scrolling speed
  var speed = [900, 900, 700, 600, 500, 400, 390, 360, 330, 300, 290, 280, 270, 260, 250, 240, 230, 220, 210, 200];
  var speedCounter = 0;

  // images
  var flavorImageArray = ['images/flavor1.png', 'images/flavor2.png', 'images/flavor3.png', 'images/flavor4.png', 'images/flavor5.png'];
  var healthImage = 'url(images/health.png)';
  var heroImage = ['images/superhero.png', 'images/superheroFighting.png', 'images/superheroHurt.png', 'images/superheroDead.png'];
  var enemyImage = ['images/enemy1.png', 'images/enemy2.png', 'images/enemy3.png', 'images/enemy4.png'];

  // typeZone is the area on screen where you check for matches
  var typeZoneLeft = deleteScrollOffset + 10;
  var typeZoneRight = deleteScrollOffset + 200;

  return {

    startGame: function() {
      // set up intervals and listeners
      GameController.setUpIntervals();

      // create initial random strings
      GameObject.restart();
      GameObject.createStringArray();
      LetterScroller.createStringArray(GameObject.getStringArray());

      // Create typingZone
      $('.typingContainer').remove();
      var typingZone = $('<div>', {class:'typingContainer'});
      typingZone.css({'width': '' + (typeZoneRight - typeZoneLeft) + 'px', 'height': '100px', 'left': '' + typeZoneLeft + 'px'});
      $('body').append(typingZone);

      // Reset player elements
      Player.resetPlayer();

      var playerImage = $('<img></img>');
      playerImage.attr('src', heroImage[1]);
      $('.hero').empty();
      $('.hero').append(playerImage);

      // Add enemy
      var myEnemyImage = $('<img></img>');
      var randomImage = Math.floor(Math.random() * enemyImage.length);
      myEnemyImage.attr('src', enemyImage[randomImage]);
      myEnemyImage.css({'width': '75%'});
      $('.enemy').empty(myEnemyImage);
      $('.enemy').append(myEnemyImage);

      // Reset flavor
      $('.flavor').css({'background-image':''});
    },

    setUpIntervals: function() {
      gameTimerId = window.setInterval(function() {
        GameController.updateGame();
      }, gameSpeed);

      speedCounter = 0;
      scrollingTimerId = window.setInterval(function() {
        LetterScroller.scrollNewLetter();
      }, speed[speedCounter]);

      KeyListener.setUp();
    },

    // check typed value for a match
    checkForMatch: function(letter) {
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

    // delete letters past the 'deleteZone'
    deleteOldLetters: function() {
      // check to see if we need to create new array if our current one is blank
      // GameObject.createStringArray() will return 'true' when a new string is created
      if(GameObject.createStringArray()) {
        GameController.changeEnemy();
      };

      // check to see which letters are off the screen
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position() === undefined) {
        return false;
      }

      // delete letters that the user missed
      if(firstLetter.position().left < deleteScrollOffset) {
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
    },

    damagePlayer: function() {
      Player.damagePlayer(1);

      // change player sprite to hurtPlayerSprite
      var playerImage = $('<img></img>');
      playerImage.attr('src', heroImage[2]);
      $('.hero').empty();
      $('.hero').append(playerImage);

      // change player sprite back to fightingPlayerSprite after a delay
      window.setTimeout(function() {
        if(Player.getHealth() > 0) {
          var playerImage = $('<img></img>');
          playerImage.attr('src', heroImage[1]);
          $('.hero').empty();
          $('.hero').append(playerImage);
        }
      }, 500);
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
        newHealth.css({'background-image': healthImage, 'height':'100px',
                        'width':'100px', 'float':'left', 'background-size': 'cover',
                        'border':'1px solid black'});
        healthContainer.append(newHealth);
      }
    },

    endGame: function() {
      // stop all timers and clear out existing scrolling letters
      clearInterval(gameTimerId)
      clearInterval(scrollingTimerId);
      $('.scrollingLetterContainer').empty();

      // create a restart button
      GameController.createRestartButton();

      // show dead hero
      $('.flavor').css({'background-image': 'url(' + heroImage[3] + ')',
                        'background-repeat': 'no-repeat'});
    },

    showFlavor: function() {
      // grab a random image
      var flavorContainer = $('.flavor');
      var randomNumber = Math.floor(Math.random() * flavorImageArray.length);
      var imagePath = 'url(' + flavorImageArray[randomNumber] + ')'

      flavorContainer.css({'background-image': imagePath, 'background-repeat': 'no-repeat'});

      // set timeOut to remove the background image
      window.setTimeout(function(){
        flavorContainer.css('background-image', '');
      }, 400);
    },

    changeEnemy: function() {
      // change enemy sprite
      var myEnemyImage = $('<img></img>');
      var randomImage = Math.floor(Math.random() * enemyImage.length);
      myEnemyImage.attr('src', enemyImage[randomImage]);
      myEnemyImage.css({'width': '75%'});
      $('.enemy').empty(myEnemyImage);
      $('.enemy').append(myEnemyImage);
    },

    createRestartButton: function() {
      var restartButton = $('.hero');
      restartButton.empty();
      restartButton.html('Click me to restart');
      restartButton.click(function() {
        GameController.startGame();
      });
    }

  };
})();
