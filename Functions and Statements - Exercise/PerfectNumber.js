function isItPerfect(num){
    let sumOfDividors=0;
    for (let i = 1; i <num; i++) {
        if(num%i==0){
            sumOfDividors+=i;
        }
    }
    if(sumOfDividors==num){
        console.log("We have a perfect number!");
    }else{
        console.log( "It's not so perfect.");
    }
}


isItPerfect(28);
