//------------- BASICS -------------

// setTimeout(() => {
//   console.log("this is a async function");
// }, 2000);

//this will run after 2 seconds
//1.
/*
console.log(1);

console.log(2);

setTimeout(() => {
  console.log("this is settimeout function");
}, 0);

//by defaut the waiting time of settime out is 1ms because the c++ that implements forces it to wait 1ms

console.log(3);
*/

//2.
// console.log("a");

// setTimeout(() => {
//   console.log("b");
// });

// console.log("c");

//ALGO FOR EVENT LOOP
/*

1. EXECUTOR AT SETTIMEOUT - as soon as executor sees the settimeout functuion it sends the callback function to the web api memory & then it starts the countdown for the delay

2. event loop is asking the question to the stack (after every 200ms) 
2.1 are you empty if yes then it ask wuestion form queue(macro or micro)

3. web api memory - as soon as the clock becomes 0 the callback function is popped out from memory and pushed to macro task queue

4. again the event loop ask the question form the macro and micro task queue and then put it into the call stack

*/
//--------------clearTimeout()-------------
//it takes the is of the settimeout function prevent it from executing
// const id = setTimeout(() => {
//   console.log("hello");
// }, 2000);

// clearTimeout(id);

//-------------setInterval()---------------
//it sets the interval to execute a particular task

// setInterval(() => {
//   console.log("after 2sec");
// }, 2000);

//------------clearInterval()--------------
//it clear the interval by taking the id of it

// const id = setInterval(() => {
//   console.log("adad");
// }, 2000);

// clearInterval(id);

//IMPORTANT QUESTIONS
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

//ANS: 5 5times
//reson being a function create a closure with its lexical environment
//value of var is not making a closure with each console.log()

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

//ANS: 0 1 2 3 4

// we can make it work like let i we make closure with each var
//BY using IIFE (Immediately Invoked Function Expression)

// for (var i = 0; i < 5; i++) {
//   ((i) =>
//     setTimeout(() => {
//       console.log(i);
//     }))(i);
// }

//ANS: 0 1 2 3 4
