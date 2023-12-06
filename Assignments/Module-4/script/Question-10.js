function convertStringToInteger() {
    let ans = document.getElementById("ans");
    let stringValue = "0x8975";
    ans.innerHTML = "Initial Type: " + typeof stringValue + "<br>";

    // Specify the base (16 for hexadecimal) explicitly
    let integerValue = parseInt(stringValue, 16);

    ans.innerHTML += "Final Type: " + typeof integerValue + "<br>";
    ans.innerHTML += integerValue;
}