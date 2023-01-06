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
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-01-01T17:01:17.194Z',
    '2023-01-03T23:36:17.929Z',
    '2023-01-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'en-GB', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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
const displayMovements=function(acc,sort=false){
  containerMovements.innerHTML='';


  const moves=sort? acc.movements.slice().sort((a,b)=>a-b):acc.movements;
 
   
  moves.forEach(function(mov,i){

    const type= mov>0 ? 'deposit' : 'withdrawal';
    const date=new Date(acc.movementsDates[i]);
    const displayDate=formatMovementDate(date,acc.locale);
    const formatMov=formatCurr(mov,acc.locale,acc.currency);
    const html=`
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatMov}</div>
    </div>
    `
    
    containerMovements.insertAdjacentHTML('afterbegin',html)

  })
}

//2
const calcDisplayMovements=function(acc){

acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0);
labelBalance.textContent=formatCurr(acc.balance,acc.locale,acc.currency);

}


//3
const displaySummary=function(acc){
const income=acc.movements
  .filter( mov =>mov>0)
  .reduce((acc,deposite)=>acc+deposite,0)
labelSumIn.textContent=formatCurr(income,acc.locale,acc.currency);

const outcome=acc.movements
  .filter(mov=>mov<0)
  .reduce((acc,withd)=> acc+withd,0)
 labelSumOut.textContent=formatCurr(Math.abs(outcome),acc.locale,acc.currency);

 const interest=acc.movements
      .filter(mov=>mov>0)
      .map(inter => (inter * acc.interestRate)/100)
      .reduce((acc,int)=> acc+int,0);

 labelSumInterest.textContent=formatCurr(interest,acc.locale,acc.currency);
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

        currentAccount.movementsDates.push(new Date().toISOString());
        reciverAcc.movementsDates.push(new Date().toISOString());

        updateUi(currentAccount);

        clearInterval(timer);
        timer=logOutSetTimer();

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
  currentAccount.movementsDates.push(new Date().toISOString());

  clearInterval(timer);
  timer=logOutSetTimer();


  updateUi(currentAccount);
}

inputLoanAmount.value=''

})

// 8
let sorted=false;
btnSort.addEventListener('click',function(e){
    e.preventDefault();
    displayMovements(currentAccount, !sorted);
    sorted=!sorted;
})


const formatCurr=function(value,locale,currency){

 return new Intl.NumberFormat(locale,{
    style:'currency',
    currency:currency,
  }).format(value)
}

// 9
const logOutSetTimer=function(){

  const tick=function(){
    const min=String(Math.trunc(time/60)).padStart(2,0);
    const sec=String(time %60).padStart(2,0);
    labelTimer.textContent=`${min}:${sec}`
    
    if(time === 0){
      clearInterval(timer);
      labelWelcome.textContent='Log in to get started';
      containerApp.style.opacity=0;
    }
    time--;
     
 }

let time=10;
tick();
const timer=setInterval(tick,1000);

return timer;
}

//9
const formatMovementDate=function(date,local){
  const calcDaysPassed=(date1,date2)=>Math.round((Math.abs(date2-date1))/(1000*60*60*24));

  const daysPassed=calcDaysPassed(new Date(),date);
  
  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesterday';
  if(daysPassed <= 7) return `${daysPassed} days`;
   
    // const day=`${date.getDate()}`.padStart(2,0);
    // const month=`${date.getMonth() + 1}`.padStart(2,0);
    // const year=date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(local).format(date)
  
}


//10
let currentAccount, timer;
btnLogin.addEventListener('click',function(e){
e.preventDefault();

currentAccount=accounts
.find(acc => acc.username === inputLoginUsername.value);

 if(currentAccount.pin === +(inputLoginPin.value)){
   
   labelWelcome.textContent=`Welcome ${currentAccount.owner.split(' ')[0]}`
   containerApp.style.opacity=100;

  

  const now=new Date();
const options={
  day:'numeric',
  month:'numeric',
  year:'numeric',
  hour:'numeric',
  minute:'numeric',
  // weekday:'long'
}

// const local=navigator.language;
// console.log(local);
labelDate.textContent=new Intl.DateTimeFormat(currentAccount.locale,options).format(now);


  // const day=`${now.getDate()}`.padStart(2,0);
  // const month=`${now.getMonth() + 1}`.padStart(2,0);
  // const year=now.getFullYear();
  // const hour=now.getHours();
  // const minute=`${now.getMinutes()}`.padStart(2,0);
  // labelDate.textContent= `${day}/${month}/${year},${hour}:${minute}`;
  

  inputLoginPin.value=inputLoginUsername.value='';
  inputLoginPin.blur();
 
  if(timer) clearInterval(timer);
  timer=logOutSetTimer();

   updateUi(currentAccount);

 }
})

// 11
const updateUi=function(acc){
  displayMovements(acc);

   calcDisplayMovements(acc);

   displaySummary(acc);
} 

//
// currentAccount=account1;
// updateUi(currentAccount);
// containerApp.style.opacity=100;



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