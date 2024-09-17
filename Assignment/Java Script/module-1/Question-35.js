//Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

function digitSum(number) {
    let sum = 0;

    while (number !== 0) {
        sum += number % 10; 
        number = Math.floor(number / 10);
    }

    return sum;
}

const number = 1523;
const sum = digitSum(number);
console.log(`Summation of digits of ${number}: ${sum}`);