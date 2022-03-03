//todo CLASSES

//! Class expression example
const Person = class {

};


//! Class declaration example
class PersonClass {
  //add constructor method works similar as construction function
  //properties
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }  

  // all methods will be added to Prototype property of the Object 
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

// when we create new instance, constructor is called and 
// will return new Object, and will be stored here into jessica 
const jessica = new PersonClass('Jessica', 1996)

console.log(jessica);
//* PersonClass {firstName: 'Jessice', birthYear: 1996}
// birthYear: 1996
// firstName: "Jessice"
// [[Prototype]]: Object

jessica.calcAge();

console.log(jessica.__proto__ === PersonClass.prototype); //* true

//!  manual Method
// PersonClass.prototype.greet = function() {
//   console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

// 1. Classes are NOT hoisted: should be declared before using
// 2. Classes are first-class citizens: we can pass them into functions, also return them fro functions
// 3. Classes are always executed in "strict mode": body of classes
