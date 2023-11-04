function sortAlphabeticaly(input){
   input.sort();
   for (let i = 0; i <input.length; i++) {
    console.log(i+1 + `.` + input[i]);
    
   }
}
sortAlphabeticaly(["John", "Bob", "Christina", "Ema" ,"John", "Bob", "Christina", "Ema"]);