/*You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
All of the arrays’ values will be strings.  */

function storeProvision(inStock, delivery) {
    const stock={};
    for (let i = 0; i < inStock.length; i+=2) {
      let product = inStock[i];
      let quantity = Number(inStock[i+1]);

      if(!stock.hasOwnProperty(product)){
        stock[product]=quantity;
      }else{
        stock[product]+= quantity;
      }
      
    }
    for (let i = 0; i < delivery.length; i+=2) {
      let product = delivery[i];
      let quantity = Number(delivery[i+1]);

      if(!stock.hasOwnProperty(product)){
        stock[product]=quantity;
      }else{
        stock[product]+= quantity;
      }
      
    }

   for (const product in stock) {
    console.log(`${product} -> ${stock[product]}`)
    }
   }

  
  








 storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])
