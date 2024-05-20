// -----HOISTING-------
/*
vairable declarationa nd function declaration are hoised
hoisting means to bring varibale and function declaration to top
*/

const result = sum(1, 2);
console.log(result);

function sum(a, b) {
  return a + b;
}
//function hoisted at top
