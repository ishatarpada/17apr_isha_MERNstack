// Accept 3 numbers from user using while loop and check each numbers palindrome?

const ps = require("prompt-sync");
const prompt = ps();

function isPalindrome(number) {
  // convert number to string
  let str = number.toString();

  // reverse the number
  let reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
}

let count = 0;
while (count < 3) {
  let num = prompt("Enter a number: ");
  if (num !== null && !isNaN(num)) {
    num = parseInt(num, 10);
    if (isPalindrome(num)) {
      console.log(num + " is a palindrome.");
    } else {
      console.log(num + " is not a palindrome.");
    }
    count++;
  } else {
    console.log("Invalid input, please enter a valid number.");
  }
}
