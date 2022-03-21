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

