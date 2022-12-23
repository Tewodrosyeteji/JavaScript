// challenge one

const markMass=78;
const johnMass=92;
const markHeight=169;
const johnHeight=195; 

const  markBMI=markMass/(markHeight/100) ** 2;
const markBMI1=markMass/((markHeight/100) *(markHeight/100) );

const johnBMI=johnMass/(johnHeight/100) ** 2;
const johnBMI1=johnMass/((johnHeight/100) *(johnHeight/100) );

const markHigherBMI=markBMI > johnBMI;

console.log(markBMI,markBMI1,johnBMI,johnBMI1,markHigherBMI);


// challenge two

if(markBMI > johnBMI){
console.log(`Mark's BMI is higher than John's!`);
}else{
console.log(`JOhn's BMI is higher than Mark's!`);
}

if(markBMI > johnBMI){
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
    }else{
    console.log(`JOhn's(${johnBMI}) BMI is higher than Mark's(${markBMI})!`);
    }


    //challenge three

    const dolphinsAverage=(96+108+89)/3;
    const koalasAverage=(96+108+89)/3;
    const minimumScore=100;

if(dolphinsAverage > koalasAverage){
    console.log(`draw ${koalasAverage}`);
}else if(dolphinsAverage === koalasAverage && minimumScore >= 100){
    console.log(`Dolphins is the winner`);
}else{
    console.log(`Koalas is the winner`);
}


if(dolphinsAverage === koalasAverage  && minimumScore <= koalasAverage && minimumScore <= dolphinsAverage ){
    console.log(`draw`);
}else if(dolphinsAverage > koalasAverage){
    console.log(`Dolphins is the winner`);
}else{
    console.log(`Koalas is the winner`);
}

// challenge four

const  bill=500;

const tip= bill <=300 && bill >=50 ? bill * 0.15 : bill *0.2 ;


 console.log(`The bill was ${bill}, the tip was ${tip}, and the total value  ${bill + tip}`); 