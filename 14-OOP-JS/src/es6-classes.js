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


//todo getter and setter properties: Assessor properties

//every object in JS can have getter and setter properties

// create Object
const account = {
  owner: 'John',
  movements: [200, 530, 120, 300],

  //getter
  get latest () {
    return this.movements.slice(-1).pop(); 
    //return array with last position : 300
  },  

  // setter
  set latest(mov) {
    this.movements.push(mov);
  }
};

console.log(account.latest);

// set
// account.latest(50) 
//* Uncaught TypeError: account.latest is not a function

account.latest = 50;
console.log(account.movements); 
//* (5) [200, 530, 120, 300, 50]

// add getter and setter to Class

class PersonGet {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037-this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  // getter for class
  get age() {
    return 2037 - this.birthYear;
  }  

  // setter for class
  //todo SET a property that already exist : very important!
  set fullName(name) {
    console.log('name in setter: ', name);
    if (name.includes(' ')) {
      // this.fullName = name; // solution is add underscore
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`)
    }
  }
  //! but fullName already exist, we have an error:
  //! Uncaught RangeError: Maximum call stack size exceeded
  //! at PersonGet.set fullName [as fullName
  // it means there is a conflict:
  // constructor and setter are trying set same property name
  // adding underscore "_fullName" is convention, not a JS feature
  // to avoid naming conflict
  // actually we are creating new variable


  // to give back sarah.fullName we need to create a getter
  // for fullName property
  get fullName() {
    return this._fullName
  }

  // now we can see fullName again. but here also _fullName

}

const sarah = new PersonGet('Sarah Davis', 2006);
console.log('sarah: ', sarah);
console.log(sarah.age);  //* 31

//test
// const walter = new PersonGet('Walter', 1997)
// we will have Alert and 
//* PersonGet {birthYear: 1997}
//! without fullName

// but with:
const walter1 = new PersonGet('Walter White', 1997)
// we can get access to all properties include fullName
//* PersonGet {_fullName: 'Walter White', birthYear: 1997}