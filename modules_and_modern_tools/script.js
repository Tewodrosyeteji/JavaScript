//named parameter

console.log('importing module');
// import {addToCart, totalPrice as Price,tq} from './shoppingCart.js'

// // two types of export named and default 

// addToCart('beyaynet',4);
// console.log(Price,tq);


// import everything at the same time 
    //  import * as ShoppingCart from './shoppingCart.js'

    //  ShoppingCart.addToCart('beyaynet',4);
    //  console.log(ShoppingCart.totalPrice);


// default import

// import add, { addToCart } from './shoppingCart.js';
// add('beyaynet',4);

///////////////////////////////////////////
// import export in javascript is a live connection.
  
/// top level await works only in modules and stop the exceution until the request is done

////////////////////// 
// example one 
    // console.log('fetch start');
    // const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data=await res.json();
    // console.log(data);
    // console.log('fetch end');


//////////////////////
// example two 
    // const lastPost=async function(){
    //     const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data=await res.json();

    //     return {title: data.at(-1).title, text: data.at(-1).body}
    // }

    // const post = await lastPost();
    // console.log(post);


    ///////////////////////////////////////////////
    // to make design pattern private and protected use iff

    //example 1 iff 

//     const ShoppingCart2=(function(){
//              const cart=[];
//              const shopingCost=29;
//              const shoppingPrice=247;
//              const shoppingQuantity=23;

//              const addToCart=function(product,quantity){
//                 cart.push({product,quantity});
//                 console.log(`${quantity} ${product} added to cart`);
//             }
//            const  addToOrder=function(product,quantity){
//                 cart.push({product,quantity});
//                 console.log(`${quantity} ${product} added to order`);
//             }

//             return {cart, shoppingQuantity,addToCart}
//     })();

// ShoppingCart2.addToCart('misa',2);
// console.log(ShoppingCart2.shoppingQuantity);
// console.log(ShoppingCart2.shopingCost);

/////////////////////////////////////////
// commonJs 
  // for export 
// export.addToCart=function(product,quantity){
//                     cart.push({product,quantity});
//                     console.log(`${quantity} ${product} added to cart`);
//                 }

// /// for import 
// const {addToCart}=require('./shoppingCart')