// Get all elements with class starting with "class"
let elements = document.querySelectorAll("[class^='class']");

// Add click event listener to the button
document.getElementById("btn").addEventListener("click", function () {
    // Loop through each element and show an alert
    elements.forEach(function (element) {
        alert(element.textContent);
    });
});
