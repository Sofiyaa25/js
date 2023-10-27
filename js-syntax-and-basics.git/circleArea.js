function circleArea(input){

    
    if(typeof input=="number"){
        let calculatedCircleArea =Math.pow(input, 2)* Math.PI;
        console.log(calculatedCircleArea.toFixed(2));
    }else{
        let inputType = typeof input;
        console.log(`We can not calculate the circle area, because we receive a ${inputType}`);
    }
}
circleArea(5);
circleArea(`Name`);