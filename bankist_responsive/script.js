'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

  btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//smooth scrolling

const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  // const s1corrs=section1.getBoundingClientRect()
  //  console.log(s1corrs);
  // console.log(e.target.getBoundingClientRect);
  // console.log('Current scrollXY',window.pageXOffset,window.pageYOffset);
  // console.log('height/width view port',document.documentElement.clientHeight,document.documentElement.clientWidth);
   
  
  // window.scrollTo(s1corrs.left + window.pageXOffset,
  //   s1corrs.top + window.pageYOffset);

  // window.scrollTo({
  //   left:s1corrs.left + window.pageXOffset,
  //   top:s1corrs.top + window.pageYOffset,
  //   behavior:'smooth',
   
  // });  -> old school way

  //new and simple 

  section1.scrollIntoView({behavior:'smooth'}); 


})


// document.querySelectorAll('.nav__link').forEach(function(el){
// el.addEventListener('click',function(e){
//   e.preventDefault();
//   const id=this.getAttribute('href');
//   document.querySelector(id).scrollIntoView({behavior:'smooth'});
// })
// }) -> change the scroll into event delegation

//event propagation -> capturing target bubbling  and event delegation 
// step 1 add event listener to the common parent element
//step w2 determine what element generated the event

document.querySelector('.nav__links').addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav__link')){
       const id=e.target.getAttribute('href');
       document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
})

// tabbed components

const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');


tabsContainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');
  if(!clicked) return;
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})

//  menu fade animation

const nav=document.querySelector('.nav');

const handleHover=function(e){
 
    if(e.target.classList.contains('nav__link')){
  
      const link=e.target;
      const siblings=link.closest('.nav').querySelectorAll('.nav__link');
      const logo=link.closest('.nav').querySelector("img");
  
      siblings.forEach(el =>{
        if(el !== link) el.style.opacity=this;
      });
      logo.style.opacity =this;
    }
  
}

nav.addEventListener('mouseover',handleHover.bind(0.5));

nav.addEventListener('mouseout',handleHover.bind(1));


//sticky navigation

//  const initialCoords=section1.getBoundingClientRect();

// window.addEventListener('scroll',function(){
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//    else nav.classList.remove('sticky');

// });

// sticky navigation with intersectionObserver

// const obsCallback=function(entries,observer){
//     entries.forEach(entry => console.log(entry));
// }

// const obsOpt={
//   root:null,
//   threshold:0.1,
// }

// const observer=new IntersectionObserver(obsCallback,obsOpt);
// observer.observe(section1);

const header=document.querySelector('.header');
const navHeader=nav.getBoundingClientRect().height;
const stickyCallback=function(entries){
  const [entry]=entries;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');

}

const headerObserver=new IntersectionObserver(stickyCallback,{
  root:null,
  threshold:0,
  rootMargin:`${-navHeader}px`,
})
headerObserver.observe(header);
 
// Revealing elements

const allSections=document.querySelectorAll('.section');



const revealSection=function(entries,observer){
  const [entry]=entries;

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver=new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
});


// lazy loading

const imgTargets=document.querySelectorAll('img[data-src]');

const imagLoad=function(entries,observer){
const [entry]=entries;

if(!entry.isIntersecting) return;

entry.target.src=entry.target.dataset.src;

entry.target.addEventListener('load',function(){

  entry.target.classList.remove('lazy-img');
});

observer.unobserve(entry.target);
}


const imgObserver=new IntersectionObserver(imagLoad,{
  root:null,
  threshold:0,
  rootMargin:'200px',
})


imgTargets.forEach(img => imgObserver.observe(img));

//  sliders

const sliders=function(){
const slides=document.querySelectorAll('.slide');
const slider=document.querySelector('.slider');
const btnRight=document.querySelector(".slider__btn--right");
const btnLeft=document.querySelector('.slider__btn--left');

let cuSlider=0;
let maxSlide=slides.length;

// slider.style.transform='scale(0.4) tanslateX(-1250)';
// slider.style.overflow='visible';



const goToSlide=function(slide){
  slides.forEach((s,i)=>{
    s.style.transform=`translateX(${100 * (i -slide)}%)`;
  });
}

const nextSlide=function(){
  cuSlider === maxSlide -1 ?  cuSlider=0:cuSlider++;
  goToSlide(cuSlider);
  activateDot(cuSlider);
  }

  const previousSlide=function(){
    cuSlider === 0 ? cuSlider =maxSlide -1: cuSlider--;
    goToSlide(cuSlider);
    activateDot(cuSlider);

  }

btnRight.addEventListener('click',nextSlide);
btnLeft.addEventListener('click',previousSlide);

document.addEventListener('keydown',function(e){
  if(e.key === 'ArrowLeft') previousSlide();
  e.key === "ArrowRight" && nextSlide();
})

// slider dots

const dotsContainer=document.querySelector('.dots');

const createDots=function(){
  slides.forEach(function(_,i){
dotsContainer.insertAdjacentHTML('beforeend',` <button class="dots__dot"  data-slide="${i}"></button>`);
  });
}


dotsContainer.addEventListener('click',function(e){

  if(e.target.classList.contains('dots__dot')){
    const {slide}=e.target.dataset;
    goToSlide(slide);
    activateDot(slide)
  }

})

const activateDot=function(slide){
document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

document.querySelector(`.dots__dot[data-slide='${slide}']`).classList.add('dots__dot--active');

}

const init=function(){
goToSlide(0);
   createDots();
  activateDot(0);
}
init();
}

sliders();



