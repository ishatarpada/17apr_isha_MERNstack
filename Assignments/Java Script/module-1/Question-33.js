// Write to print Fibonacci series up to given numbers?

function fibonacci(limit) {
    let fibonacci = [];
    let prev = 0, curr = 1, next;

    fibonacci.push(prev); 

    while (curr <= limit) {
        fibonacci.push(curr);
        next = prev + curr;
        prev = curr;
        curr = next;
    }

    return fibonacci;
}

// Example usage:
const limit = 50;
const fibonacciSequence = fibonacci(limit);
console.log(`Fibonacci series up to ${limit}:`, fibonacciSequence.join(', '));