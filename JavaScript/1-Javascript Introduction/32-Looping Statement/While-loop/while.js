let ans = document.getElementById("demo");
let number = parseInt(prompt("Enter the number: "));

// Print numbers.
ans.innerHTML = `Numbers. <br>`;
let i = 0;
while (i < number) {
    ans.innerHTML += i + "  ";
    i++;
}

// Reset i for the following loops.
i = 0;

// Print even numbers.
ans.innerHTML += `<br><br> Even Numbers. <br>`;
while (i < number) {
    if (i % 2 == 0) {
        ans.innerHTML += i + "  ";
    }
    i++;
}

// Reset i for the following loop.
i = 0;

// Print odd numbers.
ans.innerHTML += `<br><br> Odd Numbers. <br>`;
while (i < number) {
    if (i % 2 != 0) {
        ans.innerHTML += i + "  ";
    }
    i++;
}

// Reset i and sum for the following loop.
i = 0;
let sum = 0;

// Print the sum of numbers.
ans.innerHTML += `<br><br> Sum of ${number} Numbers. <br>`;
while (i < number) {
    sum += i;
    i++;
}
ans.innerHTML += sum + " <br> ";

// Reset j for the following loop.
let j = number;

// Print the reverse numbers.
ans.innerHTML += `<br> Reverse Numbers. <br>`;
while (j > 0) {
    ans.innerHTML += j + "  ";
    j--;
}
