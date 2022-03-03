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
// console.log('jonas: ', jonas);

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

// console.log(Person.prototype);
// add method to Person
Person.prototype.calcAge = function() {
  console.log( 2037 - this.birthYear)
}

// jonas.calcAge()  //* 46

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);  //* true
// console.log(Person.prototype.isPrototypeOf(jonas)); //* true 
//! but, KEEP IN MIMD 
// console.log(Person.prototype.isPrototypeOf(Person)); //* false 

//! .prototypeOfLinkedObjects
// try to understand it
Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species);  //* Homo Sapiens
// and
// console.log(jonas.hasOwnProperty('firstName'));  //* true, comes from PERSON
// console.log(jonas.hasOwnProperty('species'));  //* false, , comes from PROTOTYPE, see consol 

// Object.prototype (top of prototype chain)
// console.log('__proto__: ', jonas.__proto__);

// console.log('__proto__.__proto__: ',jonas.__proto__, __proto__);
// console.log('__proto__.__proto__.__proto__: ',jonas.__proto__, __proto__, __proto__ );

// console.dir(Person.prototype.constructor);

//array

const arr = [3, 6, 4, 5, 6, 9, 3, 9, 5, 7];

console.log('arr proto: ', arr.__proto__);

//! ALL ARRAY METHODS: each array inherits this methods from Prototype
// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// map: ƒ map()
// pop: ƒ pop()
// push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// Symbol(Symbol.iterator): ƒ values()
// Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}

console.log(arr.__proto__ === Array.prototype); //*  true
//todo SO, new Array === []

console.log(arr.__proto__.__proto__); 
console.log(arr.__proto__.__proto__.__proto__);  //* null

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// this is why we see om documentation, for example :
// Array.prototype.map() 

//! Prototype INHERITANS is a realLY mechanism FOR reusing code
//  all of these built-in methods are HAVE TO EXIST ONLY ONCE SOMEWHERE IN THE JAVASCRIPT ENGINE  and all of our arrays in code GET ACCESS TO THE FUNCTIONS through the Prototype CHAIN and Prototype INHERITANS

// you can create new method
Array.prototype.unique = function() {
  return [... new Set(this)]
}   

console.log('unique Arr: ', arr.unique());
//* unique Arr:  (6) [3, 6, 4, 5, 9, 7]
// but this is not good idea, 1. JS may publish method with same name but with other functionality, 2. when you work with team, others may use this method  with other name and it can destroy functionality of your code
