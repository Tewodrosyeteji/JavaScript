'use strict';


// challenge_one
// const calcAverage = (sore1, score2, score3) => avarage = (sore1 + score2 + score3) / 3;



// const avgDolhins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);



// const checkWinner = (avgDolhins, avgKoalas) => {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log("no one wines....");
//     }

// }
// const winner = checkWinner(avgDolhins, avgKoalas);



// challenge_two

// const calcTip = bills => bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;


// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, total);


// challenge three

// const mark={
//     fullName:"Mark Miller",
//     mass:78,
//     height:1.69,
// calcBMI:function(){
//    this.BMI=this.mass/this.height ** 2 ;
//    return this.BMI;
// }
// }

// const john={

//     fullName:"John Smith",
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         this.BMI=this.mass/this.height ** 2 ;
//         return this.BMI;
//      }
// }

// console.log((mark.BMI > john.BMI) ? `${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} (${john.calcBMI()}))`:`${john.fullName} BMI (${john.calcBMI()}) is higher than ${mark.fullName} (${mark.calcBMI()})`);



// challenge four


const bills=[ 22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tips=[];
const totals=[];

const calcTip=function( bills){

    for(let i=0 ; i< bills.lenght;i++){
     bills[i] <= 300 && bills[i] >= 50 ? tips.push(bills[i] * 0.15 ): tips.push(bills[i] * 0.2);
      console.log(bills,tips);
    }
}


calcTip(bills);
