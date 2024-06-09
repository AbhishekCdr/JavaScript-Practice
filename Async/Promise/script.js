/*
 *Promise is a placeholder for a future value
 *
 *State of Promise:
 *1. Pending: when youare waiting for the future vlaue
 *2. FulFuilled: when the future value has arrived
 *3. Rejected: when error happes
 *
 */

//promise creation

/*
console.log("a");

const promise = fetch("beaife");
console.log(promise);

console.log("bat");
*/

//consume

/*
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
//fetch means call the server and move forward
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("b");
console.log("c");
*/

//-------------- handler -------------
//  .then -> consumes (data)
//  .catch -> consumes (error)
//  .finally -> will run after the then and catch, can be called as cleanup after promise is fulfilled or rejected
//  finally doesnot have any argument ... A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.

/*
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    return response.json();
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
  })
  .catch((error) => {})
  .finally(() => {});

console.log("b");
*/

//  -------------- PROMISE CHAINING  -------------
// ALGO
// 1. Whatever Data or Error we are returing from X level, we will get that data/error in (X+1 (n))th level.
// 2. at(x+1 (n))th level I have to ask a question? can you handle the data or the error, according to that proceed forward.

// 3.  Data/ERROR is handled by THEN block
// 4.  ERROR is handled by CATCH block

//Example 2:
/*
console.log("a");

const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    return response.json();
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
  });

console.log("b");
*/

// EXAMPLE 4:
//**************************** DIRECTLY ERROR STATE PAR JATA HAI AND AGR USKE AGHE HAI TOH CONTINUE KRTA HAI
/*
const url = `https://api.kanye.rest zzzzsssss/`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    const data = response.json();
    return data;
  })
  .then((data) => {
    // level 2
    console.log("level 2", data);

    return 100;
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);
    return undefined;
  })
  .catch((error) => {
    // level 4
    console.log("level 4 error", error);
  });
*/

// EXAMPLE 5:

/*
const url = `https://api.kanye.rest/`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    const data = response.json();

    return data;
  })
  .catch((error) => {
    // level 2
    console.log("level 2 error", error);
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);

    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
    return undefined;
  })
  .catch()
  .catch()
  .catch()
  .catch()
  .then()
  .catch();

*/

//------------ ERROR HANDLING --------------

// EXAMPLE 6:
//********************************* ERROR DEKR AGHE BADH JATA HAI

/*
const url = `https://api.kanye.rest asdasdsadsadasda/`;
fetch(url) // level 0
  .then((response) => {
    // level 1
    console.log("level 1");
    const data = response.json();

    return data;
  })
  .catch((error) => {
    // level 2
    console.log("level 2 error", error);
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);

    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });
*/

/*
Answer
  level 2 error TypeError: Failed to fetch
  level 3 undefined
  level 4 100
*/

// EXAMPLE 7:

/*
const url = `https://api.kanye.rest/`;

fetch(url) // level 0
  .then((response) => {
    // level 1

    // MOCKING THE ERROR
    throw new Error("this is not a nice error");

    console.log("level 1");
    const data = response.json();

    return data;
  })
  .catch((error) => {
    // level 2
    console.log("level 2 error", error);
  })
  .then((data) => {
    // level 3
    console.log("level 3", data);

    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });

*/

// EXAMPLE 9:
/*
const url = `https://api.kanye.rest zzzzzzz/`;

fetch(url) // level 0
  .then((response) => {
    // level 1

    console.log("level 1");
    const data = response.json();

    return data;
  })
  .catch((error) => {
    // level 2
    // MOCKING THE ERROR
    console.log("level 2 error", error);

    throw new Error("this is not a nice error");

  })
  .then((data) => {
    // level 3
    console.log("level 3", data);

    return 100;
  })
  .then((data) => {
    // level 4
    console.log("level 4", data);
  })
  .catch((error) => {
    // level 5
    console.log("lvel 5", error);
  });

  */
