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


// 1
const displayMovements=function(movements,sort=false){
  containerMovements.innerHTML='';


  const moves=sort? movements.slice().sort((a,b)=>a-b):movements;
  
console.log(moves);
  moves.forEach(function(mov,i){
    const type= mov>0 ? 'deposit' : 'withdrawal';
    const html=`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${mov.toFixed(2)}$</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin',html)

  })
}

//2
const calcDisplayMovements=function(acc){

acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0);
labelBalance.textContent=`${acc.balance.toFixed(2)}$`;

}


//3
const displaySummary=function(acc){
const income=acc.movements
  .filter( mov =>mov>0)
  .reduce((acc,deposite)=>acc+deposite,0)
labelSumIn.textContent=`${income.toFixed(2)}$`;

const outcome=acc.movements
  .filter(mov=>mov<0)
  .reduce((acc,withd)=> acc+withd,0)
 labelSumOut.textContent=`${Math.abs(outcome).toFixed(2)}$`;

 const interest=acc.movements
      .filter(mov=>mov>0)
      .map(inter => (inter * acc.interestRate)/100)
      .reduce((acc,int)=> acc+int,0);

 labelSumInterest.textContent=`${interest.toFixed(2)} $`;
}


//4
const creatUserName=function(accs){
  accs.forEach(function(acc){
        acc.username=acc.owner
        .toLowerCase()
        .split(' ')
        .map(name=>name[0])
        .join('');
  });

}
creatUserName(accounts);




// 5
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();

  const amount=inputTransferAmount.value;
  const reciverAcc=accounts.find(acc => acc.username === inputTransferTo.value);
  
  inputTransferAmount.value=inputTransferTo.value='';
  inputTransferAmount.blur();

  if(amount > 0 && reciverAcc && currentAccount.balance >= amount && currentAccount.username !== reciverAcc.username){
    
        currentAccount.movements.push(-amount);
        reciverAcc.movements.push(amount);
        updateUi(currentAccount);

  }
})


//6
btnClose.addEventListener('click',function(e){
e.preventDefault();

if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === +(inputClosePin.value)){

const index=accounts.findIndex( acc => acc.username === currentAccount.username);
accounts.splice(index,1);
  containerApp.style.opacity=0;
}

inputCloseUsername.value=inputClosePin.value='';
inputClosePin.blur();
})

//7
btnLoan.addEventListener('click',function(e){
e.preventDefault();

const amount= Math.floor(inputLoanAmount.value);

if(amount>0 && currentAccount.movements.some(mov =>mov >= amount *0.1)){

  currentAccount.movements.push(amount);

  updateUi(currentAccount);
}

inputLoanAmount=''

})

// 8
let sorted=false;
btnSort.addEventListener('click',function(e){
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted=!sorted;
})


//9
let currentAccount;
btnLogin.addEventListener('click',function(e){
e.preventDefault();

currentAccount=accounts
.find(acc => acc.username === inputLoginUsername.value);

 if(currentAccount.pin === +(inputLoginPin.value)){
   
   labelWelcome.textContent=`Welcome ${currentAccount.owner.split(' ')[0]}`
   containerApp.style.opacity=100;

   inputLoginPin.value=inputLoginUsername.value='';
   inputLoginPin.blur();

   updateUi(currentAccount);

 }
})

// 10
const updateUi=function(acc){
  displayMovements(acc.movements);

   calcDisplayMovements(acc);

   displaySummary(acc);
} 




//challenge one

// const dogsJulia= [3, 5, 2, 12, 7];
// const dogsKate= [4, 1, 15, 8, 3];

// const checkDogs=function(arr1,arr2){

// const shallowCopy=[...arr1];
//use slice method
// shallowCopy.shift();
// shallowCopy.pop()
// console.log(shallowCopy);
//splice(0,1) and splice(-2)
//slice(1,3)  

// const connectedArry=[...shallowCopy,...arr2];
//use shallowCopy.concat(arr2)
// console.log(connectedArry);

// connectedArry.forEach(function(age,i){
// if(age>=3){
//   console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
// }else{
//   console.log(`Dog number ${i+1} is still a puppy`);
// }
// });
// }

// checkDogs(dogsJulia,dogsKate);

//challenge two

//1
// const age1=[5, 2, 4, 1, 15, 8, 3];


// const calcAverageHumanAge=function(ages){
//   const humanAges=ages.map(age => age<=2 ? 2*age : 16 + age*4)
//     const adult=humanAges.filter(excludAge => excludAge>=18 )
    
//     console.log(humanAges);
//     console.log(adult);

//     const average=adult.reduce((acc,curr)=> acc+curr,0)/adult.length;
//     return average;
// }
// console.log(calcAverageHumanAge(age1));


//challenge three



// const calcAverageHumanAge=ages =>ages.map(age => age<=2 ? 2*age : 16 + age*4).filter(excludAge => excludAge>=18 ).reduce((acc,curr,i,arr)=> acc+curr/arr.length,0);
    
// console.log(calcAverageHumanAge(age1));



// challenge four

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
//   ];
//1
//   dogs.forEach(function(value,i){
//     dogs[i].recommendedFood=value.weight ** 0.75 * 28;
//   })

  //2

//   const sarahDog=dogs.find(dog => dog.owners.includes('Sarah'));
//     console.log(`sarahs dog eat too ${sarahDog.curFood >sarahDog.recommendedFood?'much':'little'}`)

 //3

//  const ownersEatTooMuch=dogs.filter(dog=>dog.curFood>dog.recommendedFood).flatMap(owner=>owner.owners);


//  const ownersEatTooLittle=dogs.filter(dog=>dog.curFood<dog.recommendedFood).flatMap(owner=>owner.owners);

// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);

//4

// const exactly=dogs.some(dog => dog.curFood === dog.recommendedFood);
// console.log(exactly);
 //5
//  const dogEatingOk=dog =>dog.curFood > dog.recommendedFood *0.9 && dog.curFood > dog.recommendedFood *1.1;

// console.log(dogs.some(dogEatingOk));
// console.log(dogs.filter(dogEatingOk));

//6

// const dogSort=dogs.slice().sort((a,b)=>a.recommendedFood-b.recommendedFood);
// console.log(dogSort);