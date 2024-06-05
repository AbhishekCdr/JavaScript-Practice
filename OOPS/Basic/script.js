/*
  OOPS -> Object Oriented Programming ...

  In OOPS language Prime focus is Object (Creation, manupulation, Desctruction)

  IN Scripting Language (JS) the Prime focus is Functions. 

  JS is a Functional Language, 

  JS has LEss support of OOPS.


  // Main thing is OOPS and FUNCTIONAL are PARADIMES (WAY OF LIFE)

  // MAIn aim of any Program (software ) is to create Objects and handle them 
  // Objects can be created Through OOPS and FUNCTIONAL Programming. 


  // OOPS: 

  1. Object 
  2. Class 
  3. Inheritance

  4. Polymorphism 
  5. Abstraction 
  6. Encapsulation 
*/

// --------------- How to Create Object in Javscript -------------
//way1 :
const abhishekPerson = {
  name: "abhsihek",
  age: 22,
  canWalk() {
    console.log(`Hello My name is ${this.name} I can Walk`);
  },
};

//way2 :

/*
  JAVA, .net dont provide way 1, the only way to make object in that language is through WAay 2 (classes).

  Classes in JS are JUST SYNTATICAL SUGAR 
*/

//create schema of object
/*
class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const arunPerson = new Person("arun", 20);

console.log(abhishekPerson);
console.log(arunPerson);
*/

class Person {
  name;
  oldAge;

  constructor(name, oldAge, country) {
    this.name = name;
    this.oldAge = oldAge;
    this.country = country;
  }

  canWalk() {
    console.log(`Hello My name is ${this.name} I can Walk`);
  }
}

const abhishek = new Person("abhishek", 30, "India");
console.log(abhishek.canWalk());

console.log(abhishek); //canWalk() -> Own method/property
console.log(abhishekPerson); //canWalk() -> not won method/property

//conparing abhishek and abhishek person(using class mehtod);
//omly difference is the method canWalk() otherwise everything is same;

//************** BEFORE CLASS KEYWORD: ****************

function Personfunction(name, age) {
  this.name = name;
  this.oldAge = age;

  this.canWalk = function () {
    console.log(`Hello I can walk and my name is ${this.name}`);
  };
}

const arunPerson = new Personfunction("arun, 50");

console.log(arunPerson);
console.log(arunPerson.canWalk());

// QUESTION: Having the limited Knowledge Please tell WHo is Better ? COnstructor Function Vs Classes Vs Normal Objects ?
// in Constructor Function if you create 10000 object then we will have 10000 copies of Function also

// but in Class if you create 10000 object then we will have 1 copy of Function.

// Thats IT

// CLASSES WON !!!!

//********* INHERITANCE / METHOD OVERRIDING */
//All the property and methods of paret will be part of Child (Derived Class)
//any peroperty of child can never be part of parent

//Example 1;

/*
class Parent {
  property = 12;

  jaydaat = 100;

  constructor() {}
}

class Child extends Parent {
  name;
  toys;

  constructor(name, toys) {
    super();
    this.name = name;
    this.toys = toys;
  }
}

const child1 = new Child("bacchha", 40);
//this child inherits all properties of parent
console.log(child1);
*/

//Example2;
class Student {
  name;
  standard;

  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
  }

  markAttendance() {
    console.log(`hey there ${this.name} is Present`);
  }

  grades() {
    console.log(`grades are nice`);
  }
}

class SportsCaptain extends Student {
  favTool;

  constructor(name, standard, tool) {
    super(name, standard);
    this.favTool = tool;
  }
}

const sportsCaptain = new SportsCaptain("Virat", 8, "Bat");

console.log(sportsCaptain);

//classical example
class Papa {
  surname = "Kumar";
  property = 20;
}

class Beta extends Papa {
  name;
  income;

  constructor(name, income) {
    super();
    this.name = name;
    this.income = income;
  }
}

const abhBeta = new Beta("abhishek", 50000);

console.log(abhBeta);

//Private Properties;

/*
class Star {
  name;
  weight;
  year;

  constructor(name, weight, year) {
    this.name = name;
    this.weight = weight;
    this.year = year;
  }
}

const sun = new Star("sun", 1000000, 460);

console.log(sun, "Sun Star");

sun.weight = 20;
//we can change the weigth of sun
console.log(sun, "afetr weight change");

// Way1::: USING PROPERTY DESCRIPTOR;

Object.defineProperty(sun, "weight", {
  writable: false,
});

sun.weight = 8080808;
console.log(sun);

*/
/*If some scientific discovery happens and the sun Weight changes acc to calculation the through way 1 (property) descriptor we cant change the weight.
 */

// Way2 :::: USING PRIVATE PROPERTY -> BEST WAY;

/*
class Star {
  name;
  #weight;
  #years;

  constructor(name, weight, year) {
    this.name = name;
    this.#weight = weight;
    this.#years = year;
  }
}

const andromaSun = new Star("androma", 88898989, 67);

// andromaSun.#weight = 4666; //this will not work;

andromaSun.weight = 5666; //this will create new property names weight

console.log(andromaSun);

*/
//***************** GETTER AND SETTERS ****************;

class Star {
  name;
  #years;
  #weight;

  constructor(name, year, weight) {
    this.name = name;
    this.#years = year;
    this.#weight = weight;
  }

  set setWeight(val) {
    if (val < 0) {
      return;
    }

    this.#weight = val;
  }

  get getWeight() {
    return this.#weight;
  }

  get getYear() {
    return this.#years;
  }
}

const sun = new Star("Sun", 30, 567899);
console.log(sun, "Locked Sun");

sun.setWeight = 88888;

console.log(sun);
console.log(sun.getWeight);
console.log(sun.getYear);

//******************** INSTANCE vs STATIC PROPERTIES METHODS *****************

class Circle {
  radius;

  constructor(r) {
    this.radius = r;
  }

  //Normal Method
  draw() {
    console.log("Draw Circle of ", this.radius);
    Circle.parse();
  }

  //Static Method
  static parse() {
    console.log(`Hello this is static parse`);
  }
}

const c1 = new Circle(100);

console.log(c1);
c1.draw();

console.log(c1 instanceof Circle, "instance of circle");
console.log(c1 instanceof Object, "instance of object");
// ***************************************************

class User {
  name = "anonymous";

  sayHi() {
    console.log(`Hello, ${this.name}`);
  }
}

const user = new User();

user.sayHi();
