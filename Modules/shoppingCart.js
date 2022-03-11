
// Exporting module
// this code will executed FIRST
// 1
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// 2
//? 2 types of export :Named and Default Exports

//todo Named export
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

console.log('cart Array: ', cart);

// 3
const totalPrice = 237;
const totalQuantity = 23;

// export { totalPrice, totalQuantity }
export { totalPrice, totalQuantity as tq}

