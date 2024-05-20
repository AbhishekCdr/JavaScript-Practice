/*
//--------------------FUNCTION DECLARATIO ---------------
function sum(a, b) {
  let c = a + b;

  //by deafult if function is not returning anything it returns undefined
}
*/

//--------------------FUNCTION EXPRESSION--------------------

// const sum = function (a, b) {
//   return a + b;
// };

//-------------------REST OPERATOR -----------------
// ->    ... -> rest operator

function addmissionToSchool(name, standard, ...info) {
  const student = {
    name: name,
    standrad: standard,
    address: info[0],
  };
}

// function ucFirst(str) {
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr;
// }

// alert(ucFirst("abhishek Kumar"));

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());

// function f() {
//   let value = Math.random();

//   return function () {
//     alert(value.toFixed(3));
//   };
// }

// // 3 functions in array, every one of them links to Lexical Environment
// // from the corresponding f() run
// let arr = [f(), f(), f()];
// let out = f();

// console.log(out());
// let value = "Surprise!";

// function f() {
//   let value = "the closest value";

//   function g() {
//     debugger; // in console: type alert(value); Surprise!
//   }

//   return g;
// }

// let g = f();
// g();

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let total = 0;

for (let key in salaries) {
  total += salaries[key];
}

// console.log(total);

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

// console.log(typeof menu.width);

// console.log(menu);

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
// console.log(menu);

// true ? console.log("true") : console.log("false");

// var obj = {
//   name: "kapil",
//   class: "12",
//   loggin: function () {
//     console.log(this.name);
//   },
// };

// console.log(this.obj);
// obj.loggin();
// const obj2 = {
//   id: 322,
// };

const obj1 = {
  sec: "B",
  myFunction: function () {
    return {
      age: 25,
      printAge: () => {
        console.log(this);
      },
    };
  },
  obj: {
    name: "kapil",
    class: "12",
  },
};
/*
let str = "background-color";

console.log(str.split("-").slice(1));

function camel(str) {
  return str
    .split("-")
    .map((value, index) =>
      index === 0 ? value : value[0].toUpperCase() + value.slice(1)
    )
    .join("");
}

console.log(camel("-webkit-transition"));
*/
// console.log(obj1.obj.myFunction());
// obj1.obj.myFunction().printAge();
// const obj = {
//   id: 322,
//   name: "abhishek",
// };

// obj.myFunction = function () {
//   //   console.log(this);
//   return {
//     age: 25,
//     printAge: () => {
//       console.log(this);
//     },
//   };
// };

// console.log(obj.myFunction());
// obj.myFunction();
// obj.myFunction().printAge();

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

// console.log(camelize("background-color"));

function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

// let arr = [5, 6, 8, 1];

// console.log(filterRange(arr, 1, 5));

// console.log(arr.sort((a, b) => b - a));
