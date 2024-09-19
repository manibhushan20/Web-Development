function x(){
    for(let i=0;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log("Hello");
}
x();

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    console.log(movies);
  }
 logMovies();