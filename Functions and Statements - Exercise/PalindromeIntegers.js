function isItPalindrome(num){
let numToStringArray = num.toString().split('');
let reversedArray = num.toString().split('').reverse();

if(numToStringArray.length<2){
    console.log("true");
    return;
}


for (let i = 0; i < numToStringArray.length; i++) {
    if(numToStringArray[i] != reversedArray[i]){
        console.log("false");
        break;
    }
}

console.log("true");
}



isItPalindrome(123);
isItPalindrome(323);
isItPalindrome(421);
isItPalindrome(121);
