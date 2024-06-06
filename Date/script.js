//Creation
let now = new Date();
//shows current date and time
console.log(now);

let Jan01_1970 = new Date(0);
// an integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
console.log(Jan01_1970);

//METHODS TO ACESS YEAR, MONTH :::

console.log(now.getFullYear(), "Current Year");
console.log(now.getDay(), "current Day from 0-6 0->Sun 6->Sat");

//Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
console.log(now.getTime());

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 10; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

console.log(`The loop took ${end - start} ms`);

//creation of date;

let d1 = new Date(2012, 1, 20, 3, 12);
//                yr  mon day time min
console.log(d1);
//Mon Feb 20 2012 03:12:00 GMT+0530 (India Standard Time)

//********************** GET WEEK DAY ********************** */

function getWeekDay(date) {
  let days = ["SUN", "MO", "TU", "WE", "TH", "FR", "SA"];

  return days[date.getDay()];
}

let date = new Date();

console.log(getWeekDay(date));
