let ans = document.getElementById("demo");

// A JavaScript string is zero or more characters written inside quotes.
// Strings created with single or double quotes works the same.
// There is no difference between the two.

let str = "javaScript";
let str_1 = 'web development';
let str_2 = " it's my first javaScript Program."
let str_3 = ' my name is "isha" .'
let str_4 = `This is string.`

ans.innerHTML = str + "<br>";
ans.innerHTML += str_1 + "<br>";
ans.innerHTML += str_2 + "<br>";
ans.innerHTML += str_3 + "<br>";
ans.innerHTML += str_4 + "<br>" + "<br>";

// find the length of string :- str.length;
// str.length property also count the whitespace .
let length = str.length;
ans.innerHTML += str + " length is :- " + length + "<br><br>";

// Escape Characters
let str_5 = "We are the so-called \"Vikings\" from the north.";
let str_6 = 'It\'s alright.';

// "The character \\ is called backslash.";
// "The character \b is called backspace.";
let str_7 = "The character \\ is called backslash.";

// \n is used for new line
let str_8 = "This is the first line.\nThis is the second line.";
let str_9 = "\f formfeed";
let str_10 = "\r Carriage Return.";
let str_11 = "First\tSecond\tThird";
let str_12 = "The character \v is used for backslash followed by 'v'.";

ans.innerHTML += " \" is used for double quote :- " + str_5 + "<br>";
ans.innerHTML += " \' is used for single quote :- " + str_6 + "<br>";
ans.innerHTML += "\\ and \b is used for backslash :- " + str_7 + "<br>";
ans.innerHTML += "\n is used for new line :- " + str_8 + "<br>";
ans.innerHTML += "\f is used for form feed :- " + str_9 + "<br>";
ans.innerHTML += " \r is used for carriage return :- " + str_10 + "<br>";
ans.innerHTML += "\t is used for horizontal tabulator :- " + str_11 + "<br>";
ans.innerHTML += "\v is used for Vertical Tabulator :- " + str_12 + "<br> <br>";

// two string merge using + operator.
let str_13 = " hello! ";
let str_14 = " Good Morning";

let final_str = str_13 + str_14;
ans.innerHTML += final_str + "<br><br>";

// template string:-
let template_str = `The quick
brown fox
jumps over
the lazy dog`;

ans.innerHTML += template_str + "<br><br>";

// java script string as object
let sim_str = " John ";
let obj_str = new String(" John ");

ans.innerHTML += " Simple string:- " + sim_str + "<br>";
ans.innerHTML += " Object string:- " + obj_str + "<br>";
ans.innerHTML += sim_str + " type is:-  " + typeof (sim_str) + "<br>";
ans.innerHTML += obj_str + " type is:-  " + typeof (obj_str) + "<br>";
ans.innerHTML += sim_str + " == " + obj_str + " :- " + (sim_str == obj_str) + "<br>";
ans.innerHTML += sim_str + " === " + obj_str + " :- " + (sim_str === obj_str) + "<br><br>";