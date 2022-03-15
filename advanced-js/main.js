// nested function scope

// const { values } = require("core-js/core/array");

// const { default: object } = require("lodash-es/object");

// 1
let a = 10
function outer() {
  let b = 20
  function inner () {
    let c = 30
    console.log('a. b, c :', a, b, c);
  }
  inner()
} 

outer() 
//* a. b, c : 10 20 30
// Javascript начинает искать с внутренней функции и идет на уровень верх если не найдет нужную переменную.
// вложенные функции имеют доступ к переменным, оъявленным в своей собственной области, а также к переменным, объявленным во внешней области.

// 2
function outer1() {
  let counter = 0
  function inner1() {
    counter++;
    console.log('counter: ', counter);
  }
  inner1()
}

// outer1();
// outer1();
//* counter:  1
//* counter:  1


//! closures замыкания
// 3
function outer2() {
  let counter = 0
  function inner2() {
    counter++;
    console.log('counter: ', counter);
  }
  return inner2;
}

const fn = outer2();
// fn();
// fn();
// counter:  1
// counter:  2
// когда возращаем функцию из другой функции мы фактически возвращаем комбинацию function definition вместе с областью действия function's scope.
// это позволило бы function definition иметь связанную постоянную память, которая могла бы удерживать live data между выполнениями. эта комбинация функции и ее цепочки области действия называется замыканием - Closure
 

//! Function currying
// currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.
// function f(a,b,c) is transformed to function(a)(b)(c)

function sum(a, b, c) {
  return a + b + c
}

// console.log('sum: ', sum(2, 3, 5));

// sum(2, 3, 5) --> sum(2)(3)(5)
function curry (fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        return fn(a, b, c)  
      }
    }
  }
}

const curriedSum = curry(sum)
// console.log("curry: ", curriedSum(2)(3)(5));

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)

// console.log('add5: ', add5);


//! this
// используется в функции. И относится к объекту, которому оно принадлежит и делает функцию многоразовым, позволяя выбрать значение объекта. Значение THIS полностью определяется тем, как сейчас ф-я вызывается.
// как использовать THIS и как его значение изменяется на основе вызовы функции

    // function sayMyName(name) {
    //   console.log(`Hello, my name is ${name}!`);
    // }

    // sayMyName('Walter White')

//! How to determine 'THIS' ? определить
//implicit binding неявная привязка
//exlicit binding явная привязка
//new binding новая привязка
//default binding привязка по умолчанию

//todo implicit binding неявная привязка покажет к чему относится 
const person = {
  name: 'Vishwas',
  sayMyName: function () {
      console.log(`Hello, my name is ${this.name}!`);
    },
}

// person.sayMyName()

// when a function is invoked with the dot notation, 
// the object to the left of the dot is what THIS is referencing
// JavaScript will now treat THIS.name as person.name
// which is equal to the string 'Vishwas' 


//todo explicit binding 

function sayMyName () {
  console.log(`Hey, my name is ${this.name}!`);
}

// sayMyName.call(person)
// Hey, my name is Vishwas!


//todo new binding 
// const name = 'Hulk'
// globalThis.name = 'Hulk'

function Person (name) {
  // this = {}
  this.name = name  
}

const p1 = new Person('Batman')
const p2 = new Person('Superman')

// console.log(p1, p2);
// console.log(p1.name, p2.name);

// Person {name: 'Batman'} Person {name: 'Superman'}
// Batman Superman


//todo default binding 
sayMyName()
// Hey, my name is !

globalThis.name = 'Hulk'
// Hey, my name is Hulk!

//! Order of precedence
// New binding
// explicit binding
// imlicit binding
// default binding


//todo Prototype
function Person1(fName, lName) {
  this.firstName = fName,
  this.lastName = lName
}

const person1 = new Person1('Bruce', 'Wayne')
const person2 = new Person1('Clark', 'Kent')

person1.getFullName = function() {
  // return this.firstName + ' ' + this.lastName;
  return `${this.firstName} ${this.lastName}`
}

// console.log('person1.getFullName: ', person1.getFullName());

// console.log('person2.getFullName: ', person2.getFullName());
//! Uncaught TypeError: person2.getFullName is not a function
 
Person1.prototype.getFullName = function() {
  // return this.firstName + ' ' + this.lastName;
  return `${this.firstName} ${this.lastName}`
}

console.log('person1.getFullName: ', person1.getFullName());

console.log('person2.getFullName: ', person2.getFullName());
// person1.getFullName:  Bruce Wayne
// person2.getFullName:  Clark Kent


//todo Inheritance
function superHero(fName, lName) {
  // this = {}
  Person1.call(this, fName, lName)
  this.isSuperHero = true
}  

superHero.prototype.fightCrime = function() {
  console.log('Fighting crime');
}

superHero.prototype = Object.create(Person1.prototype);  // chain to Person1

const batman = new superHero('Bruce', 'Wayne');
superHero.prototype.constructor = superHero

console.log('batman full name: ', batman.getFullName());
console.log('batman: ', batman);

// batman superHero has inherited getFullName from Person1
// superHero has inherited properties and methods from Person1

//todo Class
 
class PersonCl {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;  
  }

  sayMyName() {
    return this.firstName + ' ' + this.lastName
  }
}

const classP1 = new PersonCl('Sentayhu', 'Berhanu')
console.log('classP1: ', classP1);
console.log(classP1.sayMyName());

class superHeroCl extends PersonCl {
  constructor(fName, lName) {
    super(fName, lName)
    this.isSuperHero = true    
  }

  fightCrimeCl() {
    console.log('Fighting crime');
  }
}

const batmanCl = new superHeroCl('Cline', 'Kent')
console.log(batmanCl.sayMyName());

//! make sure you understand :
// how to create a Class
// how to initialize properties (constructor)
// how to add methods
// how to create an instance of the class
// how to inherit using the extends and 
//* "super" keyword
 

//todo Iterables and Iterators
// 1 String
// const str = 'Vishvas';
// for loop
// for (let i = 0; i < str.length; i++) {
//   console.log('str.charAt(i): ', str.charAt(i));
// }

// str.charAt(i):  V
// str.charAt(i):  i
// str.charAt(i):  s
// str.charAt(i):  h
// str.charAt(i):  v
// str.charAt(i):  a
// str.charAt(i):  s

// 1 Array 
// const arr = ['V', 'i', 's', 'h', 'v', 'a', 's']
// for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log('arr[i]: ', arr[i]);
// }

// arr[i]:  V
// arr[i]:  i
// arr[i]:  s
// arr[i]:  h
// arr[i]:  v
// arr[i]:  a
// arr[i]:  s

// for .. of // String
// const str = 'Vishvas';
// for (const char of str) {
//   console.log('char: ', char);
// }

// for .. of // Array
// const arr = ['V', 'i', 's', 'h', 'v', 'a', 's']
// for (const item of arr) {
//   console.log('item: ', item);
// }

// char:  V
// char:  i
// char:  s
// char:  h
// char:  v
// char:  a
// char:  s

// item:  V
// item:  i
// item:  s
// item:  h
// item:  s
// item:  v
// item:  a

const obj = {
  [Symbol.iterator]: function() {
    let step = 0;
    const iterator = {
      next: function() {
        step++;
        if (step === 1) {
          return {value: 'Hello', done: false}
        } else if (step === 2) {
          return {value: 'World', done: false}          
        }  
        return {value: undefined , done: true}
      },
    }
    return iterator
  },
}

for (const word of obj) {
  console.log('word: ', word);
}


//todo Generators
function normFuncion() {
  console.log('Hello');
  console.log('World');
}

// normFuncion();
// normFuncion();

function* GeneratorsFunction () {
  yield 'Hello';
  yield 'World';
 
}

// console.log(GeneratorsFunction());
const generatorObject = GeneratorsFunction();

for (const say of generatorObject) {
  console.log('say: ', say);
}