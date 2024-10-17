/* const server = http.createServer((req, res) => {
  console.log("New Request Receive");
  console.log(req.headers);
  console.log(req);
  res.end("hello from server");
});

server.listen(8000, () => console.log("server started")); */

const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end();
  const log = `${Date.now()} : ${req.url} New Request Received \n`;
  const parseUrl = url.parse(req.url, true);
  console.log(parseUrl);

  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error("Failed to write to log file", err);
      res.end("Internal Server Error");
      return;
    }

    switch (parseUrl.pathname) {
      case '/':
        res.end("Home Page");
        break;
      case '/about':
        const userName = parseUrl.query.name;
        res.end(`Hi, ${userName}`);
        break;
      case '/search':
        const searchQuery = parseUrl.query.search_query;
        // http://localhost:8000/search?search_query=NodeJS
        res.end(`Here are results for search: ${searchQuery}`);
        break;
      default:
        res.end("404 not found");
        break;
    }
  });
});

server.listen(8000, () => console.log("server started"));
