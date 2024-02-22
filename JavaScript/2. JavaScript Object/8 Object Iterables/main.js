let ans = document.getElementById("demo");

const name = "Javascript";

for (i of name) {
  ans.innerHTML += i + " | ";
}
ans.innerHTML += "<br>"
const array = [1, 2, 3, 4, 5]

for (i of array) {
  ans.innerHTML += i + " | ";
}
ans.innerHTML += "<br>"

function myNumbers(n) {
  // let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    }
  };
}

// Create Iterable
const n = myNumbers(10);
n.next(); // 10
n.next(); // 20
n.next(); // 30

ans.innerHTML += n.next().value + "<br><br>";

myNumbers = {};

myNumbers[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 10;
      if (n == 100) { done = true }
      return { value: n, done: done };
    }
  };
}

for (const i of myNumbers) {
  ans.innerHTML += i + "<br>";
}
ans.innerHTML += "<br><br>"

// create iterator
let iterator = myNumbers[Symbol.iterator]();

while(true){
  const result = iterator.next();
  if(result.done){
    break;
  }
  else{
    ans.innerHTML += result.value + "<br>";
  }
}