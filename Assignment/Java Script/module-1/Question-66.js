//  copy to one string to another string in JS?

const ps = require("prompt-sync");
const prompt = ps();

let str = prompt("Enter a string: ");

let copiedString = str; // Copying using assignment


let copiedString1 = str.slice(); // Copying using slice method

console.log(copiedString);
console.log(copiedString1);
