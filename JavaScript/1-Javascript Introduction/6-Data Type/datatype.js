let ans = document.getElementById("demo");

//  numbers :-
let age = 18;
let weight = 50.25;
let largeNum = 125e10;
let smallNum = 125e-5;
ans.innerHTML = "age is :- " + age + "<br>";
ans.innerHTML += "weight is :- " + weight + "<br>";
ans.innerHTML += "largeNum is :- " + largeNum + "<br>";
ans.innerHTML += "smallNum is :- " + smallNum + "<br>" + "<br>";

// string :- collection of character set.
let fName = "mark";
let lName = "johnson";
ans.innerHTML += "first Name is :- " + fName + "<br>";
ans.innerHTML += " last Name is :- " + lName + "<br>" + "<br>";

// BigInt :- store integer values that are too big to be represented by a normal JavaScript Number.
let bigNum = BigInt(123456789987456321);
ans.innerHTML += "bigNum is :- " + bigNum + "<br>" + "<br>";

//booleans :- if condition is true than boolean value is true otherwise false.
let x = 5;
let y = 10;
let z = 5;
let bool;
bool = (5 == 10);
ans.innerHTML += "5 == 10 :- " + (x == y) + "<br>";
ans.innerHTML += "5 == 5 :- " + (x == z) + "<br>" + "<br>";

// Object: object have properties and their value.
const person = { firstName: "John", lastName: "Son" };
ans.innerHTML += "person :- " + person + "<br>" + "<br>";

// Array object: array is collection of same datatype values.
const cars = ["Saab", "Volvo", "BMW"];
ans.innerHTML += "car  :- " + cars + "<br>" + "<br>";

// Date object:
const date = new Date("2024-01-16");
ans.innerHTML += "date :- " + date + "<br>" + "<br>";

// undefined : value is not initialized
let name;

// The Concept of Data Types and dynamic types
let data = document.getElementById("demo-1");
let str = "isha";
let num_1 = 19;
let num_2 = 11;

data.innerHTML = str + " + " + num_1 + " + " + num_2 + " :- " + (str + num_1 + num_2) + "<br>";
data.innerHTML += num_1 + " + " + num_2 + " + " + str + " :- " + (num_1 + num_2 + str) + "<br>";
data.innerHTML += num_1 + " + " + str + " + " + num_2 + " :- " + (num_1 + str + num_2) + "<br>" + "<br>";

// type of 
let type_val = document.getElementById("demo-2");

type_val.innerHTML = age + " type is :- " + typeof (age) + "<br>";
type_val.innerHTML += weight + " type is :- " + typeof (weight) + "<br>";
type_val.innerHTML += largeNum + " type is :- " + typeof (largeNum) + "<br>";
type_val.innerHTML += smallNum + " type is :- " + typeof (smallNum) + "<br>";
type_val.innerHTML += fName + " type is :- " + typeof (fName) + "<br>";
type_val.innerHTML += lName + " type is :- " + typeof (lName) + "<br>";
type_val.innerHTML += bigNum + " type is :- " + typeof (bigNum) + "<br>";
type_val.innerHTML += bool + " type is :- " + typeof (bool) + "<br>";
type_val.innerHTML += person + " type is :- " + typeof (person) + "<br>";
type_val.innerHTML += cars + " type is :- " + typeof (cars) + "<br>";
type_val.innerHTML += "name type is :- " + typeof (name) + "<br>";
type_val.innerHTML += date + " type is :- " + typeof (date) + "<br>" + "<br>";