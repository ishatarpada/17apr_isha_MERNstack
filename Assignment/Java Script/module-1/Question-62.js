// Split the string into an array using split() Method?


const ps = require("prompt-sync");
const prompt = ps();

let str = prompt("Enter a string: ");

let arr = str.split(',');

console.log(arr);