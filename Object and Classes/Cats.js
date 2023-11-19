function solve(input){
    class Cat{
        constructor(name, age){
            this.name=name;
            this.age=age;
        }

        meow(){
            return `says Meow`
        }
    }

    let cats=[];
    for (let line of input) {
        let tokens = line.split(` `);
        let name=tokens[0];
        let age= tokens[1];
        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        console.log(`${cat.name}, age ${cat.age}`, cat.meow());
    }
}

solve(['Mellow 2', 'Tom 5']);