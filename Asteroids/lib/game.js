(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.DIM_X = 800;
    this.DIM_Y = 800;
    this.NUM_ASTEROIDS = 30;
    this.asteroids = [];
    this.addAsteroids();
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      var ast = new Asteroids.Asteroid(pos);
      this.asteroids.push(ast);
    }
  };


  Game.prototype.randomPosition = function() {
    var xPos = Math.random() * Math.floor(this.DIM_X / 2);
    var yPos = Math.random() * Math.floor(this.DIM_Y / 2);
    // xPos = (Math.random() > 0.5) ? xPos : -1 * xPos;
    // yPos = (Math.random() > 0.5) ? yPos : -1 * yPos;
    return [xPos, yPos];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(function (ast) {
      ast.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (ast) {
      ast.move();
    });
  };
})();
