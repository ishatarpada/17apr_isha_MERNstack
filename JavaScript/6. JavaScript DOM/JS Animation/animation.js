const btn = document.getElementById("btn");
const animateBox = document.getElementById("animate");

btn.addEventListener("click", function() {
    let id = null;
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            animateBox.style.top = pos + "px";
            animateBox.style.left = pos + "px";
        }
    }
});
