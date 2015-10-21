var Player = (function() {
<<<<<<< HEAD
  var health = 5;

  return {
    resetPlayer: function() {
      health = 5;
=======
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
>>>>>>> 57d56c559032f32997480748348d31f3b95ab307
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
