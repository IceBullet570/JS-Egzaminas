/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */
class Movie {
    constructor(title, director, budget) {
        this.title = title
        this.director = director
        this.budget = budget 
    }
    wasExpensive() {
        if(Movie.budget > 100e6) {
        return "Brangus"
        } else {
            return "Pigus"
        }
    }
}
let myMovie = new Movie("Top Gun", "Joseph Kosinski", 17e7 )
console.log(myMovie)
console.log(myMovie.wasExpensive())