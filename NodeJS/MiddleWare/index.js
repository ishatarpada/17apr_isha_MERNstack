const express = require("express");
const fs = require("fs");
const users = require("./data.json");

const app = express();
const PORT = 8080;

function storeData(req, res) {
  const body = req.body;

  if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
    return res.status(400).json({ status: "error", message: "all fields are required" });
  }

  users.push({ ...body, id: users.length + 1 });

  fs.writeFile('./data.json', JSON.stringify(users), (err) => {
    if (err) {
      return res.status(500).json({ status: "error", message: "Failed to store user data" });
    }
    return res.status(201).json({ status: "success", id: users.length });
  });
  console.log("Body:", body);
}

function updateData(req, res) {
  const id = Number(req.params.id);
  const updateData = req.body;

  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    users[index] = { ...users[index], ...updateData };

    fs.writeFile("./data.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", message: "Failed to update user data" });
      }
      return res.json({ status: "success", id: id });
    });
  } else {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
}

function deleteData(req, res) {
  const id = Number(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    fs.writeFile('./data.json', JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ status: "error", message: "Failed to delete user data" });
      }
      return res.json({ status: "success" });
    });
  } else {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
}

// Middleware Plugins
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  const logMessage = `Time is : ${new Date().toLocaleString()} : ${req.ip} ${req.method}:${req.path}\n`;

  fs.appendFile("./data.txt", logMessage, (err) => {
    if (err) {
      console.error("Failed to write to file", err);
    }
    next();
  });
});


app.use((req, res, next) => {
  console.log("hello from middleware 2  Time is : ", new Date().toLocaleString());
  next();
});

app.get("/users", (req, res) => {
  // res.setHeader("name", "isha");
  return res.json(users);
});

app.post("/users", storeData);

app.patch("/users/:id", updateData);

app.delete("/users/:id", deleteData);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
