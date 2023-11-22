/*Create a function, which creates a register for heroes, with their names, level, and items (if they have such).

The input comes as an array of strings. Each element holds data for a hero, in the following format:

"{heroName} / {heroLevel} / {item1}, {item2}, {item3}..."

You must store the data about every hero. The name is a string, a level is a number and the items are all strings.

The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:

Hero: {heroName}

level => {heroLevel}

Items => {item1}, {item2}, {item3} */

function solve(input =[]){
   let heroes=[];

   for (let line of input) {
    let data=line.split(` / `);
    let hero={};
    hero.name=data[0];
    hero.level=Number(data[1]);
    if(data.length>2){
        hero.items=data[2];
    }
    heroes.push(hero);
   }

   let ascending = heroes.sort((a, b) => a.level - b.level);
  


   heroes.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    if(hero.hasOwnProperty('items')){
        console.log(`items => ${hero.items}`);
    }
    })
    

}

solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])