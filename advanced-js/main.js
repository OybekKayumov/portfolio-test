// nested function scope
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
fn();
fn();
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

console.log('sum: ', sum(2, 3, 5));

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
console.log("curry: ", curriedSum(2)(3)(5));

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5)

console.log('add5: ', add5);


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

sayMyName.call(person)
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

console.log(p1, p2);
console.log(p1.name, p2.name);

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
