/*You’re tasked to create and print objects from a text table.
You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point! */


function solve(input){
    class Town{
        constructor(town, latitude, longitude){
            this.townName=town;
            this.latitude=latitude;
            this.longitude=longitude;
        }
    }

    const townArr=[];
    townExtractorFromInput();
    printTownInfo();

    function townExtractorFromInput() {
        for (let line of input) {
            let currentLine = line.split(` | `);
            let townName = currentLine[0];
            let latitude = Number(currentLine[1]);
            let longitude = Number(currentLine[2]);
            let town = new Town(townName, latitude.toFixed(2), longitude.toFixed(2));
            townArr.push(town);
        }
    }

   

    function printTownInfo() {
        for (let currentTown of townArr) {
            console.log(`{ town: '${currentTown.townName}', latitude: '${currentTown.latitude}', longitude: '${currentTown.longitude}' }`);
        }
    }
}

solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'] )