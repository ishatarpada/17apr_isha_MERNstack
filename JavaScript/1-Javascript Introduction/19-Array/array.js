let ans = document.getElementById("demo");

ans.innerHTML = `<h3>Array <h3> `;

const fruits = [" apple ", " mango ", " cherry ", " strawberry "];
ans.innerHTML += "Array is  &#10140;  " + fruits + "<br><br>";

// we add item using the index;
fruits[4] = " orange ";
ans.innerHTML += "Now , Array is  &#10140;  " + fruits + "<br><br>";

// create the array using new keyword.
const cars_arr = new Array(" BMW ", " Verna ", " Audi ");
ans.innerHTML += "Array is  &#10140;  " + cars_arr + "<br><br>";

// access the array items.
ans.innerHTML +=
  "Third element of fruit array fruits[2] is   &#10140;  " +
  fruits[2] +
  "<br><br>";
ans.innerHTML +=
  "First element of fruit array fruits[0] is   &#10140;  " +
  fruits[0] +
  "<br><br>";
ans.innerHTML +=
  "Fifth element of fruit array fruits[4] is   &#10140;  " +
  fruits[4] +
  "<br><br>";

// changing element
cars_arr[2] = " Range Rover ";
ans.innerHTML +=
  " change the 3rd element of the car array is replacing by the Range Rover now array is  &#10140;   " +
  cars_arr +
  "<br><br>";

// convert array to string
ans.innerHTML +=
  " array is convert in the string  &#10140; " +
  cars_arr.toString() +
  "<br><br>";

// type of the array is object
ans.innerHTML += " type of  array is  &#10140; " + typeof cars_arr + "<br><br>";

// arrays are object .
function add() {
  return 5 + 3;
}

const array = ["apple", "banana", "orange"]; // Define fruits array or replace it with an appropriate array
const arr = [Date.now(), add(), "isha", array.length];
ans.innerHTML += " array is   &#10140;  " + arr.join(", ") + "<br><br>";

// array Properties and method.
// 1. length
ans.innerHTML +=
  " length of fruits array is   &#10140;  " + fruits.length + "<br><br>";

const num_array = [56, 23, 213, 248, 15, 5, 145];
ans.innerHTML += "Array is &#10140; " + num_array + "<br>";
// const sort_array = num_array.slice().sort((a, b));
// ans.innerHTML += " after the sorting array is   &#10140;  " + sort_array + "<br><br>" ;


// access the element
ans.innerHTML +=
  "Third element of fruit array fruits[2] is   &#10140;  " +
  fruits[2] +
  "<br>";
ans.innerHTML +=
  "First element of fruit array fruits[0] is   &#10140;  " +
  fruits[0] +
  "<br>";
ans.innerHTML +=
  "last element of fruit array fruits[4] is   &#10140;  " +
  fruits[fruits.length - 1] +
  "<br><br>";

// array is access using the loop

for(let i = 0 ; i < fruits.length ; i++){
    ans.innerHTML += "<li>" + fruits[i] + "</li>";
}

ans.innerHTML += "<br>"

//  using forEach function.

cars_arr.forEach(access_arr);
ans.innerHTML += "</ul>"; 

function access_arr(value) {
    ans.innerHTML += "<li>" + value + "</li>";
}
ans.innerHTML += "<br>"


// adding the element using push(). this element insert at last.
cars_arr.push(" Audi ");
ans.innerHTML += cars_arr + "<br>";

// adding the element using length property. this element insert at last.
cars_arr[cars_arr.length] = "Scorpio";
ans.innerHTML += cars_arr + "<br>";

// Adding elements with high indexes can create undefined "holes" in an array.
cars_arr[7] = " Kia ";
for(let i = 0 ; i < cars_arr.length ; i++){
    ans.innerHTML += cars_arr[i] + " , ";
}

