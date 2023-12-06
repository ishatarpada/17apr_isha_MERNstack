function printEven() {
    let n = parseInt(document.getElementById("num").value);
    let result = document.getElementById("result");
    let evenNumbers = '';

    for (let i = 0; i <= 20; i++) {
        if (i % 2 === 0) {
            evenNumbers += i + "   ";
        }
    }

    result1.innerHTML = evenNumbers;
}

function printFibonacci() {
    let n = parseInt(document.getElementById("num").value);
    let result = document.getElementById("result");

    let a = 0;
    let b = 1;
    let i = 0;

    while (i < n) {
        result.innerHTML += a + " ";
        let sum = a + b;

        a = b;
        b = sum;
        i++;
    }
}


function printReverse() {
    let n = parseInt(document.getElementById("num").value);
    let result = document.getElementById("result");

    let i = n;
    let reversedNumbers = "";

    do {
        reversedNumbers += i + "   ";
        i--;
    } while (i > 0);

    result2.innerHTML = reversedNumbers;
}

function printInfo() {
    let result = document.getElementById("result");
    let info = "";

    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john@example.com"
    };

    for (let key in person) {
        info += key + ": " + person[key] + "   ";
    }

    result3.innerHTML = info;
}

function printList() {
    let result = document.getElementById("result");
    let info = "";

    let array = [56, 'janki', "89", 'hello', 8];

    for (i of array) {
        info += i + "   ";
    }

    result4.innerHTML = info;
}
