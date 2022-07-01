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
let numberOfFilms;

// function start(){
//      numberOfFilms = +prompt('how many films? ', '')
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('how many films does you watch? ', '')
//     }
// }
// start();

// function detectPersonalLeval(){
//     if(numberOfFilms<10){
//         alert('too few films')
//     }else if ((numberOfFilms>=10) && (numberOfFilms<=30)){
//         alert('you cool filmveuwer')
//     }else if (numberOfFilms>30){
//         alert('you cinematographer!')
//     }
// }
// detectPersonalLeval();

 const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('how many films? ', '')
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('how many films does you watch? ', '')
        }
    },
    detectPersonalLeval: function(){
        if(personalMovieDB.count<10){
            alert('too few films')
        }else if ((personalMovieDB.count>=10) && (personalMovieDB.count<=30)){
            alert('you cool filmveuwer')
        }else if (personalMovieDB.count>30){
            alert('you cinematographer!')
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat) {personalMovieDB.privat = false}
        else {personalMovieDB.privat = true}
     },
     showMyDB: function(privat){
        if (!privat) console.log(personalMovieDB)
     },
     rememberMyFilms: function(){
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
     },
     writeYourGenres: function(){
        for (let i = 1; i<=3; i++){
            const a = prompt(`Your favorit genre? № ${i}`, '')
            if (a == '' || a == null ) {i--; continue}
            personalMovieDB.genres[i-1] = a;
        }
        personalMovieDB.genres.forEach((item, key)=> {
            console.log(`Favorite genre №${key+1} is ${item}`)
        })
     }
 };
personalMovieDB.start()
personalMovieDB.detectPersonalLeval()
personalMovieDB.toggleVisibleMyDB()
personalMovieDB.showMyDB(personalMovieDB.privat)
personalMovieDB.rememberMyFilms()
personalMovieDB.writeYourGenres()

//  function toggleVisibleMyDB(privat){
//     if (!privat) {personalMovieDB.privat = true}
//     else {personalMovieDB.privat = false}
//  }
//  toggleVisibleMyDB()

//  function showMyDB(privat){
//     if (!privat) console.log(personalMovieDB)
//  }
// showMyDB();

// function rememberMyFilms(){
//     for (let i = 0; i<2; i++){
//     while (1){
//         const a = prompt('what last film do you wath? ', '')
//         if ((a === null) || (a.length<1) || (a.length>50)){
//             continue 
//         }else{
//             const a1 = prompt('you rate for it... ', '')
//             personalMovieDB.movies[a] = a1;
//             break
//                 }
//             }
//     }
// }
// rememberMyFilms();

// function writeYourGenres(){
//     for (let i = 1; i<=3; i++){
//         const a = prompt(`Your favorit genre? № ${i}`, '')
//         if (a == '' || a == null ) {i--; continue}
//         personalMovieDB.genres[i-1] = a;
//     }
//     personalMovieDB.genres.forEach(function(item, key, arr) {
//         console.log(`Favorite genre №${key+1} is ${item}`)
//     })
// }
// writeYourGenres();












//  console.log(personalMovieDB)


 
 































