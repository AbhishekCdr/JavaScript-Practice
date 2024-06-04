/*
[[Prototype]] -> Objects have hidden property that is either null or reference another object
That hidden property or object is called PROTOTYPE

**********
when we read propery from object and its missing, javascript automaticall takes it from the prototype. and this is called PROTOTYPAL INHERITANCE

**********
The property [[Prototype]] is internal and hidden, but there are many ways to set it
*/

let animal = {
  eats: true,
  walk() {
    alert("animal walking");
  },
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
//this is old way

// console.dir(rabbit);

//****************** FUNCTION PROTOTYPE ********************

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit1 = new Rabbit("white rabbit");

console.log(rabbit1);

/*
Every function has the prototype property even if we dont suppy it
The default "prototype" is an object with the only property constructor that points back to the function itself.
*/

let name = "abhishek";

function getName() {
  console.log("this is name");
}

console.dir(getName);

//************************ NATIVE PROTOTYPE *********************** */
/*
The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor functions use it.
*/

let obj = {};

console.log(Object.prototype === obj.__proto__);
console.log(obj);

let arr = [1, 2, 3];

console.dir(arr);

console.log(Array.prototype);

//Question 1;

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("hello");
}

// f.defer(5000);

//****************** PROTOTYPE METHODS ********************/

let rabbit3 = Object.create(animal); //same as __proto__: animal

// console.log(rabbit3.eats);

Object.setPrototypeOf(rabbit3, {});

console.dir(rabbit3);
