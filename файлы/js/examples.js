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
// function getMathResult(a, b) {
//     if ((typeof(b) === 'number') && (b > 0)){
//         let s = a
//         let str = a
//     for (let i=0; i<b-1; i++){
//         s+=a
//         str = str + '---'
//         str = str + s   
//     }
//     console.log(str)
//     }else{
//         console.log(a)
//     }
// }
// getMathResult(10, 5)
// /////////////////////////////////////////////
// function calculateVolumeAndArea(a) {
//     if ((Number.isInteger(a)) && (a > 0)) {
//     console.log(`Объем куба: ${a*a*a}, площадь всей поверхности: ${a*a*6}`)
//     }else{
//     console.log(`При вычислени произошла ошибка `)
//     }
// }
// calculateVolumeAndArea(5)
// /////////////////////////////////////////////
// function getCoupeNumber(a) {
//     if ((a === 0) || (a > 35)) {
//         console.log(`Таких мест в вагоне не существует`);
//     }else if ((Number.isInteger(a)) && (a > 0)){
//         console.log(Math.ceil(a/4));
//     }else{
//         console.log(`Ошибка. Проверьте правильность введенного номера места`) ;
//     }
// }
// getCoupeNumber(7)
// /////////////////////////////////////////////
// function getTimeFromMinutes(a) {
//     let h = parseInt((a/60));
//     let m = a % 60;
//     if ((Number.isInteger(a)) && (a>=0)){
//     if ((h === 0) || ((h >4) && (h < 11))){
//         console.log(`Это ${h} часов и ${m} минут`);
//     }else if (h === 1){
//         console.log(`Это ${h} час и ${m} минут`);
//     }else{
//         console.log(`Это ${h} часа и ${m} минут`);
//     }
// }else{
//     return (`Ошибка, проверьте данные`)
// }
// }
// getTimeFromMinutes(250)
// /////////////////////////////////////////////
// function findMaxNumber(a,b,c,d) {
//     if ((typeof(a) === 'number') && (typeof(b) === 'number') && (typeof(c) === 'number') && (typeof(d) === 'number')){
//     console.log(Math.max(a,b,c,d));
//     }else{
//         console.log(0);
//     }
// }
// findMaxNumber(1,5,11,'6')
/////////////////////////////////////////////////
// function fib(a) {
//     let fibstr = '0 1'
//     if (a===0) console.log('')
//     else if (typeof(a) != 'number' || (!Number.isInteger(a)) ) console.log('')
//     else if (a===1) console.log('0')
//     else {
//         let f = [0,1]
//         for (let i = 2; i<a; i++ ){
//             f[i] = f[i-1] + f[i-2]
//             fibstr+=(` ${f[i-1] + f[i-2]}`)
            
//         }console.log(fibstr)
//     }
// }
// fib(6)
/////////////////////////////////////////////////
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         console.log(str)
//     }
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// function showExperience(plan) {
//     console.log(plan['skills']['exp'])
// }
// showExperience(personalPlanPeter)

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan['skills']
//     for (let key in plan['skills']['programmingLangs']){
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     console.log(str)
// }
// showProgrammingLangs(personalPlanPeter)
//////////////////////////////////////////////////////////////////////
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
// function showFamily(arr) {
//     if (arr.length === 0){
//         console.log(`Семья пуста`)
//     }else{console.log(`Семья состоит из: ${arr.join(' ')}`)
// }
// }
// showFamily(family)

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// function standardizeStrings(arr) {
//     for (let v of arr){
//         console.log(v.toLowerCase())
//     }
// }
// standardizeStrings(favoriteCities)
//////////////////////////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr2 = []
for (let i = arr.length; i >0; i--){
    let p = arr.pop()
    arr2.push(p)
}

console.log(arr2)


