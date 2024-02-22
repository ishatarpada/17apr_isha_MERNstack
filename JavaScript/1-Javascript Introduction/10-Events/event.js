
let date = document.getElementById("demo");
let body = document.getElementById("body");
let msg = document.getElementById("demo-1");

function displayDate() {
    date.innerHTML = new Date();
}

function displayTime(value) {
    date.innerHTML = value || new Date().toLocaleTimeString();
}

function changeColor() {
    body.style.backgroundColor = "black";
    date.style.color = "gray";
}

function resetColor() {
    body.style.backgroundColor = "white";
    date.style.color = "#44132d";
}

function loadPage() {
    alert("Page is loaded");
}

function displayMessage() {
    msg.innerHTML = "Thank you!...";
}