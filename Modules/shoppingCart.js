// Exporting module
// this code will executed FIRST

console.log('Exporting module');

const shippingCost = 10;
const cart = [];

//? 2 types of export
// Named and Default Exports

//todo Named export
export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}