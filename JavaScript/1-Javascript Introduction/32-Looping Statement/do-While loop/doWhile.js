let ans = document.getElementById("demo");
let number = parseInt(prompt("Enter the number: "));

// Print numbers.
ans.innerHTML = `Numbers. <br>`;
let i = 0;
do {
    ans.innerHTML += i + "  ";
    i++;
} while (i < number)

// Reset i for the following loops.
i = 1;

// Print even numbers.
ans.innerHTML += `<br><br> Even Numbers. <br>`;
do {
    ans.innerHTML += i + "  ";
    i += 2;
} while (i <= number)

// Reset i for the following loop.
i = 1;

// Print odd numbers.
ans.innerHTML += `<br><br> Odd Numbers. <br>`;
do {
    ans.innerHTML += i + "  ";
    i += 2;
} while (i < number)

// Reset i and sum for the following loop.
i = 0;
let sum = 0;

// Print the sum of numbers.
ans.innerHTML += `<br><br> Sum of ${number} Numbers. <br>`;
do {
    sum += i;
    i++;
} while (i <= number)
ans.innerHTML += sum + " <br> ";

// Reset i for the following loop.
i = number;

// Print the reverse numbers.
ans.innerHTML += `<br> Reverse Numbers. <br>`;
do {
    ans.innerHTML += i + "  ";
    i--;
} while (i >= 0)
