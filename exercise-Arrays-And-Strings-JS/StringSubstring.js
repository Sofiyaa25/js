function solve(word, text){
    const textToLowerCase = text.toLowerCase();

    if(textToLowerCase.includes(word.toLowerCase())){
        console.log(word);
        return;
    }else{
        console.log(`${word} not found!`);
    }
}

solve('javascript', 'JavaScript is JavaScript the best programming language JavaScript');

solve('python', `JavaScript is the best programming language`);