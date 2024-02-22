const date = document.getElementById("demo");

const dateTime = new Date();
date.innerHTML = " Today date is &#10170; " + dateTime + "<br><br>";

date.innerHTML += " dateTime.getFullYear() &#10170;" + dateTime.getFullYear() + "<br>";
date.innerHTML += " dateTime.getMonth() &#10170;" + dateTime.getMonth() + "<br>";
date.innerHTML += " dateTime.getDate() &#10170;" + dateTime.getDate() + "<br>";
date.innerHTML += " dateTime.getDay() &#10170;" + dateTime.getDay() + "<br>";
date.innerHTML += " dateTime.getHours() &#10170;" + dateTime.getHours() + "<br>";
date.innerHTML += " dateTime.getMinutes() &#10170;" + dateTime.getMinutes() + "<br>";
date.innerHTML += " dateTime.getSeconds() &#10170;" + dateTime.getSeconds() + "<br>";
date.innerHTML += " dateTime.getMilliseconds() &#10170;" + dateTime.getMilliseconds() + "<br>";
date.innerHTML += " dateTime.getTime() &#10170;" + dateTime.getTime() + "<br><br>";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let month = months[dateTime.getMonth()];
date.innerHTML += " months[d.getMonth()] &#10170; " + month + "<br><br>";

// Date.now() returns the number of milliseconds since January 1, 1970. 
// Calculate milliseconds in a year
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Date.now() with a year
date.innerHTML += " Date.now() &#10170; " + Date.now() + "<br>";
date.innerHTML += " Math.round(Date.now() / year) &#10170; " + Math.round(Date.now() / year) + "<br>";
date.innerHTML += " Math.round(Date.now() / day) &#10170; " + Math.round(Date.now() / day) + "<br>";
date.innerHTML += " Math.round(Date.now() / hour) &#10170; " + Math.round(Date.now() / hour) + "<br>";
date.innerHTML += " Math.round(Date.now() / minute) &#10170; " + Math.round(Date.now() / minute) + "<br>";

// UTC Date get Method
date.innerHTML += " Today date is &#10170; " + dateTime + "<br><br>";

date.innerHTML += " dateTime.getUTCFullYear() &#10170;" + dateTime.getUTCFullYear() + "<br>";
date.innerHTML += " dateTime.getUTCMonth() &#10170;" + dateTime.getUTCMonth() + "<br>";
date.innerHTML += " dateTime.getUTCDate() &#10170;" + dateTime.getUTCDate() + "<br>";
date.innerHTML += " dateTime.getUTCDay() &#10170;" + dateTime.getUTCDay() + "<br>";
date.innerHTML += " dateTime.getUTCHours() &#10170;" + dateTime.getUTCHours() + "<br>";
date.innerHTML += " dateTime.getUTCMinutes() &#10170;" + dateTime.getUTCMinutes() + "<br>";
date.innerHTML += " dateTime.getUTCSeconds() &#10170;" + dateTime.getUTCSeconds() + "<br>";
date.innerHTML += " dateTime.getUTCMilliseconds() &#10170;" + dateTime.getUTCMilliseconds() + "<br><br>";

// getTimezoneOffset() 
date.innerHTML += " dateTime.getTimezoneOffset() &#10170;" + (dateTime.getTimezoneOffset()) + "<br><br>";

// set methods
const date_time = new Date();
const dateElement = document.getElementById('date'); 
// Assuming you have an element with the id 'date' to display the result

dateElement.innerHTML += " Today date is &#10170; " + date_time + "<br><br>";

date_time.setFullYear(2042);
dateElement.innerHTML += " date_time.setFullYear(2042) &#10170; " + date_time + "<br><br>";

date_time.setFullYear(2042, 10, 19);
dateElement.innerHTML += " date_time.setFullYear(2042, 10, 19) &#10170; " + date_time + "<br><br>";

date_time.setMonth(10);
dateElement.innerHTML += " date_time.setMonth(10) &#10170; " + date_time + "<br><br>";

date_time.setDate(19);
dateElement.innerHTML += " date_time.setDate(19) &#10170; " + date_time + "<br><br>";

date_time.setHours(9);
dateElement.innerHTML += " date_time.setHours(9) &#10170; " + date_time + "<br><br>";

date_time.setMinutes(42);
dateElement.innerHTML += " date_time.setMinutes(42) &#10170; " + date_time + "<br><br>";

date_time.setSeconds(59);
dateElement.innerHTML += " date_time.setSeconds(59) &#10170; " + date_time + "<br><br>";

date_time.setMilliseconds(125);
dateElement.innerHTML += " date_time.setMilliseconds(125) &#10170; " + date_time + "<br><br>";

// For setTime, use a valid timestamp (e.g., milliseconds since 1970-01-01)
date_time.setTime(Date.parse('19 Nov 2002'));
dateElement.innerHTML += " date_time.setTime('19 Nov 2002') &#10170; " + date_time + "<br><br>";


// compare dates
const currDate = new Date();
const userDate = new Date();
userDate.setFullYear(2002 , 10 , 19);
dateElement.innerHTML += " today date is ➡️ " + currDate + "<br>";
dateElement.innerHTML += " user date is ➡️ " + userDate + "<br>";

if(currDate > userDate){
    dateElement.innerHTML += " Todays is after November 19 , 2002";
}
else{
    dateElement.innerHTML += " Todays is before November 19 , 2002";
}