let ans = document.getElementById("demo");
let str = " Hello! ,  This is My First JavaScript Program. ";
let str_1 = "Thank You.";
let text = "10";


// find the length :- str.length
ans.innerHTML = "string is :- " + str + "<br>";
ans.innerHTML += " length is:- " + str.length + "<br><br>";

// Extracting String Characters:- find out the character using position.
//  1. at(position) :- method returns the character at a specified index (position) in a string.
ans.innerHTML += "string is :- " + str + "<br>";
ans.innerHTML += " 25 character is of is:- " + str.at(25) + "<br>";

// 2. charAt(position) :- method returns the character at a specified index (position) in a string
ans.innerHTML += " 18 character is of is:- " + str.charAt(18) + "<br>";

// 3. charCodeAt(position) :- method returns the code of the character at a specified index in a string
ans.innerHTML += "code of the character at a 4rth index in a string is:- " + str.charCodeAt(4) + "<br>";

// 4. Using property access [] like in arrays.
ans.innerHTML += " 25 character is of is:- " + str[25] + "<br><br>";


// Extracting String Parts :- find the parts between the start and end index.
// 1. slice(start , end)
ans.innerHTML += "string is :- " + str + "<br>";
ans.innerHTML += " slice between 20 to 35 index:- " + str.slice(20, 35) + "<br>";
ans.innerHTML += " slice is from 25 to:-  " + str.slice(25) + "<br>";
ans.innerHTML += " slice is from -25 to:-  " + str.slice(-25) + "<br>";
ans.innerHTML += " slice between -35 to -20 index:- " + str.slice(-35, -20) + "<br>";

// 2. substring(start , end)
ans.innerHTML += " substring is:- " + str.substring(15, 31) + "<br>";

// 3. substr(start , length)
ans.innerHTML += " string is:- " + str.substr(20, 45) + "<br>";
ans.innerHTML += " string is:- " + str.substr(30) + "<br>";
ans.innerHTML += " string is:- " + str.substr(-30) + "<br><br>";


// Converting to Upper and Lower Case:- change the latter in upper and lower.
// 1. toUpperCase()
ans.innerHTML += "string is :- " + str + "<br>";
let upper_str = str.toUpperCase();
ans.innerHTML += " in upper case :- " + upper_str + "<br>";

// 2. toLowerCase()
let lower_str = str.toLowerCase();
ans.innerHTML += " in lower case :- " + lower_str + "<br><br>";


// JavaScript String join or merge :- merge the two or more string.
// 1. concat()
ans.innerHTML += "First string is :- " + str + "<br>";
ans.innerHTML += "second string is :- " + str_1 + "<br>";
let merge_str = str.concat(" ", str_1);
ans.innerHTML += " merge the string :- " + merge_str + "<br><br>";


// trim the string :- remove the white space.
// 1. trim() :- remove the whitespace from the start and  end
ans.innerHTML += "string is :- " + str + "<br>";
ans.innerHTML += " length is:- " + str.length + "<br>";
let trim_str = str.trim();
ans.innerHTML += "trim the string:- " + trim_str + "<br>";
ans.innerHTML += " trim string length is:- " + trim_str.length + "<br>";

// 2. trimStart() :- remove the whitespace from the only starting
ans.innerHTML += "string is :- " + str + "<br>";
ans.innerHTML += " length is:- " + str.length + "<br>";
let trim_strStart = str.trimStart();
ans.innerHTML += "trim the string:- " + trim_strStart + "<br>";
ans.innerHTML += " trim string length is:- " + trim_strStart.length + "<br>";

// 3. trimEnd() :- remove the whitespace from the only ending
ans.innerHTML += "string is :- " + str + "<br>";
ans.innerHTML += " length is:- " + str.length + "<br>";
let trim_strEnd = str.trimEnd();
ans.innerHTML += "trim the string:- " + trim_strEnd + "<br>";
ans.innerHTML += " trim string length is:- " + trim_strEnd.length + "<br><br>";


// padding the string :-  padding at the beginning and at the end of a string.
// here first parameter is length of the string and second parameter is value .
// 1. padStart()
ans.innerHTML += "text is:- " + text + "<br>";
let pad_start = text.padStart(4, "5");
ans.innerHTML += pad_start + "<br>";
ans.innerHTML += text.padStart(10, "a") + "<br>";

// 2. padEnd()
ans.innerHTML += "text is:- " + text + "<br>";
let pad_end = text.padEnd(4, "5");
ans.innerHTML += pad_end + "<br>";
ans.innerHTML += text.padEnd(10, "z") + "<br><br>";


// String repeat :- repeat the string.
//  repeat(count)
ans.innerHTML += str_1 + "<br>";
let rep_str = str_1.repeat(3);
ans.innerHTML += "string is repeated by 3 times:-  " + rep_str + "<br><br>"

// replace the string content:- replace() method replaces a specified value with another value in a string.
//  this method is case sensitive.
// To replace case insensitive, use a regular expression with an /i flag (insensitive).
// 1.replace():- only replace first match.
ans.innerHTML += str_1 + "<br>";
let replace_str = str_1.replace("Thank", "How are ")
ans.innerHTML += "replace the Thank word into the How are word :- " + replace_str + "<br>";
ans.innerHTML += "replace the thank word into the How are :-  " + str_1.replace("thank", "How Are") + "<br>";
ans.innerHTML += "it is not working <br>";
ans.innerHTML += "replace the thank word into the How are using regular expression with /i flag :-  " + str_1.replace(/thank/i, "How Are") + "<br>";
ans.innerHTML += "now it is working <br><br>";

// 2.replaceAll() :- replace all the matches.
ans.innerHTML += rep_str + "<br>";
let replaceAll_str = rep_str.replaceAll("Thank ", "How are ")
ans.innerHTML += "replace the all Thank word into the How are word :- " + replaceAll_str + "<br>";
ans.innerHTML += "replace the all Thank word into the How are word :- " + rep_str.replace(/Thank/g, "How are") + "<br><br>";


// Converting a String to an Array :- A string can be converted to an array with the split() method
// split()
let text_1 = "Hello";
const myArr = text_1.split("");
// const myArr = text_1.split("|");
// const myArr = text_1.split(",");

let text_2 = "";
for (let i = 0; i < myArr.length; i++) {
    text_2 += myArr[i] + "<br>"
}
ans.innerHTML += text_1 + "<br>";
ans.innerHTML += text_2 + "<br>";