var Player = (function() {
  var health = 5;

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
