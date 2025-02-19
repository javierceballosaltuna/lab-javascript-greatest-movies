// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const { indexOf } = require("./data");
const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  let directors = movies.map(eachmovie => {

    return [eachmovie.director]
  });

  return directors

}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  let numberofdramas = movies.filter(eachmovie => {



    if (eachmovie.director === 'Steven Spielberg' && eachmovie.genre.includes('drama')) { return true }



  })

  return numberofdramas.length





}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  let scoreaverage = movies.reduce((acc, eachscore) => {

    return (acc + eachscore.score)

  }, 0)

  let resultaverage = (scoreaverage / movies.length).toFixed(2)

  return resultaverage

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  let dramamovies = movies.filter(eachmovie => {



    if (eachmovie.genre.includes('drama')) { return dramamovies.length }

  })


  let scoredrama = dramamovies.reduce((acc, eachscore) => {

    return (acc + eachscore.score)

  }, 0)

  let average

  return dramamovies
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}



  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically() { }

  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes() { }

  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg() { }



  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = {
      getAllDirectors,
      howManyMovies,
      scoresAverage,
      dramaMoviesScore,
      orderByYear,
      orderAlphabetically,
      turnHoursToMinutes,
      bestYearAvg,
    };
  }
