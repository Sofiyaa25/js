function extract(input){
    let str = input.toString();
    let arr = str.split('').map(function(item) {
        return parseInt(item, 10);
    });

    let result = calculateSum();
    while(result / arr.length<5){
        arr.push(9);
    result = calculateSum();
}

console.log(arr.join(""));





    function calculateSum() {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
   
}
extract(101);