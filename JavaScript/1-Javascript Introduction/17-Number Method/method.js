let ans = document.getElementById("demo");
let num_1 = 100;
let num_2 = 50;
let num_3 = 10.55;

ans.innerHTML = `<h2>First number &#10140; ${num_1} <br> Second number &#10140; ${num_2}  <br> Third number &#10140; ${num_3}</h2>`;

// 1.toString() &#10140; convert number to string.
ans.innerHTML += `<h1>1.toString() &#10140; convert number to string.</h1>`;
let num = num_1 + num_2;
let str_num = num_1.toString() + num_2.toString();
ans.innerHTML +=
  "without convert number in string they perform addition " + num + "<br>";
ans.innerHTML +=
  "with convert number in string they perform concat two number " +
  str_num +
  "<br><br>";

// 2. toExponential() &#10140;  method returns a string, with the number rounded and written using exponential notation.
ans.innerHTML += `<h1>toExponential() &#10140;  method returns a string, with the number rounded and written using exponential notation.</h1>`;
ans.innerHTML +=
  num_3 + " is with 2 number rounded is&#10140; " + num_3.toExponential(2) + "<br>";
ans.innerHTML +=
  num_3 + " is with 4 number rounded is&#10140; " + num_3.toExponential(4) + "<br>";
ans.innerHTML +=
  num_3 + " is with 6 number rounded is&#10140; " + num_3.toExponential(6) + "<br>";
ans.innerHTML +=
  num_3 +
  " is with 8 number rounded is&#10140; " +
  num_3.toExponential(8) +
  "<br><br>";

// 3.toFixed() &#10140; method returns a round number to a given number of digits.
ans.innerHTML += `<h1>toFixed() &#10140; method returns a round number to a given number of digits.</h1>`;
ans.innerHTML +=
  num_3 + " is with 0 digit fixed is&#10140; " + num_3.toFixed(0) + "<br>";
ans.innerHTML +=
  num_3 + " is with 2 digit fixed is&#10140; " + num_3.toFixed(2) + "<br>";
ans.innerHTML +=
  num_3 + " is with 4 digit fixed is&#10140; " + num_3.toFixed(4) + "<br>";
ans.innerHTML +=
  num_3 + " is with 6 digit fixed is&#10140; " + num_3.toFixed(6) + "<br>";
ans.innerHTML +=
  num_3 + " is with 8 digit fixed is&#10140; " + num_3.toFixed(8) + "<br><br>";

// 4.toPrecision() &#10140; number written in specific length.
ans.innerHTML += `<h1> .toPrecision() &#10140; number written in Specific Length.</h1>`;
ans.innerHTML +=
  num_3 + " write 2 digit length is &#10140;  " + num_3.toPrecision(2) + "<br>";
ans.innerHTML +=
  num_3 + " write 4 digit length is &#10140;  " + num_3.toPrecision(4) + "<br>";
ans.innerHTML +=
  num_3 + " write 6 digit length is &#10140;  " + num_3.toPrecision(6) + "<br>";
ans.innerHTML +=
  num_3 + " write 8 digit length is &#10140;  " + num_3.toPrecision(8) + "<br>";

// 5. valueOf() &#10140; return number as number.
ans.innerHTML += `<h1> .valueOf() method return number as number.</h1>`;
ans.innerHTML += num_1 + " value is &#10140; " + num_1 + "<br>";
ans.innerHTML +=
  num_1 + " + " + num_2 + " value is &#10140; " + (num_1 + num_2) + "<br>";

// converting variable to numbers.
// 1. Number() &#10140; convert variable to number and also convert date to a number.
ans.innerHTML +=
  "True is &#10140; " +   Number(true) + "<br>" + 
  "False is &#10140;" + Number(false) + "<br>" +
  " 10 is &#10140;" + Number("10") + "<br>" +
  "  10 is &#10140; " + Number("  10") + "<br>" +
  " 10  is  &#10140; " + Number("10  ") + "<br>" + 
  "  10  is &#10140; "+ Number(" 10  ") + "<br>" + 
  "10.33 is &#10140; "+Number("10.33") + "<br>" + 
  "10 , 33 is &#10140; " + Number("10,33") + "<br>" +
  " 10 33 is &#10140; " +  Number("10 33") + "<br>" +
  "John is &#10140; " +  Number("John") + "<br>" +
  " 2024-01-22 is&#10140; " + Number(new Date("2024-01-22")) + "<br><br>";

// 2. parseInt() &#10140; convert string to whole number.
ans.innerHTML += "-10 is &#10140; " + parseInt("-10") + "<br>";
ans.innerHTML += "-10.33 is &#10140; " + parseInt("-10.33") + "<br>";
ans.innerHTML += "10 is &#10140; " + parseInt("10") + "<br>";
ans.innerHTML += "10.33 is &#10140; " + parseInt("10.33") + "<br>";
ans.innerHTML += "10 year is &#10140; " + parseInt("10 year") + "<br>";
ans.innerHTML += "year 10 is &#10140; " + parseInt("year 10") + "<br><br>";


// 3. parseFloat() &#10140;convert string to number.
ans.innerHTML += "-10 is &#10140; " + parseFloat("-10") + "<br>";
ans.innerHTML += "-10.33 is &#10140; " + parseFloat("-10.33") + "<br>";
ans.innerHTML += "10 is &#10140; " + parseFloat("10") + "<br>";
ans.innerHTML += "10.33 is &#10140; " + parseFloat("10.33") + "<br>";
ans.innerHTML += "10 year is &#10140; " + parseFloat("10 year") + "<br>";
ans.innerHTML += "year 10 is &#10140; " + parseFloat("year 10") + "<br><br>";


// number Object Method:-
ans.innerHTML += "9007199254740991 between to -9007199254740991 is integer &#10140; " + Number.isInteger() + "<br>";
ans.innerHTML += "9007199254740991 between to -9007199254740991 is safe integer &#10140; " + Number.isSafeInteger() + "<br>";
ans.innerHTML += "9007199254740991 between to -9007199254740991 is integer number &#10140; " + Number.parseInt() + "<br>";
ans.innerHTML += "9007199254740991 between to -9007199254740991 is float number &#10140; " + Number.parseFloat() + "<br>";
