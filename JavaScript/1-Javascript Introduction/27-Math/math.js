let ans = document.getElementById("demo");

ans.innerHTML = " Math.E ➡️  " + Math.E + "<br>";
ans.innerHTML += " Math.PI ➡️  " + Math.PI + "<br>";
ans.innerHTML += " Math.SQRT2 ➡️  " + Math.SQRT2 + "<br>";
ans.innerHTML += " Math.SQRT1_2 ➡️  " + Math.SQRT1_2 + "<br>";
ans.innerHTML += " Math.LN2 ➡️  " + Math.LN2 + "<br>";
ans.innerHTML += " Math.LN10 ➡️  " + Math.LN10 + "<br>";
ans.innerHTML += " Math.LOG2E ➡️  " + Math.LOG2E + "<br>";
ans.innerHTML += " Math.LOG10E ➡️  " + Math.LOG10E + "<br><br>";

// Math Methods

// 1. Math.round(x) => Returns x rounded to its nearest integer .
ans.innerHTML += " Math.round(2.5) &#10170; " + Math.round(2.5) + "<br>"; //3
ans.innerHTML += " Math.round(4.6) &#10170; " + Math.round(4.6) + "<br>"; //5
ans.innerHTML += " Math.round(9.4) &#10170; " + Math.round(9.4) + "<br>"; //9
ans.innerHTML += " Math.round(6.2) &#10170; " + Math.round(6.2) + "<br><br>"; //6

// 2. Math.ceil(x) => Returns x rounded up to its nearest integer.
ans.innerHTML += " Math.ceil(2.5) &#10170; " + Math.ceil(2.5) + "<br>" //3
ans.innerHTML += " Math.ceil(4.6) &#10170; " + Math.ceil(4.6) + "<br>" //5
ans.innerHTML += " Math.ceil(9.8) &#10170; " + Math.ceil(9.8) + "<br>" //10 
ans.innerHTML += " Math.ceil(6.2) &#10170; " + Math.ceil(6.2) + "<br><br>" //7

// 3. Math.floor(x) => Returns the x rounded down to its nearest integer
ans.innerHTML += " Math.floor(2.5) &#10170; " + Math.floor(2.5) + "<br>" //2
ans.innerHTML += " Math.floor(4.6) &#10170; " + Math.floor(4.6) + "<br>" //4
ans.innerHTML += " Math.floor(9.8) &#10170; " + Math.floor(9.8) + "<br>" //9
ans.innerHTML += " Math.floor(6.2) &#10170; " + Math.floor(6.2) + "<br><br>" //6

// 4. Math.trunc(x) => Returns the integer part of the value.
ans.innerHTML += " Math.trunc(2.5) &#10170; " + Math.trunc(2.5) + "<br>" //2
ans.innerHTML += " Math.trunc(4.6) &#10170; " + Math.trunc(4.6) + "<br>" //4
ans.innerHTML += " Math.trunc(9.8) &#10170; " + Math.trunc(9.8) + "<br>" //9
ans.innerHTML += " Math.trunc(6.2) &#10170; " + Math.trunc(6.2) + "<br><br>" //6

// 5. Math.sign(x) returns if x is negative, null or positive
ans.innerHTML += " Math.sign(4.6) &#10170; " + Math.sign(4.6) + "<br>" //1
ans.innerHTML += " Math.sign(0) &#10170; " + Math.sign(0) + "<br>" //0
ans.innerHTML += " Math.sign(-6.2) &#10170; " + Math.sign(-6.2) + "<br><br>" //-1

// 6.Math.pow(x, y) returns the value of x to the power of y
ans.innerHTML += " Math.pow(4 , 6) &#10170; " + Math.pow(4 , 6) + "<br>" //4096
ans.innerHTML += " Math.pow(9 , 2) &#10170; " + Math.pow(9 , 2) + "<br>" //81
ans.innerHTML += " Math.pow(2 , 9) &#10170; " + Math.pow(2 , 9) + "<br>" //512
ans.innerHTML += " Math.pow(5 , 3) &#10170; " + Math.pow(5 , 3) + "<br><br>" //4096

// 7. Math.sqrt(x) returns the square root of x.
ans.innerHTML += " Math.sqrt(64) &#10170; " + Math.sqrt(64) + "<br>"; //8
ans.innerHTML += " Math.sqrt(1024) &#10170; " + Math.sqrt(1024) + "<br>"; //32
ans.innerHTML += " Math.sqrt(625) &#10170; " + Math.sqrt(625) + "<br>";
ans.innerHTML += " Math.sqrt(16) &#10170; " + Math.sqrt(16) + "<br><br>";

// Math.abs(x) returns the absolute (positive) value of x.
ans.innerHTML += " Math.abs(-20) &#10170; " + Math.abs(-20) + "<br>";
ans.innerHTML += " Math.abs(-56.3) &#10170; " + Math.abs(-56.3) + "<br>";
ans.innerHTML += " Math.abs(-23) &#10170; " + Math.abs(-23) + "<br>";
ans.innerHTML += " Math.abs(-89.23) &#10170; " + Math.abs(-89.23) + "<br><br>";

// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
ans.innerHTML += " Math.sin(0 * Math.PI / 180 ) &#10170; " + Math.sin(0 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.sin(45 * Math.PI / 180 ) &#10170; " + Math.sin(45 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.sin(90 * Math.PI / 180 ) &#10170; " + Math.sin(90 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.sin(180 * Math.PI / 180 ) &#10170; " + Math.sin(180 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.sin(360 * Math.PI / 180 ) &#10170; " + Math.sin(360 * Math.PI / 180 ) + "<br><br>";

// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
ans.innerHTML += " Math.cos(0 * Math.PI / 180 ) &#10170; " + Math.cos(0 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.cos(45 * Math.PI / 180 ) &#10170; " + Math.cos(45 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.cos(90 * Math.PI / 180 ) &#10170; " + Math.cos(90 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.cos(180 * Math.PI / 180 ) &#10170; " + Math.cos(180 * Math.PI / 180 ) + "<br>";
ans.innerHTML += " Math.cos(360 * Math.PI / 180 ) &#10170; " + Math.cos(360 * Math.PI / 180 ) + "<br><br>";

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments
ans.innerHTML += " Math.min(0, 150, 30, 20, -8, -200) &#10170; " + Math.min(0, 150, 30, 20, -8, -200) + "<br>";
ans.innerHTML += " Math.max(0, 150, 30, 20, -8, -200) &#10170; " + Math.max(0, 150, 30, 20, -8, -200) + "<br><br>";


// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
ans.innerHTML += " Math.random() &#10170; " + Math.random() + "<br>";
ans.innerHTML += " Math.random() &#10170; " + Math.random() + "<br>";
ans.innerHTML += " Math.random() &#10170; " + Math.random() + "<br>";
ans.innerHTML += " Math.random() &#10170; " + Math.random() + "<br><br>";

// Math.log(x) returns the natural logarithm of x.
ans.innerHTML += " Math.log(1) &#10170; " + Math.log(1) + "<br>";
ans.innerHTML += " Math.log(2) &#10170; " + Math.log(2) + "<br>";
ans.innerHTML += " Math.log(3) &#10170; " + Math.log(3) + "<br>";
ans.innerHTML += " Math.log(4) &#10170; " + Math.log(4) + "<br>";
ans.innerHTML += " Math.log(5) &#10170; " + Math.log(5) + "<br>";
ans.innerHTML += " Math.log(6) &#10170; " + Math.log(6) + "<br>";
ans.innerHTML += " Math.log(7) &#10170; " + Math.log(7) + "<br>";
ans.innerHTML += " Math.log(8) &#10170; " + Math.log(8) + "<br>";
ans.innerHTML += " Math.log(9) &#10170; " + Math.log(9) + "<br>";
ans.innerHTML += " Math.log(10) &#10170; " + Math.log(10) + "<br><br>";

// Math.log2(x) returns the base 2 logarithm of x
ans.innerHTML += " Math.log2(4) &#10170; " + Math.log2(4) + "<br>";
ans.innerHTML += " Math.log2(8) &#10170; " + Math.log2(8) + "<br>";
ans.innerHTML += " Math.log2(9) &#10170; " + Math.log2(9) + "<br>";
ans.innerHTML += " Math.log2(10) &#10170; " + Math.log2(10) + "<br>";
ans.innerHTML += " Math.log2(16) &#10170; " + Math.log2(16) + "<br><br>";

// Math.log10(x) returns the base 10 logarithm of x
ans.innerHTML += " Math.log10(4) &#10170; " + Math.log10(4) + "<br>";
ans.innerHTML += " Math.log10(10) &#10170; " + Math.log10(10) + "<br>";
ans.innerHTML += " Math.log10(100) &#10170; " + Math.log10(100) + "<br>";
ans.innerHTML += " Math.log10(1000) &#10170; " + Math.log10(1000) + "<br>";
ans.innerHTML += " Math.log10(9999) &#10170; " + Math.log10(9999) + "<br><br>";

// The Math.acos() method returns a value value between 0 and PI.
ans.innerHTML += " Math.acos(-1) &#10170; " + Math.acos(-1) + "<br>"; //PI
ans.innerHTML += " Math.acos(0) &#10170; " + Math.acos(0) + "<br>";//PI/2
ans.innerHTML += " Math.acos(1) &#10170; " + Math.acos(1) + "<br><br>"; //0

// The Math.acosh() method returns the hyperbolic arc-cosine of a number.
// If the parameter is less than 1, the method returns NaN.
ans.innerHTML += " Math.acosh(-1) &#10170; " + Math.acosh(-1) + "<br>"; //NAN
ans.innerHTML += " Math.acosh(0) &#10170; " + Math.acosh(0) + "<br>";//NAN
ans.innerHTML += " Math.acosh(1) &#10170; " + Math.acosh(1) + "<br>";//0
ans.innerHTML += " Math.acosh(2) &#10170; " + Math.acosh(2) + "<br><br>"; //1.3169