let ans = document.getElementById("demo");

// Use window.prompt to get input from the user
let age = parseInt(prompt("Enter your age:"));

function vote() {
    if (!isNaN(age)) { // Check if age is a valid number
        if (age >= 18) {
            ans.innerHTML = " &#10170 You are eligible for voting. <br><br>";
        } else {
            ans.innerHTML = " &#10170 You are not eligible for voting. <br><br>";
        }
    } else {
        ans.innerHTML = " &#10170;  Please enter a valid age. <br><br>";
    }
}
vote();

function category() {
    if (!isNaN(age)) { // Check if age is a valid number
        if (age > 1 && age <= 5) {
            ans.innerHTML += " &#10170 You are toddler category. <br><br>";
        } else if (age > 5 && age <= 13) {
            ans.innerHTML += " &#10170 You are kids category. <br><br>";
        } else {
            ans.innerHTML += " &#10170 You are adult category. <br><br>";
        }
    } else {
        ans.innerHTML = " &#10170;  Please enter a valid age. <br><br>";
    }
}
category();

function numbers() {
    let x = 6;
    let y = 3;
    ans.innerHTML += "(x == 5 || y == 5)  &#10170 " + (x == 5 || y == 5) + "<br>"; // false
    ans.innerHTML += "(x == 6 || y == 0)  &#10170 " + (x == 6 || y == 0) + "<br>"; //true
    ans.innerHTML += "(x == 0 || y == 3)  &#10170 " + (x == 0 || y == 3) + "<br>"; //true
    ans.innerHTML += "(x == 6 || y == 3)  &#10170 " + (x == 6 || y == 3) + "<br><br>"; // true
    ans.innerHTML += " !(5 == 4) &#10170 " + !(5 == 4) + "<br>"; // true
    ans.innerHTML += " !(4 == 4) &#10170 " + !(4 == 4) + "<br><br>"; //false
}
numbers();

function oldYoung() {
    ans.innerHTML += ` <h3> ternary operator </h3> `;
    ans.innerHTML += ` <p> syntax &#10170; variableName = (condition) ? value1:value2  </p>`
    ans.innerHTML += " (age < 18) ? 'Too young':'Old enough ' &#10170 " + ((age < 18) ? "Too young" : "Old enough ") + "<br><br>";
}

oldYoung(age);

function print() {
    ans.innerHTML += ' 2 < 12 &#10170 ' + (2 < 12) + "<br>";
    ans.innerHTML += ' 2 < "12" &#10170 ' + (2 < "12") + "<br>";
    ans.innerHTML += ' 2 < "John" &#10170 ' + (2 < "John") + "<br>";
    ans.innerHTML += ' 2 > "John"  &#10170 ' + (2 > "John") + "<br>";
    ans.innerHTML += ' "2" < "12" &#10170 ' + ("2" < "12") + "<br>";
    ans.innerHTML += ' "2" > "12" &#10170 ' + ("2" > "12") + "<br>";
    ans.innerHTML += ' "2" > "12" &#10170 ' + ("2" > "12") + "<br>";
    ans.innerHTML += ' "2" == "12" &#10170 ' + ("2" == "12") + "<br><br>";
}
print();

// The Nullish Coalescing Operator (??)
//  if first argument is null than return second argument otherwise return first argument.

let name = " null ";
let text = " missing ";
let result = name ?? text;
ans.innerHTML += "The name is &#10170 " + result + "<br>";

const car = {type:"Fiat", model:"500", color:"white"};
let carName = car?.carName;
ans.innerHTML += "Car name is: &#10170 " + carName;