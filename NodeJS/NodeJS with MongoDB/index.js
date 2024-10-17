const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose")

const users = require("./data.json");
const { type } = require("os");

const app = express();
const PORT = 8080;

// connection
mongoose.connect("mongodb://127.0.0.1:27017/Database")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo DB Error ", err));


// Schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  job_title: {
    type: String,
  },
}, { timestamps: true });

const User = mongoose.model("user", userSchema);


/* ------------------------------all Data---------------------------- */

async function allData(req, res) {
  try {
    // Fetch all users from MongoDB
    const allUsers = await User.find({});

    // Generate HTML structure to display the data with Tailwind CSS
    let html = `
      <html>
        <head>
          <title>All Users</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100 font-serif">
          <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold text-center mb-6">All Users</h1>
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th class="py-3 px-6 text-center fw-bold">ID</th>
                    <th class="py-3 px-6 text-center fw-bold">First Name</th>
                    <th class="py-3 px-6 text-center fw-bold">Last Name</th>
                    <th class="py-3 px-6 text-center fw-bold">Email</th>
                    <th class="py-3 px-6 text-center fw-bold">Job Title</th>
                    <th class="py-3 px-6 text-center fw-bold">Gender</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">`;

    // Loop through the user data and create table rows
    allUsers.forEach(user => {
      html += `
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-center fw-bold whitespace-nowrap">${user._id}</td>
                    <td class="py-3 px-6 text-center fw-bold">${user.first_name}</td>
                    <td class="py-3 px-6 text-center fw-bold">${user.last_name || 'N/A'}</td>
                    <td class="py-3 px-6 text-center fw-bold">${user.email}</td>
                    <td class="py-3 px-6 text-center fw-bold">${user.job_title || 'N/A'}</td>
                    <td class="py-3 px-6 text-center fw-bold">${user.gender || 'N/A'}</td>
                  </tr>`;
    });

    // Close the table and body tags
    html += `
                </tbody>
              </table>
            </div>
          </div>
        </body>
      </html>`;

    // Send the HTML response
    res.send(html);

  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).send("Error fetching user data");
  }
}


/* ---------------------------show Data------------------------------- */

async function showData(req, res) {
  try {
    // Fetch the user by ID from MongoDB
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Generate HTML structure to display the user data as a list with Tailwind CSS
    let html = `
      <html>
        <head>
          <title>User Details</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100">
          <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold text-center mb-6">User Details</h1>
            <div class="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
              <ul class="list-disc list-inside space-y-4">
                <li><strong>ID:</strong> ${user._id}</li>
                <li><strong>First Name:</strong> ${user.first_name}</li>
                <li><strong>Last Name:</strong> ${user.last_name || 'N/A'}</li>
                <li><strong>Email:</strong> ${user.email}</li>
                <li><strong>Job Title:</strong> ${user.job_title || 'N/A'}</li>
                <li><strong>Gender:</strong> ${user.gender || 'N/A'}</li>
              </ul>
            </div>
          </div>
        </body>
      </html>`;

    // Send the HTML response
    res.send(html);

  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).send("Error fetching user data");
  }
}


/* ------------------------Store Data---------------------------------- */


async function storeData(req, res) {
  const body = req.body;

  if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
    return res.status(400).json({ status: "error", message: "all fields are required" });
  }

  const result = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ status: "success", id: users.length });
}


/* ---------------------------Update Data------------------------------- */

async function updateData(req, res) {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    // Update the user in MongoDB
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });

    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found in the database" });
    }

    // Update the user in the local JSON file
    const id = Number(userId);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
      users[index] = { ...users[index], ...updateData };

      fs.writeFile("./data.json", JSON.stringify(users), (err) => {
        if (err) {
          return res.status(500).json({ status: "error", message: "Failed to update user data in the file" });
        }
        return res.json({ status: "success", id: id });
      });
    } else {
      return res.status(404).json({ status: "error", message: "User not found in the file" });
    }
  } catch (err) {
    console.error("Error updating user:", err);
    return res.status(500).json({ status: "error", message: "Failed to update user data" });
  }
}


/* -------------------------------Delete Data--------------------------- */

async function deleteData(req, res) {
  try {
    const userId = req.params.id;

    // Delete the user from MongoDB
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ status: "error", message: "User not found in the database" });
    }

    // Delete the user from the local JSON file
    const id = Number(userId);
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
      users.splice(index, 1);
      fs.writeFile('./data.json', JSON.stringify(users), (err) => {
        if (err) {
          return res.status(500).json({ status: "error", message: "Failed to delete user data in the file" });
        }
        return res.json({ status: "success" });
      });
    } else {
      return res.status(404).json({ status: "error", message: "User not found in the file" });
    }
  } catch (err) {
    console.error("Error deleting user:", err);
    return res.status(500).json({ status: "error", message: "Failed to delete user data" });
  }
}


// Middleware Plugins
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/users", allData);

app.post("/users", storeData);

app.get("/users/:id", showData);

app.patch("/users/:id", updateData);

app.delete("/users/:id", deleteData);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
