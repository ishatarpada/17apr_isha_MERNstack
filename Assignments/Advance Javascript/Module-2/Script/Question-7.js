// Button click event listener to demonstrate JSON conversion
document.getElementById('btn').addEventListener('click', function () {
  // Initial user object
  let user = { name: "John Smith", age: 35 };

  // Convert user object to JSON string
  let userJSON = JSON.stringify(user);

  // Parse JSON string back to object
  let userParsed = JSON.parse(userJSON);

  // Display the converted JSON string and parsed object
  document.getElementById('ans').textContent = `JSON String: ${userJSON}\n\nParsed Object: ${JSON.stringify(userParsed)}`;
});
