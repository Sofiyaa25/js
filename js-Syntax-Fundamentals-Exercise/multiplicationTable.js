function multiplyToTen(num){
let stringOfNumbers ="";
for(let i=1; i<=10; i++){
    let multiplied = num * i;
    stringOfNumbers = `${num} X ${i} = ${multiplied}`;
    console.log(stringOfNumbers);
}
}
multiplyToTen(5);
multiplyToTen(2);