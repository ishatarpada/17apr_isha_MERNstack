const fs = require("fs");

const os = require('os');
console.log("cpu os ", os.cpus().length);

// Blocking...
console.log("Bloking Operation")
console.log("1");
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);
console.log("2");
console.log("\n");

// Non-Blocking...
console.log("Non-Bloking Operation")
console.log("1");
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
  console.log(result);
});
console.log("2");
console.log("3");
console.log("4");

