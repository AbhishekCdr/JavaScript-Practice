/*
whenever we are calling a function we always have a context

in js Context is this Keyword
*/

//1. DEFAULT BINDING.

// function foo() {
//   console.log("inside function", this);
// }
// foo(); //this is a function call site ->YES!
//have i given extra information -> NO!

//2. IMPLICIT BINDING. -> JS is doing hardwork to determine the context

// const obj = {
//   name: "utkarsh",
//   class: 12,
//   rollNumber: 99,
//   func: function () {
//     // context -> this -> obj

//     console.log("hello");
//     console.log(this); // obj
//     console.log(this.name); // utkarsh
//     console.log(this.rollNumber); // 99
//   },
// };

// console.log(obj.name);
//obj.func(); //this is a call side -YES
//have i given extra information - YES

//example 3-------------------------
/*
let obj = {
  name: "akash",
  rollNumber: 12,
  func: function () {
    // contenxt -> this -> window
    console.log(this, "context"); // window
    console.log(`hello my name is ${this.name}`); // undefined
  },
};
const funcCopy = obj.func; // is this a call site ? NO.
*/

// funcCopy(); // is this a call site ? YES
//this will be window object

// -----------EXAMPLE-4--------------
/*
function func() {
  console.log("outside", this);
}

let obj2 = {
  name: "utkarsh",
  func: function () {
    // constext -> this -> obj2
    console.log(`hello .... ${this.name}`); // utkasrsh
  },
};

let obj1 = {
  name: "akash",
  rollNumber: 99,
  obj2: obj2,
};
*/

// obj2.func()

// obj1.obj2.func(); // is it legin call  ? YEs
// is this a call site? YES
// Have I given any extra infromation ? YEs -> OBJ2

// obj1.obj2.obj3.obj4.obj5.func(); //->  context would be obj5

// 3.EXPLICIT BINDING ----------------
/*
--------> user is doing the hardwork to give context to the function

----- 1. call
----- 2. apply
----- 3. bind

Call and apply are pretty interchangeable. Both execute the current function immediately. You
need to decide whether it’s easier to send in an array or a comma separated list of arguments.
You can remember by treating Call is for comma (separated list) and Apply is for Array.
Whereas Bind creates a new function that will have this set to the first parameter passed to
bind()
*/

//EXAMPLE 1 - call
//Call: The call() method invokes a function with a given this value and arguments provided one by one

/*
const obj1 = {
  name: "utkarsh",
  rollNumber: 99,
  func: function (a, b) {
    //context => this => obj1 -> Line 195
    //context => this => obj2 -> Line 199
    console.log("context", this); // obj2
    console.log(this.name, a, b); // akash 1,2
  },
};

const obj2 = {
  name: "akash",
  rollNumber: 1,
};

obj1.func(1, 2); // is this a call site ? yES
// have I given anyExtraInfo ? YES -> obj1

obj1.func.call(obj2, 22, 222);
*/

// EXAMPLE - apply
//Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
/*
const obj1 = {
  name: "utkarsh",
  rollNumber: 99,
  func: function (a, b) {
    console.log("context", this); // obj2
    console.log(this.name, a, b); // akash 1,2
  },
};

const obj2 = {
  name: "akash",
  rollNumber: 1,
};

// obj1.func(1, 2); // is this a call site ? yES
// have I given anyExtraInfo ? YES -> obj1
// utkarsh 1 2

obj1.func.call(obj2, 22, 222);
// akash 22 222
obj1.func.apply(obj2, [22, 222]);
// akash 22 222

*/
//----EXAMPLE -3 ------------
//BIND: returns a new function, allowing you to pass any number of arguments

const obj = {
  name: "utkarsh",
  func: function (a, b) {
    // context -> this -> obj
    console.log(this);
    console.log(`Hello ... ${this.name}`, a, b);
  },

  func2: function () {
    console.log("hello fromfunction 2");
  },
};

// obj.func();
// obj.func2();

// setTimeout(obj.func2, 5000);

const funcCopy = obj.func.bind(obj, 80, 90);

setTimeout(funcCopy, 5000);
// setTimeout(obj.func, 5000); //THIS ALWAYS FOLLOW DEFAULT BINDING

// googleService(func)
