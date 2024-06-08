// Prompt the user to enter their age
const num = prompt("Enter the age: ");

// Convert the input to an integer
const age = parseInt(num);

// Check if the age is greater than 18
if (age > 18) {
  console.log(true); // Return true if age is greater than 18
} else {
  // If age is 18 or less, ask for parent permission
  const parentPermission = confirm("Did your parents allow you?");
  alert(parentPermission); // Show the result of parent permission (true/false)
}
