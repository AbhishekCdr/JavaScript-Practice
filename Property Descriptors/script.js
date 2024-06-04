/*
AGENDA: We want to protect object adn our property form getting changed
*/

const obj = {
  name: "priyanka",
  standard: 12,
  rollNumber: 15,
};

const nameDescriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(nameDescriptor);

/*
configurable : true -> property can be deleted
enumerable : true -> get property inside for loop
value : "priyanka" -> value of that key
writable : true -> we can change the value
*/

// for (let key in obj) {
//   console.log(key, "enumerable");
// }

//-----------CHANGING PROPERTIES-------------

// Object.defineProperty(obj, "name", {
//   writable: false,
// });

// obj.name = "abhishek";
// console.log(obj);

// Object.defineProperty(obj, "name", {
//   configurable: false,
// });

// delete obj.name;
// delete obj.standard;

// console.log(obj);

Object.defineProperty(obj, "name", {
  configurable: false,
  writable: false,
});

obj.name = "abhishek";
delete obj.name;

console.log(obj);

//--------- MORE THINGS TO KNOW -----------

//1. Object.freeze() -> Prevents the modification of existing property attributes and values, and prevents the addition of new properties
Object.freeze(obj);
console.log(Object.isFrozen(obj));
