/*
GameController
<<<<<<< HEAD
  -start the game
  -check to see if the user entered key correctly
  -delete the letters when they scroll off the screen
*/

var GameController = (function() {
  // offset for position where letters will get deleted ('deleteZone');
  var deleteScrollOffset = 100;

  // scrolling speed. 'i' is counter for the 'speed' array
  var speed = [1000, 900, 800, 700, 600, 500];
  var speedCounter = 0;

  // 'typeZone is the area on screen where you type for matches
=======
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
>>>>>>> master
  var typeZoneLeft = deleteScrollOffset + 10;
  var typeZoneRight = deleteScrollOffset + 200;

  return {

    startGame: function() {
      // set up intervals and listeners
<<<<<<< HEAD
      console.log('Starting game');
      gameTimerId = window.setInterval(function() {
        GameController.updateGame();
      }, gameSpeed);

      scrollingTimerId = window.setInterval(function() {
        LetterScroller.scrollNewLetter();
      }, scrollingSpeed);

      KeyListener.setUp();

      // create initial random strings
=======
      GameController.setUpIntervals();

      // create initial random strings
      GameObject.restart();
>>>>>>> master
      GameObject.createStringArray();
      LetterScroller.createStringArray(GameObject.getStringArray());

      // Create typingZone
<<<<<<< HEAD
=======
      $('.typingContainer').remove();
>>>>>>> master
      var typingZone = $('<div>', {class:'typingContainer'});
      typingZone.css({'width': '' + (typeZoneRight - typeZoneLeft) + 'px', 'height': '100px', 'left': '' + typeZoneLeft + 'px'});
      $('body').append(typingZone);

      // Reset player elements
      Player.resetPlayer();
<<<<<<< HEAD
      $('button').remove();
=======

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
>>>>>>> master
    },

    // check typed value for a match
    checkForMatch: function(letter) {
<<<<<<< HEAD
      // check for match when letter is inside the 'typeZone'
=======
>>>>>>> master
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position() === undefined) {
        return false;
      }

      // checking position of the scrolling letter
      if(firstLetter.position().left < typeZoneRight && firstLetter.position().left > typeZoneLeft) {
        if(GameObject.checkForMatch(letter)) {
<<<<<<< HEAD
          $('.health').html('Great job!');
          GameObject.removeFirstValue();
          LetterScroller.deleteLetter();
=======
          GameController.showFlavor();
          GameObject.removeFirstValue();
          LetterScroller.deleteLetter(true);
>>>>>>> master
        } else {
          GameController.damagePlayer();
        }
      }

    },

<<<<<<< HEAD
    // delete letters past the deleteZone
    deleteOldLetters: function() {
      // check to see if we need to create new array if our current one is blank
      GameObject.createStringArray();
=======
    // delete letters past the 'deleteZone'
    deleteOldLetters: function() {
      // check to see if we need to create new array if our current one is blank
      // GameObject.createStringArray() will return 'true' when a new string is created
      if(GameObject.createStringArray()) {
        GameController.changeEnemy();
      };
>>>>>>> master

      // check to see which letters are off the screen
      var firstLetter = $('.scrollingLetter').eq(0);
      if(firstLetter.position() === undefined) {
        return false;
      }

      // delete letters that the user missed
      if(firstLetter.position().left < deleteScrollOffset) {
<<<<<<< HEAD
        console.log('deleting old letters');
        GameObject.removeFirstValue();
        LetterScroller.deleteLetter();
        GameController.damagePlayer(1);
      }

=======
        GameObject.removeFirstValue();
        LetterScroller.deleteLetter(false);
        GameController.damagePlayer(1);
      }
>>>>>>> master
    },

    // change scroll speed to update difficulty
    changeScrollSpeed: function() {
      // clear old interval
      clearInterval(scrollingTimerId);

      // set new interval
      scrollingTimerId = window.setInterval(function() {
        LetterScroller.scrollNewLetter();
      }, speed[speedCounter++]);
<<<<<<< HEAD
      console.log('changing scroll speed: ' + speed[speedCounter]);
=======
>>>>>>> master
    },

    damagePlayer: function() {
      Player.damagePlayer(1);
<<<<<<< HEAD
=======

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
>>>>>>> master
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
<<<<<<< HEAD
      $('.health').html(Player.getHealth());
    },

    endGame: function() {
      console.log('game is over');

=======
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
>>>>>>> master
      // stop all timers and clear out existing scrolling letters
      clearInterval(gameTimerId)
      clearInterval(scrollingTimerId);
      $('.scrollingLetterContainer').empty();

      // create a restart button
<<<<<<< HEAD
      var restartButton = $('<button>Restart Game</button>', {class:'restart'});
      $('body').prepend(restartButton);
=======
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
>>>>>>> master
      restartButton.click(function() {
        GameController.startGame();
      });
    }

  };
})();
