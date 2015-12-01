(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = Asteroids.Asteroid = function(options) {
    this.pos = options['pos'];
    this.color = "#5f4a41";
    this.radius = Math.random() * 20;
    this.vel = Asteroids.Util.randomVec(Math.random() * 1);
    this.game = options['game'];
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();
