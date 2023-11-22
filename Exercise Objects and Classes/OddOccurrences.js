/*Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).

The input comes as a single string. The words will be separated by a single spaceWrite a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).

The input comes as a single string. The words will be separated by a single space */

function solve(input){
let occurences={};
let info = input.toLowerCase().split(` `);

for (let i = 0; i < info.length; i++) {
    if(occurences.hasOwnProperty(info[i])){
        occurences[info[i]] +=1;
    }else{
        occurences[info[i]]=1;
    }
}

let entries = Object.entries(occurences).sort((a,b) => b[1] - a[1]);
let result = []

for (let [key, value] of entries) {
    if(value %2 !=0){
        result.push(key);
    }
    
}
console.log(result.join(" "));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

