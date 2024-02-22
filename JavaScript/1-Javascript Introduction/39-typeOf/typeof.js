let ans = document.getElementById("demo");
let person = {
    fName: "isha",
    lName: "patel",
    age: 21
}

function printNum() {
    for (let i = 0; i < 5; i++) {
        ans.innerHTML += i + " ";
    }
    ans.innerHTML += "<br>";
}
const numbers = [1, 2, 3, 4, 5];

// here are 5 different data types that can contain values
ans.innerHTML += "&#10170; here are 5 different data types that can contain values <br>"
ans.innerHTML += "typeof 'isha' &#10170; " + typeof 'isha' + "<br>"
ans.innerHTML += "typeof 19 &#10170; " + typeof 19 + "<br>"
ans.innerHTML += "typeof true  &#10170; " + typeof true + "<br>"
ans.innerHTML += "typeof false &#10170; " + typeof false + "<br>"
ans.innerHTML += "person &#10170; " + person + "<br>"
ans.innerHTML += "typeof person &#10170; " + typeof person + "<br>"
ans.innerHTML += "typeof printNum &#10170; " + typeof printNum + "<br><br>"


// There are 6 types of objects
ans.innerHTML += "&#10170; There are 6 types of Objects <br>"
ans.innerHTML += "typeof person  &#10170; " + typeof person + "<br>"
ans.innerHTML += "typeof new Date()  &#10170; " + typeof new Date() + "<br>"
ans.innerHTML += "typeof numbers &#10170; " + typeof numbers + "<br>"
ans.innerHTML += "typeof 'isha' &#10170; " + typeof 'isha' + "<br>"
ans.innerHTML += "typeof true  &#10170; " + typeof true + "<br>"
ans.innerHTML += "typeof false &#10170; " + typeof false + "<br><br>"

// 2 data types that cannot contain values.
ans.innerHTML += "&#10170; 2 data types that cannot contain values. <br>"
ans.innerHTML += "typeof null  &#10170; " + typeof null + "<br>"
ans.innerHTML += "typeof undefined  &#10170; " + typeof undefined + "<br><br>"

// A primitive data value is a single simple data value with no additional properties and methods.
// The typeof operator can return one of these primitive types
ans.innerHTML += "typeof 'isha' &#10170; " + typeof 'isha' + "<br>"
ans.innerHTML += "typeof 19 &#10170; " + typeof 19 + "<br>"
ans.innerHTML += "typeof true  &#10170; " + typeof true + "<br>"
ans.innerHTML += "typeof false &#10170; " + typeof false + "<br>"
ans.innerHTML += "typeof x &#10170; " + typeof x + "<br><br>"


// The typeof operator can return one of two complex types:-
// function
// object
ans.innerHTML += "typeof person &#10170; " + typeof person + "<br>"
ans.innerHTML += "typeof null  &#10170; " + typeof null + "<br>"
ans.innerHTML += "typeof numbers &#10170; " + typeof numbers + "<br>"
ans.innerHTML += "typeof printNum &#10170; " + typeof printNum + "<br><br>"

// constructor Property
ans.innerHTML += " person.constructor &#10170; " + person.constructor + "<br>"
ans.innerHTML += " new Date() constructor &#10170; " + new Date().constructor + "<br>"
ans.innerHTML += " numbers.constructor &#10170; " + numbers.constructor + "<br>"
ans.innerHTML += " 'isha'.constructor &#10170; " + 'isha'.constructor + "<br>"
ans.innerHTML += " true.constructor &#10170; " + true.constructor + "<br>"
ans.innerHTML += " false.constructor &#10170; " + false.constructor + "<br><br>"

// 
const fruits = ["Banana", "Orange", "Apple"];
ans.innerHTML += isArray(fruits) + "<br>";

function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}

ans.innerHTML += "(fruits.constructor === Array) &#10170; " + (fruits.constructor === Array) + "<br><br>";

let car;
ans.innerHTML += " car is &#10170; " + car + "<br>";
car = undefined;
ans.innerHTML += " typeof car is &#10170; " + typeof car + "<br><br>"

ans.innerHTML += "typeof person  &#10170; " + typeof person + "<br>"
person = null;
ans.innerHTML += "typeof person  &#10170; " + typeof person + "<br><br>"

person = {
    fName: "isha",
    lName: "patel",
    age: 21
}
ans.innerHTML += "typeof person  &#10170; " + typeof person + "<br>"
person = undefined;
ans.innerHTML += "typeof person  &#10170; " + typeof person + "<br><br>"

// The instanceof Operator
// The instanceof operator returns true if an object is an instance of the specified object
ans.innerHTML += " fruits instanceof Array &#10170;" + (fruits instanceof Array) + "<br>";
ans.innerHTML += " fruits instanceof Object &#10170;" + (fruits instanceof Object) + "<br>";
ans.innerHTML += " fruits instanceof String &#10170;" + (fruits instanceof String) + "<br>";
ans.innerHTML += " fruits instanceof Number &#10170;" + (fruits instanceof Number) + "<br><br>";


//void Operator
// The void operator evaluates an expression and returns undefined. This operator is often used to obtain the undefined primitive value, using "void(0)" (useful when evaluating an expression without using the return value).
