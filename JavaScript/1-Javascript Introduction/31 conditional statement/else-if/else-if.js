let ans = document.getElementById("demo");

const time = parseInt(prompt("Enter the time: "));
const num1 = parseInt(prompt("Enter the first number"));

ans.innerHTML = "First number is &#10170 " + num1 + "<br>";
ans.innerHTML += "Time is &#10170 " + time + "<br>";

if (time < 10) {
    ans.innerHTML += " Good Morning . <br>";
}
else if (time < 20) {
    ans.innerHTML += " Good Day . <br>";
}
else {
    ans.innerHTML += " Good Evening . <br>";
}

if (num1 > 0) {
    ans.innerHTML += num1 + " is an positive number. <br>";
}
else if (num1 < 0) {
    ans.innerHTML += num1 + " is an Negative number. <br>";
}
else {
    ans.innerHTML += num1 + " is an zero. <br>";

}