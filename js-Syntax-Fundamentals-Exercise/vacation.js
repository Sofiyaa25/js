function calculateTotalPrice(numOfPeople, groupType, day) {
  let pricePerPerson = 0;
  let discount = 0;
  let totalPrice = 0;

  switch (groupType) {
    case `Students`:
      switch (day) {
        case `Friday`:
          pricePerPerson = 8.45;
          break;
        case `Saturday`:
          pricePerPerson = 9.8;
          break;
        case `Sunday`:
          pricePerPerson = 10.46;
          break;
      }

      break;

    case `Business`:
      switch (day) {
        case `Friday`:
          pricePerPerson = 10.9;
          break;
        case `Saturday`:
          pricePerPerson = 15.6;
          break;
        case `Sunday`:
          pricePerPerson = 16;
          break;
      }

      break;
    case `Regular`:
      switch (day) {
        case `Friday`:
          pricePerPerson = 15;
          break;
        case `Saturday`:
          pricePerPerson = 20;
          break;
        case `Sunday`:
          pricePerPerson = 22.5;
          break;
      }

      break;
  }

  totalPrice = pricePerPerson * numOfPeople;
  if (groupType == `Students` && numOfPeople >= 30) {
    discount = 0.15;
    totalPrice = totalPrice - totalPrice * discount;
  } else if (groupType == `Business` && numOfPeople >= 100) {
    totalPrice = totalPrice - 10 * pricePerPerson;
  } else if (groupType == `Regular` && numOfPeople >=10 && numOfPeople<=20){
    totalPrice =  totalPrice - (totalPrice*0.05);
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calculateTotalPrice(30, `Students`, `Sunday`);
calculateTotalPrice(40, `Regular`, `Saturday`);