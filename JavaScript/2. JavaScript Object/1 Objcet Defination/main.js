let ans = document.getElementById("demo");

let a = new Boolean(true);
console.log(a);

let num = new Number(5);
console.log(num);


let str = new String("isha");
console.log(str);

// create a single object using object literals (using literals)
const person = {
    firstName: "isha",
    lastName: "Patel",
    age: 21
};

ans.innerHTML += "person.firstName &#10170; " + person.firstName + "<br>";
ans.innerHTML += "person.lastName &#10170; " + person.lastName + "<br>";
ans.innerHTML += "person.age &#10170; " + person.age + "<br><br>";

// create a single object using new keyword (new keyword)
const flowers = new Object();
flowers.red = "Rose";
flowers.yellow = "sunflower";
flowers.pink = "Lotus";
flowers.white = "Jasmine";
flowers.purple = "Lavender";

ans.innerHTML += "flowers.red &#10170; " + flowers.red + "<br>";
ans.innerHTML += "flowers.yellow &#10170; " + flowers.yellow + "<br>";
ans.innerHTML += "flowers.pink &#10170; " + flowers.pink + "<br>";
ans.innerHTML += "flowers.white &#10170; " + flowers.white + "<br>";
ans.innerHTML += "flowers.purple &#10170; " + flowers.purple + "<br><br>";

// Define an object constructor, and then create objects of the constructed type.


// Define the object constructor
function Language(html, css, javaScript) {
    this.html = html;
    this.css = css;
    this.javaScript = javaScript;

    this.webDev = function () {
        return `There are languages for web development: ${this.html}, ${this.css}, and ${this.javaScript}`;
    }
}

// Create objects of the constructed type
const obj1 = new Language("HTML", "CSS", "JavaScript");
const obj2 = new Language("HTML", "CSS", "TypeScript");

// Use the objects
ans.innerHTML += obj1.webDev() + "<br>";
ans.innerHTML += obj2.webDev() + "<br><br>";


// Define the object constructor
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Create objects of the constructed type
const circle1 = new Circle(5);
const circle2 = new Circle(10);

// Use the objects
ans.innerHTML += circle1.getArea() + "<br>";
ans.innerHTML += circle2.getArea() + "<br><br>";


// Create an object using Object.create().
// Define the prototype object
const prototypeObj = {
    getArea: function () {
        return Math.PI * Math.pow(this.radius, 2);
    }
};

// Create an object using Object.create()
const circle = Object.create(prototypeObj)
circle.radius = 5;

// Use the object
ans.innerHTML += circle.getArea() + "<br><br>";



// JavaScript objects are mutable.
const personInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
ans.innerHTML +=
    personInfo.firstName + " is " + personInfo.age + " years old. <br>";

const x = personInfo;
x.age = 10;

ans.innerHTML +=
    personInfo.firstName + " is " + personInfo.age + " years old. <br><br>";