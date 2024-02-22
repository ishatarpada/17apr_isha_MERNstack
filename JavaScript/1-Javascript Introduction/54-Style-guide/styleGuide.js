let ans = document.getElementById("demo");

// variable declare in camelCase.
let firstName = " isha ";
let lastName = " Patel ";

// spaces Around operators.
let x ;
let y ;
let z = x + y ;

// always use 2 spaces for indentation of block of code.
function printNumber(){
  return 15;  
}

// statement rules
const cars = ["Volvo", "Saab", "Fiat"]; //Always end a simple statement with a semicolon.

const person = { //Put the opening bracket at the end of the first line.
  firstName: "John", //Use one space before the opening bracket.
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}; //Put the closing bracket on a new line, without leading spaces.
// Do not end a complex statement with a semicolon.

//Functions:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

//Loops:
  for (let i = 0; i < 5; i++) {
    x += i;
  }

//Conditionals:
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Object Rules

// place the opening braces on the same line as the object name
// Use colon plus one space between each property and its value.
// Use quotes around string values, not around numeric values.
// Do not add a comma after the last property-value pair.
// Place the closing bracket on a new line, without leading spaces.
// Always end an object definition with a semicolon.
const info = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Short objects can be written compressed, on one line, using spaces only between properties, like this:

const person_1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// Line Length < 80
ans.innerHTML += " Hello ishaa"

// naming conversion
// 1. variable and function names written as camelCase.
const fullName = "isha Patel";
const num = 12;
function printInfo(){
    return fullName;
}

// 2. global variable written in UPPERCASE .
const GLOBALVAR = "string";

// 3. constant written in UPPERCASE. like PI

// hyphens used in html and css.
// HTML5 attributes can start with data- (data-quantity, data-price).
// CSS uses hyphens in property-names (font-size). 
// Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.
