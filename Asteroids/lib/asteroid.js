(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = Asteroids.Asteroid = function(pos) {
    this.pos = pos;
    this.color = "#5f4a41";
    this.radius = Math.random() * 30;
    this.vel = Asteroids.Util.randomVec(Math.random() * 1);
  };

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

})();
