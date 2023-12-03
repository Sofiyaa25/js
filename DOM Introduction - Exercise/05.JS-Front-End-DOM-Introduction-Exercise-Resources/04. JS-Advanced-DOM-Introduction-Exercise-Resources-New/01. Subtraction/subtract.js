function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let resultArea = document.getElementById('result');
    resultArea.textContent=Number(firstNumber-secondNumber);
}