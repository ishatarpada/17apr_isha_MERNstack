let ans = document.getElementById("demo");

let a = 100;
let b = 20;

// addition
let add;
add = a + b;
ans.innerHTML = "addition :- " + add + "<br>";

// substraction
let sub;
sub = a - b;
ans.innerHTML += "substraction :- " + sub + "<br>";

// multiplication
let mul;
mul = a * b;
ans.innerHTML += "multiplication :- " + mul + "<br>";

// division
let div;
div = a / b;
ans.innerHTML += "division :- " + div + "<br>";

// modulo
let mod;
mod = a % b;
ans.innerHTML += "modulo :- " + mod + "<br>";

// increment
let inc;
inc = ++a;
ans.innerHTML += "increment :- " + inc + "<br>";

// decrement
let dec;
dec = --b;
ans.innerHTML += "decrement :- " + dec + "<br>";