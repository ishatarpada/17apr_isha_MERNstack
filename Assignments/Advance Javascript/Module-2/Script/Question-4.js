// Button click event listener to create an object 'john'
document.getElementById('btn1').addEventListener('click', function () {
  let john = { name: 'John', surname: 'Smith', id: 1 };
  document.getElementById('ans1').textContent = JSON.stringify(john);
});

// Button click event listener to create an object 'pete'
document.getElementById('btn2').addEventListener('click', function () {
  let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
  document.getElementById('ans2').textContent = JSON.stringify(pete);
});

// Button click event listener to create an object 'mary'
document.getElementById('btn3').addEventListener('click', function () {
  let mary = { name: 'Mary', surname: 'Key', id: 3 };
  document.getElementById('ans3').textContent = JSON.stringify(mary);
});

// Button click event listener to create an array of user names using the map method
document.getElementById('btn4').addEventListener('click', function () {
  let john = { name: 'John', surname: 'Smith', id: 1 };
  let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
  let mary = { name: 'Mary', surname: 'Key', id: 3 };

  let users = [john, pete, mary];

  // Map to new array of objects with full names and ids
  let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

  document.getElementById('ans4').textContent = JSON.stringify(usersMapped);

  // Alert the id and fullName of the first user
  alert(`ID: ${usersMapped[0].id}, Full Name: ${usersMapped[0].fullName}`);
});
