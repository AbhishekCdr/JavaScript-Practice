//A browser tab consist of 3 elements
/*
    1. DOM: Documne tobject Model (responsible for the view / html)
    2. JS: responsible for logic (math & function)
    3. BOM: Browser object models -> it is collection of functions provided by the browser like localStorage

*/

//DOM TREE;
/*
    Question-> WHY DOM TREE IS CREATED??
    so that we can store relationship.

    TYPE OF NODES :::
    1. element node (h1, li, ul, body, html, meta, head)
    2. text node (real text and blank space)
    3. comment node (comments inside the html)
*/

//Crud operation on DOM

//==================== SELECTORS =====================

//1. getElementById (very very fast)

const headingElement = document.getElementById("heading");
console.dir(headingElement);

//2. getElementByTagName

const headingElementList = document.getElementsByTagName("h1");
console.dir(headingElementList);

//3. getElementByClassName

const cricketClassElement = document.getElementsByClassName("cricket");
console.dir(cricketClassElement);

// CSS Selectors (very very slow);

//4. querySelector -> it takes a cass selctor and gives back simgle top most element;

const divContainer = document.querySelector("body > div");
console.log(divContainer);

//5. querySelectorAll ->  it takes a css selector and gives back List of Elements

const divContainerAll = document.querySelectorAll("body > div");
console.log(divContainerAll);
