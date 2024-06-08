// Prompt the user to enter a number
const num = prompt("Enter the number: ");

// Convert the input to an integer
const number = parseInt(num);

// Check if the input is "0" and show corresponding alert
if (number == "0") {
  alert("Hello"); // This alert will be shown if the input is "0"
} else {
  alert("Bye Bye"); // This alert will be shown for any other input
}
