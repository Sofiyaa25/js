function printAndSum(num1, num2){
    let sum=0;
    let stringOfNumbers ="";

    for(let i=num1; i<=num2; i++){
        sum+=i;
        stringOfNumbers += i + " ";
    }
    console.log(stringOfNumbers);
    console.log("Sum:",sum);
}

printAndSum(0, 26);
printAndSum(50, 60);