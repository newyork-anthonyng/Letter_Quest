var Player = (function() {
  // player methods
  var health = 5;

  // public methods
  return {
    damagePlayer: function(amount) {
      health -= amount;
    },

    healPlayer: function(amount) {
      health += amount;
    }
  }
})();
