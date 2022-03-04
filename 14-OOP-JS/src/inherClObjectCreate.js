//todo Inheritance Between "Classes": Object.create

const PersonProto = {

  calcAge() {
    console.log(2022 - this.birthYear);
  }, 
  
  init (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto)

const StudentProto = Object.create(PersonProto)

const jay = Object.create(StudentProto)

console.log(StudentProto);
console.log('steven: ', steven);  // with calcAge
console.log('jay: ', jay);        // without calcAge

// 2
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear)
  this.course = course;
}

const jess = Object.create(StudentProto)
jess.init('Jess', 2000, "Computer Science")
console.log('jess: ', jess);


// 4
StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}!`);
}

jess.introduce();
jess.calcAge();

// see in consol prototype!