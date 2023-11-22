/*Write a function that:

· Records a car number for every car that enters the parking lot

· Removes a car number when the car goes out

· Input will be an array of strings in format [direction, carNumber]

Print the output with all car numbers which are in the parking lot sorted in ascending by number.

If the parking lot is empty, print: "Parking Lot is Empty" */

function picolo(input){
    

let parkingSlot=[];

    for (let line of input) {
        let [direction, number] = line.split(", ");
        if(direction===`IN` && !parkingSlot.includes(number)){
            parkingSlot.push(number);
        }else if(direction===`OUT` && parkingSlot.includes(number)){
            let index = parkingSlot.indexOf(number);
            parkingSlot.splice(index,1);
        }

    }

    if(parkingSlot.length>0){
        let sorted = parkingSlot.sort((a,b) => a.localeCompare(b));
        sorted.forEach(n => console.log(n))
    }else{
        console.log(`Parking slot is Empty`);
    }

    
}

picolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);