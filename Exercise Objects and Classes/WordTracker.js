/*Write a function that receives an array of words and finds occurrences of given words in that sentence.

The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.

Print for each word how many times it occurs. The words should be sorted by count in descending. */
function solve(input=[]){
    let firstLine = input[0].split(" ");
    let sentance={};
    for ( let word of firstLine) {
        sentance[word] = 0;
    }
   
    for (let i = 1; i <=input.length; i++) {
        if(sentance.hasOwnProperty(input[i])){
            sentance[input[i]] +=1;
        }
    }

    let entries = Object.entries(sentance).sort((a,b)=>b[1]-a[1]);
    for (let [key, value] of entries) {
        console.log(`${key} - ${value}`);
    }
        
    
}
solve([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence']
    )