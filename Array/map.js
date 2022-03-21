let array = [3, 4, 5, 6];

// for 
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 3;
// }

// console.log('array for: ', array);
//* (4) [9, 12, 15, 18]


// map
let newArr = array.map((elem) => {
  return elem * 3;
})

console.log('Array: ', array);
console.log('newArr: ', newArr);
//* Array:  (4) [3, 4, 5, 6]
//* newArr:  (4) [9, 12, 15, 18]

//todo use map() over an array of objects
let books = [
  {author: 'Author 1', title: 'Title 1'},
  {author: 'Author 2', title: 'Title 2'},
  {author: 'Author 3', title: 'Title 3'},
]

let book = books.map((elem) => {
  return `${elem.title} by ${elem.author}`
})

console.log('books by authors: ', book);


// todo The complete map() method SYNTAX
// array.map(function(element, index, array){}, this);

// the callback 'function()' is called on each array Element, and the "map()" method always passes the current "element", the "index" of the current element, and the whole "array" object to it 

// "this" argument will be used inside the callback function. By default, its value is 'undefined'.
// here's how to change the 'this' value to the number '80':

let arr = [2, 3, 5, 7];

arr.map(function(elem, index, array) {
  console.log('this: ', this);  //* 80
  console.log('element: ', elem);
  console.log('index: ', index);
  console.log('array: ', array);

  return elem;

}, 80)

// this:  Number {80}[[Prototype]]: Number[[PrimitiveValue]]: 80
// this:  Number {80}
// this:  Number {80}
// this:  Number {80}

//! output for last element example
// this:  Number {80}
// element:  7
// index:  3
// array:  (4) [2, 3, 5, 7]