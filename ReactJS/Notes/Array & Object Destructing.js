Array & Object Destructing

Array  Destructing: -
  Array destructuring in JavaScript is a way to easily extract values from an array and assign them to variables in one line.

const fruits = ["Mango", "Banana", "Orange"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // "Mango"
console.log(secondFruit); // "Banana"
console.log(thirdFruit); // "Orange"



Object destructuring in JavaScript allows you to extract specific properties from an object and assign them to variables in a single, concise line.

  Example:
const person = { name: "John", age: 30, city: "New York" };
const { name, age, city } = person;

console.log(name); // "John"
console.log(age);  // 30
console.log(city); // "New York"