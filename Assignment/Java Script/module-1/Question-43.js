// Write a JavaScript Program to display the current day and time in the following format.
// Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?


function getCurrentDay() {

  // array of day
  let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date();
  let dayOfWeek = daysOfWeek[date.getDay()];
  return dayOfWeek;
}

function getCurrentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)
  let timeString = `${hours} ${ampm}: ${minutes}: ${seconds}`;
  return timeString;
}

let dayOfWeek = getCurrentDay();
let currentTime = getCurrentTime();

console.log(`Today is ${dayOfWeek}. Current Time is ${currentTime}`);
