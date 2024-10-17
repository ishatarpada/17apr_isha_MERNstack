const http = require("http");
const fs = require("fs");

/* const server = http.createServer((req, res) => {
  console.log("New Request Receive");
  console.log(req.headers);
  console.log(req);
  res.end("hello from server");
});

server.listen(8000, () => console.log("server started")); */

const server = http.createServer((req, res) => {
  const log = `${Date.now()} : ${req.url} New Request Received \n`;

  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error("Failed to write to log file", err);
      res.end("Internal Server Error");
      return;
    }

    switch (req.url) {
      case '/':
        res.end("Home Page");
        break;
      case '/about':
        res.end("I am Isha");
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

server.listen(8000, () => console.log("server started"));