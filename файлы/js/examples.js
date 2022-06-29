// const storeName = 'Zara'
// let storeDescription = {
//     budget: 10000,
//     employees: ['Pavel', 'Bogdan', 'Kotlin'],
//     products: {tv: 1000, ps: 2000},
//     open: true
// }
/////////////////////////////////////////////
const numberOfFilms = +prompt('how many films? ', '')

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
const a = prompt('what last film do you wath? ', ''),
   a1 = prompt('you rate for it... ', ''),
   b = prompt('what last film do you wath? ', ''),
   b1 = prompt('you rate for it... ', '')
   
personalMovieDB.movies[a] = a1;
personalMovieDB.movies[b] = b1;

console.log(personalMovieDB)