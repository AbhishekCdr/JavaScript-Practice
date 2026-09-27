/*
========================================================
HOW TO DESIGN A POLYFILL — ARRAY.REDUCE EXAMPLE
========================================================

Step 1: Understand how the original method is called

Syntax:

array.reduce(callback, initialValue);

Example:

const result = [1, 2, 3].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

--------------------------------------------------------

Step 2: Understand the inputs

reduce receives:

1. callback
2. initialValue — optional

The callback receives:

callback(
  accumulator,
  currentValue,
  currentIndex,
  originalArray
);

--------------------------------------------------------

Step 3: Understand the output

reduce returns one final accumulated value.

Example:

[1, 2, 3].reduce((acc, value) => acc + value, 0);

Flow:

acc = 0, value = 1 → 1
acc = 1, value = 2 → 3
acc = 3, value = 3 → 6

Final result: 6

--------------------------------------------------------

Step 4: Understand what `this` represents

When called like:

[1, 2, 3].myReduce(callback, 0);

Inside myReduce:

this === [1, 2, 3]

Therefore, we can access the original array using:

const array = this;

--------------------------------------------------------

Step 5: Validate the callback

The callback must be a function.

If it is not a function, throw a TypeError.

Example:

[1, 2, 3].reduce("invalid");

--------------------------------------------------------

Step 6: Handle the optional initial value

Case 1: Initial value is supplied

[1, 2, 3].reduce(callback, 0);

accumulator = 0
startIndex = 0

Case 2: Initial value is not supplied

[1, 2, 3].reduce(callback);

accumulator = first existing array element
startIndex = the next index

Use `arguments.length` instead of checking:

initialValue !== undefined

because this is valid:

array.reduce(callback, undefined);

Here, undefined was explicitly provided as the initial value.

--------------------------------------------------------

Step 7: Handle an empty array

This is valid because an initial value is provided:

[].reduce(callback, 0);
returns 0

This throws an error because there is no initial value
and no first array element:

[].reduce(callback);
TypeError

--------------------------------------------------------

Step 8: Iterate through the array

For every existing array element:

accumulator = callback(
  accumulator,
  currentValue,
  currentIndex,
  originalArray
);

The return value of the callback becomes the accumulator
for the next iteration.

--------------------------------------------------------

Step 9: Handle sparse arrays

A sparse array contains missing indexes:

const numbers = [1, , 3];

Native reduce skips missing indexes.

Use:

if (index in array)

--------------------------------------------------------

Step 10: Return the final accumulator

After processing all existing elements:

return accumulator;

========================================================
COMPLETE REDUCE IMPLEMENTATION
========================================================
https://www.youtube.com/watch?v=s1XVfm5mIuU&t=45s
*/


/*
========================================================
MENTAL CHECKLIST FOR ANY POLYFILL
========================================================

1. How is the original API called?
2. What does `this` represent?
3. What arguments does it receive?
4. Which arguments are optional?
5. What arguments does the callback receive?
6. What does the method return?
7. Does it mutate the original value?
8. Does it process every item or stop early?
9. What invalid inputs should throw errors?
10. How does it handle empty input?
11. How does it handle sparse arrays?
12. Does the custom result match native behavior?

Main approach:

Understand the contract
→ implement the basic behavior
→ handle optional arguments
→ handle errors and edge cases
→ compare with the native method
========================================================
*/

const people = [
  {name: 'Kyle', age: 26},
  {name: 'John', age: 31},
  {name: 'Sally', age: 42},
  {name: 'Jill', age: 42},
]
// group people on the basis of its age

const grouped = people.reduce((groupedPeople, person) => {
  const age = person.age;
  if(groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
}, {})

console.log(grouped);


// for (var i = 0; i < 4; i++) {
//   ((i) =>
//     setTimeout(() => {
//       console.log(i);
//     }))(i);
// }

//this keywaord refers to the object that the function id property of

const obj = {
  name: "abhishek",
  standard: 12,
  id: 5432,
};

function foo(name) {
  console.log(`my name is ${this.name} and ${this.standard} ${name}`);
}

const bindedFunction = foo.bind(obj, "s");

// bindedFunction();

// console.dir(obj);

const arr = [1, 2, [2, 3, [4, 5]], 6, 7, 8];

//flat
function flatten(arr, flattenedArr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      flattenedArr.push(arr[i]);
    } else {
      flatten(arr[i], flattenedArr);
    }
  }

  return flattenedArr;
}

// console.log(flatten(arr, []));

// console.log(arr.flat());

// ******************** POLYFILLS ********************
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// arr.map(function(item, index, array)

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

// arr.filter(function(item, index, array))

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const data = arr.myFilter((item, index, arr) => item > 5);

// console.log(data);

// array.reduce(function(acc, item, index, arr))

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const sum = array.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(sum);

// array.forEach(function(item, index, array))
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== "undefined") {
      cb(this[i], i, this);
    }
  }
};

// array.myForEach((value) => {
//   console.log(value);
// });

// map. filter and reduce

const nums = [1, 2, 3, 4, 5];

const roots = nums.map((num) => {
  return num * 2;
});
console.log(roots);

// Pollyfils of map()

Array.prototype.arrMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
};

// -------------------------------------------

Array.prototype.arrFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }

  return temp;
};

const graterTwo = nums.arrFilter((num) => {
  return num > 2;
});

console.log(graterTwo);

const reduceMethod = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

console.log(reduceMethod);
