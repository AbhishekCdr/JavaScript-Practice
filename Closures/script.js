//Closure -> Combination of Function + Lexical Environament (outer scope chaining)
/*
A closure is a function which remembers its outer variable and can access them. In javascript every function is a closure. when a function is defined it captures its lexical environment, which includes any varibale that were in scope at the time of function creation.

=>The [[Environment]] property is an internal property of a function object that holds a reference to the lexical environment in which the function was created.

=>Lexical enviromnment have two parts: -> Environment record & reference
*/

/*
let a = 99;

function abc(c) {
  console.log(a + b + c, "sum");
}

let b = 100;

abc(1);

console.dir(abc);
*/

/*
let a = 12;

function foo() {
  let b = 9;

  function bar() {
    let c = 12;
    console.log(a + b + c + d);
  }
  console.dir(bar);
  let d = 100;

  return bar;
}

const result = foo();

result();
console.dir(foo);
*/
/*
EXAMPLE 3: 

  counter() // 1
  counter() // 2 
  counter() // 3


  TRY to implement counter function ..


*/

function counter() {
  let num = 0;

  function count() {
    num++;

    return num;
  }

  return count;
}

let count = counter();

console.dir(count);
console.dir(counter);
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
