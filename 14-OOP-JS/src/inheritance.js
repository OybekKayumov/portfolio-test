const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function() {
  console.log(2022 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  //todo  DRY: можно заменить на:

  // Person(firstName, birthYear); //* firstName is undefined
  Person.call(this, firstName, birthYear); //* firstName is Mike

  this.course = course;
};

//! Linkng prototypes
Student.prototype = Object.create(Person.prototype)

//! copying prototype = BAD, don't do that
// Student.prototype = Person.prototype

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('Mike', 2005, 'Computer Science')
console.log(mike);
mike.introduce()


//! inheritance POWER
mike.calcAge();  //*  17

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log(mike instanceof Student); //* true
console.log(mike instanceof Person); //* true
console.log(mike instanceof Object); //* true

//! bcs of we linked them
// Student.prototype = Object.create(Person.prototype)
//console.log(mike instanceof Person); //* false
