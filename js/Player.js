var Player = (function() {
  // player methods
  var health = 5;

  // public methods
  return {
    resetPlayer: function() {
      health = 5;
    },

    damagePlayer: function(amount) {
      health -= amount;
    },

    healPlayer: function(amount) {
      health += amount;
    },

    getHealth: function() {
      return health;
    }
  }
})();
