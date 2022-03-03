//todo Object Oriented Programming In Action
//! use ES6
// Class 
class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarClass('Ford', 120);
console.log(ford.speedUS)
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.brake()
ford.speedUS = 50  // * 80 = 50 * 1.6
console.log('ford: ', ford);
