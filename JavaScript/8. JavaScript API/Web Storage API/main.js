const ans = document.getElementById("demo");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");

const ans1 = document.getElementById("demo1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const button = document.getElementById("button");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");


btn.addEventListener("click", function () {
    localStorage.setItem("name", "Isha Patel");
    localStorage.setItem("id", "200200107024");
    localStorage.setItem("age", "21");
});

btn1.addEventListener("click", function () {
    const setName = localStorage.getItem("name");
    const setId = localStorage.getItem("id");
    const setAge = localStorage.getItem("age");
    ans.innerHTML += "Name is &#10170; " + setName + " id is &#10170; " + setId + " and i'm " + setAge + " year old." + "<br>";
});

btn2.addEventListener("click", function () {
    sessionStorage.setItem("name", "Isha Patel");
    sessionStorage.setItem("id", "200200107024");
    sessionStorage.setItem("age", "21");
});

btn3.addEventListener("click", function () {
    const setName = sessionStorage.getItem("name");
    const setId = sessionStorage.getItem("id");
    const setAge = sessionStorage.getItem("age");
    ans1.innerHTML += "Name is &#10170; " + setName + " id is &#10170; " + setId + " and i'm " + setAge + " year old." + "<br>";
});


button.addEventListener("click", function () {
    // Setting an item in localStorage
    localStorage.setItem('username', 'john_doe');
});

button1.addEventListener("click", function () {
    // Getting an item from localStorage
    const username = localStorage.getItem('username');
    console.log(username); // Output: john_doe
});

button2.addEventListener("click", function () {
    // Removing an item from localStorage
    localStorage.removeItem('username');
    console.log(username); // Output: 
});

button3.addEventListener("click", function () {
    // Clearing localStorage
    localStorage.clear();
    console.log(username); // Output: 

});