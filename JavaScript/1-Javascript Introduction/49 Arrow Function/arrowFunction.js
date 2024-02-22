let ans = document.getElementById("demo");
let btn = document.getElementById("btn");
let btn_1 = document.getElementById("btn-1");
let a = parseInt(prompt("Enter the number 1"));
let b = parseInt(prompt("Enter the number 2"));

multiplication = () => {
    return 5 * 5;
}
ans.innerHTML += " multiplication() &#10170;  " + multiplication() + "<br>";

printNumber = () => 4
ans.innerHTML += " printNumber() &#10170;  " + printNumber() + "<br>";

addition = (a, b) => {
    return a + b;
}
ans.innerHTML += " addition(" + a + ", " + b + ") &#10170;  " + addition(a, b) + "<br>";

substraction = a => {
    return a - 2;
}
ans.innerHTML += " substraction(" + a + ") &#10170;  " + substraction(a) + "<br>";


// Regular Function:
function regular() {
    document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", regular);

// A button object calls the function:
btn.addEventListener("click", regular);

// arrow function:
arrow = () =>{
    document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", arrow);

// A button object calls the function:
btn_1.addEventListener("click", arrow);