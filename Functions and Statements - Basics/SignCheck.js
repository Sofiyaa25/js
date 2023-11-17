function isIisTheSumNegative(num1, num2, num3){
    const arr=[num1, num2, num3];
    let sumOfNegativeNumbers=0;
    let sumOfPositiveNumbers=0;
    
    
    
    for (const number of arr) {

        if(number>0){
            sumOfPositiveNumbers+= number;
        }else{
            sumOfNegativeNumbers+= number;
        }
    }


    if(Math.abs(sumOfNegativeNumbers) > sumOfPositiveNumbers){
        console.log("Negative");
    }else{
        console.log("Positive");
    }


}
isTheSumNegative(-6
    -12,
    14);