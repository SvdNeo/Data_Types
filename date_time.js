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

//task 3 European weekday
function getLocalDay(date4){
    let day = date4.getDay();
    if(day == 0){
        day == 7
    }
    return day
}
let date4 = new Date(2012, 0, 3);  // 3 Jan 2012
console.log( getLocalDay(date4) );    

//task4 Which day of month was many days ago?
function getDateAgo(date,days){
    date.setDate(date.getDate()-days)
    return date.getDate()
}
let date5 = new Date(2015, 0, 2);

console.log( getDateAgo(date5, 2) );

// task5 Last day of month?
function getLastDateOfMonth(year,month){
    let dat = new Date(year,month+1,0)
    return dat.getDate()
}
console.log(getLastDateOfMonth(2011, 13) );

//task6 How many seconds have passed today?
function getSecondsToday(){
    let now = new Date();
    return now.getHours()*3600+now.getMinutes()*60+now.getSeconds()
}
console.log(getSecondsToday())

//task7 How many seconds till tomorrow?
function getSecondsUntilTomorrow(){
    let now = new Date();
    const today = now.getHours()*3600+now.getMinutes()*60+now.getSeconds();
    const totalTime = 24*60*60;
    return totalTime-today
}
console.log(getSecondsUntilTomorrow())

//task 8 
function formatDate(date) {
    // Get the current date and time
    const now = new Date();
    
    // Calculate the time difference in seconds
    const secondsAgo = Math.floor((now - date) / 1000);
  
    // Case 1: If less than 1 second ago
    if (secondsAgo < 1) {
      return "right now";
    } 
    // Case 2: If less than 1 minute ago
    else if (secondsAgo < 60) {
      return `${secondsAgo} sec. ago`;
    } 
    // Case 3: If less than an hour ago
    else if (secondsAgo < 3600) {
      return `${Math.floor(secondsAgo / 60)} min. ago`;
    } 
    // Case 4: If an hour or more ago
    else {
      // Format the date using toLocaleDateString with options
      const options = {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      };
  
      return date.toLocaleDateString("en", options);
    }
  }
  
  // Example usage:
  const currentDate = new Date();
const pastDate = new Date(2023, 11, 31, 10, 0); // December 31, 2023, 10:00 AM

const timeDifferenceInSeconds = Math.floor((currentDate - pastDate) / 1000);
console.log(formatDate(pastDate)); // Using the formatDate function from the previous examples

  