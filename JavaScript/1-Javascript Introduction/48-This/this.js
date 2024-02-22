let ans = document.getElementById("demo");
let btn = document.getElementById("btn");

//  this keyword refers to the object
const person = {
    fName: "Isha",
    lName: "Patel",
    age: 24,
    fullName: function () {
        return this.fName + " " + this.lName;
    },
    my_function: function () {
        return this;
    }
}
ans.innerHTML = `<h2>&#10170; when we used this as method when this refers to the object</h2> `
ans.innerHTML += person.fullName();

// this refers to the global object.
let x = this;
ans.innerHTML += `<br><br><h2>&#10170; in global section this refers to the global object.</h2> `
ans.innerHTML += "x is &#10170; " + x;

// in strict mode this is global object.
"use strict";
let y = this;
ans.innerHTML += `<br><br><h2>&#10170; in strict mode this refers to the global object.</h2> `
ans.innerHTML += "y is &#10170; " + y;

// in function this refers to the window object
function myFunc() {
    return this;
}
ans.innerHTML += `<br><br><h2>&#10170; in function this refers to the window object.</h2> `
ans.innerHTML += "myFunc() is &#10170; " + myFunc();

// in function strict mode this keyword refers to the undefined. 
ans.innerHTML += `<br><br><h2>&#10170; in function strict mode this keyword refers to the undefined.</h2> `
"use strict";
ans.innerHTML += myFunction();
function myFunction() {
    return this;
}

// in object this refers to the person object
ans.innerHTML += `<br><br><h2>&#10170; in object this refers to the person object</h2> `
ans.innerHTML += " person.my_function() &#10170; " + person.my_function();

// Explicit Function Binding
// The call() and apply() methods are predefined JavaScript methods.
// They can both be used to call an object method with another object as argument.

const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Isha",
    lastName: "Patel",
}

ans.innerHTML += `<br><br> <h2>&#10170; The call() and apply() methods are predefined JavaScript methods.</h2> `;
ans.innerHTML += "person1.fullName.call(person2); &#10170;" + person1.fullName.call(person2);

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}
ans.innerHTML += `<br><br> <h2>&#10170; The member object borrows the full name method from person:</h2> `;
ans.innerHTML += "<br> person1.fullName.bind(member)()  &#10170;" + person1.fullName.bind(member)();
ans.innerHTML += "<br><br>"


// bind()
// bind() is used to create a new function that, when called, has its this keyword set to a specific value. Here's an example:
function greet() {
    ans.innerHTML += `Hello, ${this.name}!`
}
const person3 = { name: 'Alice' };
const boundGreet = greet.bind(person3);
boundGreet(); // Output: Hello, Alice!
ans.innerHTML += "<br><br>"

// apply()
// apply() is used to call a function with a given this value and an array of arguments. Here's an example:
function introduce(greeting = "Hello", punctuation = ".") {
    ans.innerHTML += `${greeting}, I'm ${this.name}${punctuation}`;
    ans.innerHTML += `Hello, I'm ${this.name}!..`;
}
const person4 = { name: 'Bob' };
introduce.apply(person4, ['Hi', '!']); // Output: Hi, I'm Bob!Hello, I'm Bob!...
ans.innerHTML += "<br>";
introduce.apply(person4); // Output: Hello, I'm Bob!...Hello, I'm Bob!...
ans.innerHTML += "<br><br>";


// call()
// call() is similar to apply(), but it accepts an argument list, rather than an array of arguments. Here's an example:
function describe(title, adjective) {
    ans.innerHTML += `${title}: ${adjective} ${this.name}`
}
const object = { name: 'Carla' };
describe.call(object, 'My friend', 'is'); // Output: My friend: is Carla
ans.innerHTML += "<br><br>"


// Object Function (Method)
// A method is a function that is a property of an object. When a method is called, the this keyword refers to the object that the method was called on. Here's an example:

const person5 = {
    name: 'David',
    greet: function () {
        ans.innerHTML += `Hello, my name is ${this.name}.`
    }
};

person5.greet(); // Output: Hello, my name is David.
ans.innerHTML += "<br><br>"


// Function in Global Scope
// A function in the global scope is simply a function defined outside of any other function or object. Here's an example:

function globalFunction() {
    ans.innerHTML += "I'm a function in the global scope."
}

globalFunction(); // Output: I'm a function in the global scope.
ans.innerHTML += "<br><br>"


// In HTML event handlers, this refers to the HTML element that received the event
ans.innerHTML += `<br><br><h2>&#10170; In HTML event handlers, this refers to the HTML element that received the event</h2>`;
btn.addEventListener("click", function () {
    this.style.display = "none";
});

