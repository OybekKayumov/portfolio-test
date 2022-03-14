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
// Javascript начинает искать с внутреннеой функции и идет на уровень верх если не найдет нужную переменную.
// вложенные функции имеют доступ к переменны, оъявленным в своей собственной области. а также к переменным, объявленным во внешней области.

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
// это позволило бы function definition иметь связанную посьоянную память, которая могла бы удерживать live data между выполнениями. эта комбинация функции и и ее цепочки области действия - называется замыканием - Closure
 

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
