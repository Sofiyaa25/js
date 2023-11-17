function loadingBar(percents){
    let arr = [".",".",".",".",".",".",".",".",".","."]
    let repetitions= percents /10;
    for (let i = 0; i < repetitions; i++) {
        arr[i] = "%";
    }

    let str = arr.join("");

    let printResult = ()=>{
        if(percents<100){
            console.log(`${percents}% [${str}]`);
            console.log(`Still loading...`);
        }else{
            console.log(`100% Complete!`);
            console.log(`[${str}]`);
        }
    }
    printResult();
}


loadingBar(100);