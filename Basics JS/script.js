/*
DataTypes
1. Primiive Data Type
2. Non Primitive Data Type

PRIMITIVE DATA TYE(data created inside stack)
1.number
2. boolean
3. bigint
4. null
5. undefined
6. string

-> call by value

NON PRIMITIVE DATA TYPES(data created inside heap)
1. Object
2. Functions -> special type of object
3. Arrays -> special type of object
*/

//using typeof we can see type of any value

const marks = 12;
console.log(typeof marks);

const name = "abhishek";
console.log(typeof name);

function foo() {}
console.log(typeof foo);

class Name {}
console.log(typeof foo);

const nullElement = null;
console.log(typeof nullElement);

//----------COERCION (CONVERSION)-----------------
/*
in promgramming if you see + then it has two menaing
1. Math addition
2. String Concatination (comb of two string)
*/

//Rule 1 ----- String(String + means concatination)-----
/*
String + anything = STRING
*/

console.log("abc" + "dd"); //-> "abcdd"
console.log(1 + "hello"); // "1hello"
console.log(1 + "1"); // "11"
console.log("abh" + {}); // "abh[Object, object]"
console.log("asd" + null); // "asdnull"
console.log("asd" + true); // "asdtrue"

//Rule 2 ------ String to Integer ------
/*
Those String which can be converted to Number will be converted to number otherwise it will be NaN
*/

const int = "12";
const srt = "123asd";

//1st Method
console.log(typeof int, +int);
console.log(typeof +srt, +srt);
console.log(typeof NaN); //-> Number

//2nd Method
console.log(Number(int));
console.log(Number(srt));

//3rd Method
console.log(parseInt(srt)); //->123

//Rule 3 --------- String with (-, *, /) ------
const mult = "3" * 3;
const divide = "9" / 3;
const minus = "3" - "1";
console.log(mult);
console.log(divide);
console.log(minus);

//-------------------- OBJECT ---------------------
//-> key should be continous (no space in between)
let person = {
  name: "abhishek",
  "currently stydying": 12,
  "currently doing": true,
  age: 22,
};
console.log(person);

//CRUD Operations
//-------get
console.log(person.name);
console.log(person["currently stydying"]);

//--------edit
person.name = "someone";
person["currently doing"] = false;
console.log(person);

//--------delete

delete person.age;
delete person["currently doing"];
console.log(person);

//--------------- ARRAY ---------
//special type of object
//ordered collections
//it stores value in key and pair manner
//key is fixed value
//declaration
const arr1 = new Array();
const arr = [2, 5, 89, 87, 8];
console.log(arr);

//arrys.length
console.log(arr.length); //->5

//weird part
// arr.length = 0;
// console.log(arr);

//CRUD Operations
//get
console.log(arr[1], arr[4]);
console.log(arr[37379]); //-> undefined

//edit
arr[1] = 23;
console.log(arr);

//delete
//we can use pop -> delete elemnt from last (faster)
//we can use shift ->delete elemnt from start (slower)

//GET THE LAST ELEMENT USING at
console.log(arr.at(-1));
//-1 means from last

//--------- ARRAYS METHODS ------------
//1. push -> adding element in the last
// return length of the new array

const a = arr.push(9, 6, 30, 40);
console.log(a);

//2. pop -> deleting elemmnt from last
//return tha popped value

const b = arr.pop();
console.log(b);
//
console.log(arr);

//3. shift -> removing element from the start
//return the removed elemnt

console.log(arr.shift());

//4. unshift -> adds element to the first
const newLength = arr.unshift(12);
console.log(newLength);
console.log(arr);

//-------------- LOOPS -------------------

let arr2 = [24, 89, 14, 42, 56, 95, 45, 13];

// console.log(arr2.length);

//1. for loop

// for (let i = 0; i < arr2.length; i++) {
//   const item = arr[i];
//   console.log(item);
// }

//2. while loop

// let i = 0;
// while (i < arr2.length) {
//   console.log(arr[i], "while loop");
//   i++;
// }

//3. for in -> keys
//for in loop is used for objects and its properties (object keys)

const obj = {
  name: "abhishek",
  standard: 13,
  address: "patna",
};

for (const key in obj) {
  console.log(key);
}

//4. for of -> values
//iterable objects -> arrays are by default iterable objects
//if your object has Symbol.iterator then your object is iterable object

// for (const item of arr2) {
//   console.log(item);
// }

//-> objects are not iterable so of loop will not work here

// for (const item of obj) {
//   console.log(item);
// }
//-> THIS WILL NOT WORK
