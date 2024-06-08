// Button click event listener to create an object 'john'
document.getElementById('btn1').addEventListener('click', function () {
  let john = { name: 'John', age: 25 };
  document.getElementById('ans1').textContent = JSON.stringify(john);
});

// Button click event listener to create an object 'pete'
document.getElementById('btn2').addEventListener('click', function () {
  let pete = { name: 'Pete', age: 30 };
  document.getElementById('ans2').textContent = JSON.stringify(pete);
});

// Button click event listener to create an object 'mary'
document.getElementById('btn3').addEventListener('click', function () {
  let mary = { name: 'Mary', age: 28 };
  document.getElementById('ans3').textContent = JSON.stringify(mary);
});

// Button click event listener to map user names and display them
document.getElementById('btn4').addEventListener('click', function () {
  let users = [
    { name: 'John', age: 25 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 }
  ];
  let names = users.map(user => user.name); // Map to names
  document.getElementById('ans4').textContent = names.join(', '); // Display names
});
