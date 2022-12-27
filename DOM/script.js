'use strict';


let screatNumber=Math.trunc(Math.random()*20+1);
let score=20;
let highscore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.again').addEventListener('click',function(){

    score=20;
    screatNumber=Math.trunc(Math.random()*20+1);
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value=null;
   



});

document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   if(!guess){
displayMessage('👿 no number');
   }else if(guess===screatNumber){


displayMessage('🎉 correct number');
    document.querySelector('.number').textContent=screatNumber;

    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';

    if(score >highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

   } else if(guess !== screatNumber){
    if(score > 1){ 
    displayMessage((guess > screatNumber) ? ' ☝ Too high' :'😭 lose');
        score--;
        document.querySelector('.score').textContent=score;
    }else{
    displayMessage('😭 lose');
        document.querySelector('.score').textContent='0';     
    }
   }   
})