export const cart = [];


export function addToCart(productId){
  let machtchingItem;
    cart.forEach((cartItem)=> {

      if(productId === cartItem.productId){
        machtchingItem = cartItem;
      }
    });

    if (machtchingItem){
      machtchingItem.quantity +=1
    }else{
       cart.push({
        productId: productId,
        quantity: 1
      });
    }
}



