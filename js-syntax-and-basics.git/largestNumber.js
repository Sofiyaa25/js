function largestNumber(num1, num2, num3){
    let largestNum;
    if(num1>num2 && num1>num3){
        largestNum=num1;
    }else if(num2>num1 && num2>num3){
        largestNum=num2;
    }else if(num3>num2 &&num3>num1){
        largestNum=num3;
    }

    console.log(`The largest num is ${largestNum}`);
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
