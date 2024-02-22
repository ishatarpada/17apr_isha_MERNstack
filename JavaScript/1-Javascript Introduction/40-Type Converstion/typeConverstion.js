let ans = document.getElementById("demo");

// convert string to numbers.
//1. Number() => Returns a number.
ans.innerHTML =
    'Number("3.14") &#10170; ' + Number("3.14") + "<br>" +
    'Number(Math.PI) &#10170; ' + Number(Math.PI) + "<br>" +
    'Number("    ") &#10170; ' + Number("    ") + "<br>" +
    'Number("") &#10170; ' + Number("") + "<br>" +
    'Number("99 88") &#10170; ' + Number("99 88") + "<br>" +
    'Number("John") &#10170; ' + Number("John") + "<br><br>";

// 2. parseFloat() => parse the string and return floating integer number.
let num = prompt("enter the number :- ");
ans.innerHTML += " typeof num &#10170; " + typeof num + "<br>";
ans.innerHTML += " typeof parseFloat(num) &#10170; " + typeof parseFloat(num) + "<br>";

//3. parseInt() => parse the string and return  integer number.
ans.innerHTML += " typeof parseInt(num) &#10170; " + typeof parseInt(num) + "<br><br>";

// 4. unary + operator => convert variable to a number;
let y = "5";
let x = + y;
ans.innerHTML += "typeof y &#10170;" + typeof y + "<br>" + "typeof x &#10170;" + typeof x + "<br><br>";
y = "isha";
x = + y;
ans.innerHTML += "typeof y &#10170;" + typeof y + "<br>" + "typeof x &#10170;" + typeof x + "<br><br>";

// convert number to string
// 1. String() => convert numbers to string.
// it used on any type of numbers , literals , variable , expression.
let z = 123;
ans.innerHTML += " String(z) &#10170; " + String(z) + "<br>";
ans.innerHTML += " String(123) &#10170; " + String(123) + "<br>";
ans.innerHTML += "   String(100 + 23); &#10170; " + String(100 + 23); + "<br><br>";

// 2. toString() 
ans.innerHTML += "<br> z.toString() &#10170; " + z.toString() + "<br>";
ans.innerHTML += " (123).toString() &#10170; " + (123).toString() + "<br>";
ans.innerHTML += " (100 + 23).toString() &#10170; " + (100 + 23).toString() + "<br><br>";

// toExponential()	Returns a string, with a number rounded and written using exponential notation.
let a = 123.564;
ans.innerHTML += " typeof a &#10170; " + typeof a + "<br>";
ans.innerHTML += " a.toExponential(2) &#10170; " + a.toExponential(2) + "<br>";
ans.innerHTML += " typeof a.toExponential(2) &#10170; " + typeof a.toExponential(2) + "<br><br>";


// toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
let b = 123.564;
ans.innerHTML += " typeof b &#10170; " + typeof b + "<br>";
ans.innerHTML += " b.toFixed(2) &#10170; " + b.toFixed(2) + "<br>";
ans.innerHTML += " typeof b.toFixed(2) &#10170; " + typeof b.toFixed(2) + "<br><br>";

// toPrecision()	Returns a string, with a number written with a specified length
let c = 123.564;
ans.innerHTML += " typeof c &#10170; " + typeof c + "<br>";
ans.innerHTML += " c.toPrecision(2) &#10170; " + c.toPrecision(2) + "<br>";
ans.innerHTML += " typeof c.toPrecision(2) &#10170; " + typeof c.toPrecision(2) + "<br><br>";


// Converting Dates to Numbers
let d = new Date();
ans.innerHTML += " typeof d &#10170; " + typeof d + "<br>";
ans.innerHTML += " Number(d) &#10170; " + Number(d) + "<br>";
ans.innerHTML += " typeof Number(d) &#10170; " + typeof Number(d) + "<br><br>";

// Converting Dates to String
let date = new Date();
ans.innerHTML += " typeof date &#10170; " + typeof date + "<br>";
ans.innerHTML += " String(date) &#10170; " + String(date) + "<br>";
ans.innerHTML += " typeof String(date) &#10170; " + typeof String(date) + "<br><br>";


// Converting Booleans to Numbers
let val = true;
ans.innerHTML += " typeof val &#10170; " + typeof val + "<br>";
ans.innerHTML += " Number(val) &#10170; " + Number(val) + "<br>";
ans.innerHTML += " typeof Number(val) &#10170; " + typeof Number(val) + "<br><br>";

// Converting Booleans to Strings
ans.innerHTML += " typeof val &#10170; " + typeof val + "<br>";
ans.innerHTML += " String(val) &#10170; " + String(val) + "<br>";
ans.innerHTML += " typeof String(val) &#10170; " + typeof String(val) + "<br><br>";

// Converting Booleans to Strings
ans.innerHTML += " typeof val &#10170; " + typeof val + "<br>";
ans.innerHTML += " toString(val) &#10170; " + toString(val) + "<br>";
ans.innerHTML += " typeof toString(val) &#10170; " + typeof toString(val) + "<br><br>";

// automatic type conversion
ans.innerHTML += "(5 + null) &#10170; " +  (5 + null) + "<br>";
ans.innerHTML += "('5' + null) &#10170; " + ("5" + null) + "<br>";
ans.innerHTML += "('5' + 2) &#10170; " + ("5" + 2) + "<br>";
ans.innerHTML += "('5' - 2) &#10170; " + ("5" - 2) + "<br>";
ans.innerHTML += "('5' * '2') &#10170; " + ("5" * "2") + "<br>";
ans.innerHTML += "('5' / '2') &#10170; " + ("5" / "2") + "<br>";
