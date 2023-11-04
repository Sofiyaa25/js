function solve(input){

 const arr = input.split(` `);
   for (let i = 0; i < arr.length; i++) {

    if(arr[i].includes(`#`) && arr[i].length>1 && arr[i].charAt(1) != `#`){
        let regex = /^[a-zA-Z]+$/;
        let substring = arr[i].substring(1);
        if(regex.test(substring)){
        console.log(substring);
        }
    }
    
   }

}

solve("Nowadays everyone uses # to tag a #special word in #socialMedia");
solve("Nowadays everyone uses # to tag a #special45 word in #socialMedia562");
solve("The symbol # is known #variously in English- speaking #regions as the #number sign");



