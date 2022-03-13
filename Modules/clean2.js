'strict mode'

const budget = Object.freeze( [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

//* keep it in mind
// budget[0].value = 10000;  //* works
// budget[9] = 'jonas'       //* this is not going to work

// spendingLimits is now immutable : we can no longer put any new properties into it
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// try to add new property
// spendingLimits.jay = 200;
// console.log(spendingLimits); //* object didn't change


// refactoring
const getLimit = ( limits, user) => limits?.[user] ?? 0;  

// side-effect  -that something outside of a function is manipulated
// or the function does something other than simply returning a value
// IMPURE FUNCTION - which has or produces side effects
// PURE FUNCTION
const addExpense = function (state, limits, value, description, user = 'jonas') {
   const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser) 
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;  
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'movies 🍿', 'Matilda');
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

//!
const checkExpenses = (state, limits) => 
  state.map(entry =>      //* map returns a new array, so not mutated
    entry.value < -getLimit(limits, entry.user)
      ? {...entry, flag: 'limit'}
      : entry  
);

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure function
const logBigExpenses = function (state, bigLimit) {
  
  const bigExpense = state
      .filter(entry => entry.value <= -bigLimit)
      .map(entry => entry.description.slice(-2))
      .join(' / ');
      // .reduce((str, cur) =>  `${str} / ${cur.description.slice(-2)}`, '')

  console.log(bigExpense);
};

logBigExpenses(finalBudget, 500);