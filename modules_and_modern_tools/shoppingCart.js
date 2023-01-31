console.log('exporting module');

const shopingCost=10;
const cart=[];

export const addToCart=function(product,quantity){
    cart.push({product,quantity});
    console.log(`${quantity} ${product} added to cart`);
}

//multiple named parameter

const totalPrice=1223;
const totalQantity=45;

export { totalPrice,totalQantity as tq};

/// default export

export default function(product,quantity){
    cart.push({product,quantity});
    console.log(`${quantity} ${product} added to cart`);
}