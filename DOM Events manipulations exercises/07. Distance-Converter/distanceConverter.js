function attachEventsListeners() {
    let [inputField, convertButton, outputField] = document.getElementsByTagName('input');
    let [inputOption, outputOption] = document.getElementsByTagName('select');

   
    convertButton.addEventListener('click', convert);


    let convertionRates = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    }

    console.log(convertionRates.km);

    function convert(){
      let toConvert = Number(inputField.value);
      let inputMetricValue = inputOption.value;
      let outputMetricValue =  outputOption.value;

      let result = toConvert * convertionRates[inputMetricValue] / convertionRates[outputMetricValue];
      outputField.value=result;
    }


}