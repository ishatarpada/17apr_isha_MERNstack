let ans = document.getElementById("demo");
let num1 = 12;
let num2 = -12;
let num3 = 0;
let num4 = -1 / 0;

let epsilonNumber = Number.EPSILON;
ans.innerHTML += "Number.EPSILON :- " + epsilonNumber + "<br><br>";
ans.innerHTML += "num1.EPSILON :- " + num1.EPSILON + "<br><br>";

let maxNumber = Number.MAX_VALUE;
ans.innerHTML += "Number.MAX_VALUE :- " + maxNumber + "<br><br>";
ans.innerHTML += "num1.MAX_VALUE :- " + num1.MAX_VALUE + "<br><br>";

let minNumber = Number.MIN_VALUE;
ans.innerHTML += "Number.MIN_VALUE :- " + minNumber + "<br><br>";
ans.innerHTML += "num2.MIN_VALUE :- " + num2.MIN_VALUE + "<br><br>";

let maxSafeInt = Number.MAX_SAFE_INTEGER;
ans.innerHTML += "Number.MAX_SAFE_INTEGER :- " + maxSafeInt + "<br><br>";
ans.innerHTML += "num1.MAX_SAFE_INTEGER :- " + num1.MAX_SAFE_INTEGER + "<br><br>";

let minSafeInt = Number.MIN_SAFE_INTEGER;
ans.innerHTML += "Number.MIN_SAFE_INTEGER :- " + minSafeInt + "<br><br>";
ans.innerHTML += "num1.MIN_SAFE_INTEGER :- " + num1.MIN_SAFE_INTEGER + "<br><br>";

let posInfinity = Number.POSITIVE_INFINITY;
ans.innerHTML += "Number.POSITIVE_INFINITY :- " + posInfinity + "<br><br>";
ans.innerHTML += "num4.POSITIVE_INFINITY :- " + num4.POSITIVE_INFINITY + "<br><br>";

let negInfinity = Number.NEGATIVE_INFINITY;
ans.innerHTML += "Number.NEGATIVE_INFINITY :- " + negInfinity + "<br><br>";
ans.innerHTML += "num4.NEGATIVE_INFINITY :- " + num4.NEGATIVE_INFINITY  + "<br><br>";

let nan = Number.NaN;
ans.innerHTML += "Number.NaN :- " + nan + "<br><br>";

