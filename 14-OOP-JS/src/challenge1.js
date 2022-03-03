//todo Object Oriented Programming In Action

const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mersedes', 95);

console.log(bmw, mercedes);

//todo add "accelerate brake" methods
Car.prototype.accelerate = function() {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
// BMW is going at 130 km/h
// challenge1.js:14 BMW is going at 140 km/h
// challenge1.js:19 BMW is going at 135 km/h
// challenge1.js:14 BMW is going at 145 km/h
// challenge1.js:14 BMW is going at 155 km/h

mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
// Mersedes is going at 105 km/h
// challenge1.js:19 Mersedes is going at 100 km/h
// challenge1.js:14 Mersedes is going at 110 km/h
// challenge1.js:14 Mersedes is going at 120 km/h

//! "accelerate" and "brake" methods are gives functionality to manipulate  data (here: speed)
// same time they are form a public interface of this object 