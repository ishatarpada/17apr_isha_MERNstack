// Declare the 'fruits' array globally so it's accessible in all functions
let fruits;

// Button click event listener to create an array 'fruits' with three initial elements
document.getElementById('btn1').addEventListener('click', function () {
  fruits = ["Apples", "Pear", "Orange"];
  document.getElementById('ans1').textContent = JSON.stringify(fruits);
});

// Button click event listener to assign the 'shoppingCart' variable to reference the same array as 'fruits'
document.getElementById('btn2').addEventListener('click', function () {
  let shoppingCart = fruits;
  document.getElementById('ans2').textContent = JSON.stringify(shoppingCart);
});

// Button click event listener to push a new element "Banana" into the 'shoppingCart' array
document.getElementById('btn3').addEventListener('click', function () {
  let shoppingCart = fruits;
  shoppingCart.push("Banana");
  document.getElementById('ans3').textContent = JSON.stringify(shoppingCart);
});

// Button click event listener to display the length of the 'fruits' array, which is now 4
document.getElementById('btn4').addEventListener('click', function () {
  alert(fruits.length);
  document.getElementById('ans4').textContent = fruits.length;
});
