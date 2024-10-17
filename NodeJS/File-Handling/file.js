// const { error } = require("console");
const fs = require("fs");

// Sync...
fs.writeFileSync('./test.txt', 'Hello World');

// Async...
fs.writeFile('./test1.txt', 'Hello World Async', (err) => { });

// read 
const result = fs.readFileSync('./contacts.txt', 'utf-8');
console.log(result);

fs.readFile('./contacts.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(result);
  }
});

fs.appendFileSync("./test.txt", `\n${new Date().getDate().toLocaleString()}\n Hey There`);

fs.appendFileSync("./test.txt", `\n${Date.now()}\n Hey There`);

fs.cpSync("./test.txt", "./copy.txt");

fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./text.txt"));

fs.mkdirSync('my-docs/');