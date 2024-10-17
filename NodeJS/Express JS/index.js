const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send('Hello from home page');
});

app.get("/about", (req, res) => {
  // Corrected string concatenation
  const userName = req.query.name || "Guest";
  return res.send('Hello from about page. Hey, ' + userName);
});

app.get("/contact", (req, res) => {
  return res.send('Hello from contact page');
});

app.get("/signup", (req, res) => {
  return res.send('Hello from signup page');
});

app.get("/login", (req, res) => {
  return res.send('Hello from login page');
});

const server = http.createServer(app);

server.listen(8000, () => console.log("Server started on port 8000"));
