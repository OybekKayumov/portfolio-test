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
console.log(ShoppingCart.totalPrice, ShoppingCart.tq); 

// 5 we can give any name to imported default
// import add from './shoppingCart.js'

// add('pizza', 2);

// 6 also we can mixt import
//! we can do it, but in practice we never mix Named and Default exports
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'


import add, {cart} from './shoppingCart.js'
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// console.log('price: ', price);

console.log('cart :', cart);
//* cart : (3) [{…}, {…}, {…}]

//! imports are not copies of the export
// they are like a live connection : we point to the same place in memory

