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

function outer1() {
  let counter = 0
  function inner1() {
    counter++;
    console.log('counter: ', counter);
  }
  inner1()
}

outer1();
outer1();
//* counter:  1
//* counter:  1

// closures завыкания
 