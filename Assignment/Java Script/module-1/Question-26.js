//  Write find maximum number among 3 numbers using ternary operator in JS?

const num1 = 10;
const num2 = 15;
const num3 = 8;

const max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);

console.log(`The maximum number among ${num1}, ${num2}, and ${num3} . and maximum number is ${max}.`);


