class Car {
    constructor(make, speed){
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
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
class EVclass extends Car {
    #charge;
    constructor(make, speed, charge){
        super(make, speed); // from paren Class
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`);
        return this;
    }
}
const rivian = new EVclass('Rivian', 120, 23);
console.log('rivian: ', rivian);
// rivian:  EVclass {make: 'Rivian', speed: 120, charge: 23}
//Rivian is going at 140 km/h, with a charge of 22
// console.log(rivian.#charge);  // SyntaxError 
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();
// Rivian is going at 140 km/h, with a charge of 22
// Rivian is going at 160 km/h, with a charge of 21
// Rivian is going at 180 km/h, with a charge of 20
// Rivian is going at 175 km/h
// Rivian is going at 195 km/h, with a charge of 49
console.log(rivian.speedUS); // 121.875

//# sourceMappingURL=index14.c048eb59.js.map
