const express = require("express");
const users = require("./users.json");
const app = express();
const PORT = 8000;
const fs = require("fs");
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve user data as JSON
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// Route to render HTML with user data
app.get("/users", (req, res) => {
  // Create HTML content
  const html = `
  <h1>User List</h1>
    <ul>
      ${users.map((user) =>
    `<li>
        <strong>${user.first_name} ${user.last_name}</strong><br>
      </li>
      <br><bhr><br>`
  ).join("")}
    </ul>
  `;

  // Send HTML content as response
  res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  const html = `
  <h1>User Info</h1>
    <ul>
      <li>
        <strong>${user.first_name} ${user.last_name}</strong><br>
        Email: ${user.email}<br>
        Job Title: ${user.job_title}
      </li>
    </ul>
    <hr>
  `;

  // Send HTML content as response
  res.send(html);
  // return res.json(user);
});


app.post('/api/users', (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile('./users.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
  console.log("Body:", body);
});


app.patch('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const updateData = req.body;

  // Find the index of the user with the given id
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    // Update the user's data
    users[index] = { ...users[index], ...updateData };

    // Write the updated users array to the JSON file
    fs.writeFile('./users.json', JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", message: "Failed to update user data" });
      }

      return res.json({ status: "success", id: id });
    });
  } else {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
});


app.delete('/api/users/:id', (req, res) => {
  const id = Number(req.params.id);

  // Find the index of the user with the given id
  const index = users.findIndex(user => user.id === id);

  // If user is found, remove it from the array
  if (index !== -1) {
    users.splice(index, 1);
    return res.json({ status: "success" });
  } else {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
});


/* app.route('/api/users:id')
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .put((req, res) => {
    return res.json({ status: "success" });
  })
  .patch((req, res) => {
    return res.json({ status: "success" });
  }) */


// Start the server
app.listen(PORT, () => console.log(`Server started at port number ${PORT}`));
