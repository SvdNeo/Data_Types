let now = new Date() 
console.log(now)
let Jan02_1970 = new Date(-24 * 3600 * 1000);
console.log(Jan02_1970)
let Jan01_1970 = new Date(24 * 3600 * 1000);
console.log(Jan01_1970)
let Jan03_1970 = new Date(0);
console.log(Jan03_1970)
let date = new Date();
console.log(date.getUTCHours())
console.log(date.getTime())
let date1 = new Date(2016, 2, 28);
//date1.setDate(date.getDate() + 2);
date1.setSeconds(date1.getSeconds() + 70);
console.log( date1 );

// let start = new Date();
// for(let i=0;i<100000;i++){
//     let doS = i*i*i;
// }
// let end = new Date()
// console.log(`it took ${end-start} ms`)
let start = Date.now();
for(let i=0;i<100000;i++){
    let doS = i*i*i;
}
let end = Date.now()
console.log(`it took ${end-start} ms`)

//task1

const date2 = new Date(2012,1,20,3,12,0,0)


//task2 Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
function getWeekDay(date3){
    let days = ['MO', 'TU','WE' , 'TH', 'FR', 'SA', 'SU']
    return days[date3.getDay()]
}
let date3 = new Date(2012,1,20,3,12,0,0)
console.log(getWeekDay(date3))