const budget =Object.freeze( [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits =Object.freeze( {
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits,user)=> limits?.[user] ?? 0;
 

// change to pure function
  const addExpenses = function (state,limits,value, description, user ='jonas') {
    const cleanUser = user.toLowerCase();
 return value <= getLimit(limits,cleanUser) ? [...state,{ value: -value, description, user:cleanUser}]
  :state;
};
const budget1=addExpenses(budget,spendingLimits,10, 'Pizza 🍕');
const budget2=addExpenses(budget1,spendingLimits,100, 'Going to movies 🍿', 'Matilda');
const budget3=addExpenses(budget2,spendingLimits,200, 'Stuff', 'Jay');
console.log(budget);
console.log(budget1)
console.log(budget2);
console.log(budget3);



const checkExpenses =  (state,limits) =>
  state.map(entry => entry.value < -getLimit(limits,entry.limit) ? {...entry,flag:'limit'}:state);
const finalBudget=checkExpenses(budget3,spendingLimits);
console.log(finalBudget);


const logBigExpenses = function (state,bigLimit) {

   const bigExpense=state.filter(entry => entry.value <= -bigLimit)
       .map(entry => entry.description.slice(-2))
       .join(' / ');
      // .reduce((str,curr)=> `${str} / ${curr.description.slice(-2)} `,'')
      console.log(bigExpense);
}

logBigExpenses(finalBudget,100);