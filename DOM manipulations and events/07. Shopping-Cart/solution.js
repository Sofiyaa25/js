function solve() {
   let buttons = Array.from(document.getElementsByClassName('add-product'));
   let textArea = document.querySelector('textarea');
   let checkOut = document.querySelector('checkout');
   let boughtProducts = [];
   let totalPrice=0;
   
   for (let button of buttons) {
      button.addEventListener('click', addToCart)
   }

   
   checkOut.addEventListener('click', calculateTotalPrice);
   


   function addToCart(e){
      let product = e.currentTarget.parentNode.parentNode;
      let productName = product.querySelector('.product-title').textContent;
      let productPrice = product.querySelector('.product-line-price').textContent;
      textArea.value+=`Added ${productName} for ${productPrice} to the cart.\n`;
      
      
       if(!boughtProducts.includes(productName)){
         boughtProducts.push(productName);
       }


       totalPrice+= Number(productPrice);
      
   }

//tuk se chupi, bez tova si rbori
   function calculateTotalPrice(e){
     textArea.value+=  `You bought ${boughtProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
   }
   
}