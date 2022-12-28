'use strict';


const showModal=document.querySelectorAll('.show-modal');
const hiddenModal=document.querySelector('.modal');
const colseModal=document.querySelector('.close-modal');
const overlay=document.querySelector('.overlay');


const open=function(){
    hiddenModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const close=function(){
    hiddenModal.classList.add('hidden');
    overlay.classList.add('hidden')}

for(let i=0;i<showModal.length;i++){
    showModal[i].addEventListener('click',open );
};

colseModal.addEventListener('click',close);
overlay.addEventListener('click',close);

document.addEventListener('keydown',function(e){
if(e.key === 'Escape' && (!hiddenModal.classList.contains('hidden'))){
   close();
}
});




