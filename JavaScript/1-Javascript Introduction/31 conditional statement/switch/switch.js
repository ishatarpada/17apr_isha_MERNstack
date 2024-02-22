let ans = document.getElementById("demo");

const date = new Date().getDay();
let day;
switch (date) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

ans.innerHTML = "Today is " + day + "<br>";

const month = parseInt(prompt("Enter a number between 0 - 11 for the month"));
    let Month;
    switch (month) {
      case 0:
        Month = "January";
        break;
      case 1:
        Month = "February";
        break;
      case 2:
        Month = "March";
        break;
      case 3:
        Month = "April";
        break;
      case 4:
        Month = "May";
        break;
      case 5:
        Month = "June";
        break;
      case 6:
        Month = "July";
        break;
      case 7:
        Month = "August";
        break;
      case 8:
        Month = "September";
        break;
      case 9:
        Month = "October";
        break;
      case 10:
        Month = "November";
        break;
      case 11:
        Month = "December";
        break;
      default:
        Month = "Please enter a valid month";
    }

    ans.innerHTML += "The entered month is " + Month;

console.log(new Date())