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

const divContainer = document.querySelector("#container");
console.log(divContainer);

//5. querySelectorAll ->  it takes a css selector and gives back List of Elements

const divContainerAll = document.querySelectorAll("body > div");
console.log(divContainerAll);

//================ UPDATE ===================

const divContainerElement = document.getElementById("container");

console.dir(divContainerElement);

//------------- TEST --------------------------

// 1. innerHtml -> Dangerous do not use directly;

divContainerElement.innerHTML = `<h1><u><i>heello I am a pragraph for Cricket</i></u><h1>`;

// 2. innerText -> formatt is preserved;

divContainerElement.innerText = `heello I am a pragraph for Cricke 
2nd line 

3 rd line    4th secntenx

`;

// 3. textContent -> formatt is not preserved;

divContainerElement.textContent = `heello I am a pragraph for Cricke 
2nd line 

3 rd line    4th secntenx

`;

//---------------- HANDLE STYLES ----------------------

//4. style;

divContainerElement.style.backgroundColor = "cyan";

// 5. ClassName or ClassList -> Element Class

divContainerElement.classList.add("red");
divContainerElement.className = "cricket green";

//================= DELETING ========================

let containerElement = document.getElementById("container");

// containerElement = null; -> only changing reference
// containerElement.remove();

//============== CREATE AND ELEMENT =======================

/*
 1. CREATE TH ELEMENT
 2. EDIT THE ELEMENT
 3. ATTACH THE ELEMENT
*/
// 1. CREATING AN ELEMENT

let div = document.createElement("div");
div.className = "newdiv";

div.innerText = "this is created div tag";

divContainerElement.append(div);
document.body.append(div);

//Insertion Types;
/*

    node.append(...nodes or strings) – append nodes or strings at the end of node,
    node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
    node.before(...nodes or strings) –- insert nodes or strings before node,
    node.after(...nodes or strings) –- insert nodes or strings after node,
    node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.
*/

// --------------------------- Performance. -------------------

// -----  PROBLEM STATEMNT:

const listElemet = document.getElementById("list");

const studentList = [
  "Leanne Graham",
  "Ervin Howell",
  "Clementine Bauch",
  "Patricia Lebsack",
  "Chelsey Dietrich",
  "Mrs. Dennis Schulist",
  "Kurtis Weissnat",
  "Nicholas Runolfsdottir V",
  "Glenna Reichert",
  "Clementina DuBuque",
];

/*

for(let i=0; i<studentList.length;i++){
  const studentName = studentList[i];

  const studentElement = document.createElement("li")
  studentElement.innerText = studentName;

  listElemet.append(studentElement)

}

// FLAW is that we are chaning the DOM TREE 10 TIMES 
// There will be Reflow and Repaint For 10 Times. (VV EXPENSIVE).

*/

//Solution -> fragments

const fakeFragmentNode = new DocumentFragment();

for (let i = 0; i < studentList.length; i++) {
  const studentName = studentList[i];

  const studentElement = document.createElement("li");
  studentElement.innerText = studentName;

  fakeFragmentNode.append(studentElement);
}

listElemet.append(fakeFragmentNode);

//here we are doing expensive thing only one time
