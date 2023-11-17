function sumUsingNestedFunctions(a,b,c){
    let sumOfAandB = a+b;
    function substract(){
        let result = sumOfAandB-c;
        console.log(result);
    }
    substract();
}

sumUsingNestedFunctions(5,10,2);
sumUsingNestedFunctions(23,6,10);
sumUsingNestedFunctions(1,17,30);
sumUsingNestedFunctions(42,58,100);


function sumUsingNestedArrowFunc(a, b, c){
    let sumOfAandB = a+b;
    let substract =(sumOfAandB,c)=>{ return sumOfAandB-c};
    console.log(substract(sumOfAandB,c));
}
sumUsingNestedArrowFunc(5,10,2);
sumUsingNestedArrowFunc(23,6,10);
sumUsingNestedArrowFunc(1,17,30);
sumUsingNestedArrowFunc(42,58,100);


