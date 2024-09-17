// Write to print factorial of given number?

function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (num === 0 || num === 1) {
        return 1;
    } else {
        let fact = 1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}

console.log(factorial(5)); 