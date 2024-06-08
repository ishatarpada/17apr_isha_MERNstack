// Destructuring assignment We have an object: Write the Destructuring assignment that
// reads:
// a) Name property into the variable name.
// b) Year’s property into the variable age.
// c) isAdmin property into the variable isAdmin (false, if no such property)
// d) let user = { name: "John", years: 30};

// Button click event listener to demonstrate destructuring assignment
document.getElementById('btn').addEventListener('click', function () {
  let user = { name: "John", years: 30 };

  // Destructuring assignment
  let { name, years: age, isAdmin = false } = user;

  // Display the destructured values with line breaks
  document.getElementById('ans').textContent = `Name: ${name}\nAge: ${age}\nisAdmin: ${isAdmin}`;
});
