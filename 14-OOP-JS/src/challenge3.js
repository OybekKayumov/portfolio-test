//todo Object Oriented Programming In Action
//! One Class inherit from another Class using Constructor Functions
//! without Object.create function this would be impossible
// 1
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

const EV  =function (make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge;
}

// 2 Link the prototype
EV.prototype = Object.create(Car.prototype)

// 3 add some methods to prototype EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
}

// 6 
EV.prototype.accelerate = function() {
  this.speed += 20;  // +20
  this.charge--;     // -1
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}.`);
}

// 1
const tesla = new EV('Tesla', 120, 23);
//4 
tesla.chargeBattery(90)
//* 4 EV {make: 'Tesla', speed: 120, charge: 90}
//! consol
// EV {make: 'Tesla', speed: 120, charge: 90}
// charge: 90
// make: "Tesla"
// speed: 120
// [[Prototype]]: Car
//! chargeBattery: ƒ (chargeTo)
// [[Prototype]]: Object
//! accelerate: ƒ ()
//! brake: ƒ ()
// constructor: ƒ (make, speed)
// [[Prototype]]: Object

console.log(tesla);
//* 1 EV {make: 'Tesla', speed: 120, charge: 23}

// 5 
tesla.brake();
// Tesla is going at 115 km/h

// 7
tesla.accelerate();
// we have now 2 methods of accelerate, bur JS uses first one
//* Tesla is going at 135 km/h, with a charge of 89.

// 8
// but it works also if we comment EV.prototype.accelerate = function() {
//* Tesla is going at 125 km/h

// this is a definition of polymorphism