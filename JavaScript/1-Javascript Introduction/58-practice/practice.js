let ans = document.getElementById("demo");

// Declare at the beginning
let price, discount, fullPrice;

// Use later
// firstName = "John";
// lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;
ans.innerHTML += fullPrice;

//Initialize Variables 
// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let age = 25 ;
const myArray = [];
const myObject = {};

// declare object with const
const car = {type:"Fiat", model:"500", color:"white"};
 

// declare array with const
const cars = ["Saab", "Volvo", "BMW"];

// JavaScript Literal Constructors
let x1 = "";
let x2 = 0;
let x3 = false;
const x4 = {};
const x5 = [];
const x6 = /()/;
const x7 = function(){};

ans.innerHTML +=
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";

// use === comparison
ans.innerHTML += ' (0 == "") &#10170; '  + (0 == "") + "<br>";
ans.innerHTML += ' (1 == "1") &#10170; '  + (1 == "1") + "<br>";
ans.innerHTML += ' (1 == true) &#10170; '  + (1 == true) + "<br>";
ans.innerHTML += ' (0 === "") &#10170; '  + (0 === "") + "<br>";
ans.innerHTML += ' (1 === "1") &#10170; '  + (1 === "1") + "<br>";
ans.innerHTML += ' (1 === true) &#10170; '  + (1 === true) + "<br>";

// Use Parameter Defaults
function myFunction(x, y) {
    if (y === undefined) {
      y = 0;
    }  
    return x * y;
  }
  ans.innerHTML += myFunction(4) + "<br>";
  ans.innerHTML += myFunction(4 , 5) + "<br>";

//   End Your Switches with Defaults
let day ;
switch(new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Unknown";
}

ans.innerHTML += "Today is " + day;