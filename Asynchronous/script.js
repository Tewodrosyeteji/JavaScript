'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////



// const getCountryData=function(country){
// const request=new XMLHttpRequest();
// request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load',function(){
    

//     const [data]=JSON.parse(request.responseText);
//     console.log(data);
//     const html=`
//     <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//         <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages['amh']}</p>
        
//           </div>
//         </div>
//   </article>
//   `
//   countriesContainer.insertAdjacentHTML('beforeend',html);
//   countriesContainer.style.opacity=1;
// })
// }

// getCountryData('ethiopia');
// getCountryData('kenya');



/// callback hell



// const renderCountry=function(data,className=''){
//     const html=`
//         <article class="country ${className}">
//         <img class="country__img" src="${data.flags.png}" />
//             <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages['amh']}</p>
            
//               </div>
//             </div>
//       </article>
//       `
//       countriesContainer.insertAdjacentHTML('beforeend',html);
//       countriesContainer.style.opacity=1;
// }



// const getCountryDataAndNeighbour=function(country){
//     const request=new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
    
//     request.addEventListener('load',function(){
        
//         const [data]=JSON.parse(request.responseText);
//         console.log(data);
//         renderCountry(data);

//          const neighbour=data.borders[0];
//          console.log(neighbour);

//          const request2=new XMLHttpRequest();
//          request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
//          request2.send();
         
//          request2.addEventListener('load',function(){

//              const [data2]=JSON.parse(request2.responseText);
//              renderCountry(data2,'neighbour'); 
//          })
//     })

  

//     }


//     getCountryDataAndNeighbour('ethiopia');
    


//moder way of ajax call
// three steps pending,settling,building and consuming 

// const request=fetch('https://restcountries.com/v3.1/name/ethiopia');
// console.log(request);

/// consuming

const renderCountry=function(data,className=''){
    const html=`
        <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages['amh']}</p>
            
              </div>
            </div>
      </article>
      `
      countriesContainer.insertAdjacentHTML('beforeend',html);
      countriesContainer.style.opacity=1;
}


// const getCountrtData=function(country){

//     const request=fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response){
//       console.log(response);
//       return response.json();
//     }).then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//     })
// }


/// simplify the above code as


/// chaining ,error handling
// const renderError=function(msg){
//   countriesContainer.insertAdjacentText('beforeend',msg);
// //   countriesContainer.style.opacity=1;
// }

// const getCountrtData=function(country){

//     const request=fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response=>{
//         //manually throw an error

//         if(!response.ok){
//             throw new Error(`Country not found (${response.status})`);
//         }
//        return response.json();
//     })
//     .then(data=>{
//         renderCountry(data[0]);
//         const neighbour=data[0].borders[0];
//         console.log(neighbour);
//         if(!neighbour) throw new Error(`neighbour not found`);
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => {
//         if(!response.ok){
//             throw new Error(`Country not found (${response.status})`);
//         }
//         return response.json();
//     })
//     .then(data => renderCountry(data[0],'neighbour'))
//     .catch(err => {
//         console.error(`someting went wrong ${err}`);
//         renderError(`someting went wrong ${err.message} try again`);
//     })
 
//   .finally(()=> {
//   countriesContainer.style.opacity=1;
//   } );
// };

// btn.addEventListener('click',function(){
//     getCountrtData('canada');
// });



///////////////////////////////
//  challenge one

// const whereAmI=function(lat,lng){
// fetch(`https://geocode.xyz/${lat},${lng}?geoit=json.`)
// .then(response => {

//     if(!response.ok) throw new Error(`problem with geocode api ${response.status}`)
//     return response.json()})
// .then(data => {
//     console.log(data);
// })
// .catch(err => console.error(`someting went wrong ${err.message}`))
// }
// whereAmI(52.508, 13.381);


////////////////
/// event loop in practive explain the order to print in the console

// console.log('test start');
// setTimeout(()=>console.log('0 second timer'),0); // 0 second is not a garanti
// Promise.resolve('promise resolve').then(res =>console.log(res));
// Promise.resolve('promise resolve 2').then(res =>{
//     for(let i=0;i<10000;i++){} // is the prove of microcallback queue
//     console.log(res)
// });

// console.log('test ended');


////////////////////////
//built a simple promese

// const myFirstPromise=new Promise(function(resolve,rejecte){
   
// console.log('draw is happned')
//     setTimeout(()=>{
//         if(Math.random() >= 0.5){
//             resolve('you win');
//         }else{
//             rejecte(new Error('you lost'));
//         }
//     },2000);
// });

// // consume the promise 

// myFirstPromise.then(res => console.log(res)).catch(err => console.error(err));

// ////////////
// //promisfing is change callback based asynchronous function into promised based
// //example promisfing setTimeout

// const wait=function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,seconds * 1000)
//     });
// };

// wait(2).then(() => {
//     console.log('wait for 2 second');
//     return wait(1);
// }).then(()=>{
//     console.log('wait for 1 second')
// })

// ////////////
// //create immdiately promise

// Promise.resolve('abc').then(res => console.log(res));
// Promise.reject(new Error('Problem')).catch(err => console.log(err));

//// promisfing  geolocation
// const getPosition=function(){
//     return new Promise(function(resolve,reject){
//         // navigator.geolocation.getCurrentPosition(
//         //     position =>resolve(position),
//         // err => reject(err)
//         // );
//         navigator.geolocation.getCurrentPosition(resolve,reject);
        
//     })
// }

// getPosition().then(pos => console.log(pos));



///////////////
//challenge two


// const wait=function(seconds){
//         return new Promise(function(resolve){
//             setTimeout(resolve,seconds * 1000)
//         });
//     };

// const imgContainer=document.querySelector('.images');

// const createImage=function(imgPath){
//     return new Promise(function(resolve,reject){
//       const img= document.createElement('img');
//       img.src=imgPath;

//       img.addEventListener('load',function(){
//         imgContainer.append(img);
//         resolve(img);
//       })

//       img.addEventListener('error',function(){
//         reject(new Error('imag is not found'));
//       })
     
//     })
// }

// let currentimg;

// createImage('img/img-1.jpg')
//            .then((img)=>{
//             currentimg=img;
//             console.log('first imag loaded')
//              return wait(2);
//            }).then(()=>{
//                 currentimg.style.display='none';
//                 return createImage('img/img-2.jpg')
//            }).then((img)=>{
//                currentimg=img;
//                console.log('second image is loaded');
//                return wait(2);
//            }).then(()=>{
//             currentimg.style.display='none';
//            }).catch(err => console.err(err));


///////////////////////////////////
/// consuming a promise using async await


// const getCountry=async function(country){
// const res=await fetch(`https://restcountries.com/v3.1/name/${country}`);
// console.log(res);
// const [data]= await res.json();
// renderCountry(data);
// };

// getCountry('ethiopia');
// console.log('first');

///////////////////////////////////////////
/// in async await error is handled by  try(){}catch (e){} and manually by  throw new Error()-> for 404,403 like errors


////////////////////////////////////////////////////////////////
///// even if error is happend in async function it return the resolved value to avoid this use throw errors in catch block


/////////////////////////////////////////////////
//// to avoid mixing async await function with old then catch use iff function to get access the await keyword outside of the async function ofcausre async is also used in iff function too.like (async function(){try{await...}catch (e){}})() this is also used to hadle error in async function 