(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.DIM_X = 800;
    this.DIM_Y = 800;
    this.NUM_ASTEROIDS = 100;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Asteroids.Ship();
    this.ship.pos = this.randomPosition();
    this.ship.game = this;
    this.allObjects = [this.ship].concat(this.asteroids);
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var pos = this.randomPosition();
      var ast = new Asteroids.Asteroid({'pos': pos, 'game': this});
      this.asteroids.push(ast);
    }
  };


  Game.prototype.randomPosition = function() {
    var xPos = Math.random() * Math.floor(this.DIM_X / 2);
    var yPos = Math.random() * Math.floor(this.DIM_Y / 2);
    return [xPos, yPos];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects.forEach(function (obj) {
      obj.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.allObjects.forEach(function (obj) {
      obj.move();
    });
  };

  Game.prototype.wrap = function (pos, movingObj) {
    pos.forEach(function(el, idx) {
      if (el > (800 + movingObj.radius)) {
        pos[idx] = 0 - movingObj.radius;
      } else if (el < (0 - movingObj.radius) ) {
        pos[idx] = 800 + movingObj.radius;
      }
    });
  };

  Game.prototype.checkCollisions = function () {
    var collided = [];
    for (var i = 0; i < this.allObjects.length - 1; i++) {
      for (var j = i + 1; j < this.allObjects.length; j++) {
        var result = this.allObjects[i].isCollidedWith(this.allObjects[j]);
        if (result) {
          collided.push(this.allObjects[i]);
          collided.push(this.allObjects[j]);
          // alert("Collision");
        }
      }
    }
    collided.forEach(function(obj) {
      this.remove(obj);
    }.bind(this));
  };

  Game.prototype.step = function () {
    // body...
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (object) {
    var idx = this.allObjects.indexOf(object);
    if (idx !== -1 && object !== this.ship) {
      this.allObjects.splice(idx, 1);
    }
  };
})();
