// const storeName = 'Zara'
// let storeDescription = {
//     budget: 10000,
//     employees: ['Pavel', 'Bogdan', 'Kotlin'],
//     products: {tv: 1000, ps: 2000},
//     open: true
// }
/////////////////////////////////////////////
// const numberOfFilms = +prompt('how many films? ', '')

// const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
// };
// const a = prompt('what last film do you wath? ', ''),
//    a1 = prompt('you rate for it... ', ''),
//    b = prompt('what last film do you wath? ', ''),
//    b1 = prompt('you rate for it... ', '')
   
// personalMovieDB.movies[a] = a1;
// personalMovieDB.movies[b] = b1;

// console.log(personalMovieDB)
/////////////////////////////////////////////

// for (let i=0; i<7; i++){
//     let result = ''
//     for (let j =0; j<i; j++){
//         result += '*'
//     } 
//     console.log(result)
// }
/////////////////////////////////////////////
// for (let i=20; i>10; i--){
    
//     if (i==13){
//         break
//     }
//     console.log(i)
// }
/////////////////////////////////////////////
// for (let i=2; i<=10; i++){
    
//     if (i%2==0){
//         console.log(i)
//     }
// }
/////////////////////////////////////////////
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
/////////////////////////////////////////////
// let i=2
// while (i<16){
//     i++
//     if (i % 2 === 0){
//         continue;
//     } else {
//         console.log(i);
//     } 
    
// }
/////////////////////////////////////////////
// let arr = []
// for (let i = 5; i <= 10; i++) {
//     arr[i-5] = i
   
// }
// console.log(arr)
// return arr;
/////////////////////////////////////////////
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++){
//     result[i] = arr[i]
// }
// console.log(result)
/////////////////////////////////////////////
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++){
//     if (typeof(data[i]) == 'string'){
//         data[i] += ' - done' 
//     }else{
//         data[i] *= 2  
//     }
// }
// console.log(data)
// /////////////////////////////////////////////
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++){
// switch (typeof(data[i])) {      
//     case 'string':                         
//         data[i] += ' - done';          
//         break;
//     case 'number':                        
//         data[i] *= 2;
//         break;
//     } 
// }
// console.log(data)
// /////////////////////////////////////////////
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];
//     let j = 0
//     for (let i = data.length-1; i >= 0; i--){

//         result[j] = data[i]
//         j++
//     }
    
// console.log(data)
// console.log(result)
// /////////////////////////////////////////////
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }
// console.log(data)
// console.log(result);
// /////////////////////////////////////////////
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines+6; i+=2){
//     for (let j = 0; j <= i; j++){
//         result+='*'
//     }
// result+='\n'
// }
// console.log(result)
// /////////////////////////////////////////////
function getMathResult(a, b) {
    if ((typeof(b) === 'number') && (b > 0)){
        let s = a
        let str = a
    for (let i=0; i<b-1; i++){
        s+=a
        str = str + '---'
        str = str + s   
    }
    console.log(str)
    }else{
        console.log(a)
    }
}
getMathResult(10, 5)
// /////////////////////////////////////////////
const logg = 'Hello world'
console.log(logg.substring(7, 1))









