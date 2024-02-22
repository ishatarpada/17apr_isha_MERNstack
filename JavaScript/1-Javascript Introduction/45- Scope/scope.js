let ans = document.getElementById("demo");

// block scope
{
    let num1 = 20;
    var num2 = 40;
    const num3 = 60;
}

try {
    ans.innerHTML += "<br> num1 is &#10170; " + num1;
}
catch (err) {
    ans.innerHTML += "<br>" + err.message;
}

try {
    ans.innerHTML += "<br> num2 is &#10170; " + num2;
}
catch (err) {
    ans.innerHTML += "<br>" + err.message;
}

try {
    ans.innerHTML += "<br> num3 is &#10170; " + num3;
}
catch (err) {
    ans.innerHTML += "<br>" + err.message;
}

function calculator() {
    let a = 20;
    var b = 40;
    const c = 60;

    return a + b + c;
}

// Local scope :-

ans.innerHTML += "<br><br> ans is &#10170; " + calculator();

try {
    ans.innerHTML += "<br> a is &#10170; " + a;
}
catch (err) {
    ans.innerHTML += "<br>" + err.message;
}

try {
    ans.innerHTML += "<br> b is &#10170; " + b;
}
catch (err) {
    ans.innerHTML += "<br>" + err.message;
}

try {
    ans.innerHTML += "<br> c is &#10170; " + c;
}
catch (err) {
    ans.innerHTML += "<br>" + err.message;
}


let str = "<br> Hello Good Morning!";
function printString() {
    ans.innerHTML += str;
}

printString();