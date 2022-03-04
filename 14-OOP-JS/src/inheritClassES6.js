//todo Inheritance Between "Classes": ES6 Classes

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hi ${this.fullName}`);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName
  }

  // Static method
  static hey() {
    console.log('Hi there 👏');
  }
}

// create Student class
class StudentClass extends PersonClass {
  constructor(fullName, birthYear, course) {
    // PersonClass.call()  // вместо этого мы пишем:
    // super() function is basically constructor function of the parent class
    // parent class extended already
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }  
  
  // 3
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}!`);
  }
  
  // 4 override parent method
  calcAge() {
    console.log(`I'm ${2022 - this.birthYear} years old, but as a student I feel more like ${2022 - this.birthYear + 10 }`);
  }

}

// 1 Class StudentClass is commented
// const martha = new StudentClass('Martha Jones', 2012)
// 2 Class StudentClass is UNcommented
const martha = new StudentClass('Martha Jones', 2002, 'Computer Science')

console.log('martha: ', martha);
// 1 attention:  _fullName 
//* StudentClass {_fullName: 'Martha Jones', birthYear: 2012}

// 2
//* StudentClass {_fullName: 'Martha Jones', birthYear: 2012, course: 'Computer Science'}

// 3
martha.introduce()
//* My name is Martha Jones and I study Computer Science!

martha.calcAge() //* 20
// analyze proto in consol!

// 4
//* I'm 20 years old, but as a student I feel more like 30
