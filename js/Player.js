var Player = (function() {
  var health = 6;

  return {
    resetPlayer: function() {
      health = 6;
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
