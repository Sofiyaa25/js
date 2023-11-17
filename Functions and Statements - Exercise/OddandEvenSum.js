function sumOfEvenAndOddDigits(num){
    const arr = num.toString().split("").map((function(item) {
        return parseInt(item, 10);
    }))

    let sumEven=0;
    let sumOdd=0;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if(currentNum%2==0){
            sumEven+=currentNum;
        }else{
            sumOdd+=currentNum;
        }
        
    }
   console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
sumOfEvenAndOddDigits(1000435);
sumOfEvenAndOddDigits(3495892137259234);



