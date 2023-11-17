function charsInBetween(char1, char2){
    const arr = [];
    let startIndex = char1.charCodeAt(0);
    let endIndex = char2.charCodeAt(0); //99

    if(startIndex>endIndex){
        for (let i = endIndex+1; i < startIndex; i++) {
            let currentChar = String.fromCharCode(i);
            arr.push(currentChar);
            
        }
}else{
    for (let i = startIndex+1; i < endIndex; i++) {
        let currentChar = String.fromCharCode(i);
        arr.push(currentChar);
        
    }
}
   

console.log(arr.join(" "));
}

charsInBetween('C','#');