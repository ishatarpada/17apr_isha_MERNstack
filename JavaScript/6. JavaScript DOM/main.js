const demo = document.getElementById("demo");
demo.addEventListener("click", function () {
    Swal.fire({
        title: "Hello!",
        text: "Finding HTML Elements by Id and id is demo",
        icon: "success"
    });
})

// Get all input elements
const inputs = document.querySelectorAll('input');

// Loop through each input element
inputs.forEach(input => {
    input.addEventListener('click', function () {

        Swal.fire({
            title: 'Hello!',
            text: 'Finding HTML Elements by Tag Name and tag is Input!',
            icon: 'success'
        });
    });
});


const imgElements = document.getElementsByClassName("img");

for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].addEventListener("click", function () {
        Swal.fire({
            title: "Hello!",
            text: "Finding HTML Elements by Class Name and class is img",
            icon: "success"
        });
    });
}

// Finding HTML Elements by CSS Selectors
const button = document.querySelectorAll("button.img")

// Finding HTML Elements by HTML Object Collections
const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length; i++) {
    Swal.fire({
        title: "Hello!",
        text: "Finding HTML Elements by HTML Object Collections",
        icon: "success"
    });
}


const text1 = document.createTextNode("hello this is new node");
const tag = document.createElement("h2");
tag.appendChild(text1);

const div = document.getElementById("demo");
div.appendChild(tag);