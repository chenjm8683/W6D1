(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Ship = Asteroids.Ship = function () {
    this.radius = 30;
    this.color = "#0000FF";
    this.vel = [0,0];
  };

  Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);

})();
