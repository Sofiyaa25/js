function calculate(a, b, operation){
    let add=(a,b) => a+b;
    let substract=(a,b) => a-b;
    let multiply = (a,b)=>a*b;
    let divide=(a,b)=>a/b;
    
    
    switch(operation){
        case "add":
            console.log(add(a,b));
            break;

            case"substract":
            console.log(substract(a,b));
            break;

            case"divide":
            console.log(divide(a,b));
            break;

            case"multiply":
            console.log(multiply(a,b));
            break;

    }
}


calculate(50, 13, "substract");