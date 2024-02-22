let ans = document.getElementById("demo");

function displayInfo(result) {
    ans.innerHTML += "This is the Callback Function <br> sum of two numbers is &#10170; " + result +  "<br> ";
}

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

setTimeout(displayInfo , 2000);
calculator(10, 20, displayInfo);
setTimeout(() => {
    ans.innerHTML += " This is my First Javascript Program <br>";
} , 5000)

setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  ans.innerHTML +=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds() + "<br>";
}