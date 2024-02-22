let numbers = document.getElementById("demo");

let num_1 = 40;
numbers.innerHTML = " this is the without decimal number :- " + num_1 + "<br><br>";

let num_2 = 40.40;
numbers.innerHTML += " this is the with decimal number :- " + num_2 + "<br><br>";

let num_3 = 40e10;
numbers.innerHTML += " this is the extra large number :- " + num_3 + "<br><br>";

let num_4 = 40e-6;
numbers.innerHTML += " this is the extra small number :- " + num_4 + "<br><br>";

// Integer Precision :- Integers are accurate up to 15 digits.
let num_5 = 1234567890987654;
let num_6 = 1234567890987654321
numbers.innerHTML += " This is the integer number and it is the accurate up to 15 digits <br> integer number :- " + num_5 + "   " + num_6 + "<br><br>";

// floating Point
let num_7 = 0.5;
let num_8 = 0.6;

numbers.innerHTML += " addition is the 0.5 and 0.6 is :- " + (num_7 + num_8) + "<br><br>";

let str = `"100"`;
let num_9 = 10;
let num_10 = 10;

numbers.innerHTML += str + " + " + num_9 + " + " + num_10 + " :- " + (str + num_9 + num_10) + "<br>";
numbers.innerHTML += num_9 + " + " + num_10 + " + " + str + " :- " + (num_9 + num_10 + str) + "<br>";
numbers.innerHTML += num_9 + " + " + str + " + " + num_10 + " :- " + (num_9 + str + num_10) + "<br>" + "<br>";

let str_1 = "100";
let num_11 = 10;


// in division and multiplication and substraction, string are convert to the numbers.
numbers.innerHTML += str_1 + " / " + num_11 + " :- " + (str_1 / num_11) + "<br>";
numbers.innerHTML += str_1 + " * " + num_11 + " :- " + (str_1 * num_11) + "<br>";
numbers.innerHTML += str_1 + " - " + num_11 + " :- " + (str_1 - num_11) + "<br><br>";

// NaN :- Not A Number.
let name = " apple";
let price = " 100 ";
let qty = 10;
let num = NaN;

numbers.innerHTML += name + " / " + qty + " :- " + (name / qty) + "<br>"
numbers.innerHTML += name + " / " + qty + " :- " + isNaN(name / qty) + "<br>"
numbers.innerHTML += price + " / " + qty + " :- " + (price / qty) + "<br>"
numbers.innerHTML += price + " / " + qty + " :- " + isNaN(price / qty) + "<br>"
numbers.innerHTML += num + " + " + qty + " :- " + (num + qty) + "<br>"
numbers.innerHTML += num + " + " + price + " :- " + (num + price) + "<br>"
numbers.innerHTML += " NaN type is:- " + typeof (NaN) + "<br><br>";


// Infinity  is the value JavaScript will return if you calculate a number outside the largest possible number.

let number = 4;

while (number != Infinity) {
    number = number * number
    numbers.innerHTML += number + "<br>";
}

let ans_1 = 2 / 0;
let ans_2 = -2 / 0;
numbers.innerHTML += ans_1 + "<br>"
numbers.innerHTML += ans_2 + "<br>"
numbers.innerHTML += "type of infinity is:- " + typeof (Infinity) + "<br><br>";

// hexadecimal
let hex_num = 0xFF;
let hex_num_1 = 0xDF;
numbers.innerHTML += "0xFF is :- " + hex_num + "<br>"
numbers.innerHTML += "0xDF is :- " + hex_num_1 + "<br>"


// toString()
let no = 35;
numbers.innerHTML += "Hexatrigesimal (base 36): " + no.toString(36) + "<br>"
numbers.innerHTML += "Duotrigesimal (base 32): " + no.toString(32) + "<br>"
numbers.innerHTML += "Hexadecimal (base 16): " + no.toString(16) + "<br>"
numbers.innerHTML += "Duodecimal (base 12): " + no.toString(12) + "<br>"
numbers.innerHTML += "Decimal (base 10): " + no.toString(10) + "<br>"
numbers.innerHTML += "Octal (base 8): " + no.toString(8) + "<br>"
numbers.innerHTML += "Binary (base 2): " + no.toString(2) + "<br><br>";

// JavaScript Numbers as Objects
let no1 = 500;
let no2 = new Number(500);

numbers.innerHTML += "First number is:- " + no1 + "<br>";
numbers.innerHTML += "Second number is:- " + no2 + "<br>";
numbers.innerHTML += " type of first number is:- " + typeof (no1) + "<br>"
numbers.innerHTML += " type of second number is:- " + typeof (no2) + "<br>"
numbers.innerHTML += " no1 == no2 :-" + (no1 == no2) + "<br>";
numbers.innerHTML += " no1 === no2 :-" + (no1 === no2) + "<br>";