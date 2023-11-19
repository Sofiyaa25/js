function solve(firstName, lastName, haircolor){
    let person={};
    person.name=firstName;
    person.lastName=lastName;
    person.hairColor=haircolor;

    console.log(JSON.stringify(person));
}

solve('George', 'Jones',
'Brown')