// Initialize the user object
let user = {};

// Button click event listeners
document.getElementById('btn1').addEventListener('click', function() {
  user = {}; // Create an empty object
  document.getElementById('ans1').textContent = JSON.stringify(user);
});

document.getElementById('btn2').addEventListener('click', function() {
  user.name = 'John'; // Add property name with value John
  document.getElementById('ans2').textContent = JSON.stringify(user);
});

document.getElementById('btn3').addEventListener('click', function() {
  user.surname = 'Smith'; // Add property surname with value Smith
  document.getElementById('ans3').textContent = JSON.stringify(user);
});

document.getElementById('btn4').addEventListener('click', function() {
  user.name = 'Pete'; // Change the value of the name to Pete
  document.getElementById('ans4').textContent = JSON.stringify(user);
});

document.getElementById('btn5').addEventListener('click', function() {
  delete user.name; // Remove the property name from the object
  document.getElementById('ans5').textContent = JSON.stringify(user);
});
