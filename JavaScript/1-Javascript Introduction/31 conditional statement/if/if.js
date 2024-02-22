let ans = document.getElementById("demo");

const age = parseInt(prompt("enter the age :- "));
const hour = parseInt(prompt("enter the hour :- "));

if (age >= 18) {
  ans.innerHTML += "you are eligible for voting. <br>";
} 

if(hour < 18){
  ans.innerHTML += "Good day. <br>";
}

