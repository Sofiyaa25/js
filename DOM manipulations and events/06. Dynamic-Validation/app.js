function validate() {
    let emailField = document.getElementById('email');
    emailField.addEventListener('change', checkEmail);
    let email = document.getElementById('email').value;

   

    function checkEmail(e){
    let element = e.currentTarget;
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if(!pattern.test(email)){
    element.classList.add('error');
    }else{
     element.classList.remove('error');   
    }
}
}