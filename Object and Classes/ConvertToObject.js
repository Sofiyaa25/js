function convertFromJSONToJS(JSONStr){
    let person = JSON.parse(JSONStr);

    for (const [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }
}

convertFromJSONToJS('{"name": "George", "age": 40, "town": "Sofia"}');