// sum
var sum = function() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

Function.prototype.myBind = function() {
  var args = [].slice.call(arguments);
  args = args.slice(1);
  var context = arguments[0];
  var func = this;
  return function(){
    args = args.concat([].slice.call(arguments));
    func.apply(context, args);
  };
};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound) {
  console.log(this.name + " says " + sound + "!");
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow");
// Markov says meow!

markov.says.myBind(breakfast, "meow")();
// Breakfast says meow!

markov.says.myBind(breakfast)("meow");
// Breakfast says meow!

var notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow");
// Breakfast says meow!
