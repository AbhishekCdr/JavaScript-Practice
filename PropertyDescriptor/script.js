/*
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
*/

let user = {
  name: "abhishek",
  class: 12,
};

Object.defineProperty(user, "name", {
  writable: false,
  configurable: false,
  enumerable: false,
});

let descriptor = Object.getOwnPropertyDescriptor(user, "name");
let descriptors = Object.getOwnPropertyDescriptors(user, "name", "class");

console.log(descriptor);
console.log(descriptors);

user.name = "tilu";
delete user.name;

console.log(user);

//making object using descriptor
let descriptorMath = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptorMath);

//clone and copy falgs of a peropert

let clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(descriptorMath)
);

console.dir(clone);
