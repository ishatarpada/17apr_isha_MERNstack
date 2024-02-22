let ans = document.getElementById("demo");

const age = parseInt(prompt("Enter the age: "));
const hour = parseInt(prompt("Enter the hour: "));
const num1 = parseInt(prompt("Enter the first number"));
const num2 = parseInt(prompt("Enter the second number"));

ans.innerHTML = "First number is &#10170 " + num1 + "<br>";
ans.innerHTML += "Second number is &#10170 " + num2 + "<br>";
ans.innerHTML += "Age is &#10170 " + age + "<br>";
ans.innerHTML += "Hour is &#10170 " + hour + "<br>";

if (num1 == num2) {
    ans.innerHTML += "Both are equal numbers. <br>";
} else {
    ans.innerHTML += "Both are not equal numbers. <br>";
}

if (age >= 18) {
    ans.innerHTML += "You are eligible for voting. <br>";
} else {
    ans.innerHTML += "You are not eligible for voting. <br>";
}

if (hour < 18) {
    ans.innerHTML += "Good day. <br>";
} else {
    ans.innerHTML += "Good night. <br>";
}

if (num1 % 2 == 0) {
    ans.innerHTML += num1 + " is an even number. <br>";
} else {
    ans.innerHTML += num1 + " is an odd number. <br>";
}

if(num1 > num2){
    ans.innerHTML += num1 + " is an max number. <br>";
}
else{
    ans.innerHTML += num1 + " is an min number. <br>";

}