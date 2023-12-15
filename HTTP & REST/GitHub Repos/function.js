function printTextArea(){
    let resultDiv = document.getElementById('res');
    let p = document.createElement('p');
    fetch('https://api.github.com/users/testnakov/repos')
    .then((res) => res.text())
    .then((data) => {
        p.textContent = data;
        resultDiv.appendChild(p);
    
    })
    .catch((err) => console.log(err));
}