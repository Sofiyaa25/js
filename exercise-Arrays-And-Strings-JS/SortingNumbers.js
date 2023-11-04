//pop - removes last element
//push - adds on the last index



function sortingNumbers(input){
input.sort(function(a, b){return a - b});
for (let i = 0; i < input.length; i++) {
    if(i%2!=0 && i!=0){
        let value = input.pop();
        input.splice(i, 0, value);
    }
}

console.log(input.join(" "));

}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);