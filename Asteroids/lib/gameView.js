(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function () {
    this.game = new Asteroids.Game();
  };


  GameView.prototype.start = function(canvasEl) {
    this.ctx = canvasEl.getContext("2d");
    setInterval(function() {
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };
})();
