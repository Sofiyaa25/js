/*Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. You can receive several types of input:

· "addMovie {movie name}" – add the movie

· "{movie name} directedBy {director}" – check if the movie exists and then add the director

· "{movie name} onDate {date}" – check if the movie exists and then add the date

At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format */

function solve(arr){
let movies = [];

arr.forEach((element) => {
  if(element.includes(`addMovie`)){
    let movie = element.split('addMovie ')[1];
    movies.push({name:movie})

  }else if(element.includes(`directedBy`)){
    let row = element.split(' directedBy ');
    let movie = row[0];
    let director = row[2];
    let searching = movies.find((e)=> e.name==movie);

    if(searching){
        searching['director'] = director;
    }
  }else if(element.includes('onDate')){
    let row = element.split(' onDate ');
    let movie=row[0];
    let date=row[2];
    let searching = movies.find((e)=>e.name==movie)
    if(searching){
        searching['date']=date;
    }
  }
    
});

movies.forEach((movie) => {
    if(movie.name && movie.date && movie.director){
        console.log(JSON.stringify(movie))
    }
});

}

solve([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford',
    
    'Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ] )