let message = document.getElementById("demo-1");
let inp = document.getElementById("demo");

function myFunction() {
    message.innerHTML = "";
    let x = inp.value;
    try {
        if (x.trim() == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    }
}