// main file
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const ans = document.getElementById("demo");

btn.addEventListener("click", function () {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        ans.innerHTML += this.responseText;
        Swal.fire({
            title: "Good job!",
            text: "file display SuccessFully!",
            icon: "success"
        });
    }
    xhttp.open("GET", "hello.asp", true);
    xhttp.send();
});

btn1.addEventListener("click", function () {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        ans.innerHTML += this.responseText;
        Swal.fire({
            title: "Good job!",
            text: "file display SuccessFully!",
            icon: "success"
        });
    }
    xhttp.open("GET", "demo.asp?fname=Henry&lname=Ford", true);
    xhttp.send();
});