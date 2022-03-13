'strict mode'
// alert('1')

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
const getLimit = ( limits, user) => {
  limits?.[user] ?? 0;  
} 

// side-effect  -that something outside of a function is manipulated
// or the function does something other than simply returning a value
// IMPURE FUNCTION - which has or produces side effects
// PURE FUNCTION
const addExpense = function (state, limits, value, description, user = 'jonas') {
  // if (!user) user = 'jonas';

  const cleanUser = user.toLowerCase();

  // if (value <= getLimit(cleanUser)) {
        //*no budget.push({ value: -value, description, user:cleanUser });
  //   return [...state, { value: -value, description, user:cleanUser }]
  // }

  return value <= getLimit(limits, cleanUser) 
    ? [...state, { value: -value, description, user:cleanUser }]
    : state;
  
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(newBudget1, spendingLimits, 100, 'movies 🍿', 'Matilda');

const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// console.log('newBudget1: '. newBudget1);
// console.log('newBudget2: '. newBudget2);
// console.log('newBudget3: '. newBudget3);
console.log(budget);

const checkExpenses = (state, limits) => {

  state.map(entry =>      //* map returns a new array, so not mutated
    entry.value < -getLimit(limits, entry.user)
      ? {...entry, flag: 'limit'}
      : entry  
  )
  // for (const entry of newBudget3) {
    
  //   if (entry.value < -getLimit(limits, entry.user)) {
  //     entry.flag = 'limit';
  //   }
  // }
};

const finalBudget = checkExpenses(newBudget3, spendingLimits);
// console.log('newBudget3: '. newBudget3);
console.log(finalBudget);
 
// console.log(budget);

const logBigExpenses = function (BigLimit) {
  let output = '';
  for (const entry of budget) {

    output += entry.value <= -BigLimit 
      ? `${entry.description.slice(-2)} / `
      : ''; 

      // if (entry.value <= -BigLimit) {
        // output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
        // output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
      // }
}
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(1000);