let select = document.getElementById("selected");
let body = document.getElementById("body");

select.addEventListener("change", function () {
    let selectedColor = select.value;

    switch (selectedColor) {
        case "red":
            body.style.backgroundColor = "red";
            break;
        case "yellow":
            body.style.backgroundColor = "yellow";
            break;
        case "green":
            body.style.backgroundColor = "green";
            break;
        case "darkslategrey":
            body.style.backgroundColor = "darkslategrey";
            break;
        default:
            body.style.backgroundColor = "white"; // Default color
    }
});