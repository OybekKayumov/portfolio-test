 console.log(
   Array.from(document.querySelectorAll('h1'))
 );
//*  [h1]0: h1length: 1[[Prototype]]: Array(0)

// [1, 2, 3].from()
//*  Uncaught TypeError: [1,2,3].from is not a function

//todo constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991)

Person.key  = function () {
  console.log('Hey there 🙂');
  console.log(this);
}

//! not inherited
Person.key();

// jonas.key() // Uncaught TypeError: jonas.key is not a function
// bcs it is not in the prototype of jonas object


// class

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods  
  calcAge() {
    console.log(2037-this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }  

  set fullName(name) {
    console.log('name in setter: ', name);
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`)
    }
  }

  get fullName() {
    return this._fullName
  }

  // Static Method
  static hey() {
    console.log('Hey, hello 🥳');
    console.log(this);
  }
}

const george = new PersonClass('George Davis', 2006);
console.log('george: ', george);
console.log(george.age);  //* 31

PersonClass.hey();
// george.key() Uncaught TypeError: george.key is not a function

// Create Object

const PersonProto = {
   calcAge() {
     console.log((2022 - this.birthYear));
   },

   init(firstName, birthYear) {
     this.firstName = firstName;
     this.birthYear = birthYear;
   }
}

const steven = Object.create(PersonProto)

console.log(steven);  //* {} with proto calcAge()

steven.name ='Steven';
steven.birthYear = 2002;
steven.calcAge(); //* 35

 console.log(steven.__proto__);
//*  {calcAge: ƒ}
//  calcAge: ƒ calcAge()
//  [[Prototype]]: Object

console.log(steven.__proto__ === PersonProto); //* true

const sue = Object.create(PersonProto);
sue.init('Sue', 1979)

console.log('sue: ', sue);
sue.calcAge();
