// Importing module
// 1
// import './shoppingCart.js'
// 2
// import { addToCart } from './shoppingCart.js'  //* Named Export example
// 3
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js' 
// we can change names
import { addToCart, totalPrice as price, tq } from './shoppingCart.js' 


console.log('Importing module');

// console.log(shippingCost);
//! Uncaught ReferenceError: shippingCost is not defined

//2
// addToCart('bread', 5)
// 3
// console.log(totalPrice, totalQuantity);
// console.log(price, tq);


//todo 4: import everything same time  
import * as ShoppingCart from './shoppingCart.js'
// now we have to take addToCart() from ShoppingCart object
// ShoppingCart.addToCart('bread', 5)
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq); 

// 5 we can give any name to imported default
// import add from './shoppingCart.js'

// add('pizza', 2);

// 6 also we can mixt import
//! we can do it, but in practice we never mix Named and Default exports
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'


// import add, {cart} from './shoppingCart.js'
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log('price: ', price);

// console.log('cart :', cart);
//* cart : (3) [{…}, {…}, {…}]

//! imports are not copies of the export
// they are like a live connection : we point to the same place in memory


// TOP LEVEL AWAIT
// this await will blocking the entire execution of this part of code: see console
    // console.log('Start fetching...');
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await res.json();
    // console.log('data: ', data);
    // console.log('Next code');

//* Start fetching...
// data:  (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}//* script.js:60 Next code


// const getLastPost = async function() {
//    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json();
//     // console.log('data: ', data);

//     // how to take data from fetch
//     return {title: data.at(-1).title, text: data.at(-1).body}
// }

// const lastPost = getLastPost()
// console.log('lastPost: ', lastPost); //* Promise{pending}

// Not very clean
// lastPost.then(last => console.log('last: ', last))

// using top-level await outside of any ASYNC function will BLOCK the entire module. This is NOT oly helpful tool, but also we need to use with great care 
// const lastPost2 = await getLastPost();
// console.log('LastPost2: ', lastPost2);



// const ShoppingCart2 = (function() {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//   };

//   const orderStock = (product, quantity) => {
//     console.log(`${quantity} ${product} ordered from supplier`)
//   } 
  
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   }

// })()

// ShoppingCart2.addToCart('apple', 4)
// ShoppingCart2.addToCart('pizza', 2)
// console.log('Array cart: ', ShoppingCart2.cart);


//! CommonJS module example
// export
// export const addToCart3 = (product, quantity) => {
//       cart.push({ product, quantity });
//       console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
//     };

// import
//! const { addToCart3 } = require ('./shoppingCart.js')

//todo Command line

// ls, dir, cd, clear, mkdir
// touch - create file, edit -  windows
// rm del
// move - mv file address: mv indx.js ../
// rmdir - empty directories
// rm -R DIR-NAME

//todo npm
// npm -v
// npm init -y
// package.json --> stores the entire configuration of project
// npm i name; npm install name;

// "dependencies": {
//   "leaflet": "^1.7.1"
// }

//? lodash is a collaction of a ton of useful functions for arrays, objects, functions, dates ...
//special version lodash-es (es-modules)
// npm i lodash-es

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es'; //! doesn't work
// import cloneDeep from 'lodash'; //! doesn't work

//nested object
const state = {
  cart: [
    { product: 'bread', quamtity: 5 },
    { product: 'pizza', quamtity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

// stateClone: 
// cart: (2) [{…}, {…}]
// user: {loggedIn: true}     //! true

state.user.loggedIn = false;
// cart: (2) [{…}, {…}]
// user: {loggedIn: false}    //! false

console.log('stateClone: ', stateClone);

console.log('stateDeepClone: ', stateDeepClone); //! true

// don't include folder "node_modules" into git
// npm install --> go to the package.json, look at all the dependencies and install them back


//todo Parcel
// npm i parcel --save-dev

//! regular dependencies
// "dependencies": {
//   "leaflet": "^1.7.1"
// }

//! DEV dependencies
// "devDependencies": {
//   "parcel": "^2.3.2"
// }

// be able to use Parcel in consol, we have 2 options
//! 1 npx or 2 npm script

//! 1 npx parcel index.html 
// parcel starts a new development server on this url http://localhost:1234

//if you have error installing, using sudo will give you more permissions
// sudo npm i parcel --save-dev and enter your password 


// installing version
// npm i parcel@2.3.2

// uninstall package
// npm uninstall parcel

//todo dist folder

// rebuild index.html without type="module"

// this code only parcel understand
// if (module.hot) {
//   module.hot.accept()
// }
// whenever we change this will not reload this part of the page, this is good for maintaining state on page when we are testing out smth,
// for example login to app when reload page
// page will not reload



// be able to use Parcel in consol, we have 2 options
//! 1 npx or 2 npm script
//! 2 npm script

//? "scripts": {
//?   "test": "echo \"Error: no test specified\" && exit 1"
//? },

//todo Edit
// "scripts": {
//   "start": "script name",  //*
//   "start": "parcel index.html",
// },

//! npm run start
//! npm start

// whenever we are done developing project, it is time build the final bundle
// bundle, that is compressed 
// build 
//? "build": "parcel build index.html",

//! npm run build

//todo Install packages globally
//! npm i parcel -g

// https://github.com/parcel-bundler/parcel/issues/7129
// line 5 from package.json was deleted
// "main": "scripts.js",

// and added after: npm run build



//TODO 
class Person {
  greeting = 'Hey'

  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas')
//* Hey, Jonas

console.log('Jonas' ?? null);

// console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('Test').then(x => console.log(x))

// import 'core-js/stable';
// npm -i core-js

// npm install --save-dev @babel/core @babel/cli

// "scripts": {
  //   "start": "parcel index.html",
  //   - "build": "parcel build index.html",
  //   + "build": "babel src -d lib"
  // },
  
  // npm install @babel/preset-env --save-dev
  
  // babel.config.json
  // {
    //   "presets": ["@babel/preset-env"]
    // }
    
// import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
// npm i regenerator-runtime
// import 'regenerator-runtime/runtime'

// TODO READABLE CODE
// write a readable cod in future
// write code so that you can understand it in 1 year
// avoid over complicated-"clever" solutions - might make your code very confusing and unreadable

// give descriptive names to functions and variables. For variables - what they contain, for functions - according what they do

// TODO GENERAL
// DRY principle : refactor your code whenever you can

// don't pollute global namespace, encapsulate data into functions, classes, modules
// don't use var

// use strong type checks (=== and !==)

// TODO Functions
// functions should do only one thing in generally
// don't use more than 3 function parameters
// use default parameters whenever possible
// return same data type as received
// you can and should use arrow functions when they make code more readable

// TODO Object-Oriented programming
// use ES6 Classes
// encapsulate data and DON'T mutate it from outside the class
// implement method chaining
// don't use arrow functions as methods (in regular objects), by doing that you will not get access to the THIS keyword of that object

// TODO AVOID NESTED CODE
// writing nested code, writing code inside of blocks, inside of other blocks is really bad for readable code
// use guard clauses - use early return, in case some condition is not met

// use ternary (conditional) or logical operators instead of IF (Ternary. operators does not create new code block, while IF creates new code block)
// use more IF, not with IF-ELSE

// completely AVOID any kind of FOR LOOPs (for of), 
// use array methods like map, filter, reduce

// AVOID callback-based asynchronous APIs

// TODO Asynchronous Code
// consume promises with async/await for best readability, not using (than-catch methods). because these methods actually require callback functions, which will then introduce even more nested code

// whenever possible, run promises in PARALLEL(Promise.all)
// when Promises do not depend each other, run them in parallel to make the application little bit faster for users

// handle errors and promises rejections

// TODO Two fundamentally different ways of writing code: Paradigms

//! IMPERATIVE
// whenever we write imperative code, we need to explain to the computer how to do certain things, explain every single step computer needs to follow
// tell step by step recipe

const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++) 
  doubled[i] = arr[i] * 2;

console.log('doubled: ', doubled);  


//! DECLARATIVE
