function passwordValidator(password){
    let isValid = true;

    if(password.length<6 || password.length>10){
        console.log("Password must be between 6 and 10 characters");
        isValid=false;
    }
    if(!onlyLettersAndNumbers(password)){
        console.log('Password must consist only of letters and digits');
        isValid=false;
    }

    const arr = password.split('');
    let digitCount=0;
    for (let i = 0; i < arr.length; i++) {
        if(isDigit(arr[i])){
            digitCount++;
        }
    }
   
    if(digitCount<2){
        console.log('Password must have at least 2 digits');
        isValid=false;
    }

    if(isValid){
        console.log("Password is valid");
    }




    function isDigit(char){
        return char>='0' && char<='9';
    }
    function onlyLettersAndNumbers(password) {
        return /^[A-Za-z0-9]*$/.test(password);
      }

    
}



passwordValidator("logIn");
passwordValidator("loginkjshs564%%%")
passwordValidator("MyPass123")






