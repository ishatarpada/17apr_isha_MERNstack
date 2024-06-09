// Write a JavaScript program to capitalize first letter of a string?

const ps = require("prompt-sync");
const prompt = ps();

let str = prompt("Enter a string: ");


// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Capitalize the first letter of the entire string
let capitalizedStr = capitalizeFirstLetter(str);

console.log(capitalizedStr);