function sumOfDigits(num){
    let sum=0;
    while(num){
        sum+= num%10;
        num= Math.floor(num/10);
    }
    console.log(sum);
}
sumOfDigits(543);
sumOfDigits(97561);
sumOfDigits(245678);