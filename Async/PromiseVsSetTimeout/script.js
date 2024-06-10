//  Promise handling is always asynchronous, as all promise actions pass through the internal “promise jobs” queue, also called “microtask queue” (V8 term)

//  Promise -> goes to microtask Queue
// Settimeout -> goes to macrotask Queue

// MICROTASK >>> MACROTASK // as name suggests

// const promise = new Promise((res, rej) => {
//   console.log("eager promise");
//   res(100);
// });

// EXAMPLE: 2

/*
console.log("a");

promise.then((data) => {
  console.log("c", data);
});

console.log("b");
*/
/*
  a
  b
  c
*/

//  EXAMPLE 3:

/*
console.log("a");

// macro task queeu
setTimeout(() => {
  console.log("d");
}, 0);

// Microtask queue
promise.then((data) => {
  console.log("c", data);
});

console.log("b");
*/
/*
  eager promise
  a
  b
  c 100
  d
*/

/*
const promise = new Promise((res, rej) => {
  // 1  cal server
  setTimeout(() => {
    res(100);
  }, 5000);
});

//  EXAMPLE 4:

console.log("a");

setTimeout(() => {
  console.log("d");
}, 10);

promise.then((data) => {
  console.log("c", data);
});
console.log("b");
*/

/*
  a
  b
  d
  c 100
*/

console.log("start");

let startTime = Date.now();
let duration = 5000; // duration in milliseconds (2 seconds)

function loop() {
  while (Date.now() - startTime < duration) {
    // Do nothing, just loop
  }
}

loop();

console.log("end");
