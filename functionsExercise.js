function fozzieBear() {
    console.log("Wocka Wocka!");
}
fozzieBear()

function beaker(speak) {
    console.log(speak)
    console.log(speak)
    console.log(speak)
    console.log(speak)
}
beaker("Meep!")

function muppetShow(a,b) {
    if (a == "Muppet" && b == "Show")
        console.log("It's time to play the music, it's time to light the lights.");
}
muppetShow("Muppet", "Show")
muppetShow("Not Muppet", "Not Show")

function kermit(){
    return ("Kermit the frog")
}
console.log(kermit());

function muppetShowSeasons(seasons){
    if (seasons == 5){
        return true;
    }
    else{
        return false
    }
}
console.log(muppetShowSeasons(1))
console.log(muppetShowSeasons(5))

const manOrMuppet = function(){
    console.log("Am i a man or am i a muppet?");
}
manOrMuppet()

const rainbowConnection = () => "Someday we'll find it; the rainbow connection, the lovers, the dreamers, and me";
console.log(rainbowConnection())

// 8 & 9; Variables created outside a function can be used in a function, but variables made in a function CANNOT be used outside of it.

const newMuppetMovies = ["The Muppets", "Muppets Most Wanted"]

const upperMovies = newMuppetMovies.map(movie => movie.toUpperCase())
console.log(upperMovies);