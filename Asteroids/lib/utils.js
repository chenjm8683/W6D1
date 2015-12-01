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

  Asteroids.Util.distance = function (obj1, obj2) {
    var distance = Math.sqrt(
      Math.pow((obj1.pos[0] - obj2.pos[0]), 2) +
      Math.pow((obj1.pos[1] - obj2.pos[1]), 2));
      if (distance === 0) { debugger; }
    return distance;
  };

})();
