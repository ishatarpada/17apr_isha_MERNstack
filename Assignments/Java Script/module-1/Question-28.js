// Write to find the largest of three numbers in JS?

function findLargestNumber(num1, num2, num3) {
    let largest = num1; 

    if (num2 > largest) {
        largest = num2;
    }

    if (num3 > largest) {
        largest = num3;
    }

    return largest;
}

const num1 = 25;
const num2 = 10;
const num3 = 30;

const largestNumber = findLargestNumber(num1, num2, num3);
console.log(`The largest number among ${num1}, ${num2}, and ${num3} is ${largestNumber}.`);
