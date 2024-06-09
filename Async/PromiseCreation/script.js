//******************** PROMISE CREATION *********************/

// const promise = new Promise((resolve, reject) => {
//   resolve("output");
//   reject("server timed out");
// });

// promise
//   .then((data) => console.log(data, "level 1"))
//   .catch((error) => console.log("Error Level 2"));

// console.log(promise); //return promise fulfilled state

/*
    The promise object returned by the new Promise constructor has these internal properties:

    => state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
    => result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.
*/
//  practical example;

// NOT SO GOOD WAY
/*
const api = new Promise((resolve, reject) => {
  const url = "https://api.kanye.rest/";
  const response = fetch(url);

  if (response) {
    resolve(response);
  } else {
    reject("data not fetched");
  }
});

api
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("data not found", error));
*/

//  GOOD WAY

const head = document.getElementById("promise");
const quote = document.createElement("h2");

function myFetch(url) {
  //promise creation
  const promise = new Promise((res, rej) => {
    const response = fetch(url);

    if (response) {
      res(response);
    } else {
      rej("Server timed out");
    }
  });

  return promise;
}

const url = "https://api.kanye.rest/";

//consume promise
const id = setInterval(() => {
  myFetch(url)
    .then((data) => data.json())
    .then((data) => (quote.innerText = data.quote))
    .catch((error) => console.log("Unable to fetch", error));
}, 5000);

head.after(quote);

setTimeout(() => {
  clearInterval(id);
}, 20000);
