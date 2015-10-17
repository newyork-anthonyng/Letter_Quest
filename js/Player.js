var Player = (function() {
<<<<<<< HEAD
  var health = 5;

  return {
    resetPlayer: function() {
      health = 5;
=======
  var health = 6;

  return {
    resetPlayer: function() {
      health = 6;
>>>>>>> master
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
