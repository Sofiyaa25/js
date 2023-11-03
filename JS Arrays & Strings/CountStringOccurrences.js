function findAll(input, toFind){
    let counter = 0;
    let words = input.split(` `).forEach(word =>{
        if(word == toFind){
            counter++;
        }
    }
    );
    console.log(counter);
}
findAll('This is a word and it also is a sentence',
'is'
);
findAll('softuni is great place for learning new programming languages',
'softuni'
);