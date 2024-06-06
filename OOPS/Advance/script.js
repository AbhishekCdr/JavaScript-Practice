//Parent

class Student {
  name;
  standard;

  constructor(name, standard) {
    this.name = name;
    this.standard = standard;
    this.country = "India";
  }

  markAttendance() {
    console.log(`Hey there ${this.name} is Present :: in Class`);
  }

  grades() {
    console.log(`grades of ${this.name} are nice`);
  }
}

//child class

class SportsCaptain extends Student {
  favTool;

  constructor(name, standard, tool) {
    super(name, standard);
    this.favTool = tool;
  }

  markAttendance() {
    console.log(`Hey there ${this.name} is present ::: On ground`);
  }

  routine() {
    console.log(`Routine is regrous things -> train -> exercise`);
  }
}

const ankit = new Student("ankit", 10);
const amit = new Student("amit", 20);

console.log(ankit.markAttendance === amit.markAttendance);
console.log(ankit);
console.log(amit);

const virat = new SportsCaptain("Virat", 20, "bat");

// console.log(virat.markAttendance === ankit.markAttendance);

console.log(virat.markAttendance());
console.log(ankit.markAttendance());

//------------------------ INHERITANCE BEFORE 2015 ES6 -----------------------

//=> FLAWED CONTRUCTOR FUNCTION
/*
function StudentFunction(name, standard) {
  this.name = name;
  this.standard = standard;
  this.country = "Indian";

  //adding mehotd will be inside object and not prototype
  this.markAttendance = function () {
    console.log(`Hey there ${this.name} is present ::: On ground`);
  };

  this.grades = function () {
    console.log(`grades of ${this.name} are nice`);
  };
}

const amitFunction = new StudentFunction("amitfunction", 12);

console.log(amitFunction, ankit);
*/

//=> GOOD CONSTRUCTOR FUNCTION

function StudentFunction(name, standard) {
  this.name = name;
  this.standard = standard;
  this.country = "Indian";
}

StudentFunction.prototype.markAttendance = function () {
  console.log(`Hey there ${this.name} is present ::: On ground`);
};
StudentFunction.prototype.grades = function () {
  console.log(`grades of ${this.name} are nice`);
};

/*
const amitFunction = new StudentFunction("amit", 12);
const aniketFunction = new StudentFunction("aniket", 13);

console.log(
  amitFunction.markAttendance === aniketFunction.markAttendance,
  "functional constructor "
);

console.log(amitFunction.markAttendance());
*/

//CHILD

function SportsCaptainFunction(name, standard, tool) {
  //Context -> this {}
  //super(name, standard);
  //   StudentFunction.call(this, name, standard);
  StudentFunction.apply(this, [name, standard]);

  this.favTool = tool;
}

SportsCaptainFunction.prototype.markAttendance = function () {
  console.log(`Hey there ${this.name} is present ::: On ground`);
};
SportsCaptainFunction.prototype.grades = function () {
  console.log(`grades of ${this.name} are nice`);
};

const viratFunc = new SportsCaptainFunction("virat", 12, "bat");
console.log(viratFunc);
console.log(ankit);

viratFunc.grades();
