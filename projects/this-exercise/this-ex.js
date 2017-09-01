// Exercise 1 - here in my car

// var car = {
//     type: "Honda Civic",
//     position: 0,
//     speed: 60,
//     move: function(){
//       var prev = this.position;
//       this.position = this.position + this.speed;
//       console.log(this.type + " is moving from " + prev + " to " + this.position);
//     }
// }


// var moveCar = function(){
//   var prev = this.position;
//   this.position = this.position + this.speed;
//   console.log(this.type + " is moving from " + prev + " to " + this.position);
// };
//
// var car = {
//   type: "Honda Civic",
//   position: 0,
//   speed: 8,
//   move: moveCar
// };
//
// var truck = {
//   type: "Dump",
//   position: 0,
//   speed: 4,
//   move: moveCar
// }
//
var reverse_adder = function(vehicle){
    vehicle.reverse = function() {
      var prev = this.position
      this.position = this.position - this.speed
      console.log(this.type + " is moving from " + prev + " to " + this.position)
    }
}

// reverse_adder(car)
// reverse_adder(truck)

var carFactory = function(type,speed) {
  var car = {}
  car.position = 0
  car.type = type;
  car.speed = speed;

  car.move = function () {
    this.position += this.speed;
  };

  return car;
}

var new_toyota = carFactory('Toyota Hilux', 3);
var new_honda = carFactory('Honda Accord', 5);






var warriorFactory = function(name, weapon){
  var warrior = {};

  warrior.name = name;
  warrior.weapon = weapon;

  warrior.attack = function(){
    return this.name + " attacks with their " + this.weapon + "!";
  };

  warrior.adventure = function(){
    return "Behold, the great warrior " + this.name + ", foremost of all warriors. They draw forth to face the Dragon of Kalamazar. Watch as " + this.attack() + ". Such bravery!";
  };

  return warrior;
};
