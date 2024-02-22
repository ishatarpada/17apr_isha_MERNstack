var a = 10;
var b = 20.5; //number
var name = "isha"; // string
var c = 30;

var x, y;
let carName = "volvo";
let add = "5" + 2 + 3;
let _firstName = "Isha ";
let $lastName = " Patel";
let fullName = _firstName + $lastName;

var ans = parseInt(a) + parseInt(b) - parseInt(c);
var result = parseInt(x) * parseInt(y);
x = parseInt(c) * 5;

var demo = document.getElementById("inp");
demo.innerHTML = "a: " + a + "<br>";
demo.innerHTML += "b: " + b + "<br>";
demo.innerHTML += "c: " + c + "<br>";
demo.innerHTML += "name: " + name + "<br>";
demo.innerHTML += "x: " + x + "<br>";
demo.innerHTML += "y: " + y + "<br>";
demo.innerHTML += "ans: " + ans + "<br>";
demo.innerHTML += "result: " + result + "<br>";
demo.innerHTML += "carName : " + carName + " <br> ";
demo.innerHTML += "add : " + add + " <br> ";
demo.innerHTML += "firstName : " + _firstName + " <br> ";
demo.innerHTML += "lastName : " + $lastName + " <br> ";
demo.innerHTML += "fullName : " + fullName + " <br> ";

// Create an Array:
const fruits = [" Mango ", " Pineapple ", " Orange "];

// Change an element:
fruits[0] = " Strawberry ";

// Add an element:
fruits.push(" litchi ");

// Display the Array:
document.getElementById("demo").innerHTML = fruits;

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("demo_1").innerHTML = "Car owner is " + car.owner; 

// try {
//     const cars = ["Saab", "Volvo", "BMW"];
//     cars = ["Toyota", "Volvo", "Audi"];
// }
// catch (err) {
//     document.getElementById("demo").innerHTML = err;
// }

