function fruitPrice(fruit, grams, pricePerKg){
    let gramsToKgms = grams / 1000;
    let totalPriceInKg = gramsToKgms * pricePerKg;
    console.log(`I need $${totalPriceInKg.toFixed(2)} to buy ${gramsToKgms.toFixed(2)} ${fruit}`)
}
fruitPrice(`orange`, 2500, 1.80);
fruitPrice(`apple`, 1563, 2.35)