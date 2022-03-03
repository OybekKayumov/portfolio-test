'use strict';
// constructor functions in JS

const Person = function(firstName, birthYear) {
  
  // 1
  // console.log(this);
  //* output is: Person {}

  //! 2 INSTANSE PROPERTIES

  this.firstName = firstName;
  this.birthYear = birthYear;

  //? METHODS, don't use this
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // };

} 
// 1
// ! new Person('Jonas', 1991);

// 1. New {} empty Object created
// 2. function is called and THIS keyword will be set to this newly created Object: this = {} , (used NEW operator)
// 3. {} newly created object linked to Prototype 
// 4.  function automatically return {}, but not empty, this is a trick making constructor function work

// 2
const jonas = new Person('Jonas', 1991)
console.log('jonas: ', jonas);

// 3 
// const susan = new Person('Susan', 2017)
// const jack = new Person('Jack', 1975)
// console.log(susan, jack);

//! Object, created from a class is called an instance
//? jonas, susan, jack are instance of Person
// check
// console.log(jonas instanceof Person);  //* true

// but
const jay = 'Jay'
// console.log(jay instanceof Person);  //* false


//todo PROTOTYPES

console.log(Person.prototype);
//add method to Person
Person.prototype.calcAge = function() {
  console.log( 2037 - this.birthYear)
}

jonas.calcAge()  //* 46

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);  //* true
console.log(Person.prototype.isPrototypeOf(jonas)); //* true 
//! but, KEEP IN MIMD 
console.log(Person.prototype.isPrototypeOf(Person)); //* false 

//! .prototypeOfLinkedObjects
// try to understand it
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);  //* Homo Sapiens
// and
console.log(jonas.hasOwnProperty('firstName'));  //* true, comes from PERSON
console.log(jonas.hasOwnProperty('species'));  //* false, , comes from PROTOTYPE, see consol 


