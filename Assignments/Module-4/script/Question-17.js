function addition() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let ans = document.getElementById("ans");

    if (!isNaN(num1) && !isNaN(num2)) {
        let additionResult = num1 + num2;
        ans.innerHTML = `Answer is : <span style="color: #a9166e">${additionResult}</span>`;
    } else {
        ans.innerHTML = "Please enter valid numbers";
    }
}

function substraction() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let ans = document.getElementById("ans");

    if (!isNaN(num1) && !isNaN(num2)) {
        let additionResult = num1 - num2;
        ans.innerHTML = `Answer is : <span style="color: #a9166e">${additionResult}</span>`;
    } else {
        ans.innerHTML = "Please enter valid numbers";
    }
}

function multiplication() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let ans = document.getElementById("ans");

    if (!isNaN(num1) && !isNaN(num2)) {
        let additionResult = num1 * num2;
        ans.innerHTML = `Answer is : <span style="color: #a9166e">${additionResult}</span>`;
    } else {
        ans.innerHTML = "Please enter valid numbers";
    }
}

function division() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let ans = document.getElementById("ans");

    if (!isNaN(num1) && !isNaN(num2)) {
        let additionResult = num1 / num2;
        ans.innerHTML = `Answer is : <span style="color: #a9166e">${additionResult}</span>`;
    } else {
        ans.innerHTML = "Please enter valid numbers";
    }
}

function modulo() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let ans = document.getElementById("ans");

    if (!isNaN(num1) && !isNaN(num2)) {
        let additionResult = num1 % num2;
        ans.innerHTML = `Answer is : <span style="color: #a9166e">${additionResult}</span>`;
    } else {
        ans.innerHTML = "Please enter valid numbers";
    }
}