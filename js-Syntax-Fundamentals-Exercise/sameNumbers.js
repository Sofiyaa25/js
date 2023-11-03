function areTheSame(number){

    let allEqual = true;
let numToString = Array.from(number.toString().split(``));

for(let i=1; i<numToString.length; i++){
    if(numToString[i] != numToString[i-1]){
        allEqual = false;
    }
}
console.log(allEqual)
}

areTheSame(222);
areTheSame(2226);
areTheSame(5555);
areTheSame(1556);