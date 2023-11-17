function totalPrice(product, quantity) {
  let price;
  switch (product) {
    case "coffee":
      price = 1.5;
      break;

    case "water":
      price = 1.0;
      break;

    case "coke":
      price = 1.4;
      break;

    case "snacks":
      price = 2.0;
      break;
  }
  console.log((price * quantity).toFixed(2));
}

totalPrice("water", 5);
totalPrice("coffee", 2)
