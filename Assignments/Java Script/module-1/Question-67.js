// Find the length of a string without using libraryFunction?

const ps = require("prompt-sync");
const prompt = ps();

let str = prompt("Enter a string: ");

function calculateStringLength(str) {
  let length = 0;
  while (str[length] !== undefined) {
      length++;
  }
  return length;
}

let lengthWithoutLibrary = calculateStringLength(str);
console.log(lengthWithoutLibrary);
