var content = document.getElementById("id");
var Attribute = document.getElementById("image");
var style = document.getElementById("style");
var bulb = document.getElementById('bulb');

function changeContent() {
    content.innerHTML = "Hello JavaScript"
}

function changeAttribute() {
    Attribute.src = "../../Assets/bulb-on.webp"
}

function changeStyle() {
    style.style.fontSize = "35px"
    style.style.color = "red"
}

function turnOn() {
    bulb.src = "../../Assets/bulb-on.webp";
}

function turnOff() {
    bulb.src = "../../Assets/bulb-off.jpg";
}