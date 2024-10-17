const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end();

  const log = `${Date.now()} : ${req.method} ${req.url} New Request Received \n`;
  
  const parseUrl = url.parse(req.url, true);
  console.log(parseUrl);

  // Write the log to log.txt and only proceed once it's done
  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error("Failed to write to log file", err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end("Internal Server Error");
      return;
    }

    switch (parseUrl.pathname) {
      case '/':
        if (req.method === 'GET') res.end("Home Page");
        break;
      case '/about':
        const userName = parseUrl.query.name;
        res.end(`Hi, ${userName}`);
        break;
      case '/search':
        const searchQuery = parseUrl.query.search_query;
        // Example: http://localhost:8000/search?search_query=NodeJS
        res.end(`Here are results for search: ${searchQuery}`);
        break;
      case '/sign-up':
        if (req.method === 'GET') res.end("This is Sign Up Form");
        else if (req.method === 'POST') {
          res.end("Success");
        }
        break;
      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 not found");
        break;
    }
  });
});

server.listen(8000, () => console.log("server started"));
