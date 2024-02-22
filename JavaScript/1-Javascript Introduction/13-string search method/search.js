let ans = document.getElementById("demo");

let str = "Please locate where 'locate' occurs!";
let text = "I love cats. Cats are very easy to love. Cats are very popular."

// indexOf():-
ans.innerHTML = "string is :- " + str + "<br>";
let idx = str.indexOf("Please");
let idx_1 = str.indexOf("please");
let idx_2 = str.indexOf("locate");
let idx_3 = str.indexOf("locate", 5);
let idx_4 = str.indexOf("locate", 15);
ans.innerHTML += "index of Please:- " + idx + "<br>";
ans.innerHTML += "index of please:- " + idx_1 + "<br>";
ans.innerHTML += "index of locate:- " + idx_2 + "<br>";
ans.innerHTML += "index of locate and string start at 5th position:- " + idx_3 + "<br>";
ans.innerHTML += "index of locate and string start at 15th position:- :- " + idx_4 + "<br><br>";

// lastIndexOf():- method returns the index of the last occurrence of a specified text in a string
ans.innerHTML += "string is :- " + str + "<br>";
let lastIdx = str.lastIndexOf("locate");
ans.innerHTML += "index of locate:- " + lastIdx + "<br>";
let lastIdx_1 = str.lastIndexOf("locate", 5);
ans.innerHTML += "index of locate and string start at 5th position:- " + lastIdx_1 + "<br>";
let lastIdx_2 = str.lastIndexOf("locate", 15);
ans.innerHTML += "index of locate and string start at 15th position:-" + lastIdx_2 + "<br>";
let lastIdx_3 = str.indexOf("please");
ans.innerHTML += "index of locate:- " + lastIdx_3 + "<br><br>";


// search() :- method returns the index of the last occurrence of a specified text in a string
ans.innerHTML += "string is :- " + str + "<br>";
let search = str.search("where");
ans.innerHTML += " where is the position at :- " + search + "<br>";
let search_1 = str.search("john");
ans.innerHTML += " john is the position at :- " + search_1 + "<br><br>"


// match() :- method returns an array containing the results of matching a string against a string
ans.innerHTML += "string is :- " + str + "<br>";
let match = str.match("cat");
ans.innerHTML += " cat is match ? :- " + match + "<br>";
let match_1 = str.match("john");
ans.innerHTML += " john is match ? :- " + match_1 + "<br>";
let match_2 = str.match(/cat/);
ans.innerHTML += " cat is match ? :- " + match_2 + "<br>";
let match_3 = str.match(/cat/g);
ans.innerHTML += " cat is match ? :- " + match_3 + "<br>";
let match_4 = str.match(/Cat/gi);
ans.innerHTML += " Cat is match ? :- " + match_4 + "<br><br>";


// matchAll() :- method returns an iterator containing the results of matching a string against a string 
ans.innerHTML += " string is :- " + text + "<br>";
let match_all = text.matchAll("cat");
ans.innerHTML += " cat is match :- " + Array.from(match_all) + "<br>";
let match_all_1 = text.matchAll("Cat");
ans.innerHTML += " cat is match :- " + Array.from(match_all_1) + "<br>";
let match_all_2 = text.matchAll(/are/g);
ans.innerHTML += " are is match :- " + Array.from(match_all_2) + "<br>";
let match_all_3 = text.matchAll(/cat/gi);
ans.innerHTML += " cat is match :- " + Array.from(match_all_3) + "<br><br>";


// includes() :- method returns true if a string contains a specified value.
ans.innerHTML += " string is :- " + text + "<br>";
let include = text.includes("love");
ans.innerHTML += " love is include or not ? :- " + include + "<br>";
let include_1 = text.includes("love", 40);
ans.innerHTML += " love is include or not from position 40 ? :- " + include_1 + "<br><br>";


// startsWith() :- method returns true if a string begins with a specified value.
ans.innerHTML += " string is :- " + text + "<br>";
let start = text.startsWith("I");
ans.innerHTML += " string starts with 'I' or not ? " + start + "<br>";
let start_1 = text.startsWith("cats");
ans.innerHTML += " string starts with 'cats' or not ? " + start_1 + "<br>";
let start_2 = text.startsWith("cats", 7);
ans.innerHTML += " string starts with 'cats' or not ? and string start with 7 position" + start_2 + "<br><br>";


// endsWith() :- method returns true if a string ends with a specified value.
ans.innerHTML += " string is :- " + text + "<br>";
let end = text.endsWith("popular.");
ans.innerHTML += " string ends with 'popular' or not ? " + end + "<br>";
let end_1 = text.endsWith("cats.");
ans.innerHTML += " string starts with 'cats.' or not ? " + end_1 + "<br>";
let end_2 = text.endsWith("cats.", 12);
ans.innerHTML += " string starts with 'cats.' or not ? and string end with 12 position" + end_2 + "<br><br>";