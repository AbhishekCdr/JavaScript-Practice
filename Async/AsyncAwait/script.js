//we have to fetch data and display on th browser;

const url = `https://api.kanye.rest/`;
//display product of list on bowser;

//-------------- async await --------------------------

//1 . if we want to use await then always have async function
//2. every async function will return a promise.
//3. asysc await is syntatical sugar -> behind th escenes it converts to promise only

function display(quotes) {
  const element = document.getElementById("heading");

  const h2 = document.createElement("h2");
  h2.innerText = quotes;

  element.appendChild(h2);
}

// The word “async” before a function means one simple thing: a function always returns a promise

async function fetchQuotes(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const quote = data.quote;
    return quote;
  } catch (error) {
    if (error.message == "") {
      console.log("error handling", error);
    }
  }
}

async function mainFunction() {
  const quotes = await fetchQuotes(url);
  //because fetchWiotes is returning a promise
  display(quotes);
}

console.log(fetchQuotes(url));

mainFunction();
