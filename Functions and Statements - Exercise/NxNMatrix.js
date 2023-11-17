function printMatrixUsingString(num){
    let str='';
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j <= num; j++) {
            str+= num + ' '
        }
        console.log(str);
        str = ''
    }
        
}

function printMatrixUsingArray(num){

 let arr=[]
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <=num; j++) {
            arr.push(num);
            if(arr.length == num){
                console.log(arr.join(" "));
                arr=[];
            }
            
        }
        
    }
        
}

printMatrix(3);
printMatrix(7);