let ans = document.getElementById("demo");

// display today date
const date = new Date();
ans.innerHTML = "Date is &#10170;" + date + "<br>";

//  display user giving date
const date_1 = new Date("2022-03-25");
ans.innerHTML += " Date is &#10170; " + date_1 + "<br>";

// display year and month
const date_2 = new Date(2024 , 0 , 29 , 10 , 19 , 59 , 60);
ans.innerHTML += "Date is &#10170;" + date_2 + "<br>";

// a day higher than max, will not result in an error but add the overflow to the next month
const date_3 = new Date(2024 , 0 , 32 , 10 , 25 , 20 , 56)
ans.innerHTML += "Date is &#10170;" + date_3 + "<br>";

// One and two digit years will be interpreted as 19xx
const date_4 = new Date(99 , 11 , 24);
ans.innerHTML += "Date is &#10170;" + date_4 + "<br>";
const date_5 = new Date(9 , 11 , 24);
ans.innerHTML += "Date is &#10170;" + date_5 + "<br>";

// new date - milliseconds
const date_6 = new Date(99000000000);
ans.innerHTML += "Date is &#10170;" + date_6 + "<br>";
const date_7 = new Date(-99000000000);
ans.innerHTML += "Date is &#10170;" + date_7 + "<br><br>";


// Date methods
ans.innerHTML += "Date is &#10170;" + date + "<br>";

// string methods
ans.innerHTML += " date.toString() &#10170; " + date.toString() + "<br>";
ans.innerHTML += " date.toDateString() &#10170; " + date.toDateString() + "<br>";
ans.innerHTML += " date.toUTCString() &#10170; " + date.toUTCString() + "<br>";
ans.innerHTML += " date.toISOString() &#10170; " + date.toISOString() + "<br><br>";

// date input:-
ans.innerHTML += " new Date('2024-01-29') &#10170; " + new Date('2024-01-29') + "<br>";
ans.innerHTML += " new Date('01/29/2024') &#10170; " + new Date('01/29/2024') + "<br>";
ans.innerHTML += " new Date('Jan 29 2024') &#10170; " + new Date('Jan 29 2024') + "<br><br>"; 


// ISO Dates
ans.innerHTML += ' new Date("2024-001-29") &#10170; ' + new Date("2024-001-29") + "<br>";
ans.innerHTML += ' new Date("2024-01") &#10170; ' + new Date("2024-01") + "<br>";
ans.innerHTML += ' new Date("2024") &#10170; ' + new Date("2024") + "<br>"; 
ans.innerHTML += ' new Date("2024-01-25T12:00:00Z") &#10170; ' + new Date("2024-01-25T12:00:00Z") + "<br>"; 
ans.innerHTML += ' new Date("2015-03-25T12:00:00-06:30") &#10170; ' + new Date("2015-03-25T12:00:00-06:30") + "<br><br>"; 

// Date Input - Parsing Dates
// If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.
// Date.parse() returns the number of milliseconds between the date and January 1, 1970:
const date_8 = Date.parse("jan 01 , 2024");
ans.innerHTML += ' Date.parse("jan 01 , 2024") &#10170; ' + date_8 + "<br>"; 
