let ans = document.getElementById("demo");
const fruits = [
  " Kiwi ",
  " Mango ",
  " cherry ",
  " strawberry ",
  " Banana ",
  " Orange ",
  " Apple ",
  " Mango ",
];
ans.innerHTML += "Array is  &#10170;  " + fruits + "<br><br>";

// 1. array.indexOf() => search the element and give the position of element in the array.
ans.innerHTML +=
  " fruits.indexOf(' Mango ') + 1  &#10170; " +
  (fruits.indexOf(" Mango ") + 1) +
  "<br>";
ans.innerHTML +=
  " fruits.indexOf(' Mango ' , 4) + 1  &#10170; " +
  (fruits.indexOf(" Mango ", 4) + 1) +
  "<br>";
ans.innerHTML +=
  " fruits.indexOf(' Apple ') + 1  &#10170; " +
  (fruits.indexOf(" Apple ") + 1) +
  "<br><br>";

// 2. array.lastIndexOf() => search the element and give the last position of element in the array.
ans.innerHTML +=
  " fruits.lastIndexOf(' Mango ') + 1  &#10170; " +
  (fruits.lastIndexOf(" Mango ") + 1) +
  "<br><br>";

// 3. array.includes() => element is or not in the array.
ans.innerHTML +=
  " fruits.includes(' Mango ')  &#10170; " +
  fruits.includes(" Mango ") +
  "<br>";
ans.innerHTML +=
  " fruits.includes(' cherry ')  &#10170; " +
  fruits.includes(" cherry ") +
  "<br>";
ans.innerHTML +=
  " fruits.includes(' banana ')  &#10170; " +
  fruits.includes(" banana ") +
  "<br>";
ans.innerHTML +=
  " fruits.includes(' Banana ')  &#10170; " +
  fruits.includes(" Banana ") +
  "<br><br>";

// 4. array.find() => find the first value of given function
const numbers = [4, 9, 16, 25, 29];
ans.innerHTML += "numbers Array is  &#10170;  " + numbers + "<br>";
ans.innerHTML += " numbers.find(max) &#10140; " + numbers.find(max) + "<br>";

// 5. array.findindex() => find the first value of index in given function
ans.innerHTML +=
  " numbers.findIndex(max) &#10140; " + (numbers.findIndex(max) + 1) + "<br><br>";
function max(value, index, array) {
  return value >= 25;
}

// 6.array.findLast() => find the last value of given function
ans.innerHTML += "numbers Array is  &#10170;  " + numbers + "<br>";
ans.innerHTML += " numbers.findLast(max) &#10140; " + numbers.findLast(max) + "<br>";

// 7. array.findLastIndex() => find the last value of index in given function
ans.innerHTML +=
  " numbers.findIndex(max) &#10140; " + (numbers.findLastIndex(max) + 1) + "<br><br>";
function max(value, index, array) {
  return value >= 25;
}
