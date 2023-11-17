function factorielDivider(num1, num2){

    let calculateFactoriel = (num) =>{
        let result = 1;

        if(num ==0 || num==1){
            return result;
        }
       
        for (let i = num; i >=1; i--) {
            result = result * i;
        }
        return result;
    
    }

    let num1Factoriel = calculateFactoriel(num1);
    let num2Factoriel = calculateFactoriel(num2);

    let result = num1Factoriel / num2Factoriel;
    return result.toFixed(2);
   
}

console.log(factorielDivider(2, 3));
console.log(factorielDivider(5,2));
console.log(factorielDivider(6,2));