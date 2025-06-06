import { renderOrderSummary } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts, loadProductsFetch } from "../data/products.js";

import { loadCart } from "../data/cart.js";

//import '../data/backend-practice.js';

//import '../data/cart-class.js';


async function loadPage() {
  try{
    
    //throw 'error 1';

    await Promise.all([

      loadProductsFetch(),
      new Promise((resolve) => {
        loadCart(() => {
          resolve();
        });
      })
    ]);

  } catch (error) {
       console.log('Unexpected error. Please try again later.');
  }
  

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*


async function loadPage(){
  

  await loadProductsFetch();

  await new Promise((resolve) => {
      loadCart(() => {
      resolve();
   
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

Promise.all([
    
  loadProductsFetch (),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });

  })

]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});


new Promise((resolve) =>{
  
  loadProducts(() => {
    
    resolve('value1');
  });

}).then((value) =>{
    console.log(value);

    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });

    });
    
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});



loadProducts(() =>{
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
  
});
*/