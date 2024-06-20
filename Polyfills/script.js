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

array.myForEach((value) => {
  console.log(value);
});
