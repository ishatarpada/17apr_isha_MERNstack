// Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -5) in JS?

function firstAndLastDigitSum(number) {
    let lastDigit = number % 10;
    let firstDigit = parseInt(number.toString()[0]); 

    return firstDigit + lastDigit;
}

// Example usage:
const number = 1234;
const sum = firstAndLastDigitSum(number);
console.log(`Summation of first and last digits of ${number}: ${sum}`);