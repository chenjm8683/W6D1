(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;

    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };

  Asteroids.Util.randomVec = function (length) {
    var dx = ((Math.random() * 2) - 1) * length;
    var dy = Math.sqrt(Math.pow(length, 2) - Math.pow(dx, 2));
    dy = (Math.random() > 0.5) ? dy : -1 * dy;
    return [dx, dy];
  };

})();
