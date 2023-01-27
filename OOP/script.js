'use strict'

//challenge one 

//1.
// const Car =function(make,speed){
// this.make=make;
// this.speed=speed;
// }

// const bmw=new Car('BMW',120);
// const mercedes=new Car('Mercedes',95);

// Car.prototype.accelerate=function(){
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.brake=function(){
//     this.speed -=5;
//     console.log(this.speed);
// }

// bmw.accelerate();
// bmw.brake();

//challenge two


class CarCl{

    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }


    accelerate(){
        this.speed += 10;
        console.log(this.speed);
    }

    brake(){
        this.speed -=5;
        console.log(this.speed);
    }


   
    set speedUS(speed)
    {
        this.speed= speed * 1.6;
    }
    get speedUS(){
        return this.speed / 1.6;
    }

}


const ford=new CarCl('Ford',120)

console.log(ford.speedUS);

ford.speedUS=50;
console.log(ford);

//challenge three



const Car =function(make,speed){
    this.make=make;
    this.speed=speed;
    }
    
  
    
    Car.prototype.brake=function(){
        this.speed -=5;
        console.log(this.speed);
    }
    


    const EV =function(make,speed,charge){
        Car.call(this,make,speed);
        this.charge=charge;
        }
        
        
        EV.prototype=Object.create(Car.prototype);
        
        EV.prototype.chargeBattry=function(chargeTo){
            this.charge=chargeTo;
        }
        
        EV.prototype.accelerate=function(){
            this.speed += 20;
            this.charge -= 0.01;
            console.log(`Tesla going at ${this.speed} km/h with a charge of ${this.charge * 100}%` );
        }
        const tesla=new EV('Tesla',120,0.23)

        tesla.accelerate();