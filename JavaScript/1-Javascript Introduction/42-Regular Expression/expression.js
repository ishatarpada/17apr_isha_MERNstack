let ans = document.getElementById("demo");

// string Methods
// 1. using string search() method => method uses an expression to search for a match, and returns the position of the match
let str = " welcome to my javascript webpage."
let searchStr = str.search("javascript");
ans.innerHTML = " str.search('javascript') &#10170; " + searchStr + "<br>";
let searchStr_1 = str.search("Javascript");
ans.innerHTML += " str.search('Javascript') &#10170; " + searchStr_1 + "<br>";
let searchStr_2 = str.search(/Javascript/i);
ans.innerHTML += " str.search(/Javascript/i) &#10170; " + searchStr_2 + "<br><br><hr><br>";

// 2. using replace() => method replaces a specified value with another value in a string.
let replaceStr = str.replace("javascript", "HTML");
ans.innerHTML += " str.replace('javascript', 'HTML') &#10170; " + replaceStr + "<br>";
let replaceStr_1 = str.replace("Javascript", "HTML");
ans.innerHTML += " str.replace('Javascript', 'HTML') &#10170; " + replaceStr_1 + "<br>";
let replaceStr_2 = str.replace(/Javascript/i, "HTML");
ans.innerHTML += " str.replace(/Javascript/i, 'HTML') &#10170; " + replaceStr_2 + "<br><br><hr><br>";

// Regular Expression Modifiers.
let string = "Regular Expression arguments can be used in the methods above \nregular Expressions can make your search much more powerful Modifiers can be used to perform case-insensitive more global searches ";
ans.innerHTML += " string.match(/expression/i)  &#10170; " + string.match(/expression/i) + "<br>"
ans.innerHTML += " string.match(/Regular/g)  &#10170; " + string.match(/Regular/g) + "<br>"
ans.innerHTML += " string.match(/[i]/g)  &#10170; " + string.match(/^Regular/m) + "<br>";
ans.innerHTML += " string.match(/can/d)  &#10170; " + string.match(/can/d) + "<br><br><hr><br>"

// Regular Expression Patterns.
let str_1 = "Hello , 123 This is my first program."
ans.innerHTML += " str_1.match(/[T]/g)  &#10170; " + str_1.match(/[T]/g) + "<br>"
ans.innerHTML += " str_1.match(/[i]/g)  &#10170; " + str_1.match(/[i]/g) + "<br>";
ans.innerHTML += " str_1.match(/[2]/g)  &#10170; " + str_1.match(/[2]/g) + "<br><br><hr><br>"

// mastercharacters
ans.innerHTML += " str_1.match(/\d/g)  &#10170; " + str_1.match(/\d/g) + "<br>"
ans.innerHTML += " str_1.match(/\s/g)  &#10170; " + str_1.match(/\s/g) + "<br>";
ans.innerHTML += " str_1.match(/\bmy/g)  &#10170; " + str_1.match(/\bmy/g) + "<br>";
ans.innerHTML += " str_1.match(/my\b/g)  &#10170; " + str_1.match(/my\b/g) + "<br>";
ans.innerHTML += " str_1.match(/\u0054/g)  &#10170; " + str_1.match(/\u0054/g) + "<br><br><hr><br>"

// Quantifiers define quantities
let text = "Hellooo World! Hello W3Schools! 1 , 1000 , 100";
ans.innerHTML += " text.match(/o+/g) &#10170; " + text.match(/o+/g) + "<br>";
ans.innerHTML += " text.match(/lo*/g) &#10170; " + text.match(/lo*/g) + "<br>";
ans.innerHTML += " text.match(/10?/g) &#10170; " + text.match(/10?/g) + "<br><br><hr><br>";


// exec() =>method is a RegExp expression method.
// It searches a string for a specified pattern, and returns the found text as an object.
// If no match is found, it returns an empty (null) object.
// The following example searches a string for the character "e":
const obj = /e/.exec("The best things in life are free!");
ans.innerHTML +=
"Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input;