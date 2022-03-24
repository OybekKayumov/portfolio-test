'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e']

//todo slice
// we can extract part of any array WITHOUT changing the original array
arr.slice(2) //* start from 'c' and all the way to the end
// and doesn't mutate original arr. Returns new arr, copy of arr BUT only with the extracted parts
// console.log(arr.slice(2));  //* (3) ['c', 'd', 'e']

// console.log(arr.slice(2, 4));  //* (2) ['c', 'd']
// end parameter is not included in the output
// (2, 4) means 2 and 3 without 4

// console.log(arr.slice(-2));  
// starts from the end, and takes last 2 elements of arr
//*  (2) ['d', 'e']

// console.log(arr.slice(-1));  
// last element of any ARRAY

// console.log(arr.slice(1, -2)); //* (2) ['b', 'c']


//! SHALLOW copy of arr
// console.log(arr.slice()); //* (5) ['a', 'b', 'c', 'd', 'e']
// same as:  
//todo using spread operator
// console.log([...arr]); //* (5) ['a', 'b', 'c', 'd', 'e']


//todo splice
// same as slice, but it does change the original array
// splice() mutates that array

// console.log(arr.splice(2)); //! (3) ['c', 'd', 'e']
// console.log(arr); //! (2) ['a', 'b']
// splice delete selected elements from arr

// arr.splice(-1); // remove last element 
// console.log(arr); //* ['a', 'b', 'c', 'd']
// arr.splice(1, 2); //*  2 here number of element to delete
// console.log(arr); //* (2) ['a', 'd']   removed 1t and 2d elements


//todo reverse
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //* 5) ['f', 'g', 'h', 'i', 'j']
// reverse() mutates that array
// console.log(arr2); //* 5) ['f', 'g', 'h', 'i', 'j']

//todo concat

// const letters = arr.concat(arr2);
// console.log(letters);
//* (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// console.log([...arr, ...arr2]);
//* (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


//todo join
// console.log(letters.join(' - '));
//* a - b - c - d - e - f - g - h - i - j


//todo forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    // console.log(`You withdrew ${movement}`);  //*  -
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
};

console.log('----- FOREACH -----');
movements.forEach((movement) => {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    // console.log(`You withdrew ${movement}`);  //*  -
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
})

//* You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 3000
// You withdrew 650
// You withdrew 130
// You deposited 70
// You deposited 1300
// ----- FOREACH -----
// You deposited 200
// You deposited 450
// You withdrew 400
// You deposited 3000
// You withdrew 650
// You withdrew 130
// You deposited 70
// You deposited 1300