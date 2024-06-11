//---------------------- LOCAL STORAGE --------------------

// 1. USAGE

localStorage.setItem("age", 27);
localStorage.setItem("adult", true);

const age = localStorage.getItem("age");
//will store data in string form

// console.log(typeof age);

// localStorage.removeItem("age");
// localStorage.clear();

const obj = {
  name: "abhishek",
  age: 27,
  male: true,
};

// CONCLUSION -> localStorage before setting things, it converts the value in string.
localStorage.setItem("user", JSON.stringify(obj));

// console.log(JSON.parse(localStorage.getItem("user")));

// ----------------- is localstorage sync or async ----------------

/*
console.log("a");
const person = localStorage.getItem("age");
console.log(person);
console.log("b");
*/

//------------------ LOCATION ------------------------
/*
  it knows about the website and its path, query params, protocol and way to reload the page
*/

console.log(window.location);

/**
 * WHEN YOU VISIT GOOGLE.com and search for "chennaisuperkings".
 * 
 * 
 * {
    "ancestorOrigins": {},
    "href": "https://www.google.com/search?q=chennaisuperkings",
    "origin": "https://www.google.com",
    "protocol": "https:",
    "host": "www.google.com",
    "hostname": "www.google.com",
    "port": "",
    "pathname": "/search",
    "search": "?q=chennaisuperkings",
    "hash": ""
}
 */
