function replace(arrOne, arrTwo) {
  let wordsToReplace = arrOne.split(", ");
  let textToSearch = arrTwo.split(" ");

for (let i = 0; i < textToSearch.length; i++) {
    if(textToSearch[i].includes(`*`)){

        let toReplace=wordsToReplace.find((word) => word.length == textToSearch[i].length);
        textToSearch[i] = toReplace;
        
    }
}
  console.log(textToSearch.join(` `));


}

replace(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);


