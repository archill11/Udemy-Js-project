"use strict";
// console.log(11*112)
// console.log('петя')
// console.log('petr')
/////////////////////////////////////////////
//  const result = confirm('Are You Here?')
//  console.log(result)
//  alert(result)
///////////////////////////////////////////////
//  const answers = []
//  answers[0] = prompt('wats your name ', '')
//  answers[1] = prompt('wats your surname ', '')
//  answers[2] = prompt('how old are you ', '')

//  document.write(answers + 'truten')
 ////////////////////////////////////////////////////
//  const numberOfFilms = +prompt('how many films? ', '')

//  const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
//  };
//  const a = prompt('what last film do you wath? ', ''),
//     a1 = prompt('you rate for it... ', ''),
//     b = prompt('what last film do you wath? ', ''),
//     b1 = prompt('you rate for it... ', '')
    
//  personalMovieDB.movies[a] = a1;
//  personalMovieDB.movies[b] = b1;

//  console.log(personalMovieDB)

//  console.log(!(-3))
 ////////////////////////////////////////////////////
let numberOfFilms;

function start(){
     numberOfFilms = +prompt('how many films? ', '')
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('how many films does you watch? ', '')
    }
}
start();

function detectPersonalLeval(){
    if(numberOfFilms<10){
        alert('too few films')
    }else if ((numberOfFilms>=10) && (numberOfFilms<=30)){
        alert('you cool filmveuwer')
    }else if (numberOfFilms>30){
        alert('you cinematographer!')
    }
}
detectPersonalLeval();

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

 function showMyDB(privat){
    if (!privat) console.log(personalMovieDB)
 }
showMyDB();

function rememberMyFilms(){
    for (let i = 0; i<2; i++){
    while (1){
        const a = prompt('what last film do you wath? ', '')
        if ((a === null) || (a.length<1) || (a.length>50)){
            continue 
        }else{
            const a1 = prompt('you rate for it... ', '')
            personalMovieDB.movies[a] = a1;
            break
                }
            }
    }
}
rememberMyFilms();

function writeYourGenres(){
    for (let i = 1; i<=3; i++){
        const a = prompt(`Your favorit genre? № ${i}`, '')
        personalMovieDB.genres[i-1] = a;
    }
}
writeYourGenres();



 console.log(personalMovieDB)



































