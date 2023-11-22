/*You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal 
number you have to find the length of the name (whitespace included)
At the end print all the list employees in the following format:
"Name: {employeeName} -- Personal Number: {personalNum}" */


function solve(input) {
  class Employee {
    constructor(name, personalNUmber) {
      this.name = name;
      this.personalNUmber = personalNUmber;
    }
  }

const employees=[];
findFullName();

for (let currentEmpl  of employees) {
    console.log(`Name: ${currentEmpl.name} -- Personal Number: ${currentEmpl.personalNUmber}`)
}  

    function findFullName() {
        for (let line of input) {
            let nameSplitter = line.split(" ");
            let fullName = nameSplitter.join(" ");

            let empl = new Employee(fullName, fullName.length);
            employees.push(empl);
        }
    }
}

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])
