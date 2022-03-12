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



const ShoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = (product, quantity) => {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
  };

  const orderStock = (product, quantity) => {
    console.log(`${quantity} ${product} ordered from supplier`)
  } 
  
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  }

})()

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 2)
console.log('Array cart: ', ShoppingCart2.cart);