// W.A.P to create a random number just like OTP :45455
let ans = document.getElementById("demo");

let num = (Math.random() * 100000).toFixed();
ans.innerHTML += num;